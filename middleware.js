import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Protect everything except static files, _next, favicon, sign-in, and sign-up
    "/((?!_next|.*\\..*|favicon.ico|sign-in|sign-up).*)",
    // Always run for API routes if you want API protection
    "/(api|trpc)(.*)",
  ],
}; 