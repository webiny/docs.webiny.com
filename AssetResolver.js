const { red } = require("chalk");
const path = require("path");
const fs = require("fs-extra");
const versions = require("./src/data/versions.json");
const pages = require("./src/data/pages.json");

function rootify(filePath) {
    return filePath.replace(process.cwd(), "");
}

/**
 * This plugin rewrites asset paths to simulate inheritance. This means that assets are not duplicated, but instead,
 * if several versions of the article are identical, they will all reference the same asset (image, video, etc.).
 */
module.exports.AssetResolver = class AssetResolver {
    constructor() {
        this.pages = Object.values(pages).flat();
    }
    apply(resolver) {
        const target = resolver.ensureHook("resolve");
        resolver
            .getHook("before-resolve")
            .tapAsync("ResolveFallback", async (request, resolveContext, callback) => {
                if (this.isApplicable(request)) {
                    const obj = Object.assign({}, request, {
                        request: await this.resolveRequest(request)
                    });

                    resolver.doResolve(target, obj, null, resolveContext, callback);
                } else {
                    return callback();
                }
            });
    }

    isApplicable(request) {
        const isMdx = request.context?.issuer?.endsWith(".mdx");
        if (!isMdx) {
            return false;
        }

        return request.request.startsWith("./") || request.request.startsWith("../");
    }

    getSourcePage(issuer) {
        const fullPath = issuer.replace(process.cwd() + "/src/pages", "").replace(".mdx", "");
        return this.pages.find(page => page.fullPath === fullPath);
    }

    async resolveRequest(request) {
        const { allVersions, latestVersion } = versions;
        const page = this.getSourcePage(request.context.issuer);
        const realVersion = page?.version === "latest" ? latestVersion : page.version;
        const possibleVersions = allVersions
            .slice(allVersions.indexOf(realVersion))
            .concat("shared");
        // Try resolving every version, starting with the current page version.
        // Versions are ordered in descending order by default.
        // console.log(`Resolving asset "${blue(request.request)}" from "${blue(page.fullPath)}"`);
        for (const version of possibleVersions) {
            const versionFreePath = page.relativePath.match(/\/(?:\d+\.\d+\.\w+\/)?(.*)/)[1];
            const pageDir = path.dirname(
                path.join(process.cwd(), "src", "docs", version, versionFreePath)
            );

            const assetPath = path.join(pageDir, request.request);

            if (fs.pathExistsSync(assetPath)) {
                // console.log(`\t ✅ ${green(rootify(assetPath))}`);
                return assetPath;
            } else {
                // console.log(`\t - ${gray(rootify(assetPath))}`);
            }
        }
        console.log(`\t ❌ ${red(rootify(assetPath))}`);


        return request.request;
    }
};
