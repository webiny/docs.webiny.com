import { AbstractHandbookPageProcessor } from "./AbstractHandbookPageProcessor";

export class CodeSeparatorProcessor extends AbstractHandbookPageProcessor {
  override process(contents: string) {
    return [
      contents,
      this.mdxComment(
        `================== THE FOLLOWING CODE IS GENERATED VIA CODE PROCESSORS ==================`
      )
    ].join("\n");
  }
}
