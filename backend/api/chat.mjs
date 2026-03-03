import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Rate Limiter Class
 * Implements sliding window rate limiting with automatic cleanup
 */
class RateLimiter {
    constructor(maxRequests = 10, windowMs = 60 * 1000) {
        this.maxRequests = maxRequests;
        this.windowMs = windowMs;
        this.store = new Map();
        this.cleanupInterval = 5 * 60 * 1000; // Clean up every 5 minutes

        // Start automatic cleanup process
        this.startCleanup();
    }

    checkLimit(ip) {
        const now = Date.now();
        const key = ip;

        if (!this.store.has(key)) {
            this.store.set(key, { count: 1, firstRequest: now });
            return { allowed: true, remaining: this.maxRequests - 1, resetTime: now + this.windowMs };
        }

        const data = this.store.get(key);
        const timeSinceFirst = now - data.firstRequest;

        // Reset if window has passed
        if (timeSinceFirst >= this.windowMs) {
            this.store.set(key, { count: 1, firstRequest: now });
            return { allowed: true, remaining: this.maxRequests - 1, resetTime: now + this.windowMs };
        }

        // Check if limit exceeded
        if (data.count >= this.maxRequests) {
            return {
                allowed: false,
                remaining: 0,
                resetTime: data.firstRequest + this.windowMs,
                retryAfter: Math.ceil((data.firstRequest + this.windowMs - now) / 1000)
            };
        }

        // Increment count
        data.count++;
        const remaining = this.maxRequests - data.count;
        return {
            allowed: true,
            remaining,
            resetTime: data.firstRequest + this.windowMs
        };
    }

    startCleanup() {
        setInterval(() => {
            const now = Date.now();
            for (const [key, data] of this.store.entries()) {
                if (now - data.firstRequest > this.windowMs) {
                    this.store.delete(key);
                }
            }
        }, this.cleanupInterval);
    }
}

// Initialize rate limiter
const rateLimiter = new RateLimiter(10, 60 * 1000); // 10 requests per minute

/**
 * Input Validation Function
 * Validates message content and length
 */
function validateMessage(message) {
    if (!message || typeof message !== 'string') {
        return { valid: false, error: 'Message must be a non-empty string' };
    }

    if (message.length > 4000) {
        return { valid: false, error: 'Message too long (max 4000 characters)' };
    }

    if (message.length < 1) {
        return { valid: false, error: 'Message cannot be empty' };
    }

    // Basic content filtering (prevent obvious spam/abuse patterns)
    const suspiciousPatterns = [
        /(.)\1{20,}/, // Repeated characters
        /[^\w\s.,!?\-@#$%&*()+=:;'"<>\/\\|`~]{10,}/, // Excessive special characters
        /https?:\/\/[^\s]+/gi, // URLs (basic check)
    ];

    for (const pattern of suspiciousPatterns) {
        if (pattern.test(message)) {
            return { valid: false, error: 'Message contains suspicious content' };
        }
    }

    return { valid: true };
}

const systemContext = `Tu es l'assistant IA d'IGDKEY. Voici quelques informations sur IGDKEY :

Nous sommes une agence française innovante spécialisée dans le développement web et la création d'intelligences artificielles personnalisées. Notre mission : transformer vos idées en solutions digitales sur mesure, en alliant sites et plateformes web performants à des algorithmes d'IA puissants pour booster votre compétitivité.

💡 Notre valeur ajoutée

Double expertise Web + IA : intégration fluide de l'IA dans vos applications web, de la personnalisation client aux systèmes prédictifs.

Approche pédagogique et transparente : nous vulgarisons l'IA pour que chaque décision reste claire et alignée sur vos objectifs.

Innovation continue : veille technologique, formation permanente et méthodologies agiles pour rester à la pointe.

👥 Nos leaders

Myriam Igdem – Co-fondatrice & Directrice Stratégie
Experte en management et stratégie digitale, Myriam excelle dans l'identification des besoins métiers et la conduite de projets complexes. Sa vision business et sa capacité à créer des partenariats durables garantissent des solutions parfaitement adaptées aux réalités de chaque client.

Junyi Li – Co-fondateur & Directeur Technique
Ingénieur en intelligence artificielle diplômé de l'EPITA, passionné par la Data Science et la création de modèles IA avancés. Junyi met son savoir-faire en machine learning, deep learning et développement full-stack au service de projets innovants, en assurant robustesse technique et scalabilité.

🌍 Pourquoi nous choisir ?
Dans un marché français où l'IA en entreprise connaît une croissance annuelle de plus de 20 %, nous offrons aux PME, ETI, grands comptes et start-ups un accompagnement complet : du conseil stratégique à la mise en production d'outils IA sur mesure, tout en garantissant conformité RGPD et excellence UX/UI.

🚀 Vos bénéfices

Plateformes web intelligentes (e-commerce, SaaS, portails clients)

Chatbots et assistants virtuels performants

Outils d'analyse prédictive et d'automatisation des processus

Solutions de vision par ordinateur et traitement du langage naturel

Parlons de votre projet. Notre équipe transforme la complexité de l'IA en avantage compétitif concret.

Contact: +337 53 95 32 98
Email: contact@igdkey.com

Tu es l'assistant IA d'IGDKEY. Réponds aux questions des clients dans leur langue, de manière professionnelle et en te basant sur les informations ci-dessus. Aide-les à comprendre nos services et oriente-les vers les solutions qui correspondent à leurs besoins. Reste concis.`;

export default async (req, res) => {
    // Get client IP for rate limiting
    const clientIP = req.headers['x-forwarded-for'] ||
        req.headers['x-real-ip'] ||
        req.connection?.remoteAddress ||
        'unknown';

    // Check rate limit
    const rateLimitResult = rateLimiter.checkLimit(clientIP);
    if (!rateLimitResult.allowed) {
        res.setHeader('X-RateLimit-Limit', rateLimiter.maxRequests);
        res.setHeader('X-RateLimit-Remaining', rateLimitResult.remaining);
        res.setHeader('X-RateLimit-Reset', new Date(rateLimitResult.resetTime).toISOString());
        res.setHeader('Retry-After', rateLimitResult.retryAfter);

        return res.status(429).json({
            error: 'Too many requests. Please wait before trying again.',
            retryAfter: rateLimitResult.retryAfter
        });
    }

    // Set rate limit headers for successful requests
    res.setHeader('X-RateLimit-Limit', rateLimiter.maxRequests);
    res.setHeader('X-RateLimit-Remaining', rateLimitResult.remaining);
    res.setHeader('X-RateLimit-Reset', new Date(rateLimitResult.resetTime).toISOString());

    // Set CORS headers
    const allowedOrigins = [
        'http://localhost:3000',
        'http://localhost:5173',
        'https://igdkey.com',
        'https://www.igdkey.com'
    ];

    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }

    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', 'false');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.status(200).json({});
        return;
    }

    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // Check request size limit
    const contentLength = parseInt(req.headers['content-length'] || '0');
    const maxRequestSize = 50 * 1024; // 50KB limit (includes conversation history)

    if (contentLength > maxRequestSize) {
        return res.status(413).json({ error: 'Request too large' });
    }

    try {
        const { message, history } = req.body;

        // Validate message input
        const validation = validateMessage(message);
        if (!validation.valid) {
            return res.status(400).json({ error: validation.error });
        }

        // Build messages array with conversation history
        const chatMessages = [{ role: 'system', content: systemContext }];

        if (Array.isArray(history)) {
            // Limit to last 20 messages to prevent abuse
            const recentHistory = history.slice(-20);
            for (const msg of recentHistory) {
                if (msg.role === 'user' || msg.role === 'assistant') {
                    chatMessages.push({ role: msg.role, content: String(msg.content).slice(0, 4000) });
                }
            }
        }

        chatMessages.push({ role: 'user', content: message });

        // Set SSE headers for streaming
        res.setHeader('Content-Type', 'text/event-stream');
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Connection', 'keep-alive');

        const stream = await openai.chat.completions.create({
            model: 'gpt-4.1-nano',
            messages: chatMessages,
            stream: true,
        });

        for await (const chunk of stream) {
            const content = chunk.choices[0]?.delta?.content || '';
            if (content) {
                res.write(`data: ${JSON.stringify({ content })}\n\n`);
            }
        }

        res.write('data: [DONE]\n\n');
        res.end();
    } catch (error) {
        console.error('OpenAI API Error:', error.message);
        // If headers already sent (streaming started), just end
        if (res.headersSent) {
            res.write(`data: ${JSON.stringify({ error: 'Erreur serveur' })}\n\n`);
            res.write('data: [DONE]\n\n');
            res.end();
        } else {
            res.status(500).json({ error: 'Erreur serveur' });
        }
    }
};
