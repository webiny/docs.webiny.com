import { AbstractHandbookPageProcessor } from "./AbstractHandbookPageProcessor";

export class DocsearchProcessor extends AbstractHandbookPageProcessor {
  override process(contents: string) {
    return [
      contents,
      "",
      this.mdxComment(`Add Algolia data.`),
      `export const docsearch = ${JSON.stringify(this.page.getDocsearch(), null, 2)};`
    ].join("\n");
  }
}
