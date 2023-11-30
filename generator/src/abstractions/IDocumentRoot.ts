import { IFile } from "./IFile";

export interface OnFile {
  (file: IFile): void;
}

export interface IDocumentRoot {
  generate(): Promise<IFile[]>;
}

export interface OnWatchEvent {
  (event: string): void;
}

export interface IDocumentRootWatcher {
  watch(onFile: OnFile, onEvent?: OnWatchEvent): Promise<void>;
}
