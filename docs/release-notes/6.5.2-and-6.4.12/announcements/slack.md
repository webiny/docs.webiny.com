Hello @channel! :wave:

Webiny 6.5.2 and 6.4.12 are out! :rocket:

6.5.2 brings the Vue and Nuxt SDKs to parity with Next.js, so if you're building frontends outside the React ecosystem, you now get live preview, content entry lists and the rest of what the Next.js SDK offers. Admins can also reset a user's MFA directly from the Admin UI, which helps when someone loses access to their authenticator app. On top of that, scheduled publish and unpublish now fire on AWS again, and a tenant context leak that could read data from the wrong tenant during concurrent operations is fixed.

6.4.12 is for projects still on the 6.4 line. It adds per-webhook signing secrets, an opt-in debug tool for troubleshooting deployed environments from the Admin without digging through AWS logs, and a round of Website Builder fixes: page revisions stay in sync after mutations, deleting a revision works, and workflow controls behave properly in the page editor. Full-text search in OpenSearch no longer fails on date, number or boolean fields.

Both releases tighten access controls across the board. API keys, roles, teams and users can now only be granted permissions you hold yourself, entry operations respect folder-level permissions, and folders, webhooks, record locking, audit logs and mailer settings all get stricter checks.

Check out the changelogs to learn more.

—

As usual, the release notes can be found on the following links:point_down::skin-tone-2::
6.5.2 Changelog: https://www.webiny.com/docs/release-notes/6.5.2/changelog
6.5.2 How To Upgrade: https://www.webiny.com/docs/release-notes/6.5.2/upgrade-guide
6.4.12 Changelog: https://www.webiny.com/docs/release-notes/6.4.12/changelog
6.4.12 How To Upgrade: https://www.webiny.com/docs/release-notes/6.4.12/upgrade-guide

—

Lots more coming your way soon - happy building! :tada:
