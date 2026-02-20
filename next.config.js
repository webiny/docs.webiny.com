const { createWebpackConfig } = require("./bundle/webpack.config");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true"
});

module.exports = withBundleAnalyzer({
    pageExtensions: ["js", "jsx"],
    images: {
        disableStaticImages: true
    },
    webpack: createWebpackConfig
});
