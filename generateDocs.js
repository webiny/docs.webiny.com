#!/usr/bin/env node
process.env.NODE_PATH = process.cwd();
const tsNode = require("ts-node");
const { resolve } = require("path");
const yargs = require("yargs");

tsNode.register({
    dir: resolve(__dirname, "./generator")
});

const { App, AppConfig } = require("@webiny/docs-generator");
const { default: docsConfig } = require("./docs.config");

(async () => {
    const { watch, watchOnly, version } = yargs
        .version(false)
        .option("v", {
            alias: "version",
            describe: "Whitelist versions to build.",
            type: "array",
            default: []
        })
        .option("watch", {
            default: false,
            description: "Run generator and watch for changes.",
            type: "boolean"
        })
        .option("watchOnly", {
            default: false,
            description: "Only watch for changes, without the initial generation.",
            type: "boolean"
        }).argv;

    const config = AppConfig.create({
        linkValidator: docsConfig.linkValidator,
        mdxRemarkPlugins: docsConfig.mdxRemarkPlugins,
        projectRootDir: docsConfig.projectRootDir,
        devMode: process.env.NODE_ENV === "development",
        documentRootConfigs: docsConfig.documentRoots.filter(Boolean),
        outputVersions: version,
        sitemapOutputPath: docsConfig.sitemapOutputPath
    });

    const app = new App(config);

    if (watchOnly) {
        await app.watch();
    }

    try {
        if (docsConfig.cleanOutputDir) {
            const rimraf = require("rimraf");
            console.log("Cleaning output directory...");
            docsConfig.cleanOutputDir.forEach(dir => rimraf.sync(dir));
        }
        await app.generate();
    } catch (err) {
        process.exit(1);
    }

    if (watch) {
        await app.watch();
    }

    process.exit();
})();
