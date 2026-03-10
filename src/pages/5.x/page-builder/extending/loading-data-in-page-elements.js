/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Gallery } from "@/components/Image";
import dataLoadedWithLoader from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/loading-data-in-page-elements/loaders-w-loader-1.gif";
import dataLoadedWithoutLoader from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/loading-data-in-page-elements/loaders-wo-loader-2.gif";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Loading Data in Page Builder Elements",
  "description": "Learn how to efficiently load data in Page Builder elements using the useLoader React hook.",
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
  "title": "The useLoader React Hook",
  "slug": "the-use-loader-react-hook",
  "children": [{
    "title": "How It Works",
    "slug": "how-it-works",
    "children": []
  }]
}, {
  "title": "Using the useLoader React Hook",
  "slug": "using-the-use-loader-react-hook",
  "children": [{
    "title": "Error Handling",
    "slug": "error-handling",
    "children": []
  }]
}, {
  "title": "Conclusion",
  "slug": "conclusion",
  "children": []
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
<li parentName="ul">{`how to load data in Page Builder elements`}</li>
</ul>
</Alert>
<_Heading level={2} id={"introduction"} nextElement={{
      "type": "paragraph"
    }}>Introduction</_Heading>
<p>{`It’s not uncommon to have a custom page element that loads data from an external remote HTTP API and displays it on the page.  `}</p>
<p>{`For example, you might want to display a list of products or a list of blog posts that are loaded from `}<_Link href="/docs/5.x/headless-cms/basics/graphql-api">{`Webiny’s Headless CMS GraphQL API`}</_Link>{`. Another examples is listing rocket and dragon spacecrafts from an external SpaceX API, which is covered in the `}<_Link href="/docs/5.x/page-builder/extending/create-a-page-element">{`Create a Custom Page Element`}</_Link>{` guide.`}</p>
<p>{`In this guide, we show how to efficiently load data in Page Builder elements using the `}<inlineCode parentName="p">{`useLoader`}</inlineCode>{` React hook.`}</p>
<_Heading level={2} id={"the-use-loader-react-hook"} nextElement={{
      "type": "paragraph"
    }}>The<code>useLoader</code>React Hook</_Heading>
<p>{`The `}<inlineCode parentName="p">{`useLoader`}</inlineCode>{` React hook is a utility hook that helps you load data in custom page elements. It’s main purpose is to ensure that, once the data is loaded in the page prerendering process, it is captured and properly cached. This way, the loaded data is immediately available when the published page is delivered to the end user, which improves page performance and user experience.`}</p>
<Alert title={"Page Prerendering"} mdxType="Alert">
<p>{`  Pages created with the Webiny’ Page Builder are prerendered when published. This means that the page is generated as a static HTML file and served to the end user. This is done to ensure the best possible performance and SEO.`}</p>
</Alert>
<_Heading level={3} id={"how-it-works"} nextElement={{
      "type": "paragraph"
    }}>How It Works</_Heading>
<p>{`To better illustrate the difference between loading data with and without the `}<inlineCode parentName="p">{`useLoader`}</inlineCode>{` hook, we can take a look at the following videos. `}</p>
<p>{`Both videos show a custom page element that loads a list of countries from a remote REST API. The first video shows the page element loading the data without the `}<inlineCode parentName="p">{`useLoader`}</inlineCode>{` hook, while the second video shows the page element loading the data with the `}<inlineCode parentName="p">{`useLoader`}</inlineCode>{` hook.`}</p>
<Gallery mdxType="Gallery">
  <Image src={dataLoadedWithoutLoader} alt={<>Loading data without the <code>useLoader</code> hook</>} mdxType="Image" />
  <Image src={dataLoadedWithLoader} alt={<>Loading data with the <code>useLoader</code> hook</>} mdxType="Image" />
</Gallery>
<p>{`As we can see, in the first video, in the network tab, the request for the `}<inlineCode parentName="p">{`countries.json`}</inlineCode>{` file is made after the page is rendered. This causes the data to be displayed in the custom page element after the page is rendered, which results in a flicker effect. In the second video, the data is immediately available when the page is rendered, which results in a smooth and seamless user experience. `}</p>
<_Heading level={2} id={"using-the-use-loader-react-hook"} nextElement={{
      "type": "paragraph"
    }}>Using the<code>useLoader</code>React Hook</_Heading>
<p>{`Let’s analyze the code that was used to create the page element we saw in the videos above. More specifically, we’ll be looking at the code of the React component that renders the custom page element. `}</p>
<Alert mdxType="Alert">
<p>{`  If you’re not familiar with creating custom page elements, you can learn more about it in the `}<_Link href="/docs/5.x/page-builder/extending/create-a-page-element">{`Create a Custom Page Element`}</_Link>{` guide.`}</p>
</Alert>
<Editor title="" lang="tsx" mdxType="Editor">
{`import React from "react";
import { createRenderer, useLoader } from "@webiny/app-page-builder-elements";

// The renderer React component.
export const CountriesPageElement = createRenderer(() => {
    const { data, error, loading } = useLoader<string[]>(() => {
        // Returns a list of strings.
        return fetch('https://my-api.com/countries.json').then(res => res.json())
    });

    if (loading) {
        return <>Loading...</>;
    }
    
    // Displaying an error message if the data fetching failed.
    if (error) {
        console.error("An error occurred while fetching data:", error);
        return <>An error occurred: {error.message}</>;
    }

    if (!data) {
        return <>No countries found.</>;
    }

    return (
        <>
            {data.map(countryName => (
                <span
                    key={countryName}
                    style={{
                        width: 130,
                        padding: 4,
                        display: "inline-block",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden"
                    }}
                >
                    {countryName}
                </span>
            ))}
        </>
    );
});`}
</Editor>
<p>{`As we can see, the `}<inlineCode parentName="p">{`useLoader`}</inlineCode>{` hook is used to load the data from the `}<inlineCode parentName="p">{`https://my-api.com/countries.json`}</inlineCode>{` endpoint. Within the hook, we use the `}<a parentName="p" {...{
        "href": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
      }}><inlineCode parentName="a">{`fetch`}</inlineCode></a>{` function to make a request to the endpoint and load the data, which is just an array of strings (country names).`}</p>
<p>{`Ultimately, the hook returns an object with two properties: `}<inlineCode parentName="p">{`data`}</inlineCode>{` and `}<inlineCode parentName="p">{`loading`}</inlineCode>{`. The `}<inlineCode parentName="p">{`data`}</inlineCode>{` property contains the loaded data, while the `}<inlineCode parentName="p">{`loading`}</inlineCode>{` property is a boolean that indicates whether the data is still being loaded.`}</p>
<p>{`In the React component, we first check if the data is still loading. If it is, we display a `}<strong parentName="p">{`Loading…`}</strong>{` message. If the data is not loading, we check if the data is available. If it is, we map over the array of country names and display them in a list. If the data is not available, we display a `}<strong parentName="p">{`No countries found.`}</strong>{` message.`}</p>
<_Heading level={3} id={"error-handling"} nextElement={{
      "type": "paragraph"
    }}>Error Handling</_Heading>
<p>{`The `}<inlineCode parentName="p">{`useLoader`}</inlineCode>{` hook also provides an `}<inlineCode parentName="p">{`error`}</inlineCode>{` property that contains an error object if the data fetching fails. In the React component, we check if the `}<inlineCode parentName="p">{`error`}</inlineCode>{` property is set and display an error message if it is.`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`if (error) {
    console.error("An error occurred while fetching data:", error);
    return <>An error occurred: {error.message}</>;
}`}
</Editor>
<p>{`This way, we can handle errors that occur during the data fetching process and display an appropriate error message to the user.`}</p>
<p>{`Note that handling errors this way can also be useful when debugging issues that occur during prerendering, which can be difficult to debug otherwise. For example, if the data fetching failed during prerendering, the error message will be displayed in the rendered HTML, which can help identify the issue.`}</p>
<_Heading level={2} id={"conclusion"} nextElement={{
      "type": "paragraph"
    }}>Conclusion</_Heading>
<p>{`In this guide, we learned how to efficiently load data in Page Builder elements using the `}<inlineCode parentName="p">{`useLoader`}</inlineCode>{` React hook. By using this hook, we can ensure that the data is loaded in the page prerendering process and is immediately available when the published page is delivered to the end user. This improves page performance and user experience.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;