import { IFile } from "./IFile";

export interface OnFile {
  (file: IFile): void;
}

export interface IDocumentRoot {
  generate(): Promise<IFile[]>;
}

export interface IDocumentRootWatcher {
  watch(onFile: OnFile): Promise<void>;
}
