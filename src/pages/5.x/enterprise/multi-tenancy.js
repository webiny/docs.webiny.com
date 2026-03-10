/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image4 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/assets/multi-tenancy/lambda-delete-error.png'
import _Image3 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/assets/multi-tenancy/new-tenant.png'
import _Image2 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/assets/multi-tenancy/tenant-settings-dialog.png'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/assets/multi-tenancy/root-tenant-settings.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Setup Multi-Tenancy",
  "description": "Learn how to configure multi-tenancy in your Webiny project",
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
  "title": "Overview",
  "slug": "overview",
  "children": []
}, {
  "title": "1) Prepare the Project",
  "slug": "1-prepare-the-project",
  "children": []
}, {
  "title": "2) Connect Your Project With Webiny Control Panel",
  "slug": "2-connect-your-project-with-webiny-control-panel",
  "children": []
}, {
  "title": "3) Create a Certificate in AWS ACM",
  "slug": "3-create-a-certificate-in-aws-acm",
  "children": []
}, {
  "title": "4) Configure website Infrastructure",
  "slug": "4-configure-website-infrastructure",
  "children": []
}, {
  "title": "5) Deploy Your Project",
  "slug": "5-deploy-your-project",
  "children": []
}, {
  "title": "6) Configure Custom Domains for Tenants",
  "slug": "6-configure-custom-domains-for-tenants",
  "children": []
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "I'm Receiving a Pulumi Error Saying Something About CloudFront Request Headers.",
    "slug": "i-m-receiving-a-pulumi-error-saying-something-about-cloud-front-request-headers",
    "children": []
  }, {
    "title": "Pulumi Throws an Error While Deleting My Lambda@Edge Function",
    "slug": "pulumi-throws-an-error-while-deleting-my-lambda-edge-function",
    "children": []
  }, {
    "title": "Pulumi Throws an Error When Creating the Website Cloudfront Distribution",
    "slug": "pulumi-throws-an-error-when-creating-the-website-cloudfront-distribution",
    "children": []
  }, {
    "title": "What if I Want to Serve All Tenants From a Wildcard Domain or From a Custom Domain, Without Needing to Make Infrastructure Changes or Redeploy My Project?",
    "slug": "what-if-i-want-to-serve-all-tenants-from-a-wildcard-domain-or-from-a-custom-domain-without-needing-to-make-infrastructure-changes-or-redeploy-my-project",
    "children": []
  }]
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const CanIUseThis = makeShortcode("CanIUseThis");
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







<CanIUseThis business since={"5.22.0"} mdxType="CanIUseThis" />
<Alert type="success" title="What you'll learn" mdxType="Alert">
<ul>
<li parentName="ul">{`how to enable multi-tenancy in the existing Webiny project`}</li>
<li parentName="ul">{`how to assign custom domains to each tenant`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`There are a few steps involved in enabling multi-tenancy:`}</p>
<ul>
<li parentName="ul">{`connecting your project to Webiny Control Panel`}</li>
<li parentName="ul">{`creating a certificate in AWS ACM, and linking it with CloudFront distribution`}</li>
</ul>
<p>{`Cloudfront will be used for TLS termination, and AWS ACM for certificate management. Customers may use other 3rd party CDNs for those steps. If that’s the case, please get in touch, so we can support you through the setup.`}</p>
<p>{`The following sections guide you through the process in a step-by-step manner.`}</p>
<_Heading level={2} id={"1-prepare-the-project"} nextElement={{
      "type": "paragraph"
    }}>1) Prepare the Project</_Heading>
<p>{`Your project needs to be created starting with version `}<inlineCode parentName="p">{`5.29.0`}</inlineCode>{` to use this feature.
You can use an existing project, or create a new one by running:`}</p>
<Editor title="" lang="shell" mdxType="Editor">
{`npx create-webiny-project my-project`}
</Editor>
<_Heading level={2} id={"2-connect-your-project-with-webiny-control-panel"} nextElement={{
      "type": "paragraph"
    }}>2) Connect Your Project With Webiny Control Panel</_Heading>
<p>{`First, you will need a Webiny Control Panel account. If you don’t have one, please contact us at `}<inlineCode parentName="p">{`sales@webiny.com`}</inlineCode>{`.`}</p>
<p>{`Once you have your account, connect your project by running the following command:`}</p>
<Editor title="" lang="shell" mdxType="Editor">
{`yarn webiny login`}
</Editor>
<p>{`From here, follow the onscreen instructions.`}</p>
<_Heading level={2} id={"3-create-a-certificate-in-aws-acm"} nextElement={{
      "type": "jsx"
    }}>3) Create a Certificate in AWS ACM</_Heading>
<Alert type="info" title="Please note" mdxType="Alert">
<p>{`Configuration of a custom domain is optional. If you just want to have a multi-tenant GraphQL API,
a custom domain is not required. If that’s what you’re looking for, you can skip to `}<a parentName="p" {...{
          "href": "#5-deploy-your-project"
        }}>{`project
deployment`}</a>{`.`}</p>
<p>{`However, if you want to build websites for each tenant using the `}<_Link href="/docs/5.x/overview/applications/page-builder">{`Page Builder`}</_Link>{`, you will have
to setup custom domains. If so, please read on.`}</p>
</Alert>
<p>{`Before we modify the infrastructure setup, and deploy the project, we’ll need to have a valid certificate in AWS ACM. Go to `}<a parentName="p" {...{
        "href": "https://console.aws.amazon.com/acm/home?region=us-east-1#/certificates/request"
      }}>{`https://console.aws.amazon.com/acm/home?region=us-east-1#/certificates/request`}</a>{` and request a new certificate, or import an existing one.`}</p>
<p>{`Once the domains in the certificate are verified, we can proceed to Webiny configuration. For more information on creating certificates and validating hostnames, please go to `}<a parentName="p" {...{
        "href": "https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html"
      }}>{`What Is AWS Certificate Manager? - AWS Certificate Manager`}</a></p>
<_Heading level={2} id={"4-configure-website-infrastructure"} nextElement={{
      "type": "paragraph"
    }}>4) Configure<code>website</code>Infrastructure</_Heading>
<p>{`To configure the `}<inlineCode parentName="p">{`website`}</inlineCode>{` app with your custom domain(s), navigate to `}<inlineCode parentName="p">{`apps/website/webiny.application.ts`}</inlineCode>{` and modify it to look like this:`}</p>
<Editor title="apps/website/webiny.application.ts" lang="ts" mdxType="Editor">
{`import { createWebsiteApp } from "@webiny/serverless-cms-aws";

export default createWebsiteApp({
  pulumiResourceNamePrefix: "wby-",
  domains() {
    return {
      domains: ["my.domain.com"],
      sslSupportMethod: "sni-only",
      acmCertificateArn:
        "arn:aws:acm:us-east-1:111111111111:certificate/5931d8b4-a39b-4a3a-a4e7-f5bbdd78d599"
    };
  }
});`}
</Editor>
<p>{`For the `}<inlineCode parentName="p">{`acmCertificateArn`}</inlineCode>{`, use the ARN of the certificate you created in step 3).`}</p>
<p>{`For `}<inlineCode parentName="p">{`domains`}</inlineCode>{`, enter the custom domains supported by your certificate. You can use wildcards to support multiple subdomains.`}</p>
<Alert type="info" title="Recommendation" mdxType="Alert">
<p>{`Every tenant `}<em parentName="p">{`must`}</em>{` have a corresponding custom domain to enable Webiny to route website requests correctly. Usually we recommend having a wildcard domain, like `}<inlineCode parentName="p">{`*.domain.com`}</inlineCode>{`, and have each tenant use a subdomain, like `}<inlineCode parentName="p">{`tenant1.domain.com`}</inlineCode>{`. This setup is then easily managed using, for example, CloudFlare, to route real tenant domains to your internal ones.`}</p>
</Alert>
<_Heading level={2} id={"5-deploy-your-project"} nextElement={{
      "type": "paragraph"
    }}>5) Deploy Your Project</_Heading>
<p>{`Now it’s time to deploy the entire project. We need to deploy everything: `}<inlineCode parentName="p">{`api`}</inlineCode>{`, `}<inlineCode parentName="p">{`admin`}</inlineCode>{`, and `}<inlineCode parentName="p">{`website`}</inlineCode>{`. The easiest way to do all 3 at once, is by running the following:`}</p>
<Editor title="" lang="shell" mdxType="Editor">
{`yarn webiny deploy --env=dev`}
</Editor>
<_Heading level={2} id={"6-configure-custom-domains-for-tenants"} nextElement={{
      "type": "paragraph"
    }}>6) Configure Custom Domains for Tenants</_Heading>
<p>{`Once your project is deployed, open your `}<inlineCode parentName="p">{`admin`}</inlineCode>{` app. To configure a custom domain for the root tenant, hover over the `}<inlineCode parentName="p">{`Root Tenant`}</inlineCode>{` label in the top app bar, and click it. This will open a settings dialog, where you can configure custom domains for your root tenant.`}</p>
<Image src={_Image1} alt={"Open Root Tenant Settings Dialog."} mdxType="Image" />
<Image src={_Image2} alt={"Configure Root Tenant Custom Domains."} mdxType="Image" />
<Alert type="danger" title="Important" mdxType="Alert">
<p>{`If you don’t have a custom domain for your root tenant, you should enter your CloudFront CDN domain here. Otherwise, the Lambda@Edge router will not be able to route the request to your root tenant website.`}</p>
<p>{`To find your CloudFront website domain, run `}<inlineCode parentName="p">{`yarn webiny info --env=dev`}</inlineCode>{` and look for the `}<inlineCode parentName="p">{`Website URL`}</inlineCode>{`.`}</p>
</Alert>
<p>{`For your sub-tenants, domain configuration is located in the tenant form:`}</p>
<Image src={_Image3} alt={"Domain Settings For Sub-Tenants."} mdxType="Image" />
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"i-m-receiving-a-pulumi-error-saying-something-about-cloud-front-request-headers"} nextElement={{
      "type": "paragraph"
    }}>I&#39;m Receiving a Pulumi Error Saying Something About CloudFront Request Headers.</_Heading>
<p>{`You may occasionally run into an error that goes something like this:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`error: deleting urn:pulumi:dev::website::aws:cloudfront/distribution:Distribution::delivery: 1 error occurred:
* CloudFront Distribution E36AOIOBR5JHMQ cannot be deleted: PreconditionFailed: The request failed because it didn't meet the preconditions in one or more request-header fields.
status code: 412`}
</Editor>
<p>{`This one is usually resolved by refreshing the Pulumi state of the `}<inlineCode parentName="p">{`website`}</inlineCode>{` project application:`}</p>
<Editor title="" lang="shell" mdxType="Editor">
{` yarn webiny pulumi apps/website --env=dev -- refresh --yes`}
</Editor>
<blockquote>
<p parentName="blockquote">{`NOTE: there’s a space between `}<inlineCode parentName="p">{`--`}</inlineCode>{` and `}<inlineCode parentName="p">{`refresh`}</inlineCode>{`.`}</p>
</blockquote>
<p>{`After this, running the `}<inlineCode parentName="p">{`deploy`}</inlineCode>{` command goes back to normal.`}</p>
<_Heading level={3} id={"pulumi-throws-an-error-while-deleting-my-lambda-edge-function"} nextElement={{
      "type": "paragraph"
    }}>Pulumi Throws an Error While Deleting My Lambda@Edge Function</_Heading>
<p>{`You’re probably seeing the following error:`}</p>
<Image src={_Image4} alt={"Error Deleting Lambda@Edge Function."} mdxType="Image" />
<p>{`Lambda@Edge functions are replicated to all AWS Edge locations. This means that this particular function will not be deleted until AWS removes it from all the Edge locations. Even thought this error looks terrible, your deploy went just fine. Give it a couple of minutes, and re-deploy. You’ll see that, after some time, your old Lambda@Edge function will be deleted successfully.`}</p>
<_Heading level={3} id={"pulumi-throws-an-error-when-creating-the-website-cloudfront-distribution"} nextElement={{
      "type": "paragraph"
    }}>Pulumi Throws an Error When Creating the Website Cloudfront Distribution</_Heading>
<p>{`You can’t have the same FQDN configured in more than 1 CF distribution under the same account. If you do, then you will see the following error.`}</p>
<Editor title="" lang="shell" mdxType="Editor">
{` +  aws:cloudfront:Distribution delivery **creating failed** error: 1 error occurred:
 +  pulumi:pulumi:Stack website-dev creating error: update failed
 +  pulumi:pulumi:Stack website-dev **creating failed** 1 error

Diagnostics:
  pulumi:pulumi:Stack (website-dev):
    error: update failed

  aws:cloudfront:Distribution (delivery):
    error: 1 error occurred:
    	* error creating CloudFront Distribution: CNAMEAlreadyExists: One or more of the CNAMEs you provided are already associated with a different resource.
    	status code: 409, request id: 0ad55a32-0a28-4411-abee-326808393fb9`}
</Editor>
<p>{`Go back to the CF distribution where that hostname is configured, remove it - if it’s safe to do so - and re-run the webiny deploy command.`}</p>
<_Heading level={3} id={"what-if-i-want-to-serve-all-tenants-from-a-wildcard-domain-or-from-a-custom-domain-without-needing-to-make-infrastructure-changes-or-redeploy-my-project"} nextElement={{
      "type": "paragraph"
    }}>What if I Want to Serve All Tenants From a Wildcard Domain or From a Custom Domain, Without Needing to Make Infrastructure Changes or Redeploy My Project?</_Heading>
<p>{`Say you have the Webiny `}<inlineCode parentName="p">{`website`}</inlineCode>{` app installed on `}<inlineCode parentName="p">{`x.cloudfront.com`}</inlineCode>{`. To that CloudFront you need to add a wildcard certificate with a wildcard domain, say `}<inlineCode parentName="p">{`*.example.com`}</inlineCode>{`.
When you create a tenant inside Webiny, you need to give them an FQDN. Add one and make sure it matches the wildcard. Example: `}<inlineCode parentName="p">{`foo.example.com`}</inlineCode>{`.
This way when you create a new tenant with a custom domain, you don’t need to make any updates to CloudFront.`}</p>
<p>{`Say that the same tenant has a custom domain of `}<inlineCode parentName="p">{`www.bar.com`}</inlineCode>{`. To support fully custom FQDN without any CloudFront changes, you need to do the next step.`}</p>
<p>{`On the DNS of `}<inlineCode parentName="p">{`bar.com`}</inlineCode>{` add a CNAME to `}<inlineCode parentName="p">{`foo.example.com`}</inlineCode>{` (has to match the wildcard domain on CloudFront) for the `}<inlineCode parentName="p">{`www`}</inlineCode>{` entry. On the same CDN make sure to overwrite the forward host header so that the CDN sends `}<inlineCode parentName="p">{`foo.example.com`}</inlineCode>{` as the host header to CloudFront when it goes forward. This way the Lambda@Edge function will receive `}<inlineCode parentName="p">{`foo.example.com`}</inlineCode>{` as the hostname name and will be able to resolve it to the correct tenant, although the client requested `}<inlineCode parentName="p">{`www.bar.com`}</inlineCode>{`.`}</p>
<p><strong parentName="p">{`Note:`}</strong>{` You will need to use a more advanced CDN for this, such as Fastly, Akamai, or a paid version of CloudFlaire as the ability to overwrite the forward host header is not supported in may other CDNs.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;