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
  "title": "Using the GraphQL API Advanced Filtering",
  "description": "Learn how to use the Headless CMS's built-in GraphQL API advanced filter.",
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
  "title": "The AND Conditional",
  "slug": "the-and-conditional",
  "children": [{
    "title": "Simple AND Examples",
    "slug": "simple-and-examples",
    "children": [{
      "title": "Example #1",
      "slug": "example-1"
    }, {
      "title": "Example #2",
      "slug": "example-2"
    }]
  }, {
    "title": "Complex AND Examples",
    "slug": "complex-and-examples",
    "children": [{
      "title": "Example #1",
      "slug": "example-1"
    }, {
      "title": "Example #2",
      "slug": "example-2"
    }]
  }]
}, {
  "title": "The OR Conditional",
  "slug": "the-or-conditional",
  "children": [{
    "title": "Simple OR Example",
    "slug": "simple-or-example",
    "children": [{
      "title": "Example #1",
      "slug": "example-1"
    }, {
      "title": "Example #2",
      "slug": "example-2"
    }]
  }, {
    "title": "Complex OR Example",
    "slug": "complex-or-example",
    "children": [{
      "title": "Example #1",
      "slug": "example-1"
    }]
  }]
}, {
  "title": "The Mix of AND and OR Conditionals",
  "slug": "the-mix-of-and-and-or-conditionals",
  "children": [{
    "title": "Root Level OR Conditional With Nested AND and OR Conditionals",
    "slug": "root-level-or-conditional-with-nested-and-and-or-conditionals",
    "children": []
  }, {
    "title": "Root Level AND Conditional With Nested OR and AND Conditionals",
    "slug": "root-level-and-conditional-with-nested-or-and-and-conditionals",
    "children": []
  }, {
    "title": "Root Level OR and AND Conditionals",
    "slug": "root-level-or-and-and-conditionals",
    "children": []
  }]
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
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
<li parentName="ul">{`how to use the Headless CMS GraphQL API advanced filtering`}</li>
<li parentName="ul">{`how are `}<inlineCode parentName="li">{`AND`}</inlineCode>{` and `}<inlineCode parentName="li">{`OR`}</inlineCode>{` nested queries working`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`In the 5.x version of Webiny we introduced the `}<inlineCode parentName="p">{`AND`}</inlineCode>{` and `}<inlineCode parentName="p">{`OR`}</inlineCode>{` conditionals to help users filter the CMS entries.`}</p>
<p>{`Both `}<inlineCode parentName="p">{`AND`}</inlineCode>{` and `}<inlineCode parentName="p">{`OR`}</inlineCode>{` conditionals are arrays (lists) of the available filters, which depend on the model you are running the query for.`}</p>
<_Heading level={2} id={"the-and-conditional"} nextElement={{
      "type": "paragraph"
    }}>The<code>AND</code>Conditional</_Heading>
<p>{`The `}<inlineCode parentName="p">{`AND`}</inlineCode>{` conditional is the extension of our existing filtering. It works the same as our old GraphQL filtering, with the addition of nested filters.`}</p>
<p>{`This conditional requires all the filters sent to match.`}</p>
<p>{`Also, when sending filters in the root of the `}<inlineCode parentName="p">{`where`}</inlineCode>{` object, there is no need for the `}<inlineCode parentName="p">{`AND`}</inlineCode>{` keyword - but you can use it, of course.`}</p>
<_Heading level={3} id={"simple-and-examples"} nextElement={{
      "type": "heading",
      "depth": 4
    }}>Simple<code>AND</code>Examples</_Heading>
<_Heading level={4} id={"example-1"} nextElement={{
      "type": "paragraph"
    }}>Example #1</_Heading>
<p>{`In this example we are searching for articles which:`}</p>
<ul>
<li parentName="ul">{`have a title with both `}<inlineCode parentName="li">{`headless`}</inlineCode>{` and `}<inlineCode parentName="li">{`cms`}</inlineCode>{` words in it`}</li>
</ul>
<Editor title="" lang="graphql" mdxType="Editor">
{`query {
  listArticles(where: { AND: [{ title_contains: "headless" }, { title_contains: "cms" }] }) {
    data {
      id
      title
    }
    meta {
      hasMoreItems
      cursor
      totalCount
    }
    error {
      message
      code
      data
    }
  }
}`}
</Editor>
<p>{`This query will produce something like `}<inlineCode parentName="p">{`(title_contains = "headless" AND title_contains = "cms")`}</inlineCode>{`.`}</p>
<p>{`In our old GraphQL you could not do that, because you could send only one `}<inlineCode parentName="p">{`title_contains`}</inlineCode>{` in the `}<inlineCode parentName="p">{`where`}</inlineCode>{` object.`}</p>
<_Heading level={4} id={"example-2"} nextElement={{
      "type": "paragraph"
    }}>Example #2</_Heading>
<p>{`Also, you can add a filter in the root level of the `}<inlineCode parentName="p">{`where`}</inlineCode>{` object.`}</p>
<p>{`In this example we are searching for articles which:`}</p>
<ul>
<li parentName="ul">{`are in a category with ID `}<inlineCode parentName="li">{`1`}</inlineCode></li>
<li parentName="ul">{`have a title with both `}<inlineCode parentName="li">{`headless`}</inlineCode>{` and `}<inlineCode parentName="li">{`cms`}</inlineCode>{` words in it.`}</li>
</ul>
<Editor title="" lang="graphql" mdxType="Editor">
{`query {
  listArticles(
    where: { categoryId: 1, AND: [{ title_contains: "headless" }, { title_contains: "cms" }] }
  ) {
    data {
      id
      title
    }
    meta {
      hasMoreItems
      cursor
      totalCount
    }
    error {
      message
      code
      data
    }
  }
}`}
</Editor>
<p>{`This query will produce something like `}<inlineCode parentName="p">{`(categoryId = 1 AND title_contains = "headless" AND title_contains = "cms")`}</inlineCode>{`.`}</p>
<_Heading level={3} id={"complex-and-examples"} nextElement={{
      "type": "heading",
      "depth": 4
    }}>Complex<code>AND</code>Examples</_Heading>
<_Heading level={4} id={"example-1"} nextElement={{
      "type": "paragraph"
    }}>Example #1</_Heading>
<p>{`In this example we are searching for articles which:`}</p>
<ul>
<li parentName="ul">{`are in a category with ID `}<inlineCode parentName="li">{`1`}</inlineCode></li>
<li parentName="ul">{`have a title with both `}<inlineCode parentName="li">{`headless`}</inlineCode>{` and `}<inlineCode parentName="li">{`cms`}</inlineCode>{` words in it`}</li>
<li parentName="ul">{`are written by authors with IDs `}<inlineCode parentName="li">{`5`}</inlineCode>{` or `}<inlineCode parentName="li">{`6`}</inlineCode>{` or `}<inlineCode parentName="li">{`7`}</inlineCode></li>
<li parentName="ul">{`are created in year `}<inlineCode parentName="li">{`2022`}</inlineCode></li>
</ul>
<Editor title="" lang="graphql" mdxType="Editor">
{`query {
  listArticles(
    where: {
      categoryId: 1
      AND: [
        { title_contains: "headless" }
        { title_contains: "cms" }
        { AND: [{ author_in: [5, 6, 7] }, { createdOn_between: ["2022-01-01", "2022-12-31"] }] }
      ]
    }
  ) {
    data {
      id
      title
    }
    meta {
      hasMoreItems
      cursor
      totalCount
    }
    error {
      message
      code
      data
    }
  }
}`}
</Editor>
<p>{`This query will produce something like `}<inlineCode parentName="p">{`(categoryId = 1 AND title_contains = "headless" AND title_contains = "cms" AND (author_in = [5, 6, 7] AND createdOn_gte = "2022-01-01" AND createdOn_lte = "2022-12-31"))`}</inlineCode>{`.`}</p>
<Alert type={"info"} mdxType="Alert">
<p>{`  In this example, we’ve used the `}<inlineCode parentName="p">{`createdOn`}</inlineCode>{` entry meta field. To learn more about date/time and identity meta fields, please refer to the `}<_Link href="/docs/5.x/headless-cms/references/date-time-and-identity-meta-fields">{`Date/Time and Identity (On/By) Meta Fields`}</_Link>{` reference article.`}</p>
</Alert>
<_Heading level={4} id={"example-2"} nextElement={{
      "type": "paragraph"
    }}>Example #2</_Heading>
<p>{`All of these filters can be written in the root of the `}<inlineCode parentName="p">{`where`}</inlineCode>{` object (except `}<inlineCode parentName="p">{`title_contains`}</inlineCode>{` - because there are multiple):`}</p>
<Editor title="" lang="graphql" mdxType="Editor">
{`query {
  listArticles(
    where: {
      categoryId: 1
      AND: [{ title_contains: "headless" }, { title_contains: "cms" }]
      author_in: [5, 6, 7]
      createdOn_between: ["2022-01-01", "2022-12-31"]
    }
  ) {
    data {
      id
      title
    }
    meta {
      hasMoreItems
      cursor
      totalCount
    }
    error {
      message
      code
      data
    }
  }
}`}
</Editor>
<p>{`The query above will produce the same result as the previous one, where we have nested `}<inlineCode parentName="p">{`AND`}</inlineCode>{` conditional.`}</p>
<_Heading level={2} id={"the-or-conditional"} nextElement={{
      "type": "paragraph"
    }}>The<code>OR</code>Conditional</_Heading>
<p>{`The `}<inlineCode parentName="p">{`OR`}</inlineCode>{` conditional brings completely new, and powerful, way of filtering the CMS entries.`}</p>
<p>{`This conditional requires only a single filter to match.`}</p>
<_Heading level={3} id={"simple-or-example"} nextElement={{
      "type": "heading",
      "depth": 4
    }}>Simple<code>OR</code>Example</_Heading>
<_Heading level={4} id={"example-1"} nextElement={{
      "type": "paragraph"
    }}>Example #1</_Heading>
<p>{`In this example we are searching for articles which:`}</p>
<ul>
<li parentName="ul">{`have a title with `}<inlineCode parentName="li">{`headless`}</inlineCode>{` or `}<inlineCode parentName="li">{`cms`}</inlineCode>{` words in it`}</li>
</ul>
<Editor title="" lang="graphql" mdxType="Editor">
{`query {
  listArticles(where: { OR: [{ title_contains: "headless" }, { title_contains: "cms" }] }) {
    data {
      id
      title
    }
    meta {
      hasMoreItems
      cursor
      totalCount
    }
    error {
      message
      code
      data
    }
  }
}`}
</Editor>
<p>{`This query will produce something like `}<inlineCode parentName="p">{`(title_contains = "headless" OR title_contains = "cms")`}</inlineCode>{`.`}</p>
<_Heading level={4} id={"example-2"} nextElement={{
      "type": "paragraph"
    }}>Example #2</_Heading>
<p>{`In this example we are searching for articles which match any of the conditions:`}</p>
<ul>
<li parentName="ul">{`have a title with `}<inlineCode parentName="li">{`cms`}</inlineCode>{` word in it`}</li>
<li parentName="ul">{`have a title with `}<inlineCode parentName="li">{`headless`}</inlineCode>{` word in it and are in category with ID `}<inlineCode parentName="li">{`1`}</inlineCode></li>
</ul>
<Editor title="" lang="graphql" mdxType="Editor">
{`query {
  listArticles(
    where: { OR: [{ title_contains: "headless", categoryId: 1 }, { title_contains: "cms" }] }
  ) {
    data {
      id
      title
    }
    meta {
      hasMoreItems
      cursor
      totalCount
    }
    error {
      message
      code
      data
    }
  }
}`}
</Editor>
<p>{`This query will produce something like `}<inlineCode parentName="p">{`((title_contains = "headless" AND categoryId = 1) OR title_contains = "cms")`}</inlineCode>{`.`}</p>
<p>{`As you can notice, having more than one filter in an `}<inlineCode parentName="p">{`OR`}</inlineCode>{` block produces the `}<strong parentName="p">{`match all`}</strong>{` in that `}<inlineCode parentName="p">{`OR`}</inlineCode>{` block.`}</p>
<p>{`We will cover the mixed `}<inlineCode parentName="p">{`AND`}</inlineCode>{` and `}<inlineCode parentName="p">{`OR`}</inlineCode>{` conditionals later in this article.`}</p>
<_Heading level={3} id={"complex-or-example"} nextElement={{
      "type": "heading",
      "depth": 4
    }}>Complex<code>OR</code>Example</_Heading>
<_Heading level={4} id={"example-1"} nextElement={{
      "type": "paragraph"
    }}>Example #1</_Heading>
<p>{`In this example we are searching for articles which match any of the conditions:`}</p>
<ul>
<li parentName="ul">{`have a title with `}<inlineCode parentName="li">{`headless`}</inlineCode>{` word in it`}</li>
<li parentName="ul">{`have a title with `}<inlineCode parentName="li">{`cms`}</inlineCode>{` word in it`}</li>
<li parentName="ul">{`are in either category with ID `}<inlineCode parentName="li">{`1`}</inlineCode>{` or `}<inlineCode parentName="li">{`2`}</inlineCode></li>
</ul>
<Editor title="" lang="graphql" mdxType="Editor">
{`query {
  listArticles(
    where: {
      OR: [
        { title_contains: "headless" }
        { title_contains: "cms" }
        { OR: [{ categoryId: 1 }, { categoryId: 2 }] }
      ]
    }
  ) {
    data {
      id
      title
    }
    meta {
      hasMoreItems
      cursor
      totalCount
    }
    error {
      message
      code
      data
    }
  }
}`}
</Editor>
<p>{`This query will produce something like `}<inlineCode parentName="p">{`(title_contains = "headless" OR title_contains = "cms" OR (categoryId = 1 OR categoryId = 2))`}</inlineCode>{`.`}</p>
<_Heading level={2} id={"the-mix-of-and-and-or-conditionals"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>The Mix of<code>AND</code>and<code>OR</code>Conditionals</_Heading>
<_Heading level={3} id={"root-level-or-conditional-with-nested-and-and-or-conditionals"} nextElement={{
      "type": "paragraph"
    }}>Root Level<code>OR</code>Conditional With Nested<code>AND</code>and<code>OR</code>Conditionals</_Heading>
<p>{`In this example we are searching for articles which match any of the conditions:`}</p>
<ul>
<li parentName="ul">{`have a title with `}<inlineCode parentName="li">{`headless`}</inlineCode>{` word in it`}</li>
<li parentName="ul">{`have a title with `}<inlineCode parentName="li">{`cms`}</inlineCode>{` word in it`}</li>
<li parentName="ul">{`have both `}<inlineCode parentName="li">{`webiny`}</inlineCode>{` and `}<inlineCode parentName="li">{`serverless`}</inlineCode>{` in the title and are created in `}<inlineCode parentName="li">{`January of 2021`}</inlineCode>{` or `}<inlineCode parentName="li">{`January of 2022`}</inlineCode></li>
</ul>
<Editor title="" lang="graphql" mdxType="Editor">
{`query {
  listArticles(
    where: {
      OR: [
        { title_contains: "headless" }
        { title_contains: "cms" }
        {
          AND: [
            { title_contains: "webiny" }
            { title_contains: "serverless" }
            {
              OR: [
                { createdOn_between: ["2021-01-01", "2021-01-31"] }
                { createdOn_between: ["2022-01-01", "2022-01-31"] }
              ]
            }
          ]
        }
      ]
    }
  ) {
    data {
      id
      title
    }
    meta {
      hasMoreItems
      cursor
      totalCount
    }
    error {
      message
      code
      data
    }
  }
}`}
</Editor>
<p>{`This query will produce something like `}<inlineCode parentName="p">{`(title_contains = "headless" OR title_contains = "cms" OR (title_contains = "webiny" AND title_contains = "serverless" AND ((createdOn_gte = "2021-01-01" AND createdOn_lte = "2021-01-31") OR (createdOn_gte = "2022-01-01" AND createdOn_lte = "2022-01-31"))))`}</inlineCode>{`.`}</p>
<_Heading level={3} id={"root-level-and-conditional-with-nested-or-and-and-conditionals"} nextElement={{
      "type": "paragraph"
    }}>Root Level<code>AND</code>Conditional With Nested<code>OR</code>and<code>AND</code>Conditionals</_Heading>
<p>{`In this example we are searching for articles which match all the conditions:`}</p>
<ul>
<li parentName="ul">{`have a title with `}<inlineCode parentName="li">{`headless`}</inlineCode>{` word in it`}</li>
<li parentName="ul">{`have a title with `}<inlineCode parentName="li">{`cms`}</inlineCode>{` word in it`}</li>
<li parentName="ul">{`have any of the `}<inlineCode parentName="li">{`webiny`}</inlineCode>{` or `}<inlineCode parentName="li">{`serverless`}</inlineCode>{` in the title or are created in `}<inlineCode parentName="li">{`January of 2021`}</inlineCode>{` or `}<inlineCode parentName="li">{`January of 2022`}</inlineCode></li>
</ul>
<Editor title="" lang="graphql" mdxType="Editor">
{`query {
  listArticles(
    where: {
      AND: [
        { title_contains: "headless" }
        { title_contains: "cms" }
        {
          OR: [
            { title_contains: "webiny" }
            { title_contains: "serverless" }
            {
              AND: [
                { createdOn_between: ["2021-01-01", "2021-01-31"] }
                { createdOn_between: ["2022-01-01", "2022-01-31"] }
              ]
            }
          ]
        }
      ]
    }
  ) {
    data {
      id
      title
    }
    meta {
      hasMoreItems
      cursor
      totalCount
    }
    error {
      message
      code
      data
    }
  }
}`}
</Editor>
<p>{`This query will produce something like `}<inlineCode parentName="p">{`(title_contains = "headless" AND title_contains = "cms" AND (title_contains = "webiny" OR title_contains = "serverless" OR ((createdOn_gte = "2021-01-01" AND createdOn_lte = "2021-01-31") AND (createdOn_gte = "2022-01-01" AND createdOn_lte = "2022-01-31"))))`}</inlineCode>{`.`}</p>
<_Heading level={3} id={"root-level-or-and-and-conditionals"} nextElement={{
      "type": "paragraph"
    }}>Root Level<code>OR</code>and<code>AND</code>Conditionals</_Heading>
<p>{`In this example we are searching for articles which:`}</p>
<ul>
<li parentName="ul">{`are written by author with ID `}<inlineCode parentName="li">{`1`}</inlineCode>{` OR are in category with ID `}<inlineCode parentName="li">{`2`}</inlineCode></li>
<li parentName="ul">{`have a title with `}<inlineCode parentName="li">{`headless`}</inlineCode>{` and `}<inlineCode parentName="li">{`cms`}</inlineCode>{` words in it`}</li>
</ul>
<Editor title="" lang="graphql" mdxType="Editor">
{`query {
  listArticles(
    where: {
      OR: [{ author: 1 }, { categoryId: 2 }]
      AND: [{ title_contains: "headless" }, { title_contains: "cms" }]
    }
  ) {
    data {
      id
      title
    }
    meta {
      hasMoreItems
      cursor
      totalCount
    }
    error {
      message
      code
      data
    }
  }
}`}
</Editor>
<p>{`This query will produce something like `}<inlineCode parentName="p">{`((author = 1 OR categoryId = 2) AND (title_contains = "headless" AND title_contains = "cms"))`}</inlineCode>{`.`}</p>
<Alert type="warning" mdxType="Alert">
<p>{`While users can nest `}<inlineCode parentName="p">{`AND`}</inlineCode>{` and `}<inlineCode parentName="p">{`OR`}</inlineCode>{` conditionals indefinitely, they need to be aware that it might result in performance issues, especially in the DynamoDB only systems.`}</p>
</Alert>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;