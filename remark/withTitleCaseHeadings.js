const titleCase = require("titlecase");

module.exports.withTitleCaseHeadings = () => {
    return tree => {
        tree.children = tree.children.map(node => {
            // We only want to modify "heading" nodes
            if (node.type === "heading") {
                node.children = node.children.map(node => {
                    if (node.type === "text") {
                        return { ...node, value: titleCase(node.value.toLowerCase()) };
                    }
                    return node;
                });
            }
            return node;
        });
    };
};
