import visit from "unist-util-visit";
import { parse } from "@babel/parser";

export const resolveSimpleAssets = () => {
    return () => (tree, file) => {
        visit(tree, "import", node => {
            const ast = parse(node.value, { sourceType: "module" });
            const importNode = firstNode(ast);
            const { source } = importNode;
            if (!source.value.startsWith("./")) {
                return;
            }

            node.value = node.value.replace(source.value, `${file.dirname}/${source.value}`);
        });
    };
};

const firstNode = ast => {
    return ast.program.body.pop();
};
