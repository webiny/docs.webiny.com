/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: "Webiny Documentation", // Title for your website.
  tagline: "Serverless CMS",
  subTagline: "Powered by Node.Js, React and GraphQL",
  url: "https://www.webiny.com", // Your website URL
  baseUrl: "/", // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: "webiny-js",
  organizationName: "webiny",
  defaultVersionShown: "1.0.0",
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: "get-started", label: "Get Started" },
    { doc: "cms-guides/get-started-overview", label: "CMS Guides" },
    {
      doc: "developer-tutorials/installing-locally",
      label: "Developer Tutorials"
    },
    {
      doc: "designer-tutorials/designer-get-started",
      label: "Designer Tutorials"
    }
  ],

  /* path to images for header/footer */
  headerIcon: "img/webiny-orange-logo.svg",
  footerIcon: "img/webiny-logo.svg",
  favicon: "img/favicon.ico",

  /* Colors for website */
  colors: {
    primaryColor: "#F75B34",
    secondaryColor: "#FFFFFF"
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Webiny Ltd`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: "default"
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ["https://buttons.github.io/buttons.js"],

  // On page navigation for the current documentation page.
  onPageNav: "separate",
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: "img/docusaurus.png",
  twitterImage: "img/docusaurus.png",
  scrollToTop: true,
  scrollToTopOptions: {
    zIndex: 100
  },

  disableTitleTagline: true,
  disableHeaderTitle: true,
  editUrl: "https://github.com/webiny/docs.webiny.com/edit/master/docs/",

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: "https://github.com/webiny/webiny-js"
};

module.exports = siteConfig;
