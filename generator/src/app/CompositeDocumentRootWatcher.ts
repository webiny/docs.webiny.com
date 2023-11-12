import { IDocumentRootWatcher, OnFile } from "../abstractions/IDocumentRoot";

export class CompositeDocumentRootWatcher implements IDocumentRootWatcher {
  private readonly documentRootWatchers: IDocumentRootWatcher[];

  constructor(documentRootWatchers: IDocumentRootWatcher[]) {
    this.documentRootWatchers = documentRootWatchers;
  }

  async watch(onFile: OnFile): Promise<void> {
    this.documentRootWatchers.forEach(documentRootWatcher => documentRootWatcher.watch(onFile));
  }
}
