Scheduled actions for multi-tenant setups just got a critical fix. Previously, publish/unpublish actions created on non-root tenants would fail because the event handler couldn't locate entries in the correct tenant context. Now sorted in 6.4.3.

https://www.webiny.com/docs/release-notes/6.4.3/changelog

---

Want to point a custom domain at your Admin or API app? Webiny 6.4.3 lets you provision the SSL certificate during deployment instead of creating it beforehand. One deploy, done.

https://www.webiny.com/docs/release-notes/6.4.3/changelog

---

Small detail, big impact: the title in the Page Builder and Content Model editors now looks and behaves identically. Click-to-edit, same styling, same feel across both. Consistency matters 🎯

https://www.webiny.com/docs/release-notes/6.4.3/changelog

---

Workflow state management was silently breaking due to MobX observable proxies being passed to structuredClone and JSON.stringify. Fixed in 6.4.3 — dirty detection, review flows, and pagination all work reliably now.

https://www.webiny.com/docs/release-notes/6.4.3/changelog
