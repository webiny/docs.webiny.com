Ever wondered why your custom `stage` environment wasn't getting VPC and other production infrastructure? Turns out only `prod` and `production` were being recognized. Now your configured production environments actually deploy with the setup they deserve.

https://www.webiny.com/docs/release-notes/6.4.4/changelog

---

Federated sign-in is here. Connect Google, Microsoft Entra ID, Facebook, or any OIDC-compliant identity provider to Webiny through Amazon Cognito. Your users authenticate with credentials they already have — no separate Webiny accounts needed.

https://www.webiny.com/docs/release-notes/6.4.4/changelog

---

Need different OpenSearch index strategies for different CMS models? The new decorator-based `CmsModelOpenSearchIndex` abstraction lets you control per-model whether to use shared or isolated indexes across tenants. No more last-wins configuration headaches.

https://www.webiny.com/docs/release-notes/6.4.4/changelog

---

Stack output lookups were hitting Pulumi on every read, slowing down deploys and watch mode. Now they're cached locally and reused automatically. The cache clears when you destroy an app, so results stay accurate without the wait. ⚡

https://www.webiny.com/docs/release-notes/6.4.4/changelog
