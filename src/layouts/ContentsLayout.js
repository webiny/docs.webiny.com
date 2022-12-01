import { mdxComponents } from "@/components/mdxComponents";
import { usePage } from "@/hooks/usePage";
import { VersionSelector } from "@/components/page/VersionSelector";
import { ViewLatestVersion } from "@/components/page/ViewLatestVersion";
import { useState, useEffect, createContext, Fragment, useCallback, useContext } from "react";
import { usePrevNext } from "@/hooks/usePrevNext";
import Link from "next/link";
import { MDXProvider } from "@mdx-js/react";
import { SidebarContext } from "@/layouts/SidebarLayout";
import { PageHeader } from "@/components/page/PageHeader";
import { getParentNav } from "@/utils/getParentNav";
import { Footer } from "@/components/page/Footer";

import clsx from "clsx";

import { scroll } from "./SidebarLayout.module.css";

export const ContentsContext = createContext();

function TableOfContents({ tableOfContents, currentSection }) {
    function isActive(section) {
        if (section.slug === currentSection) {
            return true;
        }
        if (!section.children) {
            return false;
        }
        return section.children.findIndex(isActive) > -1;
    }

    let pageHasSubsections = section => section.children.length > 0;

    return (
        <ul className="text-nav-link not-prose font-roboto">
            {tableOfContents.map((section, index) => (
                <Fragment key={section.slug}>
                    <li>
                        <a
                            href={`#${section.slug}`}
                            className={`block font-semibold ${index > 0 ? "mt-5" : ""} ${
                                isActive(section) ? "text-orange" : "text-dark-blue dark:text-white"
                            }`}
                        >
                            {section.title}
                        </a>
                    </li>
                    {section.children.map(subsection => (
                        <Fragment key={subsection.slug}>
                            <li className="ml-2.5 mt-5">
                                <a
                                    href={`#${subsection.slug}`}
                                    className={clsx(
                                        "",
                                        isActive(subsection) && section.slug !== subsection.slug
                                            ? "text-orange"
                                            : "text-[#798099] dark:text-light-grey",
                                        pageHasSubsections(subsection) ? "font-bold" : "font-normal"
                                    )}
                                >
                                    {subsection.title}
                                </a>
                            </li>
                            {subsection?.children.map(item => (
                                <li className="ml-5 mt-5" key={item.slug}>
                                    <a
                                        href={`#${item.slug}`}
                                        className={
                                            isActive(item)
                                                ? "text-orange"
                                                : "text-[#798099] dark:text-light-grey"
                                        }
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </Fragment>
                    ))}
                </Fragment>
            ))}
        </ul>
    );
}

const LikeIcon = (
    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M15.1514 6.09082H11.458V2.28925C11.458 1.57717 10.8999 1 10.2113 1C9.83282 1 9.47406 1.17818 9.23776 1.48363L4.68896 7.36353H4.68958H4.68896V13.7271L6.53507 14.9998H14.2105C14.7595 14.9998 15.2419 14.623 15.3927 14.0764L16.9249 8.52424C17.2609 7.30498 16.3766 6.09082 15.1514 6.09082Z"
            className="stroke-dark-blue dark:stroke-white"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M4.68903 6.09123H0.996826V15.0002H4.68903V6.09123Z"
            className="stroke-dark-blue dark:stroke-white"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M2.84315 13.0911C3.18301 13.0911 3.45852 12.8062 3.45852 12.4547C3.45852 12.1033 3.18301 11.8184 2.84315 11.8184C2.50329 11.8184 2.22778 12.1033 2.22778 12.4547C2.22778 12.8062 2.50329 13.0911 2.84315 13.0911Z"
            className="fill-dark-blue dark:fill-white"
        />
    </svg>
);

const DislikeIcon = (
    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M2.55644 9.90909H6.24996V13.7107C6.24996 14.4228 6.80811 15 7.49673 15C7.87519 15 8.23395 14.8218 8.47026 14.5164L13.0192 8.63636H13.0185H13.0192V2.27273L11.173 1H3.49736C2.94906 1 2.4666 1.37673 2.31583 1.92336L0.783527 7.47564C0.446913 8.69491 1.33122 9.90909 2.55644 9.90909Z"
            className="stroke-dark-blue dark:stroke-white"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M13.0191 9.90909L16.7114 9.90909L16.7114 0.999997L13.0191 0.999997L13.0191 9.90909Z"
            className="stroke-dark-blue dark:stroke-white"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M14.8654 4.18198C15.2052 4.18198 15.4808 3.89707 15.4808 3.54562C15.4808 3.19417 15.2052 2.90926 14.8654 2.90926C14.5255 2.90926 14.25 3.19417 14.25 3.54562C14.25 3.89707 14.5255 4.18198 14.8654 4.18198Z"
            className="fill-dark-blue dark:fill-white"
        />
    </svg>
);

// function WasThisArticleHelpful({ className }) {
//     return (
//         <div
//             className={`mt-[3.75rem] xl:mt-[2,5625rem] mb-6 grid justify-items-center xl:justify-items-start text-dark-blue dark:text-white font-roboto ${className}`}
//         >
//             <div className="text-sidebar-right-title font-bold">Was this article helpful?</div>
//             <div className="flex mt-[1.1875rem]">
//                 <button className="h-9 w-[4.0625rem] border border-neutral-200 hover:border-orange rounded flex items-center justify-center font-semibold text-sm leading-6 mr-2.5">
//                     <div className="mr-[0.375rem]">{LikeIcon}</div>
//                     Yes
//                 </button>
//                 <button className="h-9 w-[4.0625rem] border border-neutral-200 hover:border-orange rounded flex items-center justify-center font-semibold text-sm leading-6">
//                     <div className="mr-[0.375rem]">{DislikeIcon}</div>
//                     No
//                 </button>
//             </div>
//         </div>
//     );
// }

function useTableOfContents(tableOfContents) {
    let [currentSection, setCurrentSection] = useState(tableOfContents[0]?.slug);
    let [headings, setHeadings] = useState([]);

    const registerHeading = useCallback((id, top) => {
        setHeadings(headings => [...headings.filter(h => id !== h.id), { id, top }]);
    }, []);

    const unregisterHeading = useCallback(id => {
        setHeadings(headings => headings.filter(h => id !== h.id));
    }, []);

    useEffect(() => {
        if (tableOfContents.length === 0 || headings.length === 0) return;
        function onScroll() {
            let y = window.pageYOffset;
            let windowHeight = window.innerHeight;
            let sortedHeadings = headings.concat([]).sort((a, b) => a.top - b.top);
            if (y <= 0) {
                setCurrentSection(sortedHeadings[0].id);
                return;
            }
            if (y + windowHeight >= document.body.scrollHeight) {
                setCurrentSection(sortedHeadings[sortedHeadings.length - 1].id);
                return;
            }
            const middle = y + windowHeight / 2;
            let current = sortedHeadings[0].id;
            for (let i = 0; i < sortedHeadings.length; i++) {
                if (middle >= sortedHeadings[i].top) {
                    current = sortedHeadings[i].id;
                }
            }
            setCurrentSection(current);
        }
        window.addEventListener("scroll", onScroll, {
            capture: true,
            passive: true
        });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll, true);
    }, [headings, tableOfContents]);

    return { currentSection, registerHeading, unregisterHeading };
}

export function ContentsLayout({ children, ...props }) {
    const { classes, tableOfContents } = props;
    const { title, description } = usePage();
    const toc = [
        ...(classes ? [{ title: "Quick reference", slug: "class-reference", children: [] }] : []),
        ...tableOfContents
    ];

    const parents = getParentNav(useContext(SidebarContext).nav);

    const { currentSection, registerHeading, unregisterHeading } = useTableOfContents(toc);
    let { prev, next } = usePrevNext();

    return (
        <div className="container max-w-3xl mx-auto mt-[5.25rem] md:mt-[5.875rem] mb-[1.875rem] md:mb-[3.75rem] xl:pt-10 xl:max-w-[100%] xl:mr-0 xl:w-[calc(100%-245px)] xl:ml-0 xl:px-10 xl:border 2xl:max-w-[53.6875rem] border-neutral-200 dark:border-dark-grey rounded-[0.625rem]">
            <div className={"flex lg:hidden w-full pb-5"}>
                <VersionSelector />
            </div>
            <article className={"prose md:prose-md prose-slate"}>
                <ViewLatestVersion />
                <PageHeader title={title} description={description} parents={parents} />
                <div className={"relative z-20 mt-8 dark:prose-dark"}>
                    <ContentsContext.Provider value={{ registerHeading, unregisterHeading }}>
                        <MDXProvider components={mdxComponents}>{children}</MDXProvider>
                    </ContentsContext.Provider>
                </div>
            </article>

            {/* <WasThisArticleHelpful className="xl:hidden" /> */}
            <Footer previous={prev} next={next}>
                <Link href={`https://github.com/webiny/docs.webiny.com`}>
                    <a className="hover:text-slate-900 dark:hover:text-slate-400">
                        Edit this page on GitHub
                    </a>
                </Link>
            </Footer>

            <div
                className={`fixed z-20 top-[4.15rem] bottom-0 right-[max(0px,calc(50%-48.5rem))] 3xl:right-[max(0px,calc(50%-50rem))] w-[19.5rem] 3xl:w-[22rem] pl-[4.3125rem] pr-[1.8125rem] overflow-y-auto hidden xl:block ${scroll}`}
            >
                {toc.length > 0 && (
                    <div className="border-l-2 border-orange pl-5 pt-[0.3125rem] pb-2.5 mt-[1.725rem]">
                        <TableOfContents tableOfContents={toc} currentSection={currentSection} />
                    </div>
                )}
            </div>
        </div>
    );
}
