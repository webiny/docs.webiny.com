import { IMdxProcessor } from "../../abstractions/IMdxProcessor";
import { MdxFile } from "../MdxFile";

export abstract class AbstractMdxProcessor implements IMdxProcessor {

  abstract processMdx(mdxFile: MdxFile): MdxFile | Promise<MdxFile>;

  protected mdxComment(text: string) {
    return `<!-- ${text} -->\n`;
  }
}
