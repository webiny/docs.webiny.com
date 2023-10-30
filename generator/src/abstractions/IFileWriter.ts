import { IFile } from "./IFile";

export interface IFileWriter {
  write(file: IFile): Promise<void>;
}
