/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { CanIUseThis } from "@/components/CanIUseThis";
import {WhatYouWillLearn} from "@/components/WhatYouWillLearn";
import conditionalValidation from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/conditional-validation.gif";
import conditionalFields from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/conditional-fields.gif";
import conditionalRenderer from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/conditional-renderer.gif";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Conditional Rendering",
  "description": "Learn how to programmatically control fields, validators, and field renderers.",
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
  "title": "Conditional Validation",
  "slug": "conditional-validation",
  "children": []
}, {
  "title": "Conditional Field Visibility",
  "slug": "conditional-field-visibility",
  "children": []
}, {
  "title": "Conditional Field Renderer",
  "slug": "conditional-field-renderer",
  "children": []
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Image = makeShortcode("Image");
const Alert = makeShortcode("Alert");
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







<CanIUseThis since={"5.40.x"} mdxType="CanIUseThis" />
<WhatYouWillLearn mdxType="WhatYouWillLearn">
<ul>
<li parentName="ul">{`how to customize every field in the content entry form`}</li>
<li parentName="ul">{`how to customize validation logic`}</li>
<li parentName="ul">{`how to customize field visibility`}</li>
<li parentName="ul">{`how to customize field renderers`}</li>
</ul>
</WhatYouWillLearn>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Most of the time, configuring your content model via the model editor will be enough. However, there are cases when you need to implement very specific business requirements, which you can only do through code. In this article we cover some of these scenarios.`}</p>
<p>{`The idea behind all customizations in this article is quite simple: we create a decorator for the `}<inlineCode parentName="p">{`FieldElement`}</inlineCode>{` component, which is responsible for rendering of every field in the content entry form. By decorating the component, we can control its props and modify them at runtime, wrap the component, add custom elements, or hide the field entirely.`}</p>
<_Heading level={2} id={"conditional-validation"} nextElement={{
      "type": "paragraph"
    }}>Conditional Validation</_Heading>
<p>{`In this example, we want to change field validators depending on some other field value. We’ve defined a model with two dependent fields, `}<inlineCode parentName="p">{`pricingClass`}</inlineCode>{` and `}<inlineCode parentName="p">{`price`}</inlineCode>{`, where `}<inlineCode parentName="p">{`price`}</inlineCode>{` field value validators depend on the value of the `}<inlineCode parentName="p">{`pricingClass`}</inlineCode>{` field.`}</p>
<Image src={conditionalValidation} title={"Conditional Validation"} mdxType="Image" />
<Alert type={"info"} title="Extension Available!" mdxType="Alert">
{`This example can be installed directly into your project by running:`}
<br />


<inlineCode>{`yarn webiny scaffold extension headless-cms/conditional-validation`}</inlineCode>
<p>{`Extension source code, and the accompanying content model, can be found `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-examples/tree/master/headless-cms/conditional-validation"
        }}>{`here`}</a>{`.`}</p>
</Alert>
<Editor title="Conditional Validation" lang="tsx" mdxType="Editor">
{`import React from "react";
import { ContentEntryEditorConfig } from "@webiny/app-headless-cms";
import { useForm } from "@webiny/form";

const { FieldElement } = ContentEntryEditorConfig;

const validators = {
  low: {
    helpText: "Enter value between 0 and 99.",
    validators: [
      {
        name: "lte",
        message: "Value is too high! Enter value lower than 100.",
        settings: {
          value: 99
        }
      }
    ]
  },
  medium: {
    helpText: "Enter value between 100 and 500.",
    validators: [
      {
        name: "gte",
        message: "Value is too low! Enter value between 100 and 500.",
        settings: {
          value: 100
        }
      },
      {
        name: "lte",
        message: "Value is too high! Enter value between 100 and 500.",
        settings: {
          value: 500
        }
      }
    ]
  },
  high: {
    helpText: "Enter value above 500.",
    validators: [
      {
        name: "gte",
        message: "Value is too low! Enter value above 500.",
        settings: {
          value: 500
        }
      }
    ]
  }
};

type PricingClassValue = "low" | "medium" | "high" | undefined;

const ConditionalValidation = FieldElement.createDecorator(Original => {
  return function ConditionalRender(props) {
    const form = useForm();
    const pricingClass = form.getValue("pricingClass") as PricingClassValue;

    const field = props.field;
    if (field.fieldId === "price" && pricingClass !== undefined) {
      return (
        <Original
          {...props}
          field={{
            ...field,
            helpText: validators[pricingClass].helpText,
            validation: validators[pricingClass].validators
          }}
        />
      );
    }

    return <Original {...props} />;
  };
});

export const Extension = () => {
  return (
    <>
      <ContentEntryEditorConfig>
        <ConditionalValidation modelIds={["conditionalValidation"]} />
      </ContentEntryEditorConfig>
    </>
  );
};`}
</Editor>
<p><inlineCode parentName="p">{`FieldElement`}</inlineCode>{` decorators support a `}<inlineCode parentName="p">{`modelIds`}</inlineCode>{` prop, which allows us to limit which models are affected by this customization.`}</p>
<_Heading level={2} id={"conditional-field-visibility"} nextElement={{
      "type": "paragraph"
    }}>Conditional Field Visibility</_Heading>
<p>{`In this example, we want to show or hide a field depending on some other field value. We’ve defined a model with three fields, where the value of the `}<inlineCode parentName="p">{`videoType`}</inlineCode>{` field affects the visibility of the other two fields, `}<inlineCode parentName="p">{`videoUrl`}</inlineCode>{`, and `}<inlineCode parentName="p">{`videoUpload`}</inlineCode>{`.`}</p>
<Image src={conditionalFields} title={"Conditional Fields"} mdxType="Image" />
<Alert type={"info"} title="Extension Available!" mdxType="Alert">
{`This example can be installed directly into your project by running:`}
<br />


<inlineCode>{`yarn webiny scaffold extension headless-cms/conditional-fields`}</inlineCode>
<p>{`Extension source code, and the accompanying content model, can be found `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-examples/tree/master/headless-cms/conditional-fields"
        }}>{`here`}</a>{`.`}</p>
</Alert>
<Editor title="Conditional Fields" lang="tsx" mdxType="Editor">
{`import React from "react";
import { ContentEntryEditorConfig } from "@webiny/app-headless-cms";
import { useForm } from "@webiny/form";

const { FieldElement } = ContentEntryEditorConfig;

type VideoInputType = "url" | "upload" | undefined;

const ConditionalFields = FieldElement.createDecorator(Original => {
  return function ConditionalRender(props) {
    const form = useForm();
    const videoInputType = form.getValue("videoType") as VideoInputType;

    const field = props.field;

    if (field.fieldId === "videoUrl" && videoInputType !== "url") {
      return null;
    }

    if (field.fieldId === "videoUpload" && videoInputType !== "upload") {
      return null;
    }

    return <Original {...props} />;
  };
});

export const Extension = () => {
  return (
    <>
      <ContentEntryEditorConfig>
        <ConditionalFields modelIds={["conditionalFields"]} />
      </ContentEntryEditorConfig>
    </>
  );
};`}
</Editor>
<_Heading level={2} id={"conditional-field-renderer"} nextElement={{
      "type": "paragraph"
    }}>Conditional Field Renderer</_Heading>
<p>{`In this example, we want to change the renderer of the field depending on the value of the `}<inlineCode parentName="p">{`videoType`}</inlineCode>{` field. This allows us to show a different UI to the user, but use the same underlying field for data storage.`}</p>
<Image src={conditionalRenderer} title={"Conditional Field Renderer"} mdxType="Image" />
<Alert type={"info"} title="Extension Available!" mdxType="Alert">
{`This example can be installed directly into your project by running:`}
<br />


<inlineCode>{`yarn webiny scaffold extension headless-cms/conditional-renderer`}</inlineCode>
<p>{`Extension source code, and the accompanying content model, can be found `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-examples/tree/master/headless-cms/conditional-renderer"
        }}>{`here`}</a>{`.`}</p>
</Alert>
<Editor title="Conditional Field Renderer" lang="tsx" mdxType="Editor">
{`import React from "react";
import { ContentEntryEditorConfig } from "@webiny/app-headless-cms";
import { useForm } from "@webiny/form";

const { FieldElement } = ContentEntryEditorConfig;

type VideoInputType = "url" | "upload" | undefined;

const ConditionalRenderer = FieldElement.createDecorator(Original => {
  return function ConditionalRender(props) {
    const form = useForm();
    const videoInputType = form.getValue("videoType") as VideoInputType;

    const field = props.field;

    if (field.fieldId === "video") {
      const renderer = videoInputType === "url" ? "text-input" : "file-input";

      return (
        <Original
          {...props}
          field={{
            ...field,
            renderer: {
              name: renderer
            }
          }}
        />
      );
    }

    return <Original {...props} />;
  };
});

export const Extension = () => {
  return (
    <>
      <ContentEntryEditorConfig>
        <ConditionalRenderer modelIds={["conditionalRenderer"]} />
      </ContentEntryEditorConfig>
    </>
  );
};`}
</Editor>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;