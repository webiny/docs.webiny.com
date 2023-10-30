import { IPage } from "../../abstractions/IPage";
import { IMdxProcessor } from "../../abstractions/IMdxProcessor";
import { MdxFile } from "../MdxFile";

export abstract class AbstractPageProcessor implements IMdxProcessor {
  protected page: IPage;

  constructor(page: IPage) {
    this.page = page;
  }

  processMdx(mdxFile: MdxFile): MdxFile | Promise<MdxFile> {
    return mdxFile;
  }

  protected mdxComment(text: string) {
    return `<!-- ${text} -->\n`;
  }
}
