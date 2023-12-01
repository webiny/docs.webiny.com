import { createContext, Fragment, useContext } from "react";
import titleCase from "titlecase";

const PageContext = createContext();

export const PageProvider = ({ Component, children }) => {
    const layoutProps = Component.layoutProps;
    const { pageData, docsearch } = layoutProps;

    if (!pageData) {
        return <div>Page not found! Please enter a valid URL.</div>;
    }

    const versions = layoutProps.versions || [];

    const context = {
        MdxPage: Component,
        Layout: layoutProps.Layout || Fragment,
        page: {
            versions,
            isLatest: pageData.version ? versions.latestVersion === pageData.version : true,
            navigation: layoutProps.navigation || [],
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
