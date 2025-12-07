import { NextRequest, NextResponse } from "next/server";
import { ipRateLimiter, getClientIp } from "./rate-limit";

type RouteHandler = (req: NextRequest, ...args: any[]) => Promise<NextResponse> | NextResponse;

export function withRateLimit(handler: RouteHandler): RouteHandler {
    return async (req: NextRequest, ...args: any[]) => {
        try {
            const ip = getClientIp(req);

            // Allow rate limiting to be bypassed in development if needed, 
            // but usually good to test it.
            if (process.env.NODE_ENV === 'development' && process.env.SKIP_RATE_LIMIT === 'true') {
                return handler(req, ...args);
            }

            const { success, limit, reset, remaining } = await ipRateLimiter.limit(ip);

            if (!success) {
                return NextResponse.json(
                    { error: 'Too many requests' },
                    {
                        status: 429,
                        headers: {
                            'X-RateLimit-Limit': limit.toString(),
                            'X-RateLimit-Remaining': remaining.toString(),
                            'X-RateLimit-Reset': reset.toString(),
                            'Retry-After': Math.ceil((reset - Date.now()) / 1000).toString(),
                        },
                    }
                );
            }

            // Execute the handler
            const response = await handler(req, ...args);

            // Add rate limit headers to successful response too
            response.headers.set('X-RateLimit-Limit', limit.toString());
            response.headers.set('X-RateLimit-Remaining', remaining.toString());

            return response;

        } catch (error) {
            console.error("Rate limiting error:", error);
            // Fail open or closed? Usually fail open for Redis errors to avoid blocking users
            // unless strict security is required.
            return handler(req, ...args);
        }
    };
}
