import { AbstractPageProcessor } from "./AbstractPageProcessor";
import { MdxFile } from "../MdxFile";

export class PageDataProcessor extends AbstractPageProcessor {
  override processMdx(mdxFile: MdxFile): MdxFile {
    return mdxFile.withContents(contents => {
      return [
        contents,
        "",
        this.mdxComment(
          `Add page data export. It will be attached to "layoutProps" by mdx-loader.`
        ),
        `export const pageData = ${JSON.stringify(this.page.getData(), null, 2)};`
      ].join("\n");
    });
  }
}
