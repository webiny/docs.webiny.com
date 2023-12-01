const slugify = require("@sindresorhus/slugify");
const { addImport, addExport, escape } = require("./utils");

const anchorRegex = /\{\#([a-z0-9\-]+)\}/i;

function getAnchor(value) {
    const match = value.toLowerCase().match(anchorRegex);
    if (match) {
        return match[1];
    }

    return null;
}

function removeAnchor(value) {
    return value.replace(anchorRegex, "").trim();
}

module.exports.withTableOfContents = () => {
    return (tree, file) => {
        const component = addImport(tree, "@/components/Heading", "Heading");
        const contents = [];

        for (let nodeIndex = 0; nodeIndex < tree.children.length; nodeIndex++) {
            let node = tree.children[nodeIndex];

            if (node.type === "heading" && [2, 3, 4].includes(node.depth)) {
                let level = node.depth;
                let title = node.children
                    .map(children => {
                        if (children.type === "link") {
                            return children.children[0].value;
                        } else {
                            return children.value;
                        }
                    })
                    .join("");

                const customAnchor = getAnchor(title);
                title = escape(removeAnchor(title));
                let slug = customAnchor ?? slugify(title);

                let allOtherSlugs = contents.flatMap(entry => [
                    entry.slug,
                    ...entry.children.map(({ slug }) => slug)
                ]);
                let slugIndex = 1;
                while (allOtherSlugs.indexOf(slug) > -1) {
                    slug = `${slug}-${slugIndex}`;
                    slugIndex++;
                }

                node.type = "jsx";

                let props = {
                    level,
                    id: slug
                };

                if (tree.children[nodeIndex + 1]) {
                    let { children, position, value, ...element } = tree.children[nodeIndex + 1];
                    props.nextElement = element;
                }

                if (
                    node.children[0].type === "jsx" &&
                    /^\s*<Heading[\s>]/.test(node.children[0].value)
                ) {
                    let value = node.children[0].value.replace(
                        /toc="((?:[^"\\]|\\.)*)"/,
                        (_, toc) => {
                            title = toc;
                            slug = slugify(title);
                            props.id = slug;
                            return "";
                        }
                    );
                    node.value =
                        value.replace(
                            /^\s*<Heading([\s>])/,
                            `<Heading ${stringifyProps(props)}$1`
                        ) +
                        node.children
                            .slice(1)
                            .map(n => n.value)
                            .join("");
                } else {
                    node.value = `<${component} ${stringifyProps(props)}>${node.children
                        .map(children => {
                            if (children.type === "link") {
                                const linkProps = {
                                    href: children.url
                                };
                                return `<a ${stringifyProps(linkProps)}>${removeAnchor(
                                    children.children[0].value
                                )}</a>`;
                            }
                            if (children.type === "inlineCode") {
                                return `<code>${children.value}</code>`;
                            } else {
                                return escape(removeAnchor(children.value));
                            }
                        })
                        .join("")}</${component}>`;
                }

                if (level === 2) {
                    contents.push({ title, slug, children: [] });
                } else if (level === 3) {
                    contents[contents.length - 1].children.push({ title, slug, children: [] });
                } else {
                    contents[contents.length - 1].children[
                        contents[contents.length - 1].children.length - 1
                    ].children.push({ title, slug });
                }
            } else if (
                node.type === "jsx" &&
                /^\s*<Heading[\s>]/.test(node.value) &&
                !/^\s*<Heading[^>]*\sid=/.test(node.value)
            ) {
                const title = node.value
                    .replace(/<[^>]+>/g, "")
                    .replace(/\{(["'])((?:(?=(\\?))\3.)*?)\1\}/g, "$2");
                node.value = node.value.replace(
                    /^\s*<Heading([\s>])/,
                    `<Heading id="${slugify(title)}"$1`
                );
            }

            const endOfLoop = node;
        }

        addExport(tree, "tableOfContents", contents);
    };
};

function stringifyProps(props) {
    return Object.entries(props)
        .map(([key, value]) => `${key}={${JSON.stringify(value)}}`)
        .join(" ");
}
