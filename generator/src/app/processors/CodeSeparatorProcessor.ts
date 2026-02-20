import { AbstractMdxProcessor } from "./AbstractMdxProcessor";
import { MdxFile } from "../MdxFile";

export class CodeSeparatorProcessor extends AbstractMdxProcessor {
  processMdx(mdxFile: MdxFile): MdxFile {
    return mdxFile.withContents(contents => {
      return [
        contents,
        "\n",
        this.mdxComment(
          `================== AUTO-GENERATED ==================`
        )
      ].join("\n");
    });
  }
}
