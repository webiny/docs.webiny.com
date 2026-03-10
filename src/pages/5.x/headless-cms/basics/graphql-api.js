/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image7 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/basics/assets/graphql-api/i18n-locales-section.png'
import _Image6 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/basics/assets/graphql-api/api-url-webiny-cli.png'
import _Image5 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/basics/assets/graphql-api/api-playground-switch-locale.png'
import _Image4 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/basics/assets/graphql-api/api-playground.png'
import _Image3 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/basics/assets/graphql-api/security-cms-form-2.png'
import _Image2 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/basics/assets/graphql-api/security-cms-form-1.png'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/basics/assets/graphql-api/api_playground_from_main_menu.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "GraphQL API Overview",
  "description": "Learn what is the Headless CMS GraphQL API, what are its main characteristics, and how to access it.",
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
  "title": "Main Characteristics",
  "slug": "main-characteristics",
  "children": [{
    "title": "GraphQL API Types",
    "slug": "graph-ql-api-types",
    "children": [{
      "title": "Manage",
      "slug": "manage"
    }, {
      "title": "Read",
      "slug": "read"
    }, {
      "title": "Preview",
      "slug": "preview"
    }, {
      "title": "Summary",
      "slug": "summary"
    }]
  }, {
    "title": "Multiple Locales Support",
    "slug": "multiple-locales-support",
    "children": []
  }, {
    "title": "Secure",
    "slug": "secure",
    "children": []
  }]
}, {
  "title": "The GraphQL API URL Structure",
  "slug": "the-graph-ql-api-url-structure",
  "children": [{
    "title": "Where to Find the URL of the GraphQL API?",
    "slug": "where-to-find-the-url-of-the-graph-ql-api",
    "children": [{
      "title": "API Playground",
      "slug": "api-playground"
    }, {
      "title": "Webiny CLI",
      "slug": "webiny-cli"
    }]
  }]
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "When Using the API Playground, Is My Access Limited in Any Way?",
    "slug": "when-using-the-api-playground-is-my-access-limited-in-any-way",
    "children": []
  }]
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Image = makeShortcode("Image");
const Editor = makeShortcode("Editor");
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










<Alert type="success" title="What you'll learn" mdxType="Alert">
<ul>
<li parentName="ul">{`what is the Headless CMS GraphQL API`}</li>
<li parentName="ul">{`what are its main characteristics`}</li>
<li parentName="ul">{`how to access it`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`The Headless CMS Webiny application comes with a fully-fledged GraphQL API, which you use in order to perform GraphQL queries and mutations on Headless CMS content models, groups, and entries.`}</p>
<p>{`The easiest way to explore it and try different things is via the API Playground, which’s part of the Webiny Administration Area. To access it, simply open the main menu on the left side of the screen, and click on the API Playground:`}</p>
<Image src={_Image1} alt={"Access API Playground via Main Menu"} mdxType="Image" />
<Alert type="info" mdxType="Alert">
<p>{`If you want to learn how to use the Headless CMS GraphQL API via the built-in API Playground or
programmatically, via a GraphQL client, make sure to check out the `}<_Link href="/docs/5.x/headless-cms/basics/using-graphql-api">{`Using the GraphQL
API`}</_Link>{` guide.`}</p>
</Alert>
<_Heading level={2} id={"main-characteristics"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Main Characteristics</_Heading>
<_Heading level={3} id={"graph-ql-api-types"} nextElement={{
      "type": "paragraph"
    }}>GraphQL API Types</_Heading>
<p>{`The Headless CMS GraphQL API comes in three different types - `}<strong parentName="p">{`manage`}</strong>{`, `}<strong parentName="p">{`preview`}</strong>{` and `}<strong parentName="p">{`read`}</strong>{`. Each type is served via a separate URL and has a specific purpose.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`Skip to the `}<a parentName="p" {...{
          "href": "#the-graph-ql-api-url-structure"
        }}>{`The GraphQL API URL
Structure`}</a>{`
to learn more about the Headless CMS GraphQL API’s URL structure.`}</p>
</Alert>
<_Heading level={4} id={"manage"} nextElement={{
      "type": "paragraph"
    }}>Manage</_Heading>
<p>{`The manage GraphQL API is here for management purposes. In other words, it provides the necessary queries and mutations for managing your content models, groups, and entries. It is heavily utilized by the Headless CMS module in the Webiny Administration Area.`}</p>
<p>{`Except for the fact that this GraphQL API type allows you to create, edit and publish existing content entries, another specific aspect of it is that it returns both published and unpublished content entries. This is intentional, because, as a content manager, you need to be able to access all of the data, not just published.`}</p>
<_Heading level={4} id={"read"} nextElement={{
      "type": "paragraph"
    }}>Read</_Heading>
<p>{`Unlike the manage GraphQL API, which is used by content managers, the `}<strong parentName="p">{`read`}</strong>{` API is used by data consumers - like your public website, a web or mobile application, and others. The API consists of multiple query operations that enable you to retrieve content entries, previously published via the mentioned `}<strong parentName="p">{`manage`}</strong>{` GraphQL API.`}</p>
<_Heading level={4} id={"preview"} nextElement={{
      "type": "paragraph"
    }}>Preview</_Heading>
<p>{`Finally, there is the `}<strong parentName="p">{`preview`}</strong>{` GraphQL API type, which is used for previewing purposes. Imagine a website that’s only available to the internal team, that wants to see how a particular page or a section of your website will look like, once a specific content entry is actually published. This internal website is, usually, available under a protected URL, and should always interact with the `}<strong parentName="p">{`preview`}</strong>{` GraphQL API.`}</p>
<p>{`The GraphQL schema is the same as the `}<strong parentName="p">{`read`}</strong>{` GraphQL API’s, except the returned data also includes not-yet-published content entries.`}</p>
<_Heading level={4} id={"summary"} nextElement={{
      "type": "paragraph"
    }}>Summary</_Heading>
<p>{`The following table clearly shows all of the specific characteristics of each Headless CMS GraphQL API type:`}</p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Behaviour`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Manage`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Read`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Preview`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Allows mutations on `}<br />{`content models, groups,`}<br />{` and entries`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`✅`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`❌`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`❌`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Allows performing `}<br />{`queries on content entries`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`✅`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`✅`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`✅`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Returns unpublished`}<br />{`content entries`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`✅`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`❌`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`✅`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Usually used in…`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Administration area`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Production website or application`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Internal website or application`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"multiple-locales-support"} nextElement={{
      "type": "paragraph"
    }}>Multiple Locales Support</_Heading>
<p>{`Except for the different types, the Headless CMS GraphQL API also supports creating both content models, and entries, in multiple locales. This not only means that you can have your content entries localized for different users, but also that you can design your content models separately for each locale.`}</p>
<p>{`For example, you might have a `}<inlineCode parentName="p">{`Personal Document`}</inlineCode>{` content model, which for the `}<inlineCode parentName="p">{`en-GB`}</inlineCode>{` locale, consists of three fields, and for the `}<inlineCode parentName="p">{`en-US`}</inlineCode>{`, only two. Or, you can have the same fields in both, but different input data validation rules defined for each field.`}</p>
<p>{`Overall, this brings additional flexibility when designing your content models for different locales.`}</p>
<_Heading level={3} id={"secure"} nextElement={{
      "type": "paragraph"
    }}>Secure</_Heading>
<p>{`The Headless CMS GraphQL API sits behind a security layer that provides fine-grained access control, both for logged-in, and anonymous users. The following are some of the available options:`}</p>
<ul>
<li parentName="ul">{`allow users to access content on all, or only specific locales`}</li>
<li parentName="ul">{`allow users to access only specific Headless CMS GraphQL API types (`}<strong parentName="li">{`manage`}</strong>{`, `}<strong parentName="li">{`read`}</strong>{`, `}<strong parentName="li">{`preview`}</strong>{`)`}</li>
<li parentName="ul">{`allow users to access only specific content models, groups, and entries`}</li>
</ul>
<Image src={_Image2} alt={"Fine-grained Access Controls"} mdxType="Image" />
<Image src={_Image3} alt={"Fine-grained Access Controls"} mdxType="Image" />
<_Heading level={2} id={"the-graph-ql-api-url-structure"} nextElement={{
      "type": "paragraph"
    }}>The GraphQL API URL Structure</_Heading>
<p>{`The Headless CMS GraphQL API is accessed via multiple URL endpoints, each including the GraphQL API type and locale. This is simply because different combinations of the two yield different GraphQL schemas.`}</p>
<p>{`For example, the `}<strong parentName="p">{`read`}</strong>{` GraphQL API only allows users to perform queries on different content entries. On the other hand, the manage type not only allows querying content entries but also content models and groups.. Furthermore, it also provides the necessary management-related mutation operations. Finally, different locales can have different content models, which, again, means a different GraphQL schema needs to be in place.`}</p>
<p>{`The following shows how the Headless CMS GraphQL API URL is structured:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`https://{yourApiDomain}/cms/{type}/{locale}`}
</Editor>
<p>{`Note that the Headless CMS GraphQL API is deployed as part of your `}<strong parentName="p">{`API`}</strong>{` project application, hence the `}<inlineCode parentName="p">{`yourApiDomain`}</inlineCode>{` piece in the URL. A couple of real-world examples:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`# Access "manage" GraphQL API, for the \`en-US\` locale.
https://random-id-xyz.cloudfront.net/cms/manage/en-US

# Access "read" GraphQL API, for the \`de-DE\` locale.
https://random-id-xyz.cloudfront.net/cms/read/de-DE

# Access "preview" GraphQL API, for the \`it-IT\` locale.
https://random-id-xyz.cloudfront.net/cms/preview/it-IT`}
</Editor>
<Alert type="info" mdxType="Alert">
<p>{`To learn more about the cloud infrastructure deployed as part of the `}<strong parentName="p">{`API`}</strong>{` project application,
check out the `}<_Link href="/docs/5.x/architecture/api/overview">{`Cloud Infrastructure - API`}</_Link>{`
key topic.`}</p>
</Alert>
<_Heading level={3} id={"where-to-find-the-url-of-the-graph-ql-api"} nextElement={{
      "type": "paragraph"
    }}>Where to Find the URL of the GraphQL API?</_Heading>
<p>{`You can find the URL of the Headless CMS GraphQL API via one of the following two ways.`}</p>
<_Heading level={4} id={"api-playground"} nextElement={{
      "type": "paragraph"
    }}>API Playground</_Heading>
<p>{`When you access the API Playground via the main menu in the Administration Area, at the top of the screen, in the URL bar, you will be able to see the URL for all three Headless CMS GraphQL API types.`}</p>
<Image src={_Image4} alt={"API Playground"} mdxType="Image" />
<p>{`Note that if you want to retrieve the URL for a different locale, you can switch to a different one via the locale selector, located in the top right corner of the screen.`}</p>
<Image src={_Image5} alt={"Switch Locale via the Locale Selector"} mdxType="Image" />
<Alert type="info" mdxType="Alert">
<p>{`The locale selector is not visible for systems that have only one active locale.`}</p>
</Alert>
<_Heading level={4} id={"webiny-cli"} nextElement={{
      "type": "paragraph"
    }}>Webiny CLI</_Heading>
<p>{`The `}<_Link href="/docs/5.x/core-development-concepts/basics/webiny-cli">{`Webiny CLI`}</_Link>{` offers the `}<inlineCode parentName="p">{`info`}</inlineCode>{` command, which will, among other useful information, also return the URLs for all three CMS GraphQL API types. The command is run from your project root, like so:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`# Returns information for the "dev" environment.
yarn webiny info --env dev`}
</Editor>
<p>{`Running the shown command should produce the following output:`}</p>
<Image src={_Image6} alt={"Find Headless CMS GraphQL API URLs via Webiny CLI"} mdxType="Image" />
<p>{`Note that with this method, you will still need to manually replace the `}<inlineCode parentName="p">{`{LOCALE_CODE}`}</inlineCode>{` with an actual locale code. A list of all available locales can be found in the Administration Area, in the `}<strong parentName="p">{`Locales`}</strong>{` section of the I18N Webiny application.`}</p>
<Image src={_Image7} alt={"Webiny I18N Application - Locales Section"} mdxType="Image" />
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"when-using-the-api-playground-is-my-access-limited-in-any-way"} nextElement={{
      "type": "paragraph"
    }}>When Using the API Playground, Is My Access Limited in Any Way?</_Heading>
<p>{`You can only access content models, groups, and entries to which you have access, which is based on the security role or team your user account belongs to. To learn more about how to use the Headless CMS GraphQL API, visit the `}<_Link href="/docs/5.x/headless-cms/basics/using-graphql-api">{`Using the GraphQL API`}</_Link>{` guide.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;