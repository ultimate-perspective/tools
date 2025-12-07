import { Ratelimit } from '@upstash/ratelimit';
import { redis } from './redis';
import { NextRequest } from 'next/server';

// Create rate limiters
export const ipRateLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(10, '1m'),
    analytics: true,
    prefix: 'ratelimit:ip',
});

// Helper to get client IP
export function getClientIp(request: NextRequest): string {
    const forwarded = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');

    if (forwarded) {
        return forwarded.split(',')[0].trim();
    }

    if (realIp) {
        return realIp;
    }

    return 'unknown';
}
