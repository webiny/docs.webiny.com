const { createWebpackConfig } = require("./bundle/webpack.config");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true"
});

module.exports = withBundleAnalyzer({
    basePath: "/docs",
    pageExtensions: ["js", "jsx"],
    images: {
        disableStaticImages: true
    },
    webpack: createWebpackConfig
});
