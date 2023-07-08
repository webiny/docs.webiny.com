const path = require("path");
const { red, green } = require("chalk");
const querystring = require("querystring");
const { createLoader } = require("simple-functional-loader");
const frontMatter = require("front-matter");
const withSmartQuotes = require("@silvenon/remark-smartypants");
const { withTableOfContents } = require("./remark/withTableOfContents");
const { withSyntaxHighlighting } = require("./remark/withSyntaxHighlighting");
const { withNextLinks } = require("./remark/withNextLinks");
const minimatch = require("minimatch");
const pages = require("./src/data/pages.json");
const { withImages, unwrapImages } = require("./remark/withImages");
const { withTitleCaseHeadings } = require("./remark/withTitleCaseHeadings");
const { AssetResolver } = require("./AssetResolver");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true"
});
const defaultConfig = require("tailwindcss/resolveConfig")(require("tailwindcss/defaultConfig"));

const fallbackLayouts = {
    "src/pages/**/*.mdx": ["@/layouts/DocumentationLayout", "DocumentationLayout"]
};

const fallbackDefaultExports = {
    "src/pages/docs/**/*.mdx": ["@/layouts/ContentsLayout", "ContentsLayout"]
};

const fallbackGetStaticProps = {};

const omitKeys = ["sourceFile"];
const getPageData = pagePath => {
    // /docs/5.29/something -> ["", "docs", "5.29.x", "something"]
    const part = pagePath.split("/")[2];
    const version = part.includes(".") ? part : "latest";

    //const canonicalPath = version === "latest" ? pagePath : getCanonicalPath(version, pagePath);
    const page = pages[version].find(page => page.fullPath === pagePath);
    if (!page) {
        return null;
    }

    return Object.keys(page).reduce((newPage, key) => {
        if (omitKeys.includes(key)) {
            return newPage;
        }
        return { ...newPage, [key]: page[key] };
    }, {});
};

module.exports = withBundleAnalyzer({
    swcMinify: true,
    pageExtensions: ["js", "jsx", "mdx"],
    images: {
        disableStaticImages: true
    },
    webpack(config, options) {
        let maxHeap = 0;

        setInterval(() => {
            const heapUsage = process.memoryUsage().heapUsed / 1024 / 1024;
            if (heapUsage > maxHeap) {
                maxHeap = heapUsage;

                process.stdout.write(
                    `\n[${options.isServer ? "Server" : "Client"}] Heap usage: ${green(
                        heapUsage.toFixed(2) + " MB"
                    )}; Max heap usage: ${red(maxHeap.toFixed(2) + " MB")}`
                );
            }
        }, 1000);

        process.on("exit", () => {
            console.log(`Max heap usage: ${red(maxHeap.toFixed(2) + " MB")}`);
        });

        if (!options.dev && options.isServer) {
            let originalEntry = config.entry;

            config.entry = async () => {
                return { ...(await originalEntry()) };
            };
        }

        config.resolve.plugins = [...(config.resolve.plugins || []), new AssetResolver()];

        config.module.rules.push({
            test: /\.(png|jpe?g|gif|webp|avif|mp4)$/i,
            issuer: /\.(jsx?|tsx?|mdx)$/,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        publicPath: "/_next",
                        name: "static/media/[name].[hash].[ext]"
                    }
                }
            ]
        });

        config.resolve.alias["defaultConfig$"] = require.resolve("tailwindcss/defaultConfig");
        config.module.rules.push({
            test: require.resolve("tailwindcss/defaultConfig"),
            use: createLoader(function (_source) {
                return `export default ${JSON.stringify(defaultConfig)}`;
            })
        });

        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: "@svgr/webpack",
                    options: { svgoConfig: { plugins: { removeViewBox: false } } }
                },
                {
                    loader: "file-loader",
                    options: {
                        publicPath: "/_next",
                        name: "static/media/[name].[hash].[ext]"
                    }
                }
            ]
        });

        let mdx = [
            {
                loader: require.resolve("./mdx.loader"),
                options: {
                    remarkPlugins: [
                        withTitleCaseHeadings,
                        withImages,
                        withTableOfContents,
                        withSyntaxHighlighting,
                        withNextLinks,
                        withSmartQuotes,
                        unwrapImages
                    ]
                }
            },
            createLoader(function (source) {
                let pathSegments = this.resourcePath.split(path.sep);
                let slug =
                    pathSegments[pathSegments.length - 1] === "index.mdx"
                        ? pathSegments[pathSegments.length - 2]
                        : pathSegments[pathSegments.length - 1].replace(/\.mdx$/, "");

                const pagePath = this.resourcePath.split("/pages").pop().replace(".mdx", "");
                const pageData = getPageData(pagePath);

                if (!pageData) {
                    return source;
                }

                /**
                 * All exports will be assigned to `layoutProps` of the component used to render the page.
                 */
                const newExports = [
                    `export const slug = '${slug}';`,
                    `export const pageData = ${JSON.stringify(pageData)}`
                ];

                return source + "\n\n" + newExports.join("\n\n");
            })
        ];

        config.module.rules.push({
            test: /\.mdx$/,
            use: [
                options.defaultLoaders.babel,
                createLoader(function (source) {
                    return (
                        source.replace(/export const/gs, "const") +
                        `\nMDXContent.layoutProps = layoutProps\n`
                    );
                }),
                ...mdx,
                createLoader(function (source) {
                    let { meta: fields } = querystring.parse(this.resourceQuery.substr(1));
                    let { attributes: meta, body } = frontMatter(source);
                    if (fields) {
                        for (let field in meta) {
                            if (!fields.split(",").includes(field)) {
                                delete meta[field];
                            }
                        }
                    }

                    let extra = [];
                    let resourcePath = path.relative(__dirname, this.resourcePath);

                    for (let glob in fallbackLayouts) {
                        if (minimatch(resourcePath, glob)) {
                            extra.push(
                                `import { ${fallbackLayouts[glob][1]} as _Layout } from '${fallbackLayouts[glob][0]}'`,
                                "export const Layout = _Layout"
                            );
                            break;
                        }
                    }

                    for (let glob in fallbackDefaultExports) {
                        if (minimatch(resourcePath, glob)) {
                            extra.push(
                                `import { ${fallbackDefaultExports[glob][1]} as _Default } from '${fallbackDefaultExports[glob][0]}'`,
                                "export default _Default"
                            );
                            break;
                        }
                    }

                    let metaExport =
                        typeof fields === "undefined"
                            ? `export const meta = ${JSON.stringify(meta)}`
                            : `export const meta = /*START_META*/${JSON.stringify(
                                  meta || {}
                              )}/*END_META*/`;

                    return [
                        ...(typeof fields === "undefined" ? extra : []),
                        typeof fields === "undefined"
                            ? body.replace(/<!--excerpt-->.*<!--\/excerpt-->/s, "")
                            : "",
                        metaExport
                    ]
                        .filter(Boolean)
                        .join("\n\n");
                })
            ]
        });

        return config;
    }
});
