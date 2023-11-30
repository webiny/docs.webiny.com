import { IDocumentRootWatcher, OnFile, OnWatchEvent } from "../abstractions/IDocumentRoot";

export class CompositeDocumentRootWatcher implements IDocumentRootWatcher {
  private readonly documentRootWatchers: IDocumentRootWatcher[];

  constructor(documentRootWatchers: IDocumentRootWatcher[]) {
    this.documentRootWatchers = documentRootWatchers;
  }

  async watch(onFile: OnFile, onEvent?: OnWatchEvent): Promise<void> {
    this.documentRootWatchers.forEach(documentRootWatcher => documentRootWatcher.watch(onFile, onEvent));
  }
}
