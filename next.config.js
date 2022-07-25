const path = require("path");
const querystring = require("querystring");
const { createLoader } = require("simple-functional-loader");
const frontMatter = require("front-matter");
const withSmartQuotes = require("@silvenon/remark-smartypants");
const { withTableOfContents } = require("./remark/withTableOfContents");
const { withSyntaxHighlighting } = require("./remark/withSyntaxHighlighting");
const { withNextLinks } = require("./remark/withNextLinks");
const minimatch = require("minimatch");
const versions = require("./src/data/versions.json");
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

const getCanonicalPath = (version, pagePath) => {
    const [, ...allVersions] = versions.allVersions;
    // First we check the latest version of pages.
    const possibleLatestPath = pagePath.replace(`/${version}/`, "/");
    const latestPage = pages.latest.find(page => page.path === possibleLatestPath);
    if (latestPage) {
        return latestPage.path;
    }

    // Now we can search in older versions.
    // `allVersions` are already sorted in descending order, so the first match is what we need.
    const regex = new RegExp(pagePath.replace(/\//g, "\\/").replace(version, "\\d+.\\d+.x"));
    for (const version of allVersions) {
        const page = pages[version].find(page => regex.test(page.path));
        if (page) {
            return page.path;
        }
    }

    return pagePath;
};

module.exports = withBundleAnalyzer({
    swcMinify: true,
    pageExtensions: ["js", "jsx", "mdx"],
    images: {
        disableStaticImages: true
    },
    webpack(config, options) {
        if (!options.dev && options.isServer) {
            let originalEntry = config.entry;

            config.entry = async () => {
                let entries = { ...(await originalEntry()) };
                return entries;
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
                loader: "@mdx-js/loader",
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
                const part = pagePath.split("/")[2]; // /docs/5.29/something -> ["", "docs", "5.29", "something"]
                if (!part) {
                    return source;
                }
                const version = part.includes(".") ? part : "latest";
                const canonicalPath =
                    version === "latest" ? pagePath : getCanonicalPath(version, pagePath);

                const newExports = [
                    `export const slug = '${slug}';`,
                    `export const version = '${version}';`,
                    `export const pagePath = '${pagePath}';`,
                    `export const canonicalPath = '${canonicalPath}';`
                ];

                return source + "\n\n" + newExports.join("\n\n");
            })
        ];

        config.module.rules.push({
            test: /\.mdx$/,
            use: [
                options.defaultLoaders.babel,
                createLoader(function (source) {
                    if (source.includes("/*START_META*/")) {
                        const [meta] = source.match(/\/\*START_META\*\/(.*?)\/\*END_META\*\//s);
                        return "export default " + meta;
                    }
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

                    if (!/^\s*export\s+(var|let|const)\s+Layout\s+=/m.test(source)) {
                        for (let glob in fallbackLayouts) {
                            if (minimatch(resourcePath, glob)) {
                                extra.push(
                                    `import { ${fallbackLayouts[glob][1]} as _Layout } from '${fallbackLayouts[glob][0]}'`,
                                    "export const Layout = _Layout"
                                );
                                break;
                            }
                        }
                    }

                    if (!/^\s*export\s+default\s+/m.test(source.replace(/```(.*?)```/gs, ""))) {
                        for (let glob in fallbackDefaultExports) {
                            if (minimatch(resourcePath, glob)) {
                                extra.push(
                                    `import { ${fallbackDefaultExports[glob][1]} as _Default } from '${fallbackDefaultExports[glob][0]}'`,
                                    "export default _Default"
                                );
                                break;
                            }
                        }
                    }

                    if (
                        !/^\s*export\s+(async\s+)?function\s+getStaticProps\s+/m.test(
                            source.replace(/```(.*?)```/gs, "")
                        )
                    ) {
                        for (let glob in fallbackGetStaticProps) {
                            if (minimatch(resourcePath, glob)) {
                                extra.push(
                                    `export { getStaticProps } from '${fallbackGetStaticProps[glob]}'`
                                );
                                break;
                            }
                        }
                    }

                    let metaExport;
                    if (!/export\s+(const|let|var)\s+meta\s*=/.test(source)) {
                        metaExport =
                            typeof fields === "undefined"
                                ? `export const meta = ${JSON.stringify(meta)}`
                                : `export const meta = /*START_META*/${JSON.stringify(
                                      meta || {}
                                  )}/*END_META*/`;
                    }

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
