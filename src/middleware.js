import { NextResponse } from "next/server";

export function middleware(request) {
    const { pathname } = request.nextUrl;

    if (pathname.endsWith(".mdx")) {
        const cleanPath = pathname.replace(/\.(mdx|md)$/, "");
        const url = request.nextUrl.clone();
        url.pathname = "/api/raw-mdx";

        const response = NextResponse.rewrite(url);
        response.headers.set("x-mdx-path", cleanPath.slice(1));
        return response;
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/:path*\\.mdx"]
};
