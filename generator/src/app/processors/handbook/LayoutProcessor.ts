import { AbstractHandbookPageProcessor } from "./AbstractHandbookPageProcessor";
import { HandbookPage } from "../../HandbookPage";

export class LayoutProcessor extends AbstractHandbookPageProcessor {
  private layoutImport: string;

  constructor(page: HandbookPage, layoutImport: string) {
    super(page);
    this.layoutImport = layoutImport;
  }

  override process(contents: string) {
    return [
      contents,
      "",
      this.mdxComment(`Add page layout to use with React.`),
      `import { Layout as _Layout } from "${this.layoutImport}"`,
      `export const Layout = _Layout;`
    ].join("\n");
  }
}
