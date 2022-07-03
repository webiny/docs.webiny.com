const fs = require("fs-extra");
const globby = require("globby");
const path = require("path");
const pMap = require("p-map");
const frontMatter = require("front-matter");
const { replaceInPath } = require("replace-in-path");
const util = require("util");
const ncpBase = require("ncp");
const writeJsonFile = require("write-json-file");
const ncp = util.promisify(ncpBase.ncp);
const rimraf = util.promisify(require("rimraf"));
const { allVersions } = require("./detectVersions");

const sourceDocsPath = folder => path.join(process.cwd(), "src/docs", folder || "");
const targetDocsPath = folder => path.join(process.cwd(), "src/pages/docs", folder || "");

function injectVersion(rootPath, version) {
    const codeReplacements = [
        {
            find: "/{version}/",
            replaceWith: version === "latest" ? "/" : `/${version}/`
        }
    ];
    replaceInPath(path.join(rootPath, "/**/*.mdx"), codeReplacements);
}

(async () => {
    const [latestVersion, ...versions] = allVersions;
    const pages = {};

    await writeJsonFile(path.join(process.cwd(), "src/data/versions.json"), {
        latestVersion,
        allVersions
    });

    // Delete everything from the target directory
    await rimraf(targetDocsPath());

    // Make sure target directory exists
    await fs.ensureDir(targetDocsPath());

    // Copy shared pages and inject {version}.
    await ncp(sourceDocsPath("shared/"), targetDocsPath("/"));

    // Copy pages of the "latest" version.
    await ncp(sourceDocsPath(latestVersion, "/"), targetDocsPath("/"));
    injectVersion(targetDocsPath(), "latest");

    await addPagesToCatalog(targetDocsPath(), "latest");

    // Copy pages for all the other versions
    for (const version of versions) {
        const targetPath = targetDocsPath(version);
        // Copy shared pages first
        await ncp(sourceDocsPath("shared/"), targetPath);
        // Copy version-specific pages
        await ncp(sourceDocsPath(version, "/"), targetPath);
        injectVersion(targetPath, version);

        await addPagesToCatalog(targetDocsPath(version), version);
    }

    // Save pages catalog
    await writeJsonFile(path.join(process.cwd(), "src/data/pages.json"), pages);

    async function addPagesToCatalog(path, version) {
        const urlRegExp = new RegExp("(/docs/.*).mdx");

        const files = await globby(`${path}/**/*.mdx`);
        pages[version] = await pMap(files, async file => {
            const { attributes } = await frontMatter(await fs.readFile(file, "utf8"));
            return {
                ...attributes,
                version,
                path: file.match(urlRegExp)[1]
            };
        });
    }
})();
