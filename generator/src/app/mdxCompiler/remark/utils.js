import escapeHtml from "escape-html";

export function addImport(tree, mod, name) {
    tree.children.unshift({
        type: "import",
        value: `import { ${name} as _${name} } from '${mod}'`
    });
    return `_${name}`;
}

export function addImportImage(tree, mod, name) {
    tree.children.unshift({
        type: "import",
        value: `import _${name} from '${mod}'`
    });
    return `_${name}`;
}

export function addDefaultImport(tree, mod, name) {
    tree.children.unshift({
        type: "import",
        value: `import _${name} from '${mod}'`
    });
    return `_${name}`;
}

export function addExport(tree, name, value) {
    tree.children.push({
        type: "export",
        value: `export const ${name} = ${JSON.stringify(value)}`
    });
}

export function escape(string) {
    return escapeHtml(string);
}
