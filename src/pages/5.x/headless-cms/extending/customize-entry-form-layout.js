/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image3 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/customize-entry-form/customElements.png'
import _Image2 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/customize-entry-form/customLayout.png'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/customize-entry-form/defaultLayout.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import hmcsCustomEntryMetaTitle from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/hmcs-custom-entry-title-meta.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Customize Entry Form Layout",
  "description": "How to create a custom form layout for content model data entry.",
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
  "title": "Getting Started",
  "slug": "getting-started",
  "children": []
}, {
  "title": "Simple Layout",
  "slug": "simple-layout",
  "children": []
}, {
  "title": "Conditional UI",
  "slug": "conditional-ui",
  "children": []
}, {
  "title": "Custom UI Elements",
  "slug": "custom-ui-elements",
  "children": []
}, {
  "title": "Custom Width",
  "slug": "custom-width",
  "children": []
}, {
  "title": "Custom Meta and Title Components",
  "slug": "custom-meta-and-title-components",
  "children": [{
    "title": "Custom Meta Decorated Component",
    "slug": "custom-meta-decorated-component",
    "children": []
  }, {
    "title": "Custom Title Decorated Component",
    "slug": "custom-title-decorated-component",
    "children": []
  }, {
    "title": "Applying Custom Components",
    "slug": "applying-custom-components",
    "children": []
  }]
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const CanIUseThis = makeShortcode("CanIUseThis");
const WhatYouWillLearn = makeShortcode("WhatYouWillLearn");
const ExtensionsGettingStarted = makeShortcode("ExtensionsGettingStarted");
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







<CanIUseThis since={"5.28.0"} mdxType="CanIUseThis" />
<WhatYouWillLearn mdxType="WhatYouWillLearn">
<ul>
<li parentName="ul">{`how to render custom form layout`}</li>
<li parentName="ul">{`how to render UI elements based on user’s permissions`}</li>
<li parentName="ul">{`how to use form data to render custom UI elements`}</li>
</ul>
</WhatYouWillLearn>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Out of the box, our Headless CMS allows you to organize content model fields in a grid layout. That is fine for a basic UI, with several fields. However, as your content model grows, you may need to organize the UI to be more visually appealing and easier to navigate for your content editors.`}</p>
<p>{`Custom form layouts will also come in handy if you need to show or hide certain elements of the form based on content editor’s permissions, or even render additional UI like helper text, links, images, etc.`}</p>
<_Heading level={2} id={"getting-started"} nextElement={{
      "type": "jsx"
    }}>Getting Started</_Heading>
<ExtensionsGettingStarted type={"admin"} name={"customCmsEntryFormLayout"} dependencies={"@webiny/app-headless-cms,@webiny/api-serverless-cms,@webiny/ui"} fullExampleLink={"https://github.com/webiny/webiny-examples/tree/master/custom-cms-entry-form-layout"} fullExampleDownloadLink={"custom-cms-entry-form-layout"} mdxType="ExtensionsGettingStarted" />
<Alert type={"warning"} mdxType="Alert">
<p>{`  Note that code examples shown in this guide are working with the `}<strong parentName="p">{`Pizza`}</strong>{` content model, whose creation is not covered in this guide. But, in the `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-examples/blob/master/custom-cms-entry-form-layout/5.41.x/extensions/models/src/index.ts"
        }}>{`full example`}</a>{`, the model is defined programmatically, so, you can use it to follow along.`}</p>
</Alert> 
<_Heading level={2} id={"simple-layout"} nextElement={{
      "type": "paragraph"
    }}>Simple Layout</_Heading>
<p>{`The following plugin renders a simple content form for the `}<inlineCode parentName="p">{`pizza`}</inlineCode>{` content model.`}</p>
<p>{`Note that the `}<inlineCode parentName="p">{`fields`}</inlineCode>{` object contains key-value pairs of content model fields, with key being the `}<inlineCode parentName="p">{`fieldId`}</inlineCode>{` (defined in the content model editor), and value being a React element rendered using the appropriate field renderer. All you need to do is place those field elements in your new layout.`}</p>
<Editor title="extensions/customCmsEntryFormLayout/src/index.tsx" lang="tsx" mdxType="Editor">
{`import React from "react";
import { CmsContentFormRendererPlugin } from "@webiny/app-headless-cms";

export const Extension = () => {
    return (
        <>
            <CmsContentFormRendererPlugin
                modelId={"pizza"}
                render={({ fields }) => {
                    return <div>{fields.title}</div>;
                }}
            />
        </>
    );
};`}
</Editor>
<_Heading level={2} id={"conditional-ui"} nextElement={{
      "type": "paragraph"
    }}>Conditional UI</_Heading>
<p>{`If we want to render UI based on user’s permissions, we’ll need to utilize the `}<inlineCode parentName="p">{`useSecurity`}</inlineCode>{` React hook. In this example, we’re creating a more elaborate layout for our form, using the `}<inlineCode parentName="p">{`Tabs`}</inlineCode>{` component:`}</p>
<Editor title="extensions/customCmsEntryFormLayout/src/index.tsx" lang="tsx" mdxType="Editor">
{`import React from "react";
import { useSecurity } from "@webiny/app-serverless-cms";
import { CmsContentFormRendererPlugin } from "@webiny/app-headless-cms";
import { Grid, Cell } from "@webiny/ui/Grid";
import { Tabs, Tab } from "@webiny/ui/Tabs";

type CmsContentFormRendererProps = React.ComponentProps<typeof CmsContentFormRendererPlugin>;

const PizzaLayout: CmsContentFormRendererProps["render"] = ({ fields }) => {
    // Access security identity.
    const { getPermission } = useSecurity();

    // Get the necessary permission.
    const bakeryPermission = getPermission("bakery");

    // Check if the user has the permission to edit a recipe.
    const canEditRecipe = bakeryPermission && bakeryPermission["canEditRecipe"] === true;

    return (
        <Tabs>
            <Tab label="General">
                <Grid>
                    <Cell span={12}>{fields["name"]}</Cell>
                </Grid>
                <Grid>
                    <Cell span={6}>{fields["price"]}</Cell>
                    <Cell span={6}>{fields["numberOfIngredients"]}</Cell>
                </Grid>
            </Tab>
            {/* Hide the Recipe tab if the user doesn't have the required permission. */}
            {canEditRecipe && (
                <Tab label="Recipe">
                    <Grid>
                        <Cell span={12}>{fields["recipe"]}</Cell>
                    </Grid>
                </Tab>
            )}
            <Tab label="History">
                <Grid>
                    <Cell span={12}>{fields["history"]}</Cell>
                </Grid>
            </Tab>
        </Tabs>
    );
};

export const Extension = () => {
    return (
        <>
            <CmsContentFormRendererPlugin modelId="pizza" render={PizzaLayout} />
        </>
    );
};`}
</Editor>
<p>{`Here’s what a default layout looks like:`}</p>
<Image src={_Image1} alt={"Default form layout"} mdxType="Image" />
<p>{`With our extension, we get our custom layout:`}</p>
<Image src={_Image2} alt={"Custom form layout"} mdxType="Image" />
<p>{`You can see the `}<inlineCode parentName="p">{`Recipe`}</inlineCode>{` tab is hidden. That’s because we don’t have the necessary permission to view it.`}</p>
<_Heading level={2} id={"custom-ui-elements"} nextElement={{
      "type": "paragraph"
    }}>Custom UI Elements</_Heading>
<p>{`Using form data you can also render other UI elements, or even show/hide fields depending on the value of some other field. In the following example, we show a warning if the price is less than `}<inlineCode parentName="p">{`20`}</inlineCode>{` and number of ingredients is greater than `}<inlineCode parentName="p">{`6`}</inlineCode>{`:`}</p>
<Editor title="extensions/customCmsEntryFormLayout/src/index.tsx" lang="diff-tsx" mdxType="Editor">
{`import React from "react";
import { useSecurity } from "@webiny/app-serverless-cms";
import { CmsContentFormRendererPlugin } from "@webiny/app-headless-cms";
import { Grid, Cell } from "@webiny/ui/Grid";
import { Tabs, Tab } from "@webiny/ui/Tabs";
+ import { Alert } from "@webiny/ui/Alert";

type CmsContentFormRendererProps = React.ComponentProps<typeof CmsContentFormRendererPlugin>;

+ const PizzaLayout: CmsContentFormRendererProps["render"] = ({ fields, data }) => {
    // Access security identity.
    const { getPermission } = useSecurity();

    // Get the necessary permission.
    const bakeryPermission = getPermission("bakery");

    // Check if the user has the permission to edit a recipe.
    const canEditRecipe = bakeryPermission && bakeryPermission["canEditRecipe"] === true;

    const priceTooLow = data["price"] < 20 && data["numberOfIngredients"] > 6;

    return (
        <Tabs>
            <Tab label="General">
+               {priceTooLow && (
+                   <Grid>
+                       <Cell span={12}>
+                           <Alert type={"warning"} title={"Please double-check your input"}>
+                               The price of <strong>{data["price"]}</strong> seems too low for a pizza
+                               with over <strong>6</strong> ingredients.
+                           </Alert>
+                       </Cell>
+                   </Grid>
+               )}

                <Grid>
                    <Cell span={12}>{fields["name"]}</Cell>
                </Grid>
                <Grid>
                    <Cell span={6}>{fields["price"]}</Cell>
                    <Cell span={6}>{fields["numberOfIngredients"]}</Cell>
                </Grid>
            </Tab>
            {/* Hide the Recipe tab if the user doesn't have the required permission. */}
            {canEditRecipe && (
                <Tab label="Recipe">
                    <Grid>
                        <Cell span={12}>{fields["recipe"]}</Cell>
                    </Grid>
                </Tab>
            )}
            <Tab label="History">
                <Grid>
                    <Cell span={12}>{fields["history"]}</Cell>
                </Grid>
            </Tab>
        </Tabs>
    );
};

export const Extension = () => {
    return (
        <>
            <CmsContentFormRendererPlugin modelId="pizza" render={PizzaLayout} />
        </>
    );
};`}
</Editor>
<p>{`Using this approach, you can add a nice touch to your UI and guide the content editor with additional logic, validate the input, and add other helpful elements which would otherwise be really difficult to define on the content model itself:`}</p>
<Image src={_Image3} alt={"Custom UI elements"} mdxType="Image" />
<_Heading level={2} id={"custom-width"} nextElement={{
      "type": "paragraph"
    }}>Custom Width</_Heading>
<p>{`The default width of the content entry form is `}<strong parentName="p">{`1020px`}</strong>{`. You can change this by using the `}<inlineCode parentName="p">{`Width`}</inlineCode>{` config component. The value can be anything supported by the CSS width property. `}</p>
<p>{`You can apply width settings to specific content models using model IDs, ensuring precise customization.`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`import { ContentEntryEditorConfig } from "@webiny/app-headless-cms";

<ContentEntryEditorConfig>
    {/* Use percentage value. */}
    <ContentEntryEditorConfig.Width value={"100%"} />
    {/* Use pixel value. */}
    <ContentEntryEditorConfig.Width value={"960px"} />
    {/* Apply width settings to specific content models. */}
    <ContentEntryEditorConfig.Width value={"80vw"} modelIds={["article", "author"]} />
<ContentEntryEditorConfig>`}
</Editor>
<_Heading level={2} id={"custom-meta-and-title-components"} nextElement={{
      "type": "paragraph"
    }}>Custom Meta and Title Components</_Heading>
<p>{`You can now `}<strong parentName="p">{`customize the Meta and Title`}</strong>{` sections in the `}<strong parentName="p">{`Content Entry Form`}</strong>{` using `}<strong parentName="p">{`decoratable components`}</strong>{`:`}</p>
<ul>
<li parentName="ul"><inlineCode parentName="li">{`ContentEntryForm.Header.Meta`}</inlineCode>{` – This section typically shows model information and status.`}</li>
<li parentName="ul"><inlineCode parentName="li">{`ContentEntryForm.Header.Title`}</inlineCode>{` – This section displays the entry’s title.`}</li>
</ul>
<_Heading level={3} id={"custom-meta-decorated-component"} nextElement={{
      "type": "paragraph"
    }}>Custom Meta Decorated Component</_Heading>
<p>{`The `}<inlineCode parentName="p">{`Header.Meta`}</inlineCode>{` section typically shows model information and status. Let’s override it to display `}<strong parentName="p">{`custom metadata`}</strong>{` when editing an “article” entry.`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`import { ContentEntryEditorConfig, useContentEntry } from "@webiny/app-headless-cms";
import { Typography } from "@webiny/ui/Typography";

const CustomContentEntryFormMeta =
    ContentEntryEditorConfig.ContentEntry.ContentEntryForm.Header.Meta.createDecorator(Original => {
        return function decorate() {
            const { contentModel } = useContentEntry();

            // Apply custom meta only for the "article" model
            if (contentModel.modelId !== "article") {
                return <Original />;
            }

            return <Typography use={"body2"}>{"Custom meta"}</Typography>;
        };
    });
`}
</Editor>
<_Heading level={3} id={"custom-title-decorated-component"} nextElement={{
      "type": "paragraph"
    }}>Custom Title Decorated Component</_Heading>
<p>{`The `}<inlineCode parentName="p">{`Header.Title`}</inlineCode>{` section displays the entry’s title. Let’s modify it to show a custom title when editing an “article” entry.`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`import { ContentEntryEditorConfig, useContentEntry } from "@webiny/app-headless-cms";
import { Typography } from "@webiny/ui/Typography";

const CustomContentEntryFormTitle =
    ContentEntryEditorConfig.ContentEntry.ContentEntryForm.Header.Title.createDecorator(Original => {
        return function decorate() {
            const { entry, contentModel } = useContentEntry();

            // Apply custom title only for the "article" model with a meta.title field
            if (contentModel.modelId !== "article" || !entry?.meta?.title) {
                return <Original />;
            }

            return <Typography use={"headline6"}>{\`Custom Title: \${entry.meta.title}\`}</Typography>;
        };
    });`}
</Editor>
<_Heading level={3} id={"applying-custom-components"} nextElement={{
      "type": "paragraph"
    }}>Applying Custom Components</_Heading>
<p>{`Now, let’s register these custom components in the Admin app:`}</p>
<Editor title="apps/admin/src/App.tsx" lang="diff-tsx" mdxType="Editor">
{`export const App = () => {
    return (
        <Admin>
            <Cognito />
            <Extensions />
            <ContentEntryEditorConfig>
+               <CustomContentEntryFormMeta />
+               <CustomContentEntryFormTitle />
            </ContentEntryEditorConfig>
        </Admin>
    );
};`}
</Editor>
<p>{`With these customizations, you now have full control over how meta information and titles appear in the Content Entry Form. Whether it’s tweaking metadata or refining how titles are displayed, this approach allows third-party developers to tailor the experience to their needs.`}</p>
<Image src={hmcsCustomEntryMetaTitle} alt="Custom Meta and Title Elements" mdxType="Image" />
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;