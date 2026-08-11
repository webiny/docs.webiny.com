Our File Manager had a sneaky bug — editing file properties would fail with a GraphQL error if you didn't have Private Files enabled. The save operation was sending access control data even when the feature wasn't available. Fixed in 6.4.8.

https://www.webiny.com/docs/release-notes/6.4.8/changelog
