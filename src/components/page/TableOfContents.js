import { createContext, Fragment, useCallback, useEffect, useState, useContext } from "react";
import clsx from "clsx";
import { scroll } from "@/css/scroll.module.css";

const TableOfContentsContext = createContext();

export const TableOfContentsProvider = ({ tableOfContents, children }) => {
    const [currentSection, setCurrentSection] = useState(tableOfContents[0]?.slug);
    const [headings, setHeadings] = useState([]);

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

    const context = {
        tableOfContents,
        currentSection,
        setCurrentSection(slug) {
            // Delay the execution, because `scroll` event will also set what it thinks is the `currentSection`.
            setTimeout(() => setCurrentSection(slug), 20);
        },
        registerHeading,
        unregisterHeading
    };

    return (
        <TableOfContentsContext.Provider value={context}>
            {children}
        </TableOfContentsContext.Provider>
    );
};

export function TableOfContents() {
    const { tableOfContents, currentSection, setCurrentSection } = useTableOfContents();

    function isActive(section) {
        if (section.slug === currentSection) {
            return true;
        }
        if (!section.children) {
            return false;
        }
        return section.children.findIndex(isActive) > -1;
    }

    const setActiveHeading = slug => {
        setCurrentSection(slug);
    };

    let pageHasSubsections = section => section.children.length > 0;

    return (
        <div
            className={`fixed z-20 top-[4.15rem] bottom-0 right-[max(0px,calc(50%-48.5rem))] 3xl:right-[max(0px,calc(50%-50rem))] w-[19.5rem] 3xl:w-[22rem] pl-[4.3125rem] pr-[1.8125rem] overflow-y-auto hidden xl:block ${scroll}`}
        >
            <div className="border-l-2 border-orange pl-5 pt-[0.3125rem] pb-2.5 mt-[1.725rem]">
                <ul className="text-nav-link not-prose font-roboto">
                    {tableOfContents.map((section, index) => (
                        <Fragment key={section.slug}>
                            <li>
                                <a
                                    onClick={() => setActiveHeading(section.slug)}
                                    href={`#${section.slug}`}
                                    className={`block font-semibold ${index > 0 ? "mt-5" : ""} ${
                                        isActive(section)
                                            ? "text-orange"
                                            : "text-dark-blue dark:text-white"
                                    }`}
                                    dangerouslySetInnerHTML={{ __html: section.title }}
                                />
                            </li>
                            {section.children.map(subsection => (
                                <Fragment key={subsection.slug}>
                                    <li className="ml-2.5 mt-5">
                                        <a
                                            onClick={() => setActiveHeading(subsection.slug)}
                                            href={`#${subsection.slug}`}
                                            className={clsx(
                                                "",
                                                isActive(subsection) &&
                                                    section.slug !== subsection.slug
                                                    ? "text-orange"
                                                    : "text-[#798099] dark:text-light-grey",
                                                pageHasSubsections(subsection)
                                                    ? "font-bold"
                                                    : "font-normal"
                                            )}
                                            dangerouslySetInnerHTML={{ __html: subsection.title }}
                                        />
                                    </li>
                                    {subsection?.children.map(item => (
                                        <li className="ml-5 mt-5" key={item.slug}>
                                            <a
                                                onClick={() => setActiveHeading(item.slug)}
                                                href={`#${item.slug}`}
                                                className={
                                                    isActive(item)
                                                        ? "text-orange"
                                                        : "text-[#798099] dark:text-light-grey"
                                                }
                                                dangerouslySetInnerHTML={{ __html: item.title }}
                                            />
                                        </li>
                                    ))}
                                </Fragment>
                            ))}
                        </Fragment>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export function useTableOfContents() {
    return useContext(TableOfContentsContext);
}
