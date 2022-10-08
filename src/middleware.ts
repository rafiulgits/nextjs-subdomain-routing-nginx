import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  const host = request.headers.has("host")
    ? request.headers.get("host")
    : "localhost";

  const subdomain = host!.split(".")[0];

  if (subdomain === "localhost:3000") {
    // render platform pages
    url.pathname = `/home${url.pathname}`;
  } else {
    // render user pages
    url.pathname = `/_users/${subdomain}${url.pathname}`;
  }
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /fonts (inside /public)
     * 4. /examples (inside /public)
     * 5. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api|_next|fonts|examples|[\\w-]+\\.\\w+).*)",
  ],
};
