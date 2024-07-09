import { usePage } from "./usePage";
import semver from "semver";

export function useHomepage() {
    const { page } = usePage();

    // TODO: handle this via dedicated versioned/non-versioned components

    // since we introduced the new docs structure with 5.39, the homepage is now a welcome page which didn't exist prior to this version
    // because of that we need to route to a different homepage based on which version the user is looking at
    let url;

    if (!page.version) {
        url = "/docs/get-started/welcome";
    } else if (semver.gte(page.version.replace("x", "0"), "5.39.0")) {
        url = "/docs/{version}/get-started/welcome";
    } else {
        url = "/docs/{version}/get-started/install-webiny";
    }

    const homepageUrl = url.replace("/{version}/", page.isLatest ? "/" : `/${page.version}/`);

    return { homepageUrl };
}
