const visit = require("unist-util-visit");
const { addImportImage } = require("./utils");

function getImageFileName(url) {
    const pathParts = url.split("/");
    const fileName = pathParts[pathParts.length - 1];

    return fileName.split(".")[0];
}

function processImages(preTree, node, counter) {
    if (node.type === "image") {
        const localImage = !node.url.startsWith("http");

        const src = localImage
            ? addImportImage(preTree, node.url, "Image" + counter.counter++)
            : `"${node.url}"`;

        node.type = "jsx";
        node.value = `<Image src={${src}} alt={"${node.alt || getImageFileName(src)}"}/>`;
    } else if (node.children) {
        node.children.map(nodeChild => processImages(preTree, nodeChild, counter));
    }

    return node;
}

module.exports.withImages = () => {
    return tree => {
        const preTree = { children: [] };
        const counter = { counter: 1 };

        tree.children = tree.children.map(node => {
            return processImages(preTree, node, counter);
        });

        tree.children = [...preTree.children, ...tree.children];
    };
};

const hasImages = node => {
    return node.children.some(child => child.type === "jsx");
};

module.exports.unwrapImages = () => {
    return tree => {
        visit(tree, "paragraph", (node, index, parent) => {
            if (parent && typeof index === "number" && hasImages(node)) {
                parent.children.splice(index, 1, ...node.children);
                return [visit.SKIP, index];
            }
        });
    };
};
