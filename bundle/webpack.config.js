const { createLoader } = require("simple-functional-loader");

const defaultConfig = require("tailwindcss/resolveConfig")(require("tailwindcss/defaultConfig"));

module.exports.createWebpackConfig = (config, options) => {
    if (!options.dev && options.isServer) {
        let originalEntry = config.entry;

        config.entry = async () => {
            return { ...(await originalEntry()) };
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

    return config;
};
