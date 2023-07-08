const { highlightCode, addImport } = require("./utils");

const highlightNode = node => {
    node.type = "html";

    node.value = [
        `<pre class="language-${node.lang}">`,
        `<code class="language-${node.lang}">`,
        highlightCode(node.value, node.lang),
        "</code>",
        "</pre>"
    ]
        .filter(Boolean)
        .join("");

    return node;
};

module.exports.withSyntaxHighlighting = () => {
    return tree => {
        let preTree = { children: [] };
        let componentName;

        tree.children = tree.children.flatMap(node => {
            if (node.type === "list" && node.ordered) {
                node.children.map(child =>
                    child.children.map(innerChild => {
                        if (innerChild.type === "code") {
                            highlightNode(innerChild);
                        }
                        return innerChild;
                    })
                );
                return node;
            }
            if (node.type !== "code") return node;
            if (node.lang === null) return node;

            node = highlightNode(node);

            if (node.meta) {
                if (!componentName) {
                    componentName = addImport(preTree, "@/components/Editor", "Editor");
                }
                return [
                    { type: "jsx", value: `<${componentName} filename="${node.meta}">` },
                    node,
                    { type: "jsx", value: `</${componentName}>` }
                ];
            }

            return node;
        });
        tree.children = [...preTree.children, ...tree.children];
    };
};
