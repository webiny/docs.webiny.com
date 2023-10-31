import { IMdxProcessor } from "../../abstractions/IMdxProcessor";
import { MdxFile } from "../MdxFile";

export class PageNavigationProcessor implements IMdxProcessor {
  private importPath: string;

  constructor(importPath: string) {
    this.importPath = importPath;
  }

  processMdx(mdxFile: MdxFile): MdxFile {
    return mdxFile.withContents(contents => {
      return [
        contents,
        "",
        `import _navigation from "${this.importPath}";`,
        `export const navigation = _navigation;`
      ].join("\n");
    });
  }
}
