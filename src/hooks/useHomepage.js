import { usePage } from "./usePage";

export function useHomepage() {
    const { page } = usePage();

    // TODO: handle this via dedicated versioned/non-versioned components
    const url = page.version
        ? "/docs/{version}/get-started/install-webiny"
        : "/docs/get-started/install-webiny";

    const homepageUrl = url.replace("/{version}/", page.isLatest ? "/" : `/${page.version}/`);

    return { homepageUrl };
}
