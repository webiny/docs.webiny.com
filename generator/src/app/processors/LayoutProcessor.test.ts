import { LayoutProcessor } from "./LayoutProcessor";

describe("LayoutProcessor", () => {
  test("should add layout import statements", () => {
    const input = "@/test/import";

    const testOutput = [
      "",
      `// Add page layout to use with React.`,
      `import { Layout as _Layout } from "${input}"`,
      `export const Layout = _Layout;`
    ].join("\n");

    const processor = new LayoutProcessor(input);

    expect(processor.process("")).toEqual(testOutput);
  });
});
