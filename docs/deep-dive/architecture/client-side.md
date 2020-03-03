---
id: client-side
title: Webiny Client Side Architecture
sidebar_label: Client Side
---

## Client Side Architecture Graph

[![Webiny Serverless CMS - Architecture - Client Side](/img/deep-dive/architecture/webiny-architecture-client-side.png)](/img/deep-dive/architecture/webiny-architecture-client-side.png)

Apart from the deployed [API](/docs/deep-dive/architecture/api) infrastructure, Webiny also deploys another set of cloud resources for serving single page applications (SPAs). By default, every Webiny installation comes with an Admin UI app and a public facing site app. The latter also includes a sophisticated server-side rendering (SSR) and caching mechanisms in order to make it as fast as possible and to provide great SEO support.

> To learn more SPAs, different rendering approaches on the web like the SSR and isomorphic apps, and finally how Webiny utilizes all of these with proper caching techniques, make sure to check out our [Serverless Side Rendering](https://blog.webiny.com/serverless-side-rendering-e1c0924b8da1) blog post.

## Components

- A - **CloudFront web distribution**
- B - **APIGateway**
- C - **App service**
- D - **SSR service**
- E - **Database**
- F - **S3 asset storage**

## Request Flows

### A) Client is requesting a page

1. A user enters a URL into the browser - a GET HTTP request is initiated.

2. The request lands on the **(A) CloudFront web distribution**, from where the content (page HTML) will be served.
   - For public facing apps, where SSR is enabled by default, all content (SSR HTML) served from the **(C) App service** function is cached at the **(A) CloudFront web distribution** for 30 days or more.
   - For non-public-facing apps and simple SPAs (e.g. the Admin UI), where the SSR is not required, the complete app is served directly from the **(F) S3 asset storage** and the initial app HTML (`index.html` file) is cached for 5minutes.

### B) SSR HTML cache invalidation

Although the content (SSR HTML) is always served from the **(A) CloudFront web distribution**, once it's received by the browser and the React app has been initialized, a special async HTTP request is issued which will trigger a check on the backend to determine if the content for the visited URL has been marked as expired and if so, will trigger cache invalidation.

> The content can be marked as expired in many different ways. For example, for URLs that represent a page created via the Page Builder app, the content will be marked as expired when an admin publishes changes to a page or a menu has been edited.

1. Once the browser received HTML SSR from the **(A) CloudFront web distribution** and the React app has been initialized, the HTTP request is triggered.
2. Via the **(A) CloudFront web distribution**), the HTTP request reaches **(B) APIGateway**, which invokes the **(C) App service** function (also called "Site Lambda").
3. The **(C) App service** function queries the **(E) Database** in order to determine if the SSR HTML for the requested URL has expired.
4. If so, to refresh the SSR HTML, the **(C) App service** sends a cache invalidation request to the **(A) CloudFront web distribution**, and also triggers the SSR HTML regeneration, by invoking the **(D) SSR service** function.
5. By the time the cache at the **(A) CloudFront web distribution** has been cleared, the new SSR HTML content will be ready to be served.

### C) Client requesting a static asset

> Static assets in this flow are your app assets like JS & CSS files. For assets like images and documents uploaded via the File Service, checkout the [File Service](/docs/deep-dive/architecture/file-service) architecture document.

1. Client issues a GET HTTP request for a static asset, for example `/static/main.js`.
2. This request lands on the **(A) CloudFront web distribution**.
3. In case the file is not found in the cache, the **(A) CloudFront web distribution**, in order to fulfill the request, it will be forwarded to the **(F) S3 asset storage**.
