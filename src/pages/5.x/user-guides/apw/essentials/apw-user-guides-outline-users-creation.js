/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import createUsersVideo from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/5.x/apw/essentials/assets/apw-user-guides-outline-users-creation/apw-create-users.mp4";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.79c9f1.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "APW User Guides Outline & Users Creation",
  "description": "Learn about the APW user guides outline to get maximum out of these tutorials and guides.",
  "type": "user-guides",
  "showPageHeader": true,
  "fullWidth": false,
  "version": "5.x"
};
const docsearch = {
  "type": "user-guides",
  "weight": 100,
  "versions": ["5.x"]
};
const navigation = _navigation;
const versions = _versions;
const tableOfContents = [{
  "title": "APW User Guides Outline",
  "slug": "apw-user-guides-outline",
  "children": []
}, {
  "title": "Author & Reviewer Users Creation",
  "slug": "author-and-reviewer-users-creation",
  "children": []
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Video = makeShortcode("Video");
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




<Alert type="success" title="WHAT YOU'LL LEARN" mdxType="Alert">
<ul>
<li parentName="ul">{`structure and outline of APW user guides`}</li>
<li parentName="ul">{`create user accounts to follow through the following tutorials`}</li>
</ul>
</Alert>
<_Heading level={2} id={"apw-user-guides-outline"} nextElement={{
      "type": "paragraph"
    }}>APW User Guides Outline</_Heading>
<p>{`Welcome to Advanced Publishing Workflow (APW) user guides! In this article, you will learn how we have organized the APW user guides and how you can follow them to get the maximum out of them. With APW you can have a workflow-driven publishing process. Whether you prefer a straightforward review and approval process or desire a more intricate workflow with multiple review stages, APW accommodates your publishing needs.`}</p>
<p>{`To simplify this APW user guide, we will follow the example below and learn each aspect of APW one by one.`}<br parentName="p"></br>{`
`}{`We will have two users `}<strong parentName="p">{`John Author`}</strong>{` and `}<strong parentName="p">{`Adam Reviewer`}</strong>{`.`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`John Author`}</strong>{` will create a blog.`}</li>
<li parentName="ul">{`And `}<strong parentName="li">{`Adam Reviewer`}</strong>{` reviews it and suggests changes.`}</li>
</ul>
<p>{`Here are the steps to follow the APW User Guides:`}</p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": "left"
          }}>{`Steps`}</th>
<th parentName="tr" {...{
            "align": "left"
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}>{`1. `}<strong parentName="td"><_Link href="/docs/5.x/user-guides/apw/essentials/define-workflow">{`Define a Workflow`}</_Link></strong></td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`In this step, we will define a workflow to be followed in the publishing process.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}>{`2. `}<strong parentName="td"><_Link href="/docs/5.x/user-guides/apw/essentials/submit-record-for-review">{`Submit Record for Review`}</_Link></strong></td>
<td parentName="tr" {...{
            "align": "left"
          }}><strong parentName="td">{`John Author`}</strong>{` will create a `}<strong parentName="td">{`Blog`}</strong>{` content and will submit it for review. In this step, John will also create a `}<strong parentName="td">{`Blog`}</strong>{` content model and `}<strong parentName="td">{`Content`}</strong>{` model group.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}>{`3. `}<strong parentName="td"><_Link href="/docs/5.x/user-guides/apw/essentials/review-record">{`Review Record`}</_Link></strong></td>
<td parentName="tr" {...{
            "align": "left"
          }}><strong parentName="td">{`Adam Reviewer`}</strong>{` will  review the blog and request a change to update the title of the blog for better SEO.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}>{`4. `}<strong parentName="td"><_Link href="/docs/5.x/user-guides/apw/essentials/submit-change">{`Submit Change`}</_Link></strong></td>
<td parentName="tr" {...{
            "align": "left"
          }}><strong parentName="td">{`John Author`}</strong>{` will change the blog’s title as suggested by `}<strong parentName="td">{`Adam Reviewer`}</strong>{` and will submit the changes.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}>{`5. `}<strong parentName="td"><_Link href="/docs/5.x/user-guides/apw/essentials/provide-sign-off">{`Provide Sign Off`}</_Link></strong></td>
<td parentName="tr" {...{
            "align": "left"
          }}><strong parentName="td">{`Adam Reviewer`}</strong>{` will review the update change request and provide sign-off to publish the content.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}>{`6. `}<strong parentName="td"><_Link href="/docs/5.x/user-guides/apw/essentials/scheduled-publishing">{`Schedule Publishing`}</_Link></strong></td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`In this step, `}<strong parentName="td">{`John Author`}</strong>{` will schedule a post for publishing.`}</td>
</tr>
</tbody>
</table>
<_Heading level={2} id={"author-and-reviewer-users-creation"} nextElement={{
      "type": "paragraph"
    }}>Author &amp; Reviewer Users Creation</_Heading>
<p>{`As previously mentioned, to proceed with the guides, we require two users: `}<strong parentName="p">{`John Author`}</strong>{` and `}<strong parentName="p">{`Adam Reviewer`}</strong>{`. Now, let’s create these users first. In this section, we will create the two user accounts. If you are unfamiliar with how to create a user role (formerly called a “group”) and a user account, please refer to the `}<_Link href="/docs/5.x/user-guides/headless-cms/advanced/user-creation">{`User Creation`}</_Link>{` tutorial.`}</p>
<Video src={createUsersVideo} controls={true} mdxType="Video" />
<ol>
<li parentName="ol">
<p parentName="li">{`Create a user role with the following attributes:`}</p>
<table parentName="li">
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
                "align": "left"
              }}>{`Attribute`}</th>
<th parentName="tr" {...{
                "align": "left"
              }}>{`Value`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`Name`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}><strong parentName="td">{`Headless CMS Access US`}</strong></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`Slug`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}><strong parentName="td">{`headless-cms-access-us`}</strong></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`Description`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}><strong parentName="td">{`Grants full access to Headless CMS in en-US locale`}</strong></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}><em parentName="td">{`Permissions`}</em></td>
<td parentName="tr" {...{
                "align": "left"
              }}></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`Content`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}>{`Content can be accessed on > `}<strong parentName="td">{`Specific locales`}</strong>{` > `}<strong parentName="td">{`en-US`}</strong></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`Headless CMS`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}>{`Access Level > `}<strong parentName="td">{`Full access`}</strong></td>
</tr>
</tbody>
</table>
</li>
<li parentName="ol">
<p parentName="li">{`Create a user account with the following attributes:`}</p>
<table parentName="li">
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
                "align": "left"
              }}>{`Attribute`}</th>
<th parentName="tr" {...{
                "align": "left"
              }}>{`Value`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`First Name`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}><strong parentName="td">{`Adam`}</strong></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`Last Name`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}><strong parentName="td">{`Reviewer`}</strong></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`Email`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}><em parentName="td">{`User’s email`}</em></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`Password`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}><em parentName="td">{`User’s password`}</em></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`Role`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}><strong parentName="td">{`Headless CMS Access US`}</strong></td>
</tr>
</tbody>
</table>
<p parentName="li"><strong parentName="p">{`Note`}</strong>{`: This user account will act as the reviewer of the blogs in the publishing workflow that we will create in the following tutorials.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Create another user account with the following attributes:`}</p>
<table parentName="li">
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
                "align": "left"
              }}>{`Attribute`}</th>
<th parentName="tr" {...{
                "align": "left"
              }}>{`Value`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`First Name`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}><strong parentName="td">{`John`}</strong></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`Last Name`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}><strong parentName="td">{`Author`}</strong></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`Email`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}><em parentName="td">{`User’s email`}</em></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`Password`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}><em parentName="td">{`User’s password`}</em></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`Role`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}><strong parentName="td">{`Headless CMS Access US`}</strong></td>
</tr>
</tbody>
</table>
<p parentName="li"><strong parentName="p">{`Note`}</strong>{`: This user account will act as the author of the blogs in the publishing workflow that we will create in the following tutorials.`}</p>
</li>
</ol>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;