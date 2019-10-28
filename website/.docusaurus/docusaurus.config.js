export default {
  "plugins": [],
  "themes": [],
  "customFields": {},
  "themeConfig": {
    "navbar": {
      "title": "Webiny CMS Documentation",
      "logo": {
        "alt": "Webiny Serverless CMS Logo",
        "src": "img/white-square-icon.svg"
      },
      "links": [
        {
          "href": "/docs/get-started",
          "label": "Docs",
          "position": "right"
        },
        {
          "href": "https://github.com/webiny/webiny-js",
          "label": "GitHub",
          "position": "right"
        },
        {
          "href": "https://storybook.webiny.com",
          "label": "Storybook",
          "position": "right"
        }
      ]
    }
  },
  "title": "Webiny Documentation",
  "tagline": "Serverless CMS",
  "url": "https://www.webiny.com",
  "baseUrl": "/",
  "projectName": "webiny-js",
  "organizationName": "webiny",
  "favicon": "img/favicon.ico",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "path": "../docs",
          "sidebarPath": "/Users/paveldenisjuk/webiny/js/docs.webiny.com/website/sidebars.json",
          "editUrl": "https://github.com/webiny/docs.webiny.com/edit/master/docs/",
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true
        },
        "theme": {
          "customCss": "/Users/paveldenisjuk/webiny/js/docs.webiny.com/website/static/css/custom.css"
        }
      }
    ]
  ]
};