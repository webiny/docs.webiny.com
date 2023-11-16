const { red } = require("chalk");
const { createLoader } = require("simple-functional-loader");
const path = require("path");
const querystring = require("querystring");
const frontMatter = require("front-matter");
const minimatch = require("minimatch");
const { AssetResolver } = require("./AssetResolver");
const { mdxLoader } = require("./mdx.loader");
const pages = require("../src/data/pages.json");

const defaultConfig = require("tailwindcss/resolveConfig")(require("tailwindcss/defaultConfig"));

const fallbackLayouts = {
    "src/pages/**/*.mdx": ["@/layouts/DocumentationLayout", "DocumentationLayout"]
};

const fallbackDefaultExports = {
    "src/pages/docs/**/*.mdx": ["@/layouts/ContentsLayout", "ContentsLayout"]
};

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

const mainMdxLoader = createLoader(mdxLoader);

module.exports.createWebpackConfig = (config, options) => {
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

    config.module.rules.push({
        test: /\.mdx$/,
        use: [
            options.defaultLoaders.babel,
            // TODO: combine all mdx related loaders into 1, so we can cache the output,
            // TODO: and skip processing the same content, when the client build is happening.
            createLoader(function (source) {
                // The `/* remove */` marker is added in the `removeExports.js` remark plugin.
                const code = source.replace(/export const (.*?) \/\* remove \*\/ =/g, "const $1 =");
                return code + `\nMDXContent.layoutProps = layoutProps\n`;

                // return `${source}\nMDXContent.layoutProps = layoutProps\n`;
            }),
            mainMdxLoader,
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
            }),
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
                let resourcePath = path.relative(process.cwd(), this.resourcePath);

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
};
