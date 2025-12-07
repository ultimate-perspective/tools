import { NextRequest, NextResponse } from "next/server";

export function withSameOriginProtection(
    handler: (request: NextRequest) => Promise<NextResponse> | NextResponse
) {
    const allowedOrigins: string[] = [process.env.HOSTED_URL!];

    return async (request: NextRequest) => {
        const origin = request.headers.get("origin") || "";
        const referer = request.headers.get("referer") || "";

        const valid = allowedOrigins.some(
            (o) => origin.startsWith(o) || referer.startsWith(o)
        );

        if (!valid) {
            return new NextResponse("Forbidden", { status: 403 });
        }

        return handler(request);
    };
}
