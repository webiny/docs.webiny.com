import { usePage } from "./usePage";
import semver from "semver";

export function useHomepage() {
    const { page } = usePage();

    // TODO: handle this via dedicated versioned/non-versioned components

    // since we introduced the new docs structure with 5.39, the homepage is now a welcome page which didn't exist prior to this version
    // because of that we need to route to a different homepage based on which version the user is looking at
    if(page.version && semver.gte('5.39.0', page.version.replace('x', '0'))){
        var url = page.version 
        ? "/docs/{version}/get-started/welcome"
        : "/docs/get-started/welcome";
    }else {
        var url = page.version 
        ? "/docs/{version}/get-started/install-webiny"
        : "/docs/get-started/install-webiny";
    }

    const homepageUrl = url.replace("/{version}/", page.isLatest ? "/" : `/${page.version}/`);

    return { homepageUrl };
}
