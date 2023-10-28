import { AbstractHandbookPageProcessor } from "./AbstractHandbookPageProcessor";

export class PageNavigationProcessor extends AbstractHandbookPageProcessor {
  override process(contents: string) {
    return [
      contents,
      "",
      this.mdxComment(`Add navigation import.`),
      `import _navigation from "@/data/handbookNavigation.json";`,
      `export const navigation = _navigation;`
    ].join("\n");
  }
}
