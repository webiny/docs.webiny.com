/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image3 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/create-a-page-element/admin-page-preview.png'
import _Image2 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/create-a-page-element/admin-page-preview.png'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/create-a-page-element/preview.png'
import { Heading as _Heading } from '@/components/Heading'
import elementInSidebar from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/create-a-page-element/element-in-sidebar.png";
import elementSettings from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/create-a-page-element/page-element-settings.png";
import elementInEditor from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/create-a-page-element/element-in-editor.mp4";
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Create a Custom Page Element",
  "description": "Learn how to create a custom page element that can be rendered on pages created with the Webiny's Page Builder app.",
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
  "title": "Getting Started",
  "slug": "getting-started",
  "children": []
}, {
  "title": "Overview",
  "slug": "overview",
  "children": [{
    "title": "React Component",
    "slug": "react-component",
    "children": []
  }, {
    "title": "Registering the Renderer",
    "slug": "registering-the-renderer",
    "children": []
  }]
}, {
  "title": "Implementation",
  "slug": "implementation",
  "children": [{
    "title": "Renderer React Component",
    "slug": "renderer-react-component",
    "children": []
  }, {
    "title": "Admin App",
    "slug": "admin-app",
    "children": []
  }, {
    "title": "Website App",
    "slug": "website-app",
    "children": []
  }]
}, {
  "title": "Testing",
  "slug": "testing",
  "children": []
}, {
  "title": "Conclusion",
  "slug": "conclusion",
  "children": []
}, {
  "title": "Additional Examples",
  "slug": "additional-examples",
  "children": []
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Image = makeShortcode("Image");
const ExtensionsGettingStarted = makeShortcode("ExtensionsGettingStarted");
const Editor = makeShortcode("Editor");
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









<Alert type="success" title="What you'll learn" mdxType="Alert">
<ul>
<li parentName="ul">{`how to create a custom page Builder element`}</li>
<li parentName="ul">{`how to register plugins in Webiny applications`}</li>
</ul>
</Alert>
<_Heading level={2} id={"introduction"} nextElement={{
      "type": "paragraph"
    }}>Introduction</_Heading>
<p>{`Out of the box, Webiny’s Page Builder app provides a plethora of ready-made page elements we can use to create both simple and complex pages for our website. Furthermore, on top of the default set, users can also create their custom page elements, which is what this article demonstrates.`}</p>
<p>{`In this short article, we create a relatively simple page element that allows users to show a list of different `}<a parentName="p" {...{
        "href": "https://www.spacex.com/"
      }}>{`SpaceX`}</a>{` rocket and dragon spacecrafts. Here’s what the final result will look like:`}</p>
<Image src={_Image1} alt={"SpaceX Page Element"} mdxType="Image" />
<p>{`The custom page element will be available from the `}<strong parentName="p">{`Media`}</strong>{` page elements category:`}</p>
<Image title="SpaceX Page Element in the Elements Menu (Media category)" src={elementInSidebar} style={{
      width: 450
    }} mdxType="Image" />
<p>{`Also, upon dropping the element onto a page, users will have the ability to adjust the following three settings:`}</p>
<ol>
<li parentName="ol">{`type of spacecrafts to be displayed (rockets or dragons)`}</li>
<li parentName="ol">{`number of spacecrafts to be displayed`}</li>
<li parentName="ol">{`pagination offset (number of spacecrafts we want to skip when retrieving the data)`}</li>
</ol>
<Image title="Page Element Settings" src={elementSettings} style={{
      width: 450
    }} mdxType="Image" />
<p>{`Note that the spacecrafts data will be retrieved from a non-official public SpaceX GraphQL HTTP API, located at `}<a parentName="p" {...{
        "href": "https://spacex-production.up.railway.app/"
      }}>{`https://spacex-production.up.railway.app/`}</a>{`. Meaning, changing these settings will dictate the variables that will be included in GraphQL queries issued by the page element. More on this in the following sections.`}</p>
<_Heading level={2} id={"getting-started"} nextElement={{
      "type": "jsx"
    }}>Getting Started</_Heading>
<ExtensionsGettingStarted type={"pbElement"} name={"spaceXElement"} fullExampleLink={"https://github.com/webiny/webiny-examples/tree/master/page-builder/custom-page-elements"} fullExampleDownloadLink={"page-builder/custom-page-elements"} dependencies={["graphql-request@^6.0.0", "@webiny/ui", "@webiny/form", "@webiny/validation"]} mdxType="ExtensionsGettingStarted" />
<_Heading level={2} id={"overview"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Overview</_Heading>
<_Heading level={3} id={"react-component"} nextElement={{
      "type": "paragraph"
    }}>React Component</_Heading>
<p>{`To create a custom page element, the first step is to create a React component that renders it. As we’ll be able to see, this is easily achieved via the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.40.0/packages/app-page-builder-elements/src/createRenderer.tsx"
      }}><inlineCode parentName="a">{`createRenderer`}</inlineCode></a>{` factory function.`}</p>
<_Heading level={3} id={"registering-the-renderer"} nextElement={{
      "type": "paragraph"
    }}>Registering the Renderer</_Heading>
<p>{`Via a couple of React components, the next step is registering the renderer React component within our project’s `}<strong parentName="p">{`Admin`}</strong>{` and `}<strong parentName="p">{`Website`}</strong>{` apps.`}</p>
<p>{`For this, we’ll be utilizing the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-examples/blob/master/page-builder/custom-page-elements/extensions/spaceXElement/src/admin.tsx"
      }}><inlineCode parentName="a">{`admin.tsx`}</inlineCode></a>{` and `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-examples/blob/master/page-builder/custom-page-elements/extensions/spaceXElement/src/website.tsx"
      }}><inlineCode parentName="a">{`website.tsx`}</inlineCode></a>{` entry points, that the Page Builder element extension has created for us. Within these files, we’ll be registering the renderer React component via the `}<inlineCode parentName="p">{`PbEditorPageElementPlugin`}</inlineCode>{` and `}<inlineCode parentName="p">{`PbRenderElementPlugin`}</inlineCode>{` React components.`}</p>
<Image src={_Image2} alt={"Page Preview In the Admin App"} mdxType="Image" />
<_Heading level={2} id={"implementation"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Implementation</_Heading>
<_Heading level={3} id={"renderer-react-component"} nextElement={{
      "type": "paragraph"
    }}>Renderer React Component</_Heading>
<p>{`As previously mentioned, in order to create a custom page element, we start off by creating a new renderer React component. To do that, we create the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-examples/blob/master/page-builder/custom-page-elements/extensions/spaceXElement/src/SpaceX.tsx"
      }}><inlineCode parentName="a">{`extensions/spaceXElement/src/SpaceX.tsx`}</inlineCode></a>{` file with the following code:`}</p>
<Editor title="extensions/spaceXElement/src/SpaceX.tsx" lang="tsx" mdxType="Editor">
{`import React from "react";
import { request } from "graphql-request";
import { 
  createRenderer,
  useRenderer,
  useLoader 
} from "@webiny/app-page-builder-elements";

// For simplicity, we're hard-coding the GraphQL HTTP API URL here.
const GQL_API_URL = "https://spacex-production.up.railway.app/";

// These are the necessary GraphQL queries we'll need in order to retrieve data.
const QUERIES = {
    rockets: /* GraphQL */ \`
        query listRockets($limit: Int, $offset: Int) {
            data: rockets(limit: $limit, offset: $offset) {
                id
                name
                description
                wikipedia
            }
        }
    \`,
    dragons: /* GraphQL */ \`
        query listDragons($limit: Int, $offset: Int) {
            data: dragons(limit: $limit, offset: $offset) {
                id
                name
                description
                wikipedia
            }
        }
    \`
};

export interface Spacecraft {
    id: string;
    name: string;
    description: string;
    wikipedia: string;
}

// It's often useful to type the data that the page element will carry.
export interface SpaceXElementData {
    variables: {
        limit: string;
        offset: string;
        type: "rockets" | "dragons";
    };
}

// The renderer React component.
export const SpaceX = createRenderer(() => {
    // Let's retrieve the variables that were chosen by
    // the user upon dropping the page element onto the page.
    const { getElement } = useRenderer();
    const element = getElement<SpaceXElementData>();
    const { limit, offset, type } = element.data.variables;

    const { data, error, loading } = useLoader<Spacecraft[], Error>(
        () => {
            return request(GQL_API_URL, QUERIES[type], {
                limit: parseInt(limit),
                offset: parseInt(offset)
            }).then(res => res.data);
        },
        { cacheKey: [limit, offset, type] }
    );

    if (loading) {
        return <>Loading...</>;
    }

    // Displaying an error message if the data fetching failed.
    if (error) {
        console.error("An error occurred while fetching data:", error);
        return <>An error occurred: {error.message}</>;
    }

    if (!data?.length) {
        return <>Nothing to show.</>;
    }

    // If the data has been retrieved, we render it via a simple unordered list.
    return (
        <ul>
            {data.map(item => (
                <li key={item.id}>
                    <h1>{item.name}</h1>
                    <div>{item.description}</div>
                    <br />
                    <div>
                        More info at&nbsp;
                        <a href={item.wikipedia} target={"_blank"} rel={"noreferrer"}>
                            {item.wikipedia}
                        </a>
                    </div>
                </li>
            ))}
        </ul>
    );
});
`}
</Editor>
<p>{`As we can see in the code, in order to be able to issue remote GraphQL queries, we’re using the `}<a parentName="p" {...{
        "href": "https://www.npmjs.com/package/graphql-request"
      }}><inlineCode parentName="a">{`graphql-request`}</inlineCode></a>{` library, which we’ve specified as our extension’s dependency upon running the `}<_Link href="/docs/5.x/core-development-concepts/basics/webiny-cli#yarn-webiny-extension"><inlineCode parentName="p">{`webiny extension`}</inlineCode></_Link>{` command in the `}<a parentName="p" {...{
        "href": "#getting-started"
      }}>{`Getting Started`}</a>{` section. `}</p>
<p>{`Note that our GraphQL query is called within the `}<inlineCode parentName="p">{`useLoader`}</inlineCode>{` React hook. This is important because, essentially, this enables proper data caching when the page is published. This way, the page element is rendered efficiently, without the need to re-fetch the data each time the page is loaded.`}</p>
<Alert mdxType="Alert">
<p>{`  Learn more about the `}<inlineCode parentName="p">{`useLoader`}</inlineCode>{` React hook in a separate article: `}<_Link href="/docs/5.x/page-builder/extending/loading-data-in-page-elements">{`Loading Data in Page Elements`}</_Link>{`.`}</p>
</Alert>
<p>{`Finally, we’ve created a simple unordered list to display the data that has been retrieved. The data is displayed in the form of a list of spacecrafts, with each item containing the spacecraft’s name, description, and a link to its Wikipedia page. `}</p>
<p>{`So, with this code in place, we’re ready for the next step, which is registering the renderer React component within our `}<strong parentName="p">{`Admin`}</strong>{` and `}<strong parentName="p">{`Website`}</strong>{` apps.`}</p>
<_Heading level={3} id={"admin-app"} nextElement={{
      "type": "paragraph"
    }}>Admin App</_Heading>
<p>{`Registering our custom page element within the `}<strong parentName="p">{`Admin`}</strong>{` app is done via the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-examples/blob/master/page-builder/custom-page-elements/extensions/spaceXElement/src/admin.tsx"
      }}><inlineCode parentName="a">{`extensions/spaceXElement/ksrc/admin.tsx`}</inlineCode></a>{` entry point file, via three React components.`}</p>
<p>{`The first one is the `}<inlineCode parentName="p">{`PbEditorPageElementPlugin`}</inlineCode>{` component, which is used to register the renderer React component within the page editor. The second one is the `}<inlineCode parentName="p">{`PbRenderElementPlugin`}</inlineCode>{` component, which is used to register the renderer React component within the `}<strong parentName="p">{`Admin`}</strong>{` app, outside the page editor. This is important because pages can also be previewed within the `}<strong parentName="p">{`Admin`}</strong>{` app, for example:`}</p>
<Image src={_Image3} alt={"Page Preview In the Admin App"} mdxType="Image" />
<p>{`Finally, the `}<inlineCode parentName="p">{`PbEditorPageElementAdvancedSettingsPlugin`}</inlineCode>{` React component is used to register the advanced settings React component within the page editor.`}</p>
<Image title="Page Element Settings" src={elementSettings} style={{
      width: 450
    }} mdxType="Image" />
<p>{`The following code snippet shows the contents of the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-examples/blob/master/page-builder/custom-page-elements/extensions/spaceXElement/src/admin.tsx"
      }}><inlineCode parentName="a">{`extensions/spaceXElement/src/admin.tsx`}</inlineCode></a>{` file:`}</p>
<Editor title="extensions/spaceXElement/src/admin.tsx" lang="tsx" mdxType="Editor">
{`import React from "react";
import {
    PbEditorPageElementAdvancedSettingsPlugin,
    PbEditorPageElementPlugin,
    PbRenderElementPlugin
} from "@webiny/app-page-builder";
import { SpaceX, SpaceXElementData } from "./SpaceX";
import { OnCreateActions } from "@webiny/app-page-builder/types";
import { AdvancedSettings } from "./admin/AdvancedSettings";

const INITIAL_ELEMENT_DATA: SpaceXElementData = {
    variables: { type: "rockets", limit: "10", offset: "0" }
};

export const Extension = () => (
    <>
        <PbRenderElementPlugin elementType={"spaceX"} renderer={SpaceX} />
        <PbEditorPageElementPlugin
            elementType={"spaceX"}
            renderer={SpaceX}
            toolbar={{
                // We use \`pb-editor-element-group-media\` to put our new
                // page element into the Media group in the left sidebar.
                title: "SpaceX",
                group: "pb-editor-element-group-media",
                preview() {
                    // We can return any JSX / React code here. To keep it
                    // simple, we are simply returning the element's name.
                    return <>Space X Page Element</>;
                }
            }}
            // Defines which types of element settings are available to the user.
            settings={[
                "pb-editor-page-element-settings-delete",
                "pb-editor-page-element-settings-visibility",
                "pb-editor-page-element-style-settings-padding",
                "pb-editor-page-element-style-settings-margin",
                "pb-editor-page-element-style-settings-width",
                "pb-editor-page-element-style-settings-height",
                "pb-editor-page-element-style-settings-background"
            ]}
            // Defines onto which existing elements our element can be dropped.
            // In most cases, using \`["cell", "block"]\` will suffice.
            target={["cell", "block"]}
            onCreate={OnCreateActions.OPEN_SETTINGS}
            // \`create\` function creates the initial data for the page element.
            create={options => {
                return {
                    type: "spaceX",
                    elements: [],
                    data: INITIAL_ELEMENT_DATA,
                    ...options
                };
            }}
        />
        <PbEditorPageElementAdvancedSettingsPlugin
            elementType={"spaceX"}
            element={<AdvancedSettings />}
        />
    </>
);`}
</Editor>
<p>{`With this code in place, our custom page element should be available within the page editor, and also within the `}<strong parentName="p">{`Admin`}</strong>{` app itself, where pages are previewed.`}</p>
<p>{`Before jumping into our browser to see the results though, let’s also register the renderer React component within the `}<strong parentName="p">{`Website`}</strong>{` app.`}</p>
<_Heading level={3} id={"website-app"} nextElement={{
      "type": "paragraph"
    }}>Website App</_Heading>
<p>{`In order for our custom renderer React component to be used in a page on our public website, we need to register it via the `}<inlineCode parentName="p">{`PbRenderElementPlugin`}</inlineCode>{` plugin, via the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-examples/blob/master/page-builder/custom-page-elements/extensions/spaceXElement/src/website.tsx"
      }}><inlineCode parentName="a">{`website.tsx`}</inlineCode></a>{` entry point file:`}</p>
<Editor title="extensions/spaceXElement/src/website.tsx" lang="tsx" mdxType="Editor">
{`import React from "react";
import { PbRenderElementPlugin } from "@webiny/app-website";
import { SpaceX } from "./SpaceX";

export const Extension = () => <PbRenderElementPlugin elementType={"spaceX"} renderer={SpaceX} />;`}
</Editor>
<p>{`And that’s all there is to it. With this code in place, we can now jump into our browser and see the results.`}</p>
<_Heading level={2} id={"testing"} nextElement={{
      "type": "paragraph"
    }}>Testing</_Heading>
<p>{`With the above steps correctly completed, we should be able to see our custom page element in Page Builder’s page editor and be able to drop it onto a page. `}</p>
<Video src={elementInEditor} controls={true} mdxType="Video" />
<p>{`The page element should also be correctly rendered when previewing the page, and also on the public website, once the page has been published.`}</p>
<_Heading level={2} id={"conclusion"} nextElement={{
      "type": "paragraph"
    }}>Conclusion</_Heading>
<p>{`In this article, we’ve created a simple page element that retrieves data from a public SpaceX GraphQL HTTP API. We’ve also seen how to register the renderer React component within the `}<strong parentName="p">{`Admin`}</strong>{` and `}<strong parentName="p">{`Website`}</strong>{` apps, so that the page element can be used within the page editor, and also on the public website.`}</p>
<p>{`Of course, this is just a starting point. We encourage you to experiment further and create more complex page elements that can be used to create rich and engaging pages for your website.`}</p>
<_Heading level={2} id={"additional-examples"} nextElement={{
      "type": "list",
      "ordered": false,
      "start": null,
      "spread": false
    }}>Additional Examples</_Heading>
<ul>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-examples/tree/master/page-builder/cards-page-element"
        }}>{`Cards Page Element`}</a></li>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-examples/tree/master/page-builder/pages-as-modals"
        }}>{`Pages as Modal Content`}</a></li>
</ul>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;