import { useVersions } from "@/hooks/useVersions";
import { createContext, Fragment, useContext } from "react";

const PageContext = createContext();

export const PageProvider = ({ Component, children }) => {
    const versions = useVersions();
    const layoutProps = Component.layoutProps || {};
    const version = layoutProps.version || "latest";

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
