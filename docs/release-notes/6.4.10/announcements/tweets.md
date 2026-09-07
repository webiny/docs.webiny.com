Grid column stacking configured for specific breakpoints would briefly render side-by-side on page load before snapping into place — a classic SSR layout flash. Now resolved entirely in CSS, so the browser applies the correct layout immediately based on viewport width. No JavaScript, no flash.

https://www.webiny.com/docs/release-notes/6.4.10/changelog

---

Ever set `enabled={false}` on a Webiny config option and wonder why it was ignored? The VPC extension had this exact bug in production — explicit `false` was silently overridden by defaults. Now your config is actually respected. 🛠️

https://www.webiny.com/docs/release-notes/6.4.10/changelog

---

Cryptic runtime errors with no meaningful message are the worst kind of debugging. We tracked down a class of these in the SDK caused by unchecked Result pattern access — now properly validated before use.

https://www.webiny.com/docs/release-notes/6.4.10/changelog
