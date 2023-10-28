import { IFile } from "../abstractions/IFile";

interface FileProps {
  contents: string;
  path: string;
}

export class File implements IFile {
  private props: FileProps;

  constructor(props: FileProps) {
    this.props = props;
  }

  getContents(): string {
    return this.props.contents;
  }

  getRelativePath(): string {
    return this.props.path;
  }
}
