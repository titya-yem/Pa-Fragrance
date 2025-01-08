import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define the middleware function
export async function middleware(req: NextRequest) {
  const session = await auth();

  // If the session exists, allow access
  if (session) {
    return NextResponse.next();
  }

  // Define the protected routes
  const protectedRoutes = ["/cart", "/profile", "/checkout"];

  // Check if the current path is one of the protected routes
  if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

// Other protected pages
export const config = {
  matcher: ["/cart", "/admin", "/profile", "/checkout"],
};
