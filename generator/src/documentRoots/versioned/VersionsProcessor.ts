import { IMdxProcessor } from "../../abstractions/IMdxProcessor";
import { MdxFile } from "../../app/MdxFile";

export class VersionsProcessor implements IMdxProcessor {
  private importPath: string;

  constructor(importPath: string) {
    this.importPath = importPath;
  }

  processMdx(mdxFile: MdxFile): MdxFile {
    return mdxFile.withContents(contents => {
      return [
        contents,
        `import _versions from "${this.importPath}";`,
        `export const versions = _versions;`
      ].join("\n");
    });
  }
}
