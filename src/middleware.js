import { NextResponse } from "next/server";
import v5RedirectSlugs from "./v5-redirect-manifest.json";

// Build a Set for O(1) lookups at the edge
const v5Slugs = new Set(v5RedirectSlugs);

export function middleware(request) {
    // With basePath: "/docs", Next.js strips the /docs prefix before invoking middleware.
    // So pathname is relative to basePath (e.g., /get-started/welcome instead of /docs/get-started/welcome).
    const { pathname } = request.nextUrl;
    const acceptHeader = request.headers.get("accept") || "";

    // --- MDX raw file serving ---
    const wantsMdxExtension = pathname.endsWith(".mdx") || pathname.endsWith(".md");
    const wantsMarkdownHeader = acceptHeader.includes("text/markdown");

    if (wantsMdxExtension || wantsMarkdownHeader) {
        const cleanPath = pathname.replace(/\.(mdx|md)$/, "");
        const url = request.nextUrl.clone();

        // Rewrite to static file in public/raw/ (public assets are served under basePath)
        url.pathname = "/docs-static/raw" + cleanPath + ".mdx";

        const response = NextResponse.rewrite(url);
        response.headers.set("Content-Type", "text/plain; charset=utf-8");
        return response;
    }

    // --- V5 fallback redirects ---
    // If a /{slug} page doesn't exist at the latest level but exists in 5.x,
    // permanently redirect to /5.x/{slug} to preserve SEO.
    // Skip versioned paths (e.g., /5.40.x/..., /6.0.x/...)
    const slug = pathname.replace(/^\//, "").replace(/\/$/, "");

    if (slug && !/^\d/.test(slug) && !slug.startsWith("5.x/")) {
        if (v5Slugs.has(slug)) {
            const url = request.nextUrl.clone();
            url.pathname = `/5.x/${slug}`;
            return NextResponse.redirect(url, 301);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!_next|api|raw|favicon.ico).*)"]
};
