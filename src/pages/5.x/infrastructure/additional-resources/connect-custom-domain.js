/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/infrastructure/additional-resources/assets/connect-custom-domain/cool-website.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Connect Custom Domain",
  "description": "Learn how to connect custom domain to your application in a Webiny project.",
  "type": "docs",
  "showPageHeader": true,
  "fullWidth": false,
  "version": "5.x"
};
const docsearch = {
  "type": "docs",
  "weight": 100,
  "versions": ["5.x"]
};
const navigation = _navigation;
const versions = _versions;
const tableOfContents = [{
  "title": "Introduction",
  "slug": "introduction",
  "children": []
}, {
  "title": "Before We Begin",
  "slug": "before-we-begin",
  "children": []
}, {
  "title": "Configure the Custom Domain in the Website App",
  "slug": "configure-the-custom-domain-in-the-website-app",
  "children": []
}, {
  "title": "Point Domain to CloudFront Distribution",
  "slug": "point-domain-to-cloud-front-distribution",
  "children": []
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": []
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Editor = makeShortcode("Editor");
const Image = makeShortcode("Image");
const layoutProps = {
  Layout,
pageData,
docsearch,
navigation,
versions,
tableOfContents
};
const MDXLayout = "wrapper"
export default function MDXContent({
  components,
  ...props
}) {
  return <MDXLayout {...layoutProps} {...props} components={components} mdxType="MDXLayout">




<Alert type="success" title="What you’ll learn" mdxType="Alert">
<ul>
<li parentName="ul">{`how to connect custom domain to your project application`}</li>
</ul>
</Alert>
<_Heading level={2} id={"introduction"} nextElement={{
      "type": "paragraph"
    }}>Introduction</_Heading>
<p>{`By default, both `}<strong parentName="p">{`Admin Area`}</strong>{` `}<inlineCode parentName="p">{`(apps/admin)`}</inlineCode>{` and `}<strong parentName="p">{`Website`}</strong>{` `}<inlineCode parentName="p">{`(apps/website)`}</inlineCode>{` React applications are accessible via a CloudFront URL.
This is fine for development purposes, however, for the production environment, you will most likely need a custom domain for those applications. This is because custom domains are human-readable, easy to remember, and good for branding.`}</p>
<p>{`In this guide, we show how to connect a custom domain to the `}<strong parentName="p">{`Website`}</strong>{` `}<inlineCode parentName="p">{`(apps/website)`}</inlineCode>{` React application,
however, the same steps can be used for connecting it to the `}<strong parentName="p">{`Admin Area`}</strong>{` `}<inlineCode parentName="p">{`(apps/admin)`}</inlineCode>{` React application, and also the `}<strong parentName="p">{`GraphQL API`}</strong>{` `}<inlineCode parentName="p">{`(apps/api)`}</inlineCode>{` application.`}</p>
<_Heading level={2} id={"before-we-begin"} nextElement={{
      "type": "paragraph"
    }}>Before We Begin</_Heading>
<p>{`Before starting with this guide, make sure to do the following:`}</p>
<ul>
<li parentName="ul">{`Register the domain name with the domain provider of your choice.`}</li>
<li parentName="ul">{`Create a certificate using `}<a parentName="li" {...{
          "href": "https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html"
        }}>{`AWS Certificate Manager (ACM)`}</a>{`
that covers the domain name you plan to use with the distribution to validate that you are authorized to use the domain.
You can also import an existing certificate into ACM from an authorized certificate authority (CA).`}</li>
</ul>
<Alert type="info" mdxType="Alert">
<p>{`Learn more about requesting a public certificate using AWS Certificate Manager (ACM) in the official `}<a parentName="p" {...{
          "href": "https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-public.html#request-public-console"
        }}>{`AWS documentation article`}</a>{`.`}</p>
</Alert>
<Alert type="info" mdxType="Alert">
<p>{`Read more about requirements for using alternate domain names in the official `}<a parentName="p" {...{
          "href": "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/CNAMEs.html#alternate-domain-names-requirements"
        }}>{`AWS documentation article`}</a>{`.`}</p>
</Alert>
<_Heading level={2} id={"configure-the-custom-domain-in-the-website-app"} nextElement={{
      "type": "code",
      "lang": "diff-ts",
      "meta": "apps/website/webiny.application.ts"
    }}>Configure the Custom Domain in the Website App</_Heading>
<Editor title="apps/website/webiny.application.ts" lang="diff-ts" mdxType="Editor">
{`import { createWebsiteApp } from "@webiny/serverless-cms-aws";

export default createWebsiteApp({
    pulumiResourceNamePrefix: "wby-",
+    domains() {
+      return {
+        domains: ["my.domain.com"],
+        sslSupportMethod: "sni-only",
+        acmCertificateArn:
+          "arn:aws:acm:us-east-1:636962863878:certificate/3baf9092-fb27-4efb-9409-XXXXXXXX"
+      };
+    }
});`}
</Editor>
<p>{`With the above changes in place, `}<inlineCode parentName="p">{`deploy`}</inlineCode>{` the `}<strong parentName="p">{`Website`}</strong>{` project application, so that the new configuration is properly applied.`}</p>
<Editor title="" lang="shell" mdxType="Editor">
{`yarn webiny deploy apps/website --env=dev`}
</Editor>
<Alert type="info" mdxType="Alert">
<p>{`The instructions shown above also apply to the `}<strong parentName="p">{`API`}</strong>{` and the `}<strong parentName="p">{`Admin Area`}</strong>{` apps. Use the same configuration steps in their respective `}<inlineCode parentName="p">{`webiny.application.ts`}</inlineCode>{` files.`}</p>
</Alert>
<p>{`It’s time to move on to the last step, which is pointing our custom domain to the CloudFront Distribution.`}</p>
<_Heading level={2} id={"point-domain-to-cloud-front-distribution"} nextElement={{
      "type": "paragraph"
    }}>Point Domain to CloudFront Distribution</_Heading>
<p>{`Now that we have connected our custom domain as the alternative domain for the CloudFront URL, we also must configure the DNS service for the domain to route traffic for the domain,
such as `}<inlineCode parentName="p">{`coolwebsite.com`}</inlineCode>{`, to the CloudFront domain name for your distribution, such as `}<inlineCode parentName="p">{`d111111abcdef8.cloudfront.net`}</inlineCode>{`.`}</p>
<p>{`Use the method provided by your DNS service provider to add a `}<strong parentName="p">{`CNAME`}</strong>{` record for your domain.
This new `}<strong parentName="p">{`CNAME`}</strong>{` record will redirect DNS queries from your domain (for example, `}<inlineCode parentName="p">{`coolwebsite.com`}</inlineCode>{`) to the CloudFront domain name for your distribution (for example, `}<inlineCode parentName="p">{`d111111abcdef8.cloudfront.net`}</inlineCode>{`).
For more information, see the documentation provided by your DNS service provider.`}</p>
<Alert type="success" mdxType="Alert">
<p>{`The changes made to the DNS service might take few minutes to propagate.
You can use a service like `}<a parentName="p" {...{
          "href": "https://dnschecker.org/"
        }}>{`DNS Checker`}</a>{` to check the status of newly added `}<strong parentName="p">{`CNAME`}</strong>{` record.`}</p>
</Alert>
<p>{`Finally, test the alternate domain name by visiting URLs with your domain name instead of the CloudFront domain name of your distribution:`}</p>
<Image src={_Image1} alt={"Website with custom domain"} mdxType="Image" />
<_Heading level={2} id={"faq"} nextElement={{
      "type": "paragraph"
    }}>FAQ</_Heading>
<p><strong parentName="p">{`Do we need to apply the domain changes to multiple applications or just the Admin app? `}</strong></p>
<p>{`On order to have all three applications, `}<strong parentName="p">{`API`}</strong>{` (`}<inlineCode parentName="p">{`apps/api`}</inlineCode>{`), `}<strong parentName="p">{`Admin`}</strong>{` (`}<inlineCode parentName="p">{`apps/admin`}</inlineCode>{`), and `}<strong parentName="p">{`Website`}</strong>{` (`}<inlineCode parentName="p">{`apps/website`}</inlineCode>{`), publicly accessible over a custom domain, domain changes need to be applied for all three applications. This is done via their respective `}<inlineCode parentName="p">{`webiny.application.ts`}</inlineCode>{` configuration files.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;