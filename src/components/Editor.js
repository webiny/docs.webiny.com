import React, { useMemo } from "react";
import clsx from "clsx";
import { highlightCode } from "./codeHighlight";
import { CopyButton } from "@/components/CopyButton";

function TabBar({ primary, secondary = [], showTabMarkers = true, children }) {
    return (
        <div className="flex text-slate-400 text-nav-directory">
            <div className="flex-none text-code-filename px-4 lg:px-[2.375rem] py-[0.625rem] lg:py-4 flex items-center font-source-sans-pro">
                {primary.name}
                {showTabMarkers &&
                    (primary.saved ? (
                        <svg
                            viewBox="0 0 4 4"
                            className="ml-2.5 flex-none w-1 h-1 text-slate-500 overflow-visible"
                        >
                            <path
                                d="M-1 -1L5 5M5 -1L-1 5"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                            />
                        </svg>
                    ) : (
                        <div className="ml-2.5 flex-none w-1 h-1 rounded-full bg-current" />
                    ))}
            </div>
            <div className={clsx("flex-auto flex items-center bg-code-bar")}>
                {secondary.map(({ name, open = true, className }) => (
                    <div
                        key={name}
                        className={clsx("px-4 py-1 border-r border-slate-200/5", className, {
                            italic: !open
                        })}
                    >
                        {name}
                    </div>
                ))}
                {children && (
                    <div className="flex-auto flex items-center justify-end px-4 space-x-4">
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
}

const languageGuard = ["null", "undefined", undefined, null];

const HTML_ESCAPES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };

function escapeHtml(text) {
    return text.replace(/[&<>"']/g, char => HTML_ESCAPES[char]);
}

// MDX passes the snippet as a single template-literal string, but be lenient in
// case a code block ever ends up split across multiple children.
function toText(children) {
    if (typeof children === "string") {
        return children;
    }

    return React.Children.toArray(children)
        .filter(child => typeof child === "string" || typeof child === "number")
        .join("");
}

export function Editor({ children, ...props }) {
    const lang = languageGuard.includes(props.lang) ? "shell" : props.lang;

    const isDiff = lang.startsWith("diff-");
    const text = toText(children);

    // Highlighting happens during render (not in an effect) so the snippet is
    // part of the server-rendered HTML. Without it, clients that don't execute
    // JavaScript - crawlers, "reader" proxies, RSS/AI fetchers - receive an
    // empty `<code>` element and never see any of our code examples.
    const code = useMemo(() => {
        try {
            return highlightCode(text, lang);
        } catch (err) {
            console.error(`Failed to highlight a "${lang}" code block.`, err);
            // Unstyled code still beats no code at all.
            return escapeHtml(text);
        }
    }, [text, lang]);

    return (
        <section className="code-block mt-[1.875rem] lg:mt-[2rem] mb-[1.875rem] lg:mb-[2rem] first:mt-0 last:mb-0 bg-code-tab rounded-[0.625rem] shadow-lg overflow-hidden dark:ring-1 dark:ring-white/10 dark:ring-inset">
            {props.title ? <TabBar primary={{ name: props.title }} showTabMarkers={false} /> : null}
            <div className="children:my-0 children:!shadow-none children:bg-transparent children:rounded-none relative">
                {!isDiff && <CopyButton text={text} />}
                <pre className={`language-${lang}`} tabIndex={0}>
                    <code
                        className={`language-${lang}`}
                        dangerouslySetInnerHTML={{ __html: code }}
                    />
                </pre>
            </div>
        </section>
    );
}
