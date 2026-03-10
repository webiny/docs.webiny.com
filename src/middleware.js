import { NextResponse } from "next/server";
import v5RedirectSlugs from "./v5-redirect-manifest.json";

// Build a Set for O(1) lookups at the edge
const v5Slugs = new Set(v5RedirectSlugs);

export function middleware(request) {
    const { pathname } = request.nextUrl;
    const acceptHeader = request.headers.get("accept") || "";

    // --- MDX raw file serving ---
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

    // --- V5 fallback redirects ---
    // If a /docs/{slug} page doesn't exist at the latest level but exists in 5.x,
    // permanently redirect to /docs/5.x/{slug} to preserve SEO.
    if (pathname.startsWith("/docs/") && !pathname.startsWith("/docs/5.x/")) {
        const slug = pathname.replace(/^\/docs\//, "").replace(/\/$/, "");

        // Skip if this is already a versioned path (e.g., /docs/6.0.x/...)
        if (/^\d/.test(slug)) {
            return NextResponse.next();
        }

        if (v5Slugs.has(slug)) {
            const url = request.nextUrl.clone();
            url.pathname = `/docs/5.x/${slug}`;
            return NextResponse.redirect(url, 301);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!_next|api|raw|favicon.ico).*)"]
};
