Hello @channel! :wave:

Webiny 6.5.3 is out! :rocket:

This patch release focuses on reliability improvements for scheduled publishing. We fixed a race condition that could leave entries briefly unavailable if a scheduled publish failed partway through — the operation is now atomic, so you won't end up with 404s during publishing transitions. Plus, error messages from failed scheduled actions are now surfaced in the API, making troubleshooting much easier.

We also squashed a search bug in the Headless CMS where terms containing slashes (like dates or paths) would return no results. Slashes are now handled correctly, and we've also fixed an edge case where uppercase AND, OR, or NOT in your search terms could cause query errors. Check out the changelog to learn more.

—

As usual, the release notes can be found on the following links:point_down::skin-tone-2::
Changelog: https://www.webiny.com/docs/release-notes/6.5.3/changelog
How To Upgrade: https://www.webiny.com/docs/release-notes/6.5.3/upgrade-guide

—

Solid fixes, nothing flashy — just making sure your scheduled content goes live exactly when you expect it to. :ok_hand:
