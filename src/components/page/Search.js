import { usePage } from "@/hooks/usePage";
import { useState, useCallback, useRef, createContext, useContext, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { DocSearchModal } from "@docsearch/react";
import clsx from "clsx";
import { useActionKey } from "@/hooks/useActionKey";

const INDEX_NAME = "webiny-js";
const API_KEY = "2546465e46871091a6fd8f2c1272f318";
const APP_ID = "U08KX3NZNH";

const SearchContext = createContext();

export function SearchProvider({ children }) {
    const { version } = usePage();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [initialQuery, setInitialQuery] = useState(null);

    const onOpen = useCallback(() => {
        setIsOpen(true);
    }, [setIsOpen]);

    const onClose = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen]);

    const onInput = useCallback(
        e => {
            setIsOpen(true);
            setInitialQuery(e.key);
        },
        [setIsOpen, setInitialQuery]
    );

    useEffect(() => {
        if (isOpen) {
            onClose();
        }
    }, [router]);

    useDocSearchKeyboardEvents({
        isOpen,
        onOpen,
        onClose,
        onInput
    });

    return (
        <>
            <Head>
                <link
                    rel="preconnect"
                    href={`https://${APP_ID}-dsn.algolia.net`}
                    crossOrigin="true"
                />
            </Head>
            <SearchContext.Provider
                value={{
                    isOpen,
                    onOpen,
                    onClose,
                    onInput
                }}
            >
                {children}
            </SearchContext.Provider>
            {isOpen &&
                createPortal(
                    <DocSearchModal
                        initialQuery={initialQuery}
                        initialScrollY={window.scrollY}
                        searchParameters={{
                            facetFilters: [["language:en"], [`version:${version}`]]
                        }}
                        placeholder="Search..."
                        onClose={onClose}
                        indexName={INDEX_NAME}
                        apiKey={API_KEY}
                        appId={APP_ID}
                        navigator={{
                            navigate({ suggestionUrl }) {
                                setIsOpen(false);
                                router.push(suggestionUrl);
                            }
                        }}
                        hitComponent={Hit}
                        transformItems={items => {
                            return items.map((item, index) => {
                                // We transform the absolute URL into a relative URL to
                                // leverage Next's preloading.
                                const a = document.createElement("a");
                                a.href = item.url;

                                const hash = a.hash === "#header" ? "" : a.hash;

                                if (item.hierarchy?.lvl0) {
                                    item.hierarchy.lvl0 = item.hierarchy.lvl0.replace(
                                        /&amp;/g,
                                        "&"
                                    );
                                }

                                return {
                                    ...item,
                                    url: `${a.pathname}${hash}`,
                                    __is_result: () => true,
                                    __is_parent: () =>
                                        item.type === "lvl1" && items.length > 1 && index === 0,
                                    __is_child: () =>
                                        item.type !== "lvl1" &&
                                        items.length > 1 &&
                                        items[0].type === "lvl1" &&
                                        index !== 0,
                                    __is_first: () => index === 1,
                                    __is_last: () => index === items.length - 1 && index !== 0
                                };
                            });
                        }}
                    />,
                    document.body
                )}
        </>
    );
}

function Hit({ hit, children }) {
    return (
        <Link href={hit.url}>
            <a
                className={clsx({
                    "DocSearch-Hit--Result": hit.__is_result?.(),
                    "DocSearch-Hit--Parent": hit.__is_parent?.(),
                    "DocSearch-Hit--FirstChild": hit.__is_first?.(),
                    "DocSearch-Hit--LastChild": hit.__is_last?.(),
                    "DocSearch-Hit--Child": hit.__is_child?.()
                })}
            >
                {children}
            </a>
        </Link>
    );
}

export function SearchButton({ children, ...props }) {
    let searchButtonRef = useRef();
    let actionKey = useActionKey();
    let { onOpen, onClose, onInput, isOpen } = useContext(SearchContext);

    const handleClick = () => {
        if (isOpen) {
            onClose();
        } else {
            onOpen();
        }
    };

    useEffect(() => {
        function onKeyDown(event) {
            if (searchButtonRef && searchButtonRef.current === document.activeElement && onInput) {
                if (/[a-zA-Z0-9]/.test(String.fromCharCode(event.keyCode))) {
                    onInput(event);
                }
            }
        }
        window.addEventListener("keydown", onKeyDown);
        return () => {
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [onInput, searchButtonRef]);

    if (props.type === "mobile") {
        return (
            <button type="button" ref={searchButtonRef} onClick={handleClick} {...props}>
                {typeof children === "function" ? (
                    children({ actionKey })
                ) : isOpen ? (
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M17 1L1 17"
                            className="stroke-dark-blue dark:stroke-white"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                        <path
                            d="M1 1L17 17"
                            className="stroke-dark-blue dark:stroke-white"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                ) : (
                    <svg
                        width="19"
                        height="20"
                        viewBox="0 0 19 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13.8597 14.386L17.9474 18.4737L13.8597 14.386C10.9179 17.3279 6.14823 17.3279 3.20642 14.386C0.264525 11.4442 0.264525 6.6745 3.20642 3.7327C6.14823 0.790801 10.9179 0.790801 13.8597 3.7327C16.8016 6.6745 16.8016 11.4442 13.8597 14.386V14.386Z"
                            className="stroke-dark-blue dark:stroke-white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                )}
            </button>
        );
    } else {
        return (
            <div className="sticky z-10 top-[-1px] overflow-hidden -ml-[5px] pointer-events-none mr-[15px] invisible lg:visible">
                <div className="h-5 bg-white dark:bg-dark-theme"></div>
                <div className="bg-white dark:bg-dark-theme relative pointer-events-auto px-[5px]">
                    <button
                        ref={searchButtonRef}
                        onClick={handleClick}
                        {...props}
                        type="button"
                        className="hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-dark-grey-2 dark:highlight-white/5 dark:hover:bg-slate-700"
                    >
                        <svg
                            width="24"
                            height="24"
                            fill="none"
                            aria-hidden="true"
                            className="mr-3 flex-none"
                        >
                            <path
                                d="m19 19-3.5-3.5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <circle
                                cx="11"
                                cy="11"
                                r="6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></circle>
                        </svg>
                        Quick search...
                        <span className="ml-auto pl-3 flex-none text-xs font-semibold">⌘K</span>
                    </button>
                </div>
                <div className="h-5 bg-gradient-to-b from-white dark:from-dark-theme"></div>
            </div>
        );
    }
}

function useDocSearchKeyboardEvents({ isOpen, onOpen, onClose }) {
    useEffect(() => {
        function onKeyDown(event) {
            function open() {
                // We check that no other DocSearch modal is showing before opening
                // another one.
                if (!document.body.classList.contains("DocSearch--active")) {
                    onOpen();
                }
            }

            if (
                (event.keyCode === 27 && isOpen) ||
                (event.key === "k" && (event.metaKey || event.ctrlKey)) ||
                (!isEditingContent(event) && event.key === "/" && !isOpen)
            ) {
                event.preventDefault();

                if (isOpen) {
                    onClose();
                } else if (!document.body.classList.contains("DocSearch--active")) {
                    open();
                }
            }
        }

        window.addEventListener("keydown", onKeyDown);
        return () => {
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isOpen, onOpen, onClose]);
}

function isEditingContent(event) {
    let element = event.target;
    let tagName = element.tagName;
    return (
        element.isContentEditable ||
        tagName === "INPUT" ||
        tagName === "SELECT" ||
        tagName === "TEXTAREA"
    );
}