import React, { useEffect, useRef, useState } from "react";

const MARKER = "REVIEW-PENDING";
const ALL = "";

// Dev-only filter for generated changelogs. It hides every entry (an `h3` plus everything up
// to the next heading) that the chosen author doesn't own. Authors come from the PR links in
// each heading, looked up in the `changelog.authors.json` that scripts/generate-changelog.ts
// writes next to the changelog. The `{/* REVIEW-PENDING @author ... */}` markers render as
// plain text on the page, which is how pending entries are told apart.
const loadAuthorsByPR = version => {
    if (process.env.NODE_ENV === "development") {
        const context = require.context(
            "../../docs/release-notes",
            true,
            /changelog\.authors\.json$/
        );
        const key = `./${version}/changelog.authors.json`;
        if (context.keys().includes(key)) {
            return context(key);
        }
    }
    return {};
};

const findContainer = el => {
    let node = el.parentElement;
    while (node && ![...node.children].some(child => child.tagName === "H3")) {
        node = node.parentElement;
    }
    return node;
};

const collectEntries = (container, authorsByPR) => {
    const entries = [];
    let current = null;

    for (const child of container.children) {
        if (child.tagName === "H2") {
            current = null;
            entries.push({ section: child, nodes: [], authors: [], pending: false });
            continue;
        }

        if (child.tagName === "H3") {
            const prNumbers = [...child.querySelectorAll('a[href*="/pull/"]')].map(
                link => link.getAttribute("href").split("/pull/")[1]
            );
            const authors = prNumbers.map(number => authorsByPR[number]).filter(Boolean);
            current = { heading: child, nodes: [child], authors, pending: false };
            entries.push(current);
            continue;
        }

        if (!current) {
            continue;
        }

        current.nodes.push(child);
        const text = child.textContent || "";
        if (text.includes(MARKER)) {
            current.pending = true;
            // Fall back to the marker's handles when the PR isn't in the authors file.
            if (current.authors.length === 0) {
                current.authors = [...text.matchAll(/@([\w-]+)/g)].map(match => match[1]);
            }
        }
    }

    return entries;
};

export const ReviewPendingFilter = ({ version }) => {
    const ref = useRef(null);
    const [entries, setEntries] = useState([]);
    const [author, setAuthor] = useState(ALL);
    const [pendingOnly, setPendingOnly] = useState(false);

    useEffect(() => {
        const container = ref.current && findContainer(ref.current);
        if (container) {
            setEntries(collectEntries(container, loadAuthorsByPR(version)));
        }
    }, [version]);

    useEffect(() => {
        let section = null;
        let sectionVisible = false;

        const closeSection = () => {
            if (section) {
                section.style.display = sectionVisible ? "" : "none";
            }
        };

        for (const entry of entries) {
            if (entry.section) {
                closeSection();
                section = entry.section;
                sectionVisible = false;
                continue;
            }

            const visible =
                (author === ALL || entry.authors.includes(author)) &&
                (!pendingOnly || entry.pending);
            sectionVisible = sectionVisible || visible;
            entry.nodes.forEach(node => {
                node.style.display = visible ? "" : "none";
            });
        }
        closeSection();
    }, [entries, author, pendingOnly]);

    const authors = [...new Set(entries.flatMap(entry => entry.authors))].sort((a, b) =>
        a.localeCompare(b)
    );

    return (
        <div
            ref={ref}
            className="my-6 flex items-center gap-3 rounded-lg border border-dashed border-orange px-4 py-3 text-sm"
        >
            <label htmlFor="review-pending-filter" className="font-semibold">
                Filter by author
            </label>
            <select
                id="review-pending-filter"
                value={author}
                onChange={e => setAuthor(e.target.value)}
                className="rounded border border-light-grey bg-white px-2 py-1 dark:border-dark-grey dark:bg-dark-grey-4"
            >
                <option value={ALL}>All authors</option>
                {authors.map(name => (
                    <option key={name} value={name}>
                        {name}
                    </option>
                ))}
            </select>
            <label className="flex items-center gap-2">
                <input
                    type="checkbox"
                    checked={pendingOnly}
                    onChange={e => setPendingOnly(e.target.checked)}
                />
                Pending only
            </label>
        </div>
    );
};
