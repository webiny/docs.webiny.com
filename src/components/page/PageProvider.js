import { createContext, Fragment, useContext } from "react";
import { useRouter } from "next/router";
import titleCase from "titlecase";
import { Breadcrumbs } from "./Breadcrumbs";

const PageContext = createContext();

const getCanonicalPath = (versions, pageData, pathname) => {
    const { canonicalVersion, version } = pageData;
    if (
        !pathname ||
        !canonicalVersion ||
        version === versions.latestVersion ||
        version === canonicalVersion
    ) {
        return undefined;
    }

    const replacement = canonicalVersion === versions.latestVersion ? "/" : `/${canonicalVersion}/`;
    return pathname.replace(`/${version}/`, replacement);
};

export const PageProvider = ({ Component, children }) => {
    const router = useRouter();

    const layoutProps = Component.layoutProps;
    const { pageData, docsearch } = layoutProps;

    if (!pageData) {
        return <div>Page not found! Please enter a valid URL.</div>;
    }

    const versions = layoutProps.versions || [];
    const isLatest = pageData.version ? versions.latestVersion === pageData.version : true;
    const canonicalPath = isLatest
        ? undefined
        : getCanonicalPath(versions, pageData, router.pathname);

    const navigation = layoutProps.navigation || [];
    const breadcrumbs = new Breadcrumbs(navigation).find(router.pathname);

    const context = {
        MdxPage: Component,
        Layout: layoutProps.Layout || Fragment,
        page: {
            versions,
            isLatest,
            canonicalPath,
            navigation,
            breadcrumbs: breadcrumbs || [],
            ...pageData,
            docsearch,
            // TODO: handle sharecard; are we using it at all?
            shareCard: layoutProps?.meta?.shareCard,
            title: titleCase(pageData.title),
            tableOfContents: layoutProps.tableOfContents
        }
    };

    // Development only
    if (process.env.NODE_ENV === "development") {
        context.page.sourceFile = pageData.sourceFile;
    }

    return <PageContext.Provider value={context}>{children}</PageContext.Provider>;
};

export function usePage() {
    return useContext(PageContext);
}
