import { useVersions } from "@/hooks/useVersions";
import { useRouter } from "next/router";
import { createContext, Fragment, useContext } from "react";

const PageContext = createContext();

export const PageProvider = ({ Component, children }) => {
    const router = useRouter();
    const versions = useVersions();

    const detectVersion = () => {
        const urlRegExp = /\/docs\/(\d+\.\d+\.[x|\d+])\/.*/;
        // Using `asPath` here, because in case of a `404` page, the requested path will be stored in `asPath`.
        const match = router.asPath.match(urlRegExp);
        return match ? match[1] : "latest";
    };

    const layoutProps = Component.layoutProps || {};
    const version = layoutProps.version || detectVersion();

    const algoliaVersions = [version, version === "latest" ? versions.latestVersion : null]
        .filter(Boolean)
        .join(",");

    const context = {
        Article: Component,
        Layout: layoutProps.Layout || Fragment,
        version,
        canonicalPath: layoutProps.canonicalPath || "",
        title: layoutProps?.meta?.title || "",
        description: layoutProps?.meta?.description || "",
        algoliaVersions
    };

    return <PageContext.Provider value={context}>{children}</PageContext.Provider>;
};

export function usePage() {
    return useContext(PageContext);
}
