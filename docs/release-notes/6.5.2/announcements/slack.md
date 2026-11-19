Hello @channel! :wave:

Webiny 6.5.2 is out! :rocket:

This release brings Vue and Nuxt SDKs to full parity with Next.js, so if you're building frontends outside the React ecosystem, you now have first-class support with live preview, content entry lists, and all the goodies. We've also added the ability for admins to reset a user's MFA directly from the Admin UI - super helpful when someone loses access to their authenticator app.

Under the hood, we've tightened up access controls across the board. Roles, teams, and users can now only be granted permissions you actually hold yourself, and there are stricter checks for folders, entries, webhooks, and more. We also fixed scheduled publishing not firing on AWS and squashed a tricky tenant context leak that could cause data to be read from the wrong tenant during concurrent operations.

Check out the changelog to learn more.

—

As usual, the release notes can be found on the following links:point_down::skin-tone-2::
Changelog: https://www.webiny.com/docs/release-notes/6.5.2/changelog
How To Upgrade: https://www.webiny.com/docs/release-notes/6.5.2/upgrade-guide

—

Lots more coming your way soon - happy building! :tada:
