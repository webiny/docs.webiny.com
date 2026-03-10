/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image3 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/form-builder/theming/assets/webiny-theme-form-layout.gif'
import _Image2 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/form-builder/theming/assets/webiny-fb-form-settings.png'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/form-builder/theming/assets/webiny-fb-form-settings-button.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Layouts",
  "description": "Basics of Form Builder theme layouts.",
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
  "title": "Using Layout in Forms",
  "slug": "using-layout-in-forms",
  "children": []
}, {
  "title": "Anatomy of Form Layout",
  "slug": "anatomy-of-form-layout",
  "children": [{
    "title": "Plugin",
    "slug": "plugin",
    "children": []
  }, {
    "title": "Form Layout React Component",
    "slug": "form-layout-react-component",
    "children": []
  }, {
    "title": "Form Layout Component's Props",
    "slug": "form-layout-component-s-props",
    "children": []
  }]
}, {
  "title": "Add a New Form Layout",
  "slug": "add-a-new-form-layout",
  "children": [{
    "title": "Create Layout Component",
    "slug": "create-layout-component",
    "children": []
  }, {
    "title": "Register the New Form Layout",
    "slug": "register-the-new-form-layout",
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






<Alert type="success" title="What You’ll Learn" mdxType="Alert">
<ul>
<li parentName="ul">{`what are Form Builder theme layouts`}</li>
<li parentName="ul">{`how to use layouts in forms`}</li>
<li parentName="ul">{`how to create a new layout`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`In this section, you learn all about the Form Builder theme layouts.`}</p>
<p>{`Every form you create via the Form Builder app has a layout, which lets you define the design of your forms.`}</p>
<p>{`Because the form layout is a React component, there are virtually no restrictions when it comes to adding customizations.
Feel free to organize the code to your liking, import custom CSS, fonts, or even additional custom React components if there’s a need for it.`}</p>
<_Heading level={2} id={"using-layout-in-forms"} nextElement={{
      "type": "paragraph"
    }}>Using Layout in Forms</_Heading>
<p>{`Be default, every form has a default layout, which can be changed via the form settings. In the Form Builder, click on the settings icon in the top right corner:`}</p>
<Image src={_Image1} alt={"Webiny form settings button"} mdxType="Image" />
<p>{`You should then see the following screen, and the “Layout” field at the bottom of the general settings form:`}</p>
<Image src={_Image2} alt={"Webiny form settings button"} mdxType="Image" />
<Alert type="info" mdxType="Alert">
<p>{`Please note that a single form layout can be used on any number of forms, but every single form can use only one layout.`}</p>
</Alert>
<_Heading level={2} id={"anatomy-of-form-layout"} nextElement={{
      "type": "paragraph"
    }}>Anatomy of Form Layout</_Heading>
<p>{`Let’s take a closer look at the structure of a form layout and its component.`}</p>
<_Heading level={3} id={"plugin"} nextElement={{
      "type": "paragraph"
    }}>Plugin</_Heading>
<p>{`The following snippet of code shows how to add a new form layout via a simple plugin:`}</p>
<Editor title="apps/theme/formBuilder/index.ts" lang="ts" mdxType="Editor">
{`import DefaultFormLayout from "./layouts/DefaultFormLayout";

export default [
  {
    name: "form-layout-default",
    type: "form-layout",
    layout: {
      name: "default",
      title: "Default layout",
      component: DefaultFormLayout
    }
  }
];`}
</Editor>
<Alert type="info" mdxType="Alert">
<p>{`The plugin is defined once but must be registered both in your admin and website apps.
It enables you to do both:`}</p>
<ul>
<li parentName="ul">{`see the form preview in the Form Builder editor`}</li>
<li parentName="ul">{`and show your form on the actual website`}</li>
</ul>
</Alert>
<Alert type="info" mdxType="Alert">
<p>{`The Form Builder theme is located in the `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-js/blob/next/apps/theme/formBuilder/index.ts"
        }}><inlineCode parentName="a">{`apps/theme`}</inlineCode></a>{` package
and is registered in both `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-js/blob/next/apps/admin/code/src/plugins/index.ts#L59"
        }}><inlineCode parentName="a">{`apps/admin`}</inlineCode></a>{`
and `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-js/blob/next/apps/website/code/src/plugins/index.ts#L6"
        }}><inlineCode parentName="a">{`apps/admin`}</inlineCode></a></p>
</Alert>
<p>{`The following table shows a list of all keys and values that the plugin must define:`}</p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": "left"
          }}>{`Key`}</th>
<th parentName="tr" {...{
            "align": "left"
          }}>{`Value Type`}</th>
<th parentName="tr" {...{
            "align": "left"
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}><inlineCode parentName="td">{`name`}</inlineCode></td>
<td parentName="tr" {...{
            "align": "left"
          }}><inlineCode parentName="td">{`string`}</inlineCode></td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`Unique plugin name.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}><inlineCode parentName="td">{`type`}</inlineCode></td>
<td parentName="tr" {...{
            "align": "left"
          }}><inlineCode parentName="td">{`string`}</inlineCode></td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`Plugin type must equal to `}<inlineCode parentName="td">{`form-layout`}</inlineCode>{`.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}><inlineCode parentName="td">{`layout`}</inlineCode></td>
<td parentName="tr" {...{
            "align": "left"
          }}><inlineCode parentName="td">{`Object`}</inlineCode></td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`Object containing a unique `}<inlineCode parentName="td">{`name`}</inlineCode>{` for the theme, a human-readable `}<inlineCode parentName="td">{`title`}</inlineCode>{`, and a reference to the actual React `}<inlineCode parentName="td">{`component`}</inlineCode>{` that is used to render the form.`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"form-layout-react-component"} nextElement={{
      "type": "paragraph"
    }}>Form Layout React Component</_Heading>
<p>{`To get a better feeling of what’s expected of a single form layout component, you can check out the default layout component, located at:
`}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/next/apps/theme/layouts/forms/DefaultFormLayout.tsx"
      }}><inlineCode parentName="a">{`apps/theme/layouts/forms/DefaultFormLayout.tsx`}</inlineCode></a></p>
<p>{`If needed, feel free to edit the file to your liking, or just create a copy and, use that as a foundation for a new form layout.`}</p>
<_Heading level={3} id={"form-layout-component-s-props"} nextElement={{
      "type": "table",
      "align": ["left", "left", "left"]
    }}>Form Layout Component&#39;s Props</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": "left"
          }}>{`Prop`}</th>
<th parentName="tr" {...{
            "align": "left"
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": "left"
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}><inlineCode parentName="td">{`getFieldById`}</inlineCode></td>
<td parentName="tr" {...{
            "align": "left"
          }}><inlineCode parentName="td">{`Function`}</inlineCode></td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`Returns a single form field by given ID.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}><inlineCode parentName="td">{`getFields`}</inlineCode></td>
<td parentName="tr" {...{
            "align": "left"
          }}><inlineCode parentName="td">{`Array<Array<FormRenderFieldType>>`}</inlineCode></td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`Returns a list of all form fields.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}><inlineCode parentName="td">{`getDefaultValues`}</inlineCode></td>
<td parentName="tr" {...{
            "align": "left"
          }}><inlineCode parentName="td">{`Object`}</inlineCode></td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`Returns default values for all form fields.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}><inlineCode parentName="td">{`ReCaptcha`}</inlineCode></td>
<td parentName="tr" {...{
            "align": "left"
          }}><inlineCode parentName="td">{`ReCaptchaComponentType`}</inlineCode></td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`A components that shows Google reCAPTCHA, a simple check that prevents you from spammers and bots (only if enabled via `}<inlineCode parentName="td">{`form settings`}</inlineCode>{`).`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}><inlineCode parentName="td">{`TermsOfService`}</inlineCode></td>
<td parentName="tr" {...{
            "align": "left"
          }}><inlineCode parentName="td">{`TermsOfServiceComponentType`}</inlineCode></td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`A component that shows terms of service message (only if enabled via `}<inlineCode parentName="td">{`form settings`}</inlineCode>{`).`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}><inlineCode parentName="td">{`submit`}</inlineCode></td>
<td parentName="tr" {...{
            "align": "left"
          }}><inlineCode parentName="td">{`(data: Object) => Promise<FormSubmitResponseType>`}</inlineCode></td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`Call this callback to submit the form.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}><inlineCode parentName="td">{`formData`}</inlineCode></td>
<td parentName="tr" {...{
            "align": "left"
          }}><inlineCode parentName="td">{`FormDataType`}</inlineCode></td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`Contains data about the form, for example, form name, layout, settings, and so on.`}</td>
</tr>
</tbody>
</table>
<_Heading level={2} id={"add-a-new-form-layout"} nextElement={{
      "type": "paragraph"
    }}>Add a New Form Layout</_Heading>
<p>{`You can add a new form layout in the Form Builder app in these two simple steps:`}</p>
<ol>
<li parentName="ol">{`create a React component that contains all the logic related to the layout`}</li>
<li parentName="ol">{`then, register it as a `}<_Link href="/docs/5.x/form-builder/references/plugins#form-layout"><inlineCode parentName="li">{`form-layout`}</inlineCode></_Link>{` plugin`}</li>
</ol>
<_Heading level={3} id={"create-layout-component"} nextElement={{
      "type": "paragraph"
    }}>Create Layout Component</_Heading>
<p>{`Let’s start with creating a React component for our form layout.
First copy over the content of the `}<inlineCode parentName="p">{`DefaultFormLayout`}</inlineCode>{` component and make the following changes:`}</p>
<Editor title="apps/theme/formBuilder/layout/SimpleFormLayout.tsx" lang="ts" mdxType="Editor">
{`import { ReactComponent as OnlineIcon } from "./images/online-bro.svg";
import { css } from "emotion";

(...)

// Some code is removed for the sake of brevity
const artClass = css(\`
  display: flex;
  justify-content: center;
  svg {
    width: 200px;
  }
\`);
const containerClass = css(\`background-color: #cadaf6; padding: 8px 16px\`);

const SimpleFormLayout: FormLayoutComponent = ({
  getFields,
  getDefaultValues,
  submit,
  formData,
  ReCaptcha,
  TermsOfService
}) => {

  return (
    <div className={containerClass + " webiny-fb-form-layout-simple"}>
      {/* A simple Image */}
      <div className={artClass}>
          <OnlineIcon />
      </div>
      {/* "onSubmit" callback gets triggered once all of the fields are valid. */}
      {/* We also pass the default values for all fields via the getDefaultValues callback. */}
      <Form onSubmit={submitForm} data={getDefaultValues()}>
          {/* ... */}
      </Form>
    </div>
  );
};

export default SimpleFormLayout;`}
</Editor>
<p>{`Also, make the following style changes to make our layout stand apart:`}</p>
<Editor title="apps/theme/formBuilder/styles/theme.scss" lang="scss" mdxType="Editor">
{`(...)

.webiny-fb-form-layout-simple .webiny-fb-form {
  background-color: #cadaf6;

  .webiny-fb-form-field {
    background-color: #cadaf6;
  }
}`}
</Editor>
<_Heading level={3} id={"register-the-new-form-layout"} nextElement={{
      "type": "paragraph"
    }}>Register the New Form Layout</_Heading>
<p>{`Now that you have your newly created React component in place,
let’s register a new `}<_Link href="/docs/5.x/form-builder/references/plugins#form-layout"><inlineCode parentName="p">{`form layout`}</inlineCode></_Link>{` plugin:`}</p>
<Editor title="apps/theme/formBuilder/index.ts" lang="diff-ts" mdxType="Editor">
{`import DefaultFormLayout from './layouts/DefaultFormLayout'
+ import SimpleFormLayout from './layouts/SimpleFormLayout'

export default [
  {
    name: 'form-layout-default',
    type: 'form-layout',
    layout: {
      name: 'default',
      title: 'Default layout',
      component: DefaultFormLayout,
    },
  },
+ {
+   name: 'form-layout-simple',
+   type: 'form-layout',
+   layout: {
+     name: 'simple',
+     title: 'Simple layout',
+     component: SimpleFormLayout,
+   },
  },
]`}
</Editor>
<p>{`After making these changes head over to the Form Builder app and try using your newly added form layout.`}</p>
<Image src={_Image3} alt={"Webiny form builder preview"} mdxType="Image" />
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;