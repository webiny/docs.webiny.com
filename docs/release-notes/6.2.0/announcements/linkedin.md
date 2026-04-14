Webiny 6.2.0 is here, and this release brings full multilingual support to Page Builder along with several developer experience improvements across the platform. 🚀

Language support is now deeply integrated into page creation and management. When you create a new page, you can select the target language directly from the dialog, and the language code appears in both the editor title bar and the pages list. Even better, you can now translate existing pages into different languages right from the Pages list — the translated copy maintains a link to its source page, making it easy to keep content in sync across your multilingual site.

On the developer side, the Webiny SDK continues to evolve. A new languages module lets you programmatically query configured languages, and the token parameter now accepts async functions for dynamic token refresh. This is particularly useful when working in contexts where tokens expire, such as inside the admin app.

We have also introduced a new Api.Route extension that lets you register custom REST routes directly from your config file, complete with full dependency injection support. Both the cloud infrastructure and runtime routing are configured automatically, removing a lot of boilerplate from custom API development.

Infrastructure gets a nice addition too — you can now configure custom domains for the API CloudFront distribution using the new Infra.Api.CustomDomains extension, bringing it in line with how custom domains already work for the Admin app.

Give 6.2.0 a try and let us know what you think. We are always eager to hear how these features work in your projects.

Changelog: https://www.webiny.com/docs/release-notes/6.2.0/changelog
Upgrade guide: https://www.webiny.com/docs/release-notes/6.2.0/upgrade-guide
