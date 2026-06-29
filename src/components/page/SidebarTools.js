import { useEffect, useState } from "react";
import clsx from "clsx";
import { InputFooter } from "./InputFooter";

const GITHUB_REPO = "https://github.com/webiny/webiny-js";

const GithubIcon = (
    <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className="fill-dark-blue dark:fill-white"
        aria-hidden="true"
    >
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
);

const StarIcon = (
    <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
);

function formatStars(count) {
    if (count >= 1000) {
        return `${(count / 1000).toFixed(1).replace(/\.0$/, "")}k`;
    }
    return `${count}`;
}

function StarOnGithub() {
    const [stars, setStars] = useState(null);

    useEffect(() => {
        let active = true;
        fetch("https://api.github.com/repos/webiny/webiny-js")
            .then(res => (res.ok ? res.json() : null))
            .then(data => {
                if (active && data && typeof data.stargazers_count === "number") {
                    setStars(data.stargazers_count);
                }
            })
            .catch(() => {});
        return () => {
            active = false;
        };
    }, []);

    return (
        <div>
            <p className="text-sidebar-right-title font-semibold text-dark-blue dark:text-white mb-2.5">
                Star on GitHub
            </p>
            <a
                href={GITHUB_REPO}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-stretch overflow-hidden rounded-md border border-neutral-200 dark:border-dark-grey text-nav-link font-roboto text-dark-blue dark:text-white transition-colors duration-300 hover:border-[#fa592885]"
            >
                <span className="flex items-center gap-x-1.5 px-2.5 py-1.5 group-hover:text-orange">
                    {StarIcon}
                    <span className="font-semibold">Star</span>
                </span>
                <span className="flex items-center px-2.5 py-1.5 border-l border-neutral-200 dark:border-dark-grey font-semibold">
                    {stars === null ? GithubIcon : formatStars(stars)}
                </span>
            </a>
        </div>
    );
}

const links = [
    {
        label: "Questions?",
        linkText: "Find us on Slack.",
        href: "https://www.webiny.com/slack"
    },
    {
        label: "Found a bug on the page?",
        linkText: "Submit an issue or a PR.",
        href: "https://github.com/webiny/docs.webiny.com"
    },
    {
        label: "Check out our",
        linkText: "roadmap.",
        href: "https://www.webiny.com/roadmap"
    }
];

export function SidebarTools({ divider = true }) {
    return (
        <div
            className={clsx(
                "flex flex-col gap-y-8",
                divider
                    ? "mt-8 pt-6 border-t border-neutral-200 dark:border-dark-grey"
                    : "mt-[1.725rem]"
            )}
        >
            <StarOnGithub />

            <ul className="flex flex-col gap-y-2.5 text-nav-link leading-5 font-roboto text-dark-blue dark:text-white">
                {links.map(item => (
                    <li key={item.href}>
                        {item.label}{" "}
                        <a
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="font-source-sans-pro text-orange underline hover:decoration-2"
                        >
                            {item.linkText}
                        </a>
                    </li>
                ))}
            </ul>

            <div>
                <p className="text-sidebar-right-title font-semibold text-dark-blue dark:text-white mb-2.5">
                    Join our developer newsletter
                </p>
                <InputFooter className="mb-[0.3125rem]" />
                <p className="text-[0.75rem] leading-[0.875rem] text-light-grey-4 dark:text-light-grey-5">
                    You can unsubscribe at any time.
                </p>
            </div>
        </div>
    );
}
