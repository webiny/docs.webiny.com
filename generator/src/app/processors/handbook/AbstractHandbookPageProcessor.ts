import { IFileProcessor } from "../../../abstractions/IFileProcessor";
import { HandbookPage } from "../../HandbookPage";

export abstract class AbstractHandbookPageProcessor implements IFileProcessor {
  protected page: HandbookPage;

  constructor(page: HandbookPage) {
    this.page = page;
  }

  process(contents: string): string {
    return contents;
  }

  protected mdxComment(text: string) {
    return ""; //`[//]: # "${text}"\n`;
  }
}
