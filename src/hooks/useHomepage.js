import { useRouter } from "next/router";
import { usePage } from "./usePage";
import { getDocsSection } from "@/layouts/sidebar/utils/getDocsSection";
import semver from "semver";

export function useHomepage() {
    const { page } = usePage();
    const router = useRouter();

    // TODO: handle this via dedicated versioned/non-versioned components

    // since we introduced the new docs structure with 5.39, the homepage is now a welcome page which didn't exist prior to this version
    // because of that we need to route to a different homepage based on which version the user is looking at
    let url;

    if (!page.version) {
        url = "/get-started/welcome";
    } else if (semver.gte(/^\d+\.x$/.test(page.version) ? page.version.replace("x", "0.0") : page.version.replace("x", "0"), "5.39.0")) {
        url = "/{version}/get-started/welcome";
    } else {
        url = "/{version}/get-started/install-webiny";
    }

    let docsSection = getDocsSection(router.pathname);
    if (docsSection === "user-docs") {
        if (!page.version) {
            url = "/user-guides/overview";
        } else {
            url = "/{version}/user-guides/overview";
        }
    }

    const homepageUrl = url.replace("/{version}/", page.isLatest ? "/" : `/${page.version}/`);

    return { homepageUrl };
}
