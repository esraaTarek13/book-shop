import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PROTECTED_PATHS = ["/checkout", "/orders", "/profile", "/wishlist", "/cart"];

const GUEST_ONLY_PATHS = [
    "/login",
    "/register",
    "/forget-password",
    "/reset-password",
    "/verify-otp",
];

export async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const token = request.cookies.get("token")?.value;

    const isProtected = PROTECTED_PATHS.some((path) =>
        pathname.startsWith(path),
    );
    const isGuestOnly = GUEST_ONLY_PATHS.some((path) =>
        pathname.startsWith(path),
    );

    if (isProtected && !token) {
        const loginUrl = new URL("/login", request.url);
        loginUrl.searchParams.set("redirectTo", pathname);
        return NextResponse.redirect(loginUrl);
    }

    if (isGuestOnly && token) {
        return NextResponse.redirect(new URL("/", request.url));
    }
 
    return NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    ],
};