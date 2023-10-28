import {MdxFile} from "./MdxFile";

interface SourceFileProps {
  title: "Setup Multi-Tenancy";
  description: "Learn how to configure multi-tenancy in your Webiny project";
  path: "enterprise/multi-tenancy";
  file: "/Users/paveldenisjuk/webiny/docs.webiny.com/src/docs/5.28.x/enterprise/multi-tenancy.mdx";
  version: "5.28.x";
}

export class SourceFile {
  private readonly mdxFile: MdxFile;

  constructor(mdxFile: MdxFile) {
    this.mdxFile = mdxFile;
  }

  getAttributes() {
    return this.mdxFile.getAttributes();
  }
}
