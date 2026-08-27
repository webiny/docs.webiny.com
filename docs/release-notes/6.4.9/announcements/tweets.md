🛠️ Bulk publish and move-to-folder actions in Headless CMS were silently completing without actually processing any entries. Turns out the version suffix was getting stripped from entry IDs. Fixed in 6.4.9 — bulk actions now work as expected.

https://www.webiny.com/docs/release-notes/6.4.9/changelog

---

Scheduled publish and unpublish were failing on non-root tenants — the scheduler wasn't resolving tenant context correctly. Now fixed, with RuntimeTenant serving as the authority for all CMS storage operations.

https://www.webiny.com/docs/release-notes/6.4.9/changelog

---

Ever deleted a folder in Website Builder only to have its pages vanish from the UI but remain in the database? That silent failure is now an explicit error — folder deletion checks for contained items first.

https://www.webiny.com/docs/release-notes/6.4.9/changelog

---

Small detail that matters: the file picker in narrow sidebars was practically unusable. Now it stacks gracefully, truncates filenames in the middle to preserve those distinguishing suffixes, and swaps tiny icons for readable text labels.

https://www.webiny.com/docs/release-notes/6.4.9/changelog
