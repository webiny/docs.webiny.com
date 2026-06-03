import { IDocumentRootWatcher, OnFile, OnWatchEvent } from "../abstractions/IDocumentRoot";

export class CompositeDocumentRootWatcher implements IDocumentRootWatcher {
    private readonly documentRootWatchers: IDocumentRootWatcher[];

    constructor(documentRootWatchers: IDocumentRootWatcher[]) {
        this.documentRootWatchers = documentRootWatchers;
    }

    async watch(onFile: OnFile, onEvent?: OnWatchEvent): Promise<void> {
        await Promise.all(this.documentRootWatchers.map(w => w.watch(onFile, onEvent)));
    }
}
