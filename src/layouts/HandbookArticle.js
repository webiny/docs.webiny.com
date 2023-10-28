import { useState, useEffect, createContext, Fragment, useCallback } from "react";
import Link from "next/link";
import { MDXProvider } from "@mdx-js/react";
import clsx from "clsx";
import { mdxComponents } from "@/components/mdxComponents";
import { usePage } from "@/hooks/usePage";
import { usePrevNext } from "@/hooks/usePrevNext";
import { PageHeader } from "@/components/page/PageHeader";
import { getParentNav } from "@/utils/getParentNav";
import { Footer } from "@/components/page/Footer";
import { scroll } from "./SidebarLayout.module.css";

export const ContentsContext = createContext();

function TableOfContents({ tableOfContents = [], currentSection }) {
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

export function HandbookArticle({ children }) {
    const { page } = usePage();

    const parents = getParentNav(page.navigation);

    const { currentSection, registerHeading, unregisterHeading } = useTableOfContents(
        page.tableOfContents
    );
    let { prev, next } = usePrevNext();

    return (
        <div className="container max-w-3xl mx-auto mt-[5.25rem] md:mt-[5.875rem] mb-[1.875rem] md:mb-[3.75rem] xl:pt-10 xl:max-w-[100%] xl:mr-0 xl:w-[calc(100%-245px)] xl:ml-0 xl:px-10 xl:border 2xl:max-w-[53.6875rem] border-neutral-200 dark:border-dark-grey rounded-[0.625rem]">
            <article className={"DocSearch-content prose md:prose-md prose-slate"}>
                <PageHeader title={page.title} description={page.description} parents={parents} />
                <div className={"relative z-20 mt-8 dark:prose-dark"}>
                    <ContentsContext.Provider value={{ registerHeading, unregisterHeading }}>
                        <MDXProvider components={mdxComponents}>{children}</MDXProvider>
                    </ContentsContext.Provider>
                </div>
            </article>

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
                {page.tableOfContents.length > 0 && (
                    <div className="border-l-2 border-orange pl-5 pt-[0.3125rem] pb-2.5 mt-[1.725rem]">
                        <TableOfContents
                            tableOfContents={page.tableOfContents}
                            currentSection={currentSection}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
