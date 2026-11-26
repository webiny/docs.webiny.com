Hello @channel! :wave:

Webiny 6.5.3 is out! :rocket:

This patch release focuses on reliability improvements for scheduled publishing. We fixed a race condition that could leave an entry with no published revision (and API consumers getting 404s) if a scheduled publish failed partway through — the swap is now a single atomic write, so the old revision stays live until the new one is published. Plus, error messages from failed scheduled actions are now surfaced in the API, making troubleshooting much easier.

We also squashed a search bug in the Headless CMS (OpenSearch setups) where terms containing slashes (like dates or paths) would return no results. Slashes are now handled correctly, and we've also fixed an edge case where uppercase AND, OR, or NOT in your search terms could cause query errors. Check out the changelog to learn more.

—

As usual, the release notes can be found on the following links:point_down::skin-tone-2::
Changelog: https://www.webiny.com/docs/release-notes/6.5.3/changelog
How To Upgrade: https://www.webiny.com/docs/release-notes/6.5.3/upgrade-guide

—

Solid fixes, nothing flashy — just making sure a scheduled publish never takes your content offline. :ok_hand:
