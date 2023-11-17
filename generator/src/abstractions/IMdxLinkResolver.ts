import { VFileOptions } from "vfile";

export type Data = Record<string, any>;

export type VFile<TData extends Data = Data> = VFileOptions & { data?: TData };

export interface IMdxLinkResolver<TVFileData extends Data = Data> {
  resolve(vFile: VFile<TVFileData>, currentFilePath: string, href: string): string;
}
