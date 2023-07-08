const { addImport } = require("./utils");

const highlightNode = node => {
    node.type = "raw";

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

            if (node.type !== "code" || node.lang === null) {
                return node;
            }

            node = highlightNode(node);

            if (!componentName) {
                componentName = addImport(preTree, "@/components/Editor", "Editor");
            }
            return [
                {
                    type: "jsx",
                    value: `<${componentName} filename="${node.meta || ""}" lang="${node.lang}">`
                },
                node,
                { type: "jsx", value: `</${componentName}>` }
            ];
        });
        tree.children = [...preTree.children, ...tree.children];
    };
};
