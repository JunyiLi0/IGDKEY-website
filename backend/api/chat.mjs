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

        const response = await axios.post(
            OPENAI_API_URL,
            {
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: message }],
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