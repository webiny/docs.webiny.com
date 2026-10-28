Hello @channel! :wave:

Webiny 6.5.1 is out! :rocket:

This release brings some nice quality-of-life improvements across the board. We've made bulk actions on pages and content entries much more resilient — if one item fails during a bulk publish, delete, or move, the operation now continues for the rest instead of aborting completely. You'll also find a new step-by-step birthday picker for date fields, which makes collecting birthdays and dates of birth way more intuitive than the standard calendar.

On the admin side, we've improved how users land in their tenants after login. No more silent failures for users who only exist in sub-tenants — they now get redirected automatically or shown a tenant picker. Plus, one Cognito account can now be shared across multiple tenants for the same person, making multi-tenant setups cleaner to manage.

Heads up: the `login` mutation's `data` field is now a union type, so GraphQL clients that select fields on it directly need to switch to `... on SecurityIdentity` fragments. Custom admin user storage and Cognito implementations also need small updates. The changelog has the details.

We've also squashed a handful of bugs, including rich text fields that started empty saving the last typed text instead of the cleared value, workflow-approved entries not publishing properly, and the Translate action being hidden for users without AI Powerups. Check out the changelog to learn more.

—

As usual, the release notes can be found on the following links:point_down::skin-tone-2::
Changelog: https://www.webiny.com/docs/release-notes/6.5.1/changelog
How To Upgrade: https://www.webiny.com/docs/release-notes/6.5.1/upgrade-guide

—

That wraps it up for this one — more good stuff coming soon, so stay tuned! :tada:
