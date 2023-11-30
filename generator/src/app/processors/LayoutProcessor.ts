import { AbstractMdxProcessor } from "./AbstractMdxProcessor";
import { MdxFile } from "../MdxFile";

export class LayoutProcessor extends AbstractMdxProcessor {
  private layoutImport: string;

  constructor(layoutImport: string) {
    super();
    this.layoutImport = layoutImport;
  }

  processMdx(mdxFile: MdxFile): MdxFile {
    return mdxFile.withContents(contents => {
      return [
        contents,
        "",
        this.mdxComment(`Add page layout to use with React.`),
        `import { Layout as _Layout } from "${this.layoutImport}"`,
        `export const Layout = _Layout;`
      ].join("\n");
    });
  }
}
