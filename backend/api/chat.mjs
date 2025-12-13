import axios from 'axios';

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

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

    // Check message length (max 40 characters for testing)
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

export default async (req, res) => {
    // Get client IP for rate limiting
    const clientIP = req.headers['x-forwarded-for'] ||
        req.headers['x-real-ip'] ||
        req.connection?.remoteAddress ||
        'unknown';

    // Check rate limit
    const rateLimitResult = rateLimiter.checkLimit(clientIP);
    if (!rateLimitResult.allowed) {
        // Set rate limit headers
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

    // Set CORS headers - restrict to your domain only
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

    // Handle preflight requests IMMEDIATELY
    if (req.method === 'OPTIONS') {
        res.status(200).json({});
        return;
    }

    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // Check request size limit (prevent large payloads)
    const contentLength = parseInt(req.headers['content-length'] || '0');
    const maxRequestSize = 10 * 1024; // 10KB limit

    if (contentLength > maxRequestSize) {
        return res.status(413).json({ error: 'Request too large' });
    }

    try {
        const { message } = req.body;

        // Validate message input
        const validation = validateMessage(message);
        if (!validation.valid) {
            return res.status(400).json({ error: validation.error });
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
Email: myriam.igdem@gmail.com

Tu es l'assistant IA d'IGDKEY. Réponds aux questions des clients dans leur langue, de manière professionnelle et en te basant sur les informations ci-dessus. Aide-les à comprendre nos services et oriente-les vers les solutions qui correspondent à leurs besoins. Reste concis.`;

        const response = await axios.post(
            OPENAI_API_URL,
            {
                model: 'gpt-5-nano',
                messages: [
                    { role: 'system', content: systemContext },
                    { role: 'user', content: message }
                ],
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        res.json({ reply: response.data.choices[0].message.content });
    } catch (error) {
        console.error('OpenAI API Error:', error.response?.data || error.message);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};