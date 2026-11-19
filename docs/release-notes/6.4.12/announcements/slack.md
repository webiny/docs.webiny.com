Hello @channel! :wave:

Webiny 6.4.12 is out! :rocket:

This release brings some nice quality-of-life improvements to the Website Builder — page revisions now stay in sync after mutations, deletion actually works, and workflow controls behave properly in the editor. We've also added a new opt-in debug tool that lets you troubleshoot issues directly from the Admin interface without digging through AWS logs.

On the security front, we've tightened permission checks across the board. API keys and roles now validate against your own permissions when granting access, entry operations respect folder-level permissions, and webhooks have stricter endpoint validation. These changes close several potential privilege escalation vectors.

There's also a handful of fixes for OpenSearch full-text search, peer dependency publishing, and various Admin UI quirks. Check out the changelog to learn more.

—

As usual, the release notes can be found on the following links:point_down::skin-tone-2::
Changelog: https://www.webiny.com/docs/release-notes/6.4.12/changelog
How To Upgrade: https://www.webiny.com/docs/release-notes/6.4.12/upgrade-guide

—

Lots of good stuff baking for the next release, so stay tuned! :tada:
