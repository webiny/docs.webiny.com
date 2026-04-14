1/ Webiny 6.2.0 is here 🚀

Multi-language page creation and translation just landed in Page Builder. Create pages in any configured language, translate existing pages with one click, and watch paths auto-prefix with the language code. This is a big one for global teams.

2/ Page Builder gets smarter with languages: dropdown selector during page creation, language tags visible in the editor title bar and pages list, and a full translation workflow — pick a target language, choose a folder, and your translated page maintains a link back to its source.

3/ Scheduling now lives where you work. Publish and unpublish scheduling is available directly in the page editor — no more jumping out of context to set up timed releases.

4/ Webiny SDK gains a new `sdk.languages` module with `getByCode` and `list` methods. Plus, the `token` parameter now accepts async functions for token refresh on every request — perfect for contexts where tokens expire.

5/ Developer tooling overhaul: common abstractions like Logger, EventPublisher, and KeyValueStore now export from `webiny/api` root. The new `Api.Route` extension lets you register custom REST routes with full dependency injection, configured automatically for both API Gateway and Fastify.

6/ New endpoint-agnostic GraphQL client with explicit endpoint per request. Use `MainGraphQLClient` or `CmsGraphQLClient` depending on your target. Permission handling also gets a clean three-layer refactor with proper DI support.

7/ Infrastructure upgrade: custom domain support for the API CloudFront distribution via `Infra.Api.CustomDomains` extension. Same pattern as the Admin app — just drop in your domain name and ACM certificate ARN.

8/ Quality of life: Webiny version now displays during deploy, extension `src` props reject directory paths with clear errors, and the Schedule menu item no longer crashes on unsaved entries.

9/ Release notes & upgrade guide:
Changelog: https://www.webiny.com/docs/release-notes/6.2.0/changelog
Upgrade guide: https://www.webiny.com/docs/release-notes/6.2.0/upgrade-guide
