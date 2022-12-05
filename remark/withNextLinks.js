const { addDefaultImport } = require("./utils");
const { checkBrokenLink } = require("./checkBrokenLink");

function isInternalHref(href) {
    return ["/", "../", "./"].some(prefix => href.startsWith(prefix));
}

module.exports.withNextLinks = () => {
    return (tree, file) => {
        const component = addDefaultImport(tree, "next/link", "Link");

        function walk(root) {
            if (!root.children) {
                return;
            }

            let i = 0;
            while (i < root.children.length) {
                let node = root.children[i];
                if (node.type === "link" && isInternalHref(node.url)) {
                    checkBrokenLink(file, node.url);

                    root.children = [
                        ...root.children.slice(0, i),
                        { type: "jsx", value: `<${component} href="${node.url}" passHref><a>` },
                        ...node.children,
                        { type: "jsx", value: `</a></${component}>` },
                        ...root.children.slice(i + 1)
                    ];
                    i += node.children.length + 2;
                } else {
                    i += 1;
                }
                walk(node);
            }
        }
        walk(tree);
    };
};
