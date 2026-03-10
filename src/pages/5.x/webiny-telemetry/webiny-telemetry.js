/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Webiny Telemetry",
  "description": "Learn about the Webiny telemetry",
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
  "title": "Our Products",
  "slug": "our-products",
  "children": []
}, {
  "title": "Transparency and Improvement",
  "slug": "transparency-and-improvement",
  "children": []
}, {
  "title": "What Data Do You Collect?",
  "slug": "what-data-do-you-collect",
  "children": [{
    "title": "1. Product Analytics",
    "slug": "1-product-analytics",
    "children": []
  }, {
    "title": "2. Usage Analytics",
    "slug": "2-usage-analytics",
    "children": []
  }, {
    "title": "3. Users and Environments",
    "slug": "3-users-and-environments",
    "children": []
  }]
}, {
  "title": "Is the Data Stored or Distributed to a 3rd Party?",
  "slug": "is-the-data-stored-or-distributed-to-a-3rd-party",
  "children": []
}, {
  "title": "What About Sensitive Data? (e.g. Secrets)",
  "slug": "what-about-sensitive-data-e-g-secrets",
  "children": []
}];

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


<_Heading level={2} id={"our-products"} nextElement={{
      "type": "paragraph"
    }}>Our Products</_Heading>
<p>{`Webiny CMS is a self-hosted product that runs in the customer’s own cloud infrastructure. Data that is generated and created by the product is processed and stored with the cloud provider.`}</p>
<p>{`Webiny Control Panel is a management dashboard that tracks usage and license terms of individual Webiny CMS instances. It is a SAAS product that is hosted on our AWS account.`}</p>
<_Heading level={2} id={"transparency-and-improvement"} nextElement={{
      "type": "paragraph"
    }}>Transparency and Improvement</_Heading>
<p>{`We have created this page to be fully transparent about the information we collect, how we use and store it. We want to add that this data doesn’t reveal any personal identifiable information (PII) of you as an individual.`}</p>
<p>{`We use the data in an honest way and with a single purpose - to improve Webiny as a product for yourself and the wider community.`}</p>
<_Heading level={2} id={"what-data-do-you-collect"} nextElement={{
      "type": "paragraph"
    }}>What Data Do You Collect?</_Heading>
<p>{`We collect these different types of telemetry data:`}</p>
<ol>
<li parentName="ol"><a parentName="li" {...{
          "href": "#1-product-analytics"
        }}>{`CMS Product Analysis`}</a></li>
<li parentName="ol"><a parentName="li" {...{
          "href": "#2-usage-analytics"
        }}>{`CMS Usage Analytics`}</a></li>
<li parentName="ol"><a parentName="li" {...{
          "href": "#3-users-and-environments"
        }}>{`Users and Environments (via Webiny Control Panel)`}</a></li>
</ol>
<_Heading level={3} id={"1-product-analytics"} nextElement={{
      "type": "paragraph"
    }}>1. Product Analytics</_Heading>
<p>{`The product analytics are optional; you have control to turn it on or off.`}</p>
<p>{`Product analytics help us build a better product by better understanding the usage patterns of Webiny CMS. The product analytics data is captured within the Webiny CMS Admin dashboard, and within the Webiny CLI utility.`}</p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Source`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Purpose`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Events`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Data sent / stored`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Bindingness`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><a parentName="td" {...{
              "href": "https://www.npmjs.com/package/@webiny/cli"
            }}>{`CLI`}</a></td>
<td parentName="tr" {...{
            "align": null
          }}><ul><li>{`Drive product improvements`}</li><li>{` Product usage insights`}</li><li>{` Troubleshooting issues in critical workflow steps`}</li></ul></td>
<td parentName="tr" {...{
            "align": null
          }}><ul><li>{`Create Webiny project started`}</li><li>{`Create Webiny project finished`}</li><li>{`Create Webiny project errors (with error messages and stack trace provided)`}</li><li>{`Deployment started`}</li><li>{`Deployment finished`}</li><li>{`Deployment errors (with error messages and stack trace provided)`}</li><li>{`Enable telemetry`}</li><li>{`Disable telemetry`}</li></ul></td>
<td parentName="tr" {...{
            "align": null
          }}><ul><li>{`Event Name`}</li><li>{`Timestamp`}</li><li>{`Unique project ID (UUID)`}</li><li>{`End-user IP Address`}</li><li>{`Error messages and stack trace (in the case of errors)`}</li></ul></td>
<td parentName="tr" {...{
            "align": null
          }}>{`Optional via opt-out`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><a parentName="td" {...{
              "href": "https://www.npmjs.com/package/webiny-admin"
            }}>{`Admin Dashboard`}</a></td>
<td parentName="tr" {...{
            "align": null
          }}><ul><li>{`Drive product improvements`}</li><li>{`Product usage insights`}</li></ul></td>
<td parentName="tr" {...{
            "align": null
          }}><ul><li>{`Admin App launched`}</li><li>{`Custom website domain updated (with domain name provided)`}</li></ul></td>
<td parentName="tr" {...{
            "align": null
          }}><ul><li>{`Event name`}</li><li>{`Timestamp`}</li><li>{`Product version`}</li><li>{`Unique project ID (UUID)`}</li><li>{`Admin App URL`}</li><li>{`End-user IP Address`}</li><li>{`Custom website domain event: Website URL`}</li></ul></td>
<td parentName="tr" {...{
            "align": null
          }}>{`Optional via opt-out`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"2-usage-analytics"} nextElement={{
      "type": "paragraph"
    }}>2. Usage Analytics</_Heading>
<p>{`Usage analytics track the number of API calls and number of user seats the customer is using. The data is anonymized and tracked as a cumulative number only. Usage analytics are used to ensure the customer is using the product within the agreed terms and conditions defined by the Webiny Enterprise contract. Usage analytics are mandatory and cannot be turned off.`}</p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Source`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Purpose`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Events`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Data sent / stored`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Bindingness`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><a parentName="td" {...{
              "href": "https://www.npmjs.com/package/@webiny/api-headless-cms"
            }}>{`Webiny CMS API`}</a></td>
<td parentName="tr" {...{
            "align": null
          }}><ul><li>{`License management (inc. entitlements)`}</li><li>{`Billing`}</li><li>{`Product usage insights`}</li></ul></td>
<td parentName="tr" {...{
            "align": null
          }}><ul><li>{`Usage data`}</li></ul></td>
<td parentName="tr" {...{
            "align": null
          }}><ul><li>{`Customer name`}</li><li>{`Number of API calls`}</li><li>{`Number of user seats in the CMS`}</li><li>{`API calls HTTP status codes`}</li><li>{`API calls timestamp`}</li><li>{`API calls execution time`}</li><li>{`Environment name`}</li></ul></td>
<td parentName="tr" {...{
            "align": null
          }}>{`Mandatory`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"3-users-and-environments"} nextElement={{
      "type": "paragraph"
    }}>3. Users and Environments</_Heading>
<p>{`This data is only obtained via Webiny Control Panel.`}</p>
<p>{`Webiny Control Panel requires every Webiny Enterprise customer to register for an account. Through Webiny Control Panel the customer can see their usage and ensure it’s within the agree license terms.`}</p>
<p>{`Each member of the customer’s development team working on making code changes to Webiny CMS also requires an account to retrieve the appropriate Webiny license for their own personal development environment.`}</p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Source`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Purpose`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Events`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Data sent / stored`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Bindingness`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Webiny Control Panel`}</td>
<td parentName="tr" {...{
            "align": null
          }}><ul><li>{`License management (inc. entitlements)`}</li><li>{`Billing`}</li><li>{`Product usage insights`}</li></ul></td>
<td parentName="tr" {...{
            "align": null
          }}><ul><li>{`Usage data`}</li></ul></td>
<td parentName="tr" {...{
            "align": null
          }}><ul><li>{`Customer name`}</li><li>{`List of CI/CD environment names`}</li><li>{`First name, last name and email of team members with the access to the project (usually members of customer’s engineering team)`}</li></ul></td>
<td parentName="tr" {...{
            "align": null
          }}>{`Mandatory`}</td>
</tr>
</tbody>
</table>
<_Heading level={2} id={"is-the-data-stored-or-distributed-to-a-3rd-party"} nextElement={{
      "type": "paragraph"
    }}>Is the Data Stored or Distributed to a 3rd Party?</_Heading>
<p>{`No, the data is collected by a service running in our own infrastructure and is not collected or distributed to any 3rd parties.`}</p>
<_Heading level={2} id={"what-about-sensitive-data-e-g-secrets"} nextElement={{
      "type": "paragraph"
    }}>What About Sensitive Data? (e.g. Secrets)</_Heading>
<p>{`We do not track anything other than what is specified above.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;