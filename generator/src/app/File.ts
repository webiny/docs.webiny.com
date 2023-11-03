import { IFile } from "../abstractions/IFile";

interface FileProps {
  contents: string;
  path: string;
  sourcePath?: string;
}

export class File implements IFile {
  private props: FileProps;

  constructor(props: FileProps) {
    this.props = props;
  }

  getContents(): string {
    return this.props.contents;
  }

  getOutputPath(): string {
    return this.props.path;
  }

  getSourcePath(): string | undefined {
    return this.props.sourcePath;
  }
}
