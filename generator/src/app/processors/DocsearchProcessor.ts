import { AbstractMdxProcessor } from "./AbstractMdxProcessor";
import { MdxFile } from "../MdxFile";

export class DocsearchProcessor extends AbstractMdxProcessor {
  processMdx(mdxFile: MdxFile): MdxFile {
    return mdxFile.withContents(contents => {
      return [
        contents,
        "",
        this.mdxComment(`Add Algolia data.`),
        `export const docsearch = ${JSON.stringify(mdxFile.getDocsearch(), null, 2)};`
      ].join("\n");
    });
  }
}
