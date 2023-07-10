function addImport(tree, mod, name) {
    tree.children.unshift({
        type: "import",
        value: `import { ${name} as _${name} } from '${mod}'`
    });
    return `_${name}`;
}

function addImportImage(tree, mod, name) {
    tree.children.unshift({
        type: "import",
        value: `import _${name} from '${mod}'`
    });
    return `_${name}`;
}

function addDefaultImport(tree, mod, name) {
    tree.children.unshift({
        type: "import",
        value: `import _${name} from '${mod}'`
    });
    return `_${name}`;
}

function addExport(tree, name, value) {
    tree.children.push({
        type: "export",
        value: `export const ${name} = ${JSON.stringify(value)}`
    });
}

module.exports = {
    addDefaultImport,
    addExport,
    addImport,
    addImportImage
};
