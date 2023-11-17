import { IMdxFileWriter } from "../abstractions/IMdxFileWriter";
import { IFile } from "../abstractions/IFile";
import { MdxFile } from "./MdxFile";

export class PassthroughFileWriter implements IMdxFileWriter {
  output(mdxFile: MdxFile): Promise<IFile[]> {
    return Promise.resolve([]);
  }
}
