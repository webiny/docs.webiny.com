import { AbstractPageProcessor } from "./AbstractPageProcessor";
import { IPage } from "../../abstractions/IPage";
import { MdxFile } from "../MdxFile";

export class LayoutProcessor extends AbstractPageProcessor {
  private layoutImport: string;

  constructor(page: IPage, layoutImport: string) {
    super(page);
    this.layoutImport = layoutImport;
  }

  override processMdx(mdxFile: MdxFile): MdxFile {
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
