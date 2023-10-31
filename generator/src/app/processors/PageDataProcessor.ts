import { AbstractMdxProcessor } from "./AbstractMdxProcessor";
import { MdxFile } from "../MdxFile";

export class PageDataProcessor extends AbstractMdxProcessor {
  processMdx(mdxFile: MdxFile): MdxFile {
    return mdxFile.withContents(contents => {
      return [
        contents,
        "",
        this.mdxComment(
          `Add page data export. It will be attached to "layoutProps" by mdx-loader.`
        ),
        `export const pageData = ${JSON.stringify(mdxFile.getData(), null, 2)};`
      ].join("\n");
    });
  }
}
