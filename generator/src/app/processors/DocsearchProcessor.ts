import { AbstractPageProcessor } from "./AbstractPageProcessor";
import { MdxFile } from "../MdxFile";

export class DocsearchProcessor extends AbstractPageProcessor {
  override processMdx(mdxFile: MdxFile): MdxFile {
    return mdxFile.withContents(contents => {
      return [
        contents,
        "",
        this.mdxComment(`Add Algolia data.`),
        `export const docsearch = ${JSON.stringify(this.page.getDocsearch(), null, 2)};`
      ].join("\n");
    });
  }
}
