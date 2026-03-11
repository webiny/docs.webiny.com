import { useMemo } from "react";

/**
 * Recursively compute isActive / isActiveChild on a nav tree.
 * Returns a new tree — never mutates the input.
 */
function computeActiveState(nav, pathname) {
    return nav.map(navItem => {
        if (navItem.type === "page") {
            return {
                ...navItem,
                isActive: navItem.link === pathname,
                isActiveChild: false
            };
        }

        if (navItem.type === "group") {
            // If group link matches pathname, mark as active child and process children.
            if (navItem.link === pathname) {
                return {
                    ...navItem,
                    isActive: false,
                    isActiveChild: true,
                    items: computeActiveState(navItem.items, pathname)
                };
            }

            // Otherwise process children and derive isActiveChild from them.
            const items = computeActiveState(navItem.items, pathname);
            const isActiveChild = items.some(item => item.isActive || item.isActiveChild);

            return {
                ...navItem,
                isActive: false,
                isActiveChild,
                items
            };
        }

        // separators and other types pass through
        return { ...navItem, isActive: false, isActiveChild: false };
    });
}

/**
 * Hook: returns a new nav tree with isActive/isActiveChild computed immutably.
 * Only recomputes when nav or pathname changes.
 */
export function useActiveNav(nav, pathname) {
    return useMemo(() => {
        if (!nav) return nav;
        return computeActiveState(nav, pathname);
    }, [nav, pathname]);
}
