import { IMdxFileFilter } from "../abstractions/IMdxFileFilter";
import { MdxFile } from "./MdxFile";

interface MdxFileFilterCallable<T extends MdxFile> {
  (mdxFile: T): boolean;
}

export class MdxFileFilter<T extends MdxFile> implements IMdxFileFilter<T> {
  private readonly filterCallable: MdxFileFilterCallable<T>;

  constructor(filter: MdxFileFilterCallable<T>) {
    this.filterCallable = filter;
  }

  filter(mdxFile: T): boolean {
    return this.filterCallable(mdxFile);
  }
}
