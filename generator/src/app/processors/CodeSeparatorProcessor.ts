import { AbstractMdxProcessor } from "./AbstractMdxProcessor";
import { MdxFile } from "../MdxFile";

export class CodeSeparatorProcessor extends AbstractMdxProcessor {
  processMdx(mdxFile: MdxFile): MdxFile {
    return mdxFile.withContents(contents => {
      return [
        contents,
        this.mdxComment(
          `================== THE FOLLOWING CODE IS GENERATED VIA CODE PROCESSORS ==================`
        )
      ].join("\n");
    });
  }
}
