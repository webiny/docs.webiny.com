import { NextResponse } from "next/server";

export function middleware(request) {
    const { pathname } = request.nextUrl;
    const acceptHeader = request.headers.get("accept") || "";

    const wantsMdxExtension = pathname.endsWith(".mdx") || pathname.endsWith(".md");
    const wantsMarkdownHeader = acceptHeader.includes("text/markdown");

    if (wantsMdxExtension || wantsMarkdownHeader) {
        const cleanPath = pathname.replace(/\.(mdx|md)$/, "");
        const url = request.nextUrl.clone();

        // Rewrite to static file in public/raw/
        url.pathname = "/docs-static/raw" + cleanPath + ".mdx";

        const response = NextResponse.rewrite(url);
        response.headers.set("Content-Type", "text/plain; charset=utf-8");
        return response;
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!_next|api|raw|favicon.ico).*)"]
};
