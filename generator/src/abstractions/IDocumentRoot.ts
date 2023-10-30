import { IFile } from "./IFile";

export interface OnFile {
  (file: IFile): void;
}

export interface IDocumentRoot {
  getFiles(): Promise<IFile[]>;
  watch(onFile: OnFile): Promise<void>;
}
