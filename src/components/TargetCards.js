import Link from "next/link";
import clsx from "clsx";
import { stripBasePath } from "@/utils/stripBasePath";

/**
 * A two-up (or three-up) grid of linked cards, used when a page asks the reader to pick a path
 * rather than read straight through. Cards stack on small screens and sit side by side from `lg`.
 */
export function TargetCards({ children }) {
    return <div className="not-prose grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">{children}</div>;
}

/**
 * A single card. The whole card is one link, so there is no separate call to action to miss.
 * `tag` renders an optional pill next to the title (for example "Alpha") and `note` a de-emphasised
 * qualifier under the body.
 *
 * Keep the body a single paragraph. A blank line followed by indented text inside JSX is parsed as
 * an indented code block by MDX and ends up rendered as a code editor. Use `note` for a second line.
 */
export function TargetCard({ title, link, tag, note, children }) {
    return (
        <Link
            href={stripBasePath(link)}
            className={clsx(
                "group flex flex-col no-underline rounded-[0.625rem] p-6",
                "border border-solid border-light-grey-5 dark:border-dark-grey-3",
                "bg-white dark:bg-dark-grey-2",
                "hover:border-orange dark:hover:border-orange transition-colors duration-200"
            )}
        >
            <div className="flex items-center gap-2 mb-2">
                <span className="font-bold text-base text-dark-purple dark:text-white group-hover:text-orange transition-colors duration-200">
                    {title}
                </span>
                {tag ? (
                    <span className="rounded-md text-[10px] font-bold uppercase text-orange bg-light-orange dark:bg-dark-orange px-2 py-1">
                        {tag}
                    </span>
                ) : null}
            </div>
            <div className="text-sm leading-6 text-dark-grey dark:text-light-grey-2">
                {children}
            </div>
            {note ? (
                <div className="mt-2 text-sm leading-6 text-light-grey-4 dark:text-light-grey">
                    {note}
                </div>
            ) : null}
        </Link>
    );
}
