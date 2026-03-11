/**
 * Pure function: pathname → docs section identifier.
 * @param {string} pathname
 * @returns {"developer-docs" | "user-docs" | "release-notes" | "handbook"}
 */
export function getDocsSection(pathname) {
    if (pathname.startsWith("/user-guides/")) {
        return "user-docs";
    } else if (pathname.startsWith("/release-notes/")) {
        return "release-notes";
    } else if (pathname.startsWith("/handbook/")) {
        return "handbook";
    }

    return "developer-docs";
}
