import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { nearestScrollableContainer } from "../utils/nearestScrollableContainer";

/**
 * Manages auto-scrolling the sidebar so the active nav item is visible.
 * Returns { activeItemRef, scrollRef }.
 */
export function useAutoScroll(pathname) {
    const activeItemRef = useRef();
    const previousActiveItemRef = useRef();
    const scrollRef = useRef();

    useIsomorphicLayoutEffect(() => {
        function updatePreviousRef() {
            previousActiveItemRef.current = activeItemRef.current;
        }

        if (activeItemRef.current) {
            if (activeItemRef.current === previousActiveItemRef.current) {
                updatePreviousRef();
                return;
            }
            updatePreviousRef();

            setTimeout(() => {
                if (!scrollRef.current) {
                    return;
                }
                const scrollable = nearestScrollableContainer(scrollRef.current);

                const scrollRect = scrollable.getBoundingClientRect();
                const activeItemRect = activeItemRef.current.getBoundingClientRect();

                const top = activeItemRef.current.offsetTop;
                const bottom = top - scrollRect.height + activeItemRect.height;

                if (scrollable.scrollTop > top || scrollable.scrollTop < bottom) {
                    scrollable.scrollTop =
                        top - scrollRect.height / 2 + activeItemRect.height / 2;
                }
            }, 200);
        }
    }, [pathname]);

    return { activeItemRef, scrollRef };
}
