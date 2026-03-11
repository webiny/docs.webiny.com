import { useRouter } from "next/router";
import { useActiveNav } from "./hooks/useActiveNav";
import { useAutoScroll } from "./hooks/useAutoScroll";
import { useRenderingMode } from "./hooks/useRenderingMode";
import { NavTreeElement } from "./components/NavTreeElement";

export function Nav({ nav }) {
    const router = useRouter();
    const { mode, depthOverrides } = useRenderingMode();
    const activeNav = useActiveNav(nav, router.pathname);
    const { activeItemRef, scrollRef } = useAutoScroll(router.pathname);

    // If no group owns the current page, fall back to homepage-style nav
    const hasActiveGroup = activeNav.some(el => el.isActiveChild);
    const effectiveMode = mode === "dev-content" && !hasActiveGroup ? "dev-homepage" : mode;

    return (
        <nav
            ref={scrollRef}
            id="nav"
            className="pl-[13px] lg:text-sm lg:leading-6 relative font-roboto"
        >
            <ul>
                {activeNav.map((el, index) => (
                    <NavTreeElement
                        element={el}
                        key={index}
                        ref={activeItemRef}
                        mode={effectiveMode}
                        depthOverrides={depthOverrides}
                    />
                ))}
            </ul>
        </nav>
    );
}
