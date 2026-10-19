import React, { useEffect, useRef, useState } from "react";

const MARKER = "REVIEW-PENDING";
const ALL = "";

// Dev-only review panel for generated changelogs: entry counts per author, plus a filter that
// hides every entry (an `h3` plus everything up to the next heading) the chosen author doesn't
// own. Authors come from the PR links in each heading, looked up in the `changelog.authors.json`
// that scripts/generate-changelog.ts writes next to the changelog. The
// `{/* REVIEW-PENDING @author ... */}` markers render as plain text on the page, which is how
// pending entries are told apart.
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

const isVisible = (entry, author, pendingOnly) =>
    (author === ALL || entry.authors.includes(author)) && (!pendingOnly || entry.pending);

const Stat = ({ label, value }) => (
    <div>
        <div className="text-xl font-semibold">{value}</div>
        <div className="text-xs uppercase tracking-wide text-light-grey-2">{label}</div>
    </div>
);

export const ChangelogReviewPanel = ({ version }) => {
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

            const visible = isVisible(entry, author, pendingOnly);
            sectionVisible = sectionVisible || visible;
            entry.nodes.forEach(node => {
                node.style.display = visible ? "" : "none";
            });
        }
        closeSection();
    }, [entries, author, pendingOnly]);

    const items = entries.filter(entry => entry.heading);
    const pendingCount = items.filter(entry => entry.pending).length;
    const shownCount = items.filter(entry => isVisible(entry, author, pendingOnly)).length;
    const authors = [...new Set(items.flatMap(entry => entry.authors))]
        .map(name => {
            const own = items.filter(entry => entry.authors.includes(name));
            return { name, total: own.length, pending: own.filter(entry => entry.pending).length };
        })
        .sort((a, b) => b.total - a.total || a.name.localeCompare(b.name));

    return (
        <div
            ref={ref}
            className="my-6 rounded-lg border border-neutral-200 px-4 py-3 text-sm dark:border-dark-grey"
        >
            <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-orange">
                Changelog review (dev only)
            </div>
            <div className="flex flex-wrap gap-8">
                <Stat label="Entries" value={items.length} />
                <Stat label="Pending" value={pendingCount} />
                <Stat label="Confirmed" value={items.length - pendingCount} />
                <Stat label="Shown" value={shownCount} />
            </div>
            <table className="my-3 text-left">
                <thead>
                    <tr className="text-xs uppercase tracking-wide text-light-grey-2">
                        <th className="pr-6 font-normal">Author</th>
                        <th className="pr-6 font-normal">Entries</th>
                        <th className="font-normal">Pending</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map(row => (
                        <tr key={row.name}>
                            <td className="pr-6">{row.name}</td>
                            <td className="pr-6">{row.total}</td>
                            <td>{row.pending}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex items-center gap-3">
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
                    {[...authors]
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map(row => (
                            <option key={row.name} value={row.name}>
                                {row.name}
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
        </div>
    );
};
