import { AbstractMdxProcessor } from "./AbstractMdxProcessor";
import { MdxFile } from "../MdxFile";

/**
 * Adds getServerSideProps to force Next.js to use SSR instead of SSG.
 * This prevents older versioned pages from being statically generated at build time.
 */
export class ServerSideRenderProcessor extends AbstractMdxProcessor {
    processMdx(mdxFile: MdxFile): MdxFile {
        return mdxFile.withContents(contents => {
            return [
                contents,
                "",
                this.mdxComment("Force SSR for this page to avoid static generation at build time"),
                "export function getServerSideProps() {",
                "  return { props: {} };",
                "}"
            ].join("\n");
        });
    }
}
