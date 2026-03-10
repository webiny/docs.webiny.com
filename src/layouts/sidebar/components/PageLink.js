import { forwardRef } from "react";
import Link from "next/link";
import clsx from "clsx";

export const PageLink = forwardRef(({ title, link, isActive, depth = 0 }, ref) => {
    return (
        <li
            ref={isActive ? ref : null}
            className={clsx(
                "link-element grid content-center block ml-[-1px] cursor-pointer border-slate-100 dark:border-transparent",
                {
                    "--active border-l-[1px] text-orange border-l-orange font-bold dark:border-orange/50":
                        isActive,
                    "hover:text-dark-purple": !isActive,
                    "font-semibold text-nav-directory root-element h-[30px] mt-[5px] mb-[8px]":
                        depth === 0,
                    "my-[7px] text-nav-link border-l-[1px] hover:border-l-[1px] hover:border-orange/50 pl-[15px] my-[15px]":
                        depth > 0,
                    "text-dark-blue dark:text-white": depth === 0 && !isActive,
                    "text-dark-blue dark:text-light-grey-2": depth > 0 && !isActive
                }
            )}
        >
            <Link href={link} className="leading-6">
                {title}
            </Link>
        </li>
    );
});
