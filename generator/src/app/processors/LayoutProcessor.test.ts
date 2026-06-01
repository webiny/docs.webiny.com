import { LayoutProcessor } from "./LayoutProcessor";
import { MdxFile } from "../MdxFile";
import type { Stats } from "fs";

class TestMdxFile extends MdxFile {
    protected type = "test";
}

function createMdxFile(contents: string): TestMdxFile {
    return new TestMdxFile({
        absolutePath: "/test/file.mdx",
        rawBody: `---\ntitle: Test\ndescription: Test\n---\n${contents}`,
        stats: {} as Stats
    });
}

describe("LayoutProcessor", () => {
    test("should add layout import statements", () => {
        const input = "@/test/import";

        const processor = new LayoutProcessor(input);
        const result = processor.processMdx(createMdxFile(""));

        expect(result.getContents()).toContain(
            `import { Layout as _Layout } from "${input}"`
        );
        expect(result.getContents()).toContain(
            `export const Layout = _Layout;`
        );
    });
});
