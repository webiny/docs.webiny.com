import Link from "next/link";
import { SearchButton } from "@/components/Search";
import Router from "next/router";
import { Logo } from "@/components/Logo";
import { Dialog } from "@headlessui/react";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.css";

function Featured() {
    return (
        <Link href="https://github.com/webiny/webiny-js">
            <a
                className="ml-9 bg-white dark:bg-dark-grey-3 rounded-full py-2 px-3 hidden xl:flex items-center"
                target="_blank"
                rel="noreferrer"
            >
                <span className="text-nav-link dark:text-white ml-2">
                    <span role="img">⭐️</span> If you like Webiny, help us out by giving us a star
                    on GitHub!
                </span>
                <svg
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    className="ml-2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1 10.748L5.36872 5.95182L1.03281 0.999808"
                        className="stroke-dark-blue dark:stroke-white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </a>
        </Link>
    );
}

export function NavPopover({ display = "md:hidden", className, ...props }) {
    let [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!isOpen) return;
        function handleRouteChange() {
            setIsOpen(false);
        }
        Router.events.on("routeChangeComplete", handleRouteChange);
        return () => {
            Router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [isOpen]);

    return (
        <div className={clsx(className, display)} {...props}>
            <button
                type="button"
                className="flex items-center justify-center mr-[1.6875rem] md:mr-0 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                onClick={() => setIsOpen(true)}
            >
                <span className="sr-only">Navigation</span>
                <svg
                    width="4"
                    height="17"
                    viewBox="0 0 4 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2 4.99725C3.1 4.99725 4 4.09725 4 2.99725C4 1.89725 3.1 0.997253 2 0.997253C0.9 0.997253 0 1.89725 0 2.99725C0 4.09725 0.9 4.99725 2 4.99725ZM2 6.99639C0.9 6.99639 0 7.89639 0 8.99639C0 10.0964 0.9 10.9964 2 10.9964C3.1 10.9964 4 10.0964 4 8.99639C4 7.89639 3.1 6.99639 2 6.99639ZM2 12.9955C0.9 12.9955 0 13.8955 0 14.9955C0 16.0955 0.9 16.9955 2 16.9955C3.1 16.9955 4 16.0955 4 14.9955C4 13.8955 3.1 12.9955 2 12.9955Z"
                        className="fill-dark-blue dark:fill-white"
                    />
                </svg>
            </button>
            <Dialog
                as="div"
                className={clsx("fixed z-50 inset-0", display)}
                open={isOpen}
                onClose={() => setIsOpen(false)}
            >
                <Dialog.Overlay className="fixed top-[3.375rem] inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80" />
                <div
                    className={clsx(
                        "fixed top-[4.3125rem] right-[0.875rem] w-full max-w-[16.4375rem] bg-white rounded-lg pt-5 text-base font-semibold text-slate-900 dark:text-slate-400 dark:highlight-white/5 dark:bg-dark-grey-2",
                        styles.headerDialog
                    )}
                >
                    <div className={clsx(styles.whiteCorner, "dark:bg-dark-grey-2")}></div>
                    <div className="flex justify-between pb-2 mb-3 mx-5 dark:text-white border-b border-border dark:border-dark-grey">
                        Dark Theme
                        <ThemeToggle />
                    </div>
                    <ul className="space-y-5 px-5">
                        <NavItems />
                    </ul>
                    <div className="flex justify-between mt-5 py-2 px-11 border-t border-slate-200 dark:border-slate-200/10">
                        <a>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto"
                            >
                                <path
                                    d="M20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10Z"
                                    className="fill-[#94A3B8] dark:fill-white"
                                />
                                <path
                                    d="M12.3939 4.79798C10.975 4.83394 9.83685 5.99524 9.83685 7.42298C9.83685 7.62851 9.8589 7.82945 9.90385 8.02198C7.72123 7.91233 5.78614 6.86688 4.49085 5.27798C4.26479 5.66566 4.13485 6.11725 4.13485 6.59898C4.13485 7.50997 4.59918 8.31316 5.30385 8.78398C4.87356 8.77021 4.46801 8.65168 4.11385 8.45498C4.11365 8.4659 4.11385 8.47781 4.11385 8.48898C4.11385 9.76114 5.01937 10.8213 6.22085 11.063C6.00051 11.1227 5.76842 11.155 5.52885 11.155C5.35944 11.155 5.19517 11.1389 5.03485 11.108C5.36926 12.1512 6.33786 12.9109 7.48685 12.932C6.58808 13.6364 5.45744 14.056 4.22685 14.056C4.01509 14.056 3.80538 14.0444 3.59985 14.02C4.76236 14.7655 6.14197 15.2 7.62485 15.2C12.4555 15.2 15.0969 11.1984 15.0969 7.72798C15.0969 7.61418 15.0948 7.49975 15.0899 7.38698C15.6028 7.01749 16.048 6.55467 16.3999 6.02798C15.9293 6.23715 15.4232 6.37884 14.8919 6.44198C15.4344 6.11719 15.8507 5.60272 16.0469 4.98898C15.5394 5.29013 14.9773 5.50902 14.3789 5.62698C13.9 5.11666 13.2172 4.79798 12.4619 4.79798C12.4392 4.79798 12.4164 4.79741 12.3939 4.79798Z"
                                    className="fill-white dark:fill-dark-grey-2"
                                />
                            </svg>
                            <span className="text-burger-menu-link dark:text-white">TWITTER</span>
                        </a>
                        <hr className={clsx(styles.verticalLine, "dark:border-dark-grey")}></hr>
                        <a href="https://github.com/webiny/webiny-js">
                            <svg
                                width="20"
                                height="21"
                                viewBox="0 0 20 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto"
                            >
                                <path
                                    d="M10 0.570679C4.475 0.570679 0 5.04568 0 10.5707C0 14.9957 2.8625 18.7332 6.8375 20.0582C7.3375 20.1457 7.525 19.8457 7.525 19.5832C7.525 19.3457 7.5125 18.5582 7.5125 17.7207C5 18.1832 4.35 17.1082 4.15 16.5457C4.0375 16.2582 3.55 15.3707 3.125 15.1332C2.775 14.9457 2.275 14.4832 3.1125 14.4707C3.9 14.4582 4.4625 15.1957 4.65 15.4957C5.55 17.0082 6.9875 16.5832 7.5625 16.3207C7.65 15.6707 7.9125 15.2332 8.2 14.9832C5.975 14.7332 3.65 13.8707 3.65 10.0457C3.65 8.95818 4.0375 8.05818 4.675 7.35818C4.575 7.10818 4.225 6.08318 4.775 4.70818C4.775 4.70818 5.6125 4.44568 7.525 5.73318C8.325 5.50818 9.175 5.39568 10.025 5.39568C10.875 5.39568 11.725 5.50818 12.525 5.73318C14.4375 4.43318 15.275 4.70818 15.275 4.70818C15.825 6.08318 15.475 7.10818 15.375 7.35818C16.0125 8.05818 16.4 8.94568 16.4 10.0457C16.4 13.8832 14.0625 14.7332 11.8375 14.9832C12.2 15.2957 12.5125 15.8957 12.5125 16.8332C12.5125 18.1707 12.5 19.2457 12.5 19.5832C12.5 19.8457 12.6875 20.1582 13.1875 20.0582C15.1727 19.388 16.8977 18.1121 18.1198 16.4102C19.3419 14.7083 19.9995 12.6659 20 10.5707C20 5.04568 15.525 0.570679 10 0.570679Z"
                                    className="fill-[#94A3B8] dark:fill-white"
                                />
                            </svg>
                            <span className="text-burger-menu-link dark:text-white">GITHUB</span>
                        </a>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}

export function NavItems() {
    return (
        <>
            <li>
                <Link href="/">
                    <a className="text-nav-subdirectory dark:text-white">Webiny Home</a>
                </Link>
            </li>
        </>
    );
}

export function Header({ navIsOpen, onNavToggle }) {
    /*
  let [isOpen, setIsOpen] = useState(false)

  const openDialog = () => {
    return setIsOpen(!isOpen)
  }
  */

    return (
        <>
            <div className="fixed top-0 z-40 w-full bg-smoke/90 backdrop-blur backdrop-opacity-80 supports-backdrop-blur:bg-white/95 flex-none transition-colors duration-500 lg:z-50 dark:bg-dark-grey-2 shadow-[0_1px_0_rgb(229,229,229)] dark:shadow-[0_1px_0_rgb(78,78,78)]">
                <div className="relative flex items-center h-[3.375rem] lg:h-16 pl-[0.875rem] md:pl-8 pr-[] md:pr-8">
                    <button className="lg:hidden mr-5" onClick={() => onNavToggle(!navIsOpen)}>
                        <svg
                            width="22"
                            height="17"
                            viewBox="0 0 22 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M1.33344 3.66413C0.597 3.66413 0 3.06713 0 2.33069C0 1.59425 0.597 0.997253 1.33344 0.997253H20.6666C21.403 0.997253 22 1.59425 22 2.33069C22 3.06713 21.403 3.66413 20.6666 3.66413H1.33344ZM0 8.9963C0 9.73256 0.596861 10.3294 1.33313 10.3294H20.6669C21.4031 10.3294 22 9.73256 22 8.9963C22 8.26003 21.4031 7.66317 20.6669 7.66317H1.33313C0.596861 7.66317 0 8.26003 0 8.9963ZM0 15.6619C0 16.3983 0.597 16.9953 1.33344 16.9953H20.6666C21.403 16.9953 22 16.3983 22 15.6619C22 14.9255 21.403 14.3285 20.6666 14.3285H1.33344C0.597 14.3285 0 14.9255 0 15.6619Z"
                                className="fill-dark-blue dark:fill-white"
                            />
                        </svg>
                    </button>
                    <Link href="/docs/get-started/install-webiny">
                        <a
                            className="flex-none w-[1.5925rem] lg:pr-[8.3875rem] lg:border-r border-border dark:border-dark-grey overflow-hidden lg:w-auto"
                            onContextMenu={e => {
                                e.preventDefault();
                                Router.push("/brand");
                            }}
                        >
                            <span className="sr-only">Webiny Docs home page</span>
                            <Logo className="w-auto h-[1.8025rem] lg:h-10" />
                        </a>
                    </Link>
                    <Featured />
                    <div className="relative hidden lg:flex items-center ml-auto">
                        <nav className="flex items-center h-[2.375rem] text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200 border-l border-border dark:border-dark-grey ml-[1.875rem] pl-[1.875rem]">
                            <ul className="flex space-x-8">
                                <NavItems />
                            </ul>
                        </nav>
                        <div className="flex items-center h-[2.375rem] border-l border-slate-200 dark:border-dark-grey ml-[1.875rem] pl-[1.875rem] dark:border-dark-grey">
                            <a
                                href="https://github.com/webiny/webiny-js"
                                target="_blank"
                                rel="noreferrer"
                                className="block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                            >
                                <span className="sr-only">Webiny Docs on GitHub</span>
                                <svg
                                    width="26"
                                    height="26"
                                    viewBox="0 0 16 16"
                                    className="fill-dark-blue dark:fill-white"
                                    aria-hidden="true"
                                >
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                            </a>
                            <a
                                href="https://twitter.com/WebinyCMS"
                                target="_blank"
                                rel="noreferrer"
                                className="ml-5 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                            >
                                <span className="sr-only">Webiny Docs on GitHub</span>
                                <svg
                                    width="26"
                                    height="26"
                                    viewBox="0 0 26 26"
                                    className="fill-dark-blue dark:fill-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26C20.1797 26 26 20.1797 26 13Z" />
                                    <path
                                        d="M16.1121 6.23764C14.2677 6.28437 12.788 7.79407 12.788 9.65014C12.788 9.91733 12.8167 10.1785 12.8751 10.4288C10.0377 10.2863 7.5221 8.92721 5.83823 6.86164C5.54436 7.36561 5.37543 7.95268 5.37543 8.57893C5.37543 9.76322 5.97905 10.8074 6.89513 11.4194C6.33576 11.4015 5.80854 11.2474 5.34813 10.9917C5.34787 11.0059 5.34813 11.0214 5.34813 11.0359C5.34813 12.6897 6.5253 14.068 8.08723 14.3821C7.80079 14.4598 7.49907 14.5017 7.18763 14.5017C6.96739 14.5017 6.75385 14.4808 6.54543 14.4406C6.98016 15.7969 8.23933 16.7845 9.73303 16.8118C8.56462 17.7276 7.09479 18.273 5.49503 18.273C5.21974 18.273 4.94712 18.258 4.67993 18.2262C6.19119 19.1954 7.98468 19.7602 9.91243 19.7602C16.1922 19.7602 19.626 14.5581 19.626 10.0466C19.626 9.89868 19.6233 9.74993 19.6169 9.60333C20.2837 9.123 20.8626 8.52133 21.3199 7.83664C20.7082 8.10855 20.0503 8.29275 19.3595 8.37483C20.0648 7.9526 20.606 7.28379 20.861 6.48593C20.2013 6.87743 19.4706 7.16198 18.6926 7.31533C18.0701 6.65192 17.1825 6.23764 16.2005 6.23764C16.1711 6.23764 16.1414 6.23689 16.1121 6.23764Z"
                                        className="fill-white dark:fill-dark-grey-3"
                                    />
                                </svg>
                            </a>
                        </div>
                        <div className="flex items-center h-[2.375rem] border-l border-slate-200 ml-[1.875rem] pl-[1.875rem] dark:border-dark-grey">
                            <ThemeToggle panelClassName="" />
                        </div>
                    </div>
                    <SearchButton
                        type={"mobile"}
                        className="ml-auto text-slate-500 -my-1 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300 lg:invisible"
                    />
                    <NavPopover className="ml-[1.3781rem] -my-1" display="lg:hidden" />
                </div>
            </div>
        </>
    );
}
