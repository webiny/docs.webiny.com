/**
 * Strip the `/docs` basePath prefix from a path before passing it to
 * Next.js routing helpers (`<Link>`, `router.push`, etc.) which
 * automatically prepend `basePath`.
 *
 * Paths that don't start with `/docs` are returned unchanged.
 */
export function stripBasePath(path) {
    if (typeof path !== "string") {
        return path;
    }

    if (
        path === "/docs" ||
        path.startsWith("/docs/") ||
        path.startsWith("/docs?") ||
        path.startsWith("/docs#")
    ) {
        return path.slice("/docs".length) || "/";
    }

    return path;
}

