import Router from "next/router";
import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
    const [navIsOpen, setNavIsOpen] = useState(false);

    const handleRouteChange = useCallback(() => {
        setNavIsOpen(false);
    }, []);

    useEffect(() => {
        if (!navIsOpen) {
            return;
        }

        Router.events.on("routeChangeComplete", handleRouteChange);

        return () => {
            Router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [navIsOpen]);

    const context = {
        isOpen: navIsOpen,
        closeNavigation() {
            setNavIsOpen(false);
        },
        toggleNavigation() {
            setNavIsOpen(!navIsOpen);
        }
    };

    return <NavigationContext.Provider value={context}>{children}</NavigationContext.Provider>;
};

export function useNavigation() {
    return useContext(NavigationContext);
}
