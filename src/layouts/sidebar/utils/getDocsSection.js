/**
 * Pure function: pathname → docs section identifier.
 * @param {string} pathname
 * @returns {"developer-docs" | "user-docs" | "release-notes" | "handbook"}
 */
export function getDocsSection(pathname) {
    if (pathname.startsWith("/docs/user-guides/")) {
        return "user-docs";
    } else if (pathname.startsWith("/docs/release-notes/")) {
        return "release-notes";
    } else if (pathname.startsWith("/docs/handbook/")) {
        return "handbook";
    }

    return "developer-docs";
}
