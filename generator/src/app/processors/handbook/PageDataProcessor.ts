import { AbstractHandbookPageProcessor } from "./AbstractHandbookPageProcessor";

export class PageDataProcessor extends AbstractHandbookPageProcessor {
  override process(contents: string) {
    return [
      contents,
      "",
      this.mdxComment(`Add page data export. It will be attached to "layoutProps" by mdx-loader.`),
      `export const pageData = ${JSON.stringify(this.page.getData(), null, 2)};`
    ].join("\n");
  }
}
