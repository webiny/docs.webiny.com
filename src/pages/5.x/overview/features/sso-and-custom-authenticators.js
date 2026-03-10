/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "SSO & Custom Authenticators",
  "description": "Overview of different user authentication options within Webiny",
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
  "title": "About",
  "slug": "about",
  "children": []
}, {
  "title": "Webiny OSS vs Webiny Enterprise",
  "slug": "webiny-oss-vs-webiny-enterprise",
  "children": []
}, {
  "title": "API Gateway Lambda Authorizers",
  "slug": "api-gateway-lambda-authorizers",
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
const CanIUseThis = makeShortcode("CanIUseThis");
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



<CanIUseThis enterprise={true} since={"5.22.0"} mdxType="CanIUseThis" />
<Alert type="success" title="What You’ll Learn" mdxType="Alert">
<ul>
<li parentName="ul">{`Different authentication options`}</li>
<li parentName="ul">{`API Gateway Lambda authorizer`}</li>
</ul>
</Alert>
<_Heading level={2} id={"about"} nextElement={{
      "type": "paragraph"
    }}>About</_Heading>
<p>{`Webiny by default ships with Cognito user pools as the default identity provider (IdP). Cognito is a proven IdP used in many enterprises today and should be enough to satisfy most of the security requirements within many different organizations.`}</p>
<_Heading level={2} id={"webiny-oss-vs-webiny-enterprise"} nextElement={{
      "type": "paragraph"
    }}>Webiny OSS vs Webiny Enterprise</_Heading>
<p>{`In certain cases, an enterprise organization might already have an internal IdP in place for their employees and often the security department requires all vendors and solutions to integrate with this IdP.`}</p>
<p>{`Customers using Webiny Enterprise edition can integrate those 3rd party IdPs with Webiny and use it to control, from a central place, which of their employees are allowed to access their Webiny instance.`}</p>
<p>{`Webiny provides integrations with the most popular IdPs such as `}<_Link href="/docs/5.x/enterprise/okta-integration">{`OKTA`}</_Link>{` and `}<_Link href="/docs/5.x/enterprise/auth0-integration">{`Auth0`}</_Link>{` out of the box. For other IdPs and SSO Webiny’s core engineering team can work directly with the customer and make those integrations, as part of their Webiny Enterprise contract.`}</p>
<_Heading level={2} id={"api-gateway-lambda-authorizers"} nextElement={{
      "type": "paragraph"
    }}>API Gateway Lambda Authorizers</_Heading>
<p>{`Certain organizations take every possible step to harden the security of applications and solutions deployed within their network. In certain cases, it might not be possible to use a specific solution if it doesn’t meet those security requirements. One of those security policies is a requirement that API Gateways cannot have their Authorizers set to NONE. Instead, a Lambda authorizer function is required. A Lambda authorizer is an API Gateway feature that uses a Lambda function to control access to your API.`}</p>
<p>{`As a Webiny Enterprise customer, you will get the required support and ready-made plugins and scripts to implement your API Gateway Lambda authorizer.`}</p>
<_Heading level={2} id={"faq"} nextElement={{
      "type": "paragraph"
    }}>FAQ</_Heading>
<p><strong parentName="p">{`Can I use the OKTA and Auth0 integrations if I’m not an enterprise customer?`}</strong></p>
<p>{`The OKTA and Auth0 ready-made integrations are only available under the Webiny Enterprise contract and only organizations under that contract are allowed to use this feature.`}</p>
<p><strong parentName="p">{`Can I build my own integration if I’m not an enterprise customer?`}</strong></p>
<p>{`The short answer is no. Webiny is licensed under a dual-license model, where the majority of the code base is under the MIT license, and the other smaller part is under our proprietary license. Developing a custom IdP integration requires access to the code that’s under the proprietary license.`}</p>
<p><strong parentName="p">{`Why did you lock this feature under an enterprise offering?`}</strong></p>
<p>{`As with many other businesses we too need to have a sustainable revenue model. Webiny in the open-source version is giving away over 90% of its capabilities and features completely for free. But to fund the future development of Webiny certain features are only available under the Enterprise of Business paid tiers. By purchasing the paid features you are supporting us as a business and as a product for many years to come.`}</p>
<p><strong parentName="p">{`Can I still use the open-source version of Webiny inside my enterprise organization if we use Cognito?`}</strong></p>
<p>{`Yes. you can. The open-source version of Webiny ships with AWS Cognito as the IdP and uses the Cognito user pools to manage the user accounts and access. This setup is free for anyone to use.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;