const path = require("path");
const querystring = require("querystring");
const { createLoader } = require("simple-functional-loader");
const frontMatter = require("front-matter");
const withSmartQuotes = require("@silvenon/remark-smartypants");
const { withTableOfContents } = require("./remark/withTableOfContents");
const { withSyntaxHighlighting } = require("./remark/withSyntaxHighlighting");
const { withNextLinks } = require("./remark/withNextLinks");
const minimatch = require("minimatch");
const { withImages, unwrapImages } = require("./remark/withImages");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true"
});
const defaultConfig = require("tailwindcss/resolveConfig")(require("tailwindcss/defaultConfig"));

const fallbackLayouts = {
    "src/pages/docs/**/*": ["@/layouts/DocumentationLayout", "DocumentationLayout"]
};

const fallbackDefaultExports = {
    "src/pages/{docs,components}/**/*": ["@/layouts/ContentsLayout", "ContentsLayout"]
};

const fallbackGetStaticProps = {};

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
                return source + `\n\nexport const slug = '${slug}'`;
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
