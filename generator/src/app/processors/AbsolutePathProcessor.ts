import { IMdxProcessor } from "../../abstractions/IMdxProcessor";
import { MdxFile } from "../MdxFile";

export class AbsolutePathProcessor implements IMdxProcessor {
  private readonly projectRootDir: string;

  constructor(projectRootDir: string) {
    this.projectRootDir = projectRootDir;
  }

  processMdx(mdxFile: MdxFile): Promise<MdxFile> | MdxFile {
    return mdxFile.withContents(contents => {
      return [
        contents,
        `pageData.sourceFile = "${mdxFile.getAbsolutePath().replace(this.projectRootDir, "")}";`
      ].join("\n");
    });
  }
}
