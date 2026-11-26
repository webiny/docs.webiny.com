Hello @channel! :wave:

Webiny 6.5.3 is out! :rocket:

This patch release makes scheduled publishing more reliable. Previously, if a scheduled publish failed partway through, an entry could end up with no published version and drop off your site until someone republished it by hand. That can't happen anymore. And when a scheduled action does fail, you can now see why.

We also fixed content search in the Headless CMS for projects running OpenSearch. Searching for something with a slash in it, like a date such as 11/14, now finds the entries you'd expect, and searches that include words like AND, OR or NOT no longer fail. Check out the changelog to learn more.

—

As usual, the release notes can be found on the following links:point_down::skin-tone-2::
Changelog: https://www.webiny.com/docs/release-notes/6.5.3/changelog
How To Upgrade: https://www.webiny.com/docs/release-notes/6.5.3/upgrade-guide

—

Solid fixes, nothing flashy — just making sure a scheduled publish never takes your content offline. :ok_hand:
