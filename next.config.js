const { createWebpackConfig } = require("./bundle/webpack.config");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true"
});

module.exports = withBundleAnalyzer({
    swcMinify: true,
    pageExtensions: ["js", "jsx", "mdx"],
    images: {
        disableStaticImages: true
    },
    webpack: createWebpackConfig
});
