const visit = require("unist-util-visit");

module.exports.withSyntaxHighlighting = () => {
    return tree => {
        visit(tree, "code", (node, _, parent) => {
            const index = parent.children.findIndex(child => child === node);

            const { lang, meta, value } = node;

            const editor = [
                {
                    type: "jsx",
                    value: `<Editor title="${meta || ""}" lang="${lang}">`
                },
                {
                    type: "raw",
                    value
                },
                { type: "jsx", value: `</Editor>` }
            ];

            parent.children.splice(index, 1, ...editor);

            // Do not traverse `node`, continue at the node *now* at `index`.
            return [visit.SKIP, index];
        });
    };
};
