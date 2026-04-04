import { NextRequest, NextResponse } from "next/server";

export function proxy(req: NextRequest) {
  // 1. Prioritize our custom header, which is set by the landing proxy rewrite
  // 2. Fallback to standard Host header
  const host = (
    req.headers.get("x-di-canonical-host") ||
    req.headers.get("host") ||
    ""
  ).toLowerCase();

  console.log("tools host::", host);

  const allowedHosts = new Set([
    "https://designinstantly.com",
    "https://www.designinstantly.com",
  ]);

  // If the original host is NOT one of our primary domains, block indexing
  if (!allowedHosts.has(host)) {
    const res = NextResponse.next();
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
    return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
