import titleCase from "titlecase";
import { createContext, Fragment, useContext } from "react";

const PageContext = createContext();

export const PageProvider = ({ Component, children }) => {
    const layoutProps = Component.layoutProps;
    const { pageData } = layoutProps;

    if (!pageData) {
        return <div>Page not found! Please enter a valid URL.</div>;
    }

    const context = {
        Article: Component,
        Layout: layoutProps.Layout || Fragment,
        page: {
            ...pageData,
            shareCard: layoutProps?.meta?.shareCard,
            title: titleCase(pageData.title)
        }
    };

    return <PageContext.Provider value={context}>{children}</PageContext.Provider>;
};

export function usePage() {
    return useContext(PageContext);
}
