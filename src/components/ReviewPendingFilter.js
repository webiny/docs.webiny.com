import React, { useEffect, useRef, useState } from "react";

const MARKER = "REVIEW-PENDING";
const ALL = "";

// Dev-only filter for generated changelogs. The `{/* REVIEW-PENDING @author ... */}` markers
// render as plain text on the page, so this reads the authors from the DOM and hides every
// entry (an `h3` plus everything up to the next heading) that the chosen author doesn't own.
const findContainer = el => {
    let node = el.parentElement;
    while (node && ![...node.children].some(child => child.tagName === "H3")) {
        node = node.parentElement;
    }
    return node;
};

const collectEntries = container => {
    const entries = [];
    let current = null;

    for (const child of container.children) {
        if (child.tagName === "H2") {
            current = null;
            entries.push({ section: child, nodes: [], authors: [] });
            continue;
        }

        if (child.tagName === "H3") {
            current = { heading: child, nodes: [child], authors: [] };
            entries.push(current);
            continue;
        }

        if (!current) {
            continue;
        }

        current.nodes.push(child);
        const text = child.textContent || "";
        if (text.includes(MARKER)) {
            current.authors.push(...[...text.matchAll(/@([\w-]+)/g)].map(match => match[1]));
        }
    }

    return entries;
};

export const ReviewPendingFilter = () => {
    const ref = useRef(null);
    const [entries, setEntries] = useState([]);
    const [author, setAuthor] = useState(ALL);
    const [pendingOnly, setPendingOnly] = useState(false);

    useEffect(() => {
        const container = ref.current && findContainer(ref.current);
        if (container) {
            setEntries(collectEntries(container));
        }
    }, []);

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
                (!pendingOnly || entry.authors.length > 0);
            sectionVisible = sectionVisible || visible;
            entry.nodes.forEach(node => {
                node.style.display = visible ? "" : "none";
            });
        }
        closeSection();
    }, [entries, author, pendingOnly]);

    const counts = entries.reduce((acc, entry) => {
        new Set(entry.authors).forEach(name => {
            acc[name] = (acc[name] || 0) + 1;
        });
        return acc;
    }, {});
    const pendingCount = entries.filter(entry => entry.authors.length > 0).length;
    const authors = Object.keys(counts).sort((a, b) => counts[b] - counts[a] || a.localeCompare(b));

    return (
        <div
            ref={ref}
            className="my-6 flex items-center gap-3 rounded-lg border border-dashed border-orange px-4 py-3 text-sm"
        >
            <label htmlFor="review-pending-filter" className="font-semibold">
                Review pending (dev only)
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
                        {name} ({counts[name]})
                    </option>
                ))}
            </select>
            <label className="flex items-center gap-2">
                <input
                    type="checkbox"
                    checked={pendingOnly}
                    onChange={e => setPendingOnly(e.target.checked)}
                />
                Pending only ({pendingCount})
            </label>
        </div>
    );
};
