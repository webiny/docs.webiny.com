import { IDocumentRoot, IDocumentRootWatcher } from "./IDocumentRoot";

export interface IDocumentRootFactory {
  getDocumentRoot(): IDocumentRoot;
  getDocumentRootWatcher(): IDocumentRootWatcher;
}
