import { forwardRef } from "react";
import clsx from "clsx";

export const SectionLabel = forwardRef(({ title, subElements = [], isActiveChild, depth = 0, renderElement }, ref) => {
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
                {[...subElements].sort().map((navElement, index) =>
                    renderElement(navElement, index, ref, depth + 1)
                )}
            </ul>
        </>
    );
});
