import { forwardRef, useEffect, useState } from "react";
import clsx from "clsx";
import Arrow from "./Arrow";

export const AccordionSection = forwardRef(
    ({ depth, isActiveChild, title, subElements, renderElement }, ref) => {
        const [showMenu, setShowMenu] = useState(false);

        useEffect(() => {
            if (isActiveChild) {
                setShowMenu(true);
            }
        }, [isActiveChild]);

        return (
            <>
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
                                "transition-all transform duration-300 " +
                                (showMenu ? "rotate-90" : "")
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
                {subElements.length ? (
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
                        {subElements.map((navElement, index) =>
                            renderElement(navElement, index, ref, depth + 1)
                        )}
                    </ul>
                ) : null}
            </>
        );
    }
);
