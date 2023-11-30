const visit = require("unist-util-visit");

module.exports.removeExports = () => {
    return tree => {
        visit(tree, "export", node => {
            if (!node.default) {
                node.value = node.value.replace(" = ", " /* remove */ = ");
            }
        });
    };
};
