import { useEffect } from "react";
import { useRouter } from "next/router";
import { useHomepage } from "@/hooks/useHomepage";
import { getDocsSection } from "../utils/getDocsSection";

const NAV_STORAGE_KEY = "webiny-docs-nav";
const VALID_KEYS = ["icon", "content", "accordion", "label"];

function parseNavParam(value) {
    if (!value) return null;
    const parts = String(value).split(".");
    const parsed = parts.map(key => (VALID_KEYS.includes(key) ? key : null));
    return parsed.some(k => k !== null) ? parsed : null;
}

/**
 * Returns the rendering mode and optional depth overrides for the sidebar nav tree.
 * @returns {{ mode: "dev-homepage" | "dev-content" | "accordion", depthOverrides: string[] | null }}
 */
export function useRenderingMode() {
    const router = useRouter();
    const { homepageUrl } = useHomepage();

    const docsSection = getDocsSection(router.pathname);
    const isDeveloperOrUserDocs = ["developer-docs", "user-docs"].includes(docsSection);

    let mode;
    if (!isDeveloperOrUserDocs) {
        mode = "accordion";
    } else {
        const isHomepage = router.pathname.endsWith(homepageUrl);
        mode = isHomepage ? "dev-homepage" : "dev-content";
    }

    // Resolve nav overrides: query param > localStorage
    const navParam = router.query.nav;
    let depthOverrides = null;

    if (isDeveloperOrUserDocs && mode !== "dev-homepage") {
        if (navParam) {
            depthOverrides = parseNavParam(navParam);
        } else if (typeof window !== "undefined") {
            depthOverrides = parseNavParam(localStorage.getItem(NAV_STORAGE_KEY));
        }
    }

    // Persist to localStorage when query param is present
    useEffect(() => {
        if (navParam && isDeveloperOrUserDocs && mode !== "dev-homepage") {
            const parsed = parseNavParam(navParam);
            if (parsed) {
                localStorage.setItem(NAV_STORAGE_KEY, String(navParam));
            }
        }
    }, [navParam, isDeveloperOrUserDocs, mode]);

    return { mode, depthOverrides };
}
