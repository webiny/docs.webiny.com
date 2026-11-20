Hello @channel! :wave:

Webiny 6.4.13 is out! :rocket:

This release focuses on tightening up security across the board. We've made the API stricter about which identity provider tokens it accepts — Cognito now only allows ID tokens, and Auth0/Okta tokens must match your configured issuer and client ID. If you have custom clients calling the API directly, you may need to switch from access tokens to ID tokens.

On the Headless CMS side, the generic `cms` queries and mutations now validate the `fields` argument more carefully, only accepting clean field paths like `id` or `values.author.name`. Plus the usual round of dependency updates to keep everything fresh. Check out the changelog to learn more.

—

As usual, the release notes can be found on the following links:point_down::skin-tone-2::
Changelog: https://www.webiny.com/docs/release-notes/6.4.13/changelog
How To Upgrade: https://www.webiny.com/docs/release-notes/6.4.13/upgrade-guide

—

Security improvements are never the flashiest, but they're the ones that let you sleep well at night. :crescent_moon:
