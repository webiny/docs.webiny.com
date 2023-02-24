import { useNavigation } from "@/components/page/Navigation";
//import { usePage } from "@/hooks/usePage";
import { VersionSelector } from "@/components/page/VersionSelector";
import Link from "next/link";
import { useRouter } from "next/router";
import { createContext, forwardRef, useEffect, useRef, useState } from "react";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import clsx from "clsx";
import { Dialog } from "@headlessui/react";
import { SearchButton } from "@/components/page/Search";

import { scroll } from "./SidebarLayout.module.css";

const Arrow = ({ className }) => {
    return (
        <svg
            width="6"
            height="12"
            viewBox="0 0 6 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M1 11.0585L5.36871 6.26225L1.03281 1.31022"
                className={className}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
export default Arrow;

export const SidebarContext = createContext();

/**
 * Find the nearest scrollable ancestor (or self if scrollable)
 *
 * Code adapted and simplified from the smoothscroll polyfill
 *
 *
 * @param {Element} el
 */
function nearestScrollableContainer(el) {
    /**
     * indicates if an element can be scrolled
     *
     * @param {Node} el
     */
    function isScrollable(el) {
        const style = window.getComputedStyle(el);
        const overflowX = style["overflowX"];
        const overflowY = style["overflowY"];
        const canScrollY = el.clientHeight < el.scrollHeight;
        const canScrollX = el.clientWidth < el.scrollWidth;

        const isScrollableY = canScrollY && (overflowY === "auto" || overflowY === "scroll");
        const isScrollableX = canScrollX && (overflowX === "auto" || overflowX === "scroll");

        return isScrollableY || isScrollableX;
    }

    while (el !== document.body && isScrollable(el) === false) {
        el = el.parentNode || el.host;
    }

    return el;
}

const NavTreeElement = forwardRef(({ element, depth = 0 }, ref) => {
    const { type, title, link, items, isActive, isActiveChild } = element;

    if (type === "collapsable") {
        return (
            <Collapsable
                subElements={items}
                isActiveChild={isActiveChild}
                title={title}
                ref={ref}
                depth={depth}
            />
        );
    } else if (type === "page") {
        return <Page title={title} link={link} isActive={isActive} ref={ref} depth={depth} />;
    } else if (type === "section") {
        return (
            <Section
                subElements={items}
                isActiveChild={isActiveChild}
                title={title}
                ref={ref}
                depth={depth}
            />
        );
    } else if (type === "separator") {
        return <HorizontalLine />;
    } else {
        return null;
    }
});

const HorizontalLine = () => {
    return (
        <div className="pr-[10px] my-[20px]">
            <div className="border-b-[1px] border-neutral-200 dark:border-dark-grey-2 w-full -ml-[10px]"></div>
        </div>
    );
};

const Collapsable = forwardRef(({ title, subElements = [], isActiveChild, depth = 0 }, ref) => {
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        if (isActiveChild) {
            setShowMenu(true);
        }
    }, [isActiveChild]);

    return (
        <>
            {/* top level */}
            <li
                href="#"
                onClick={() => setShowMenu(!showMenu)}
                className="root-element relative flex items-center cursor-pointer h-[30px] mt-[5px] mb-[3px]"
            >
                <div
                    className={`${
                        depth === 0 ? "absolute left-[-15px] top-[9px]" : "ml-[15px] mr-[12px]"
                    }`}
                >
                    <div
                        className={
                            "transition-all transform duration-300 " + (showMenu ? "rotate-90" : "")
                        }
                        alt="collapsable"
                    >
                        <Arrow
                            className={clsx({
                                "stroke-dark-blue dark:stroke-white": depth === 0,
                                "stroke-light-grey-3 dark:stroke-light-grey-4": true
                            })}
                        />
                    </div>
                </div>
                <button
                    className={clsx({
                        "font-bold text-nav-subdirectory text-dark-purple dark:text-light-grey":
                            isActiveChild && depth > 0,
                        "text-nav-subdirectory font-normal text-dark-purple dark:text-light-grey":
                            (!showMenu && depth > 0 && !isActiveChild) ||
                            (!isActiveChild && showMenu && depth > 0),
                        "text-dark-blue dark:text-light-grey font-semibold text-nav-directory":
                            depth === 0
                    })}
                >
                    {title}
                </button>
            </li>
            <ul
                className={
                    "transition-all duration-300 " +
                    clsx({
                        "ml-[18px] ": depth > 0,
                        "transform opacity-1 overflow-visible": showMenu,
                        "max-h-0 transform opacity-0 overflow-hidden": !showMenu
                    })
                }
            >
                {subElements.map((navElement, index) => (
                    <NavTreeElement key={index} element={navElement} ref={ref} depth={depth + 1} />
                ))}
            </ul>
        </>
    );
});

const Page = forwardRef(({ title, link, isActive, depth = 0 }, ref) => {
    return (
        <li
            ref={isActive ? ref : null}
            className={clsx(
                "link-element grid content-center block my-[15px] ml-[-1px] pl-[15px] cursor-pointer border-slate-100 dark:border-transparent",
                {
                    "--active border-l-[1px] text-orange border-l-orange font-bold dark:border-orange/50":
                        isActive,
                    "border-l-[1px] hover:border-l-[1px] hover:text-dark-purple hover:border-orange/50":
                        !isActive,
                    "font-semibold text-nav-directory": depth === 0,
                    "my-[7px] text-nav-link": depth > 0,
                    "text-dark-blue dark:text-white": depth === 0 && !isActive,
                    "text-dark-blue dark:text-light-grey-2": depth > 0 && !isActive
                }
            )}
        >
            <Link href={link}>
                {/* first line */}
                <a className="leading-6">{title}</a>
            </Link>
        </li>
    );
});

// second level section
const Section = forwardRef(({ title, subElements = [], isActiveChild, depth = 0 }, ref) => {
    return (
        <>
            <li className="flex items-center">
                <span
                    className={clsx({
                        "section-title mt-[10px] mb-[5px] uppercase text-dark-grey font-semibold text-nav-subdirectory dark:text-light-grey-2":
                            !isActiveChild,
                        "section-title-active mt-[10px] mb-[5px] uppercase text-dark-grey font-semibold text-nav-subdirectory dark:text-light-grey":
                            isActiveChild
                    })}
                >
                    {title}
                </span>
            </li>
            <ul
                className={clsx({
                    "parent-list border-l border-slate-100 dark:border-dark-grey": depth > 0
                })}
            >
                {subElements.sort().map((navElement, index) => (
                    <NavTreeElement key={index} element={navElement} ref={ref} depth={depth + 1} />
                ))}
            </ul>
        </>
    );
});

function Nav({ nav }) {
    const router = useRouter();
    const activeItemRef = useRef();
    const previousActiveItemRef = useRef();
    const scrollRef = useRef();

    function setIsActive(nav) {
        for (const navItem of nav) {
            if (navItem.type === "page") {
                const isActive = navItem.link === router.pathname;

                navItem.isActive = isActive;
            } else if (navItem.type === "collapsable" || navItem.type === "section") {
                setIsActive(navItem.items);

                const isActiveChild = navItem.items.some(
                    link => link.isActive || link.isActiveChild
                );

                navItem.isActiveChild = isActiveChild;
            }
        }
    }

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

            // this part calculates the scroll offset of the navigation sidebar so the active element is centered on the screen
            // because of the css animations where certain sidebar nav elements need to expand, we need to offset the execution
            // of this code until those animations are done so we can correctly calculate the placement of items on the screen
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
                    scrollable.scrollTop = top - scrollRect.height / 2 + activeItemRect.height / 2;
                }
            }, 500);
        }
    }, [router.pathname]);

    if (nav) {
        setIsActive(nav);
    }

    return (
        <nav
            ref={scrollRef}
            id="nav"
            className="pl-[13px] lg:text-sm lg:leading-6 relative font-roboto"
        >
            <ul>
                {nav.map((el, index) => {
                    return (
                        <NavTreeElement
                            element={el}
                            key={index}
                            ref={activeItemRef}
                            router={router}
                        />
                    );
                })}
            </ul>
        </nav>
    );
}

function Wrapper({ allowOverflow, children }) {
    return <div className={allowOverflow ? undefined : "overflow-hidden"}>{children}</div>;
}

export function SidebarLayout({ children, nav, sidebar }) {
    const navigation = useNavigation();
    return (
        <SidebarContext.Provider value={{ nav }}>
            <Wrapper allowOverflow={true}>
                <div className="max-w-[96.993rem] 3xl:max-w-[104rem] mx-auto pl-4 sm:pl-6 md:pl-8 3xl:pl-[5.43rem] pr-4 sm:pr-6 md:pr-8">
                    <div
                        className={`hidden lg:block fixed z-20 inset-0 top-[4.15rem] right-auto w-[20.875rem] pb-10 pl-[18px] overflow-y-auto border-r border-neutral-200 dark:border-[#36383a] ${scroll}`}
                    >
                        <div className={"flex w-full pt-5 pr-5 pb-1"}>
                            <VersionSelector />
                        </div>
                        <SearchButton />
                        <Nav nav={nav}>{sidebar}</Nav>
                    </div>
                    <div className="lg:pl-[20.875rem]">{children}</div>
                </div>
            </Wrapper>
            <Dialog
                as="div"
                open={navigation.isOpen}
                onClose={navigation.closeNavigation}
                className="fixed z-50 inset-0 overflow-y-auto lg:hidden"
            >
                <Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80" />
                <div className="relative bg-white w-[21.25rem] max-w-[calc(100%-3rem)] p-6 dark:bg-dark-grey-2 overflow-scroll h-full">
                    <button
                        type="button"
                        onClick={navigation.closeNavigation}
                        className="absolute z-10 top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300 focus:outline-none"
                    >
                        <span className="sr-only">Close navigation</span>
                        <svg viewBox="0 0 10 10" className="w-2.5 h-2.5 overflow-visible">
                            <path
                                d="M0 0L10 10M10 0L0 10"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>
                    <Nav nav={nav}>{sidebar}</Nav>
                </div>
            </Dialog>
        </SidebarContext.Provider>
    );
}
