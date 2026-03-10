/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/overview/applications/assets/webiny-form-builder.jpg'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Form Builder",
  "description": "No-code form builder. Build forms in minutes using a drag&drop interface.",
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
  "title": "Features",
  "slug": "features",
  "children": [{
    "title": "No-Code Builder",
    "slug": "no-code-builder",
    "children": []
  }, {
    "title": "Validators",
    "slug": "validators",
    "children": []
  }, {
    "title": "Form Builder + Page Builder",
    "slug": "form-builder-page-builder",
    "children": []
  }, {
    "title": "Themes",
    "slug": "themes",
    "children": []
  }, {
    "title": "Revisions",
    "slug": "revisions",
    "children": []
  }, {
    "title": "Terms of Service and reCAPTCHA",
    "slug": "terms-of-service-and-re-captcha",
    "children": []
  }, {
    "title": "Webhooks and API",
    "slug": "webhooks-and-api",
    "children": []
  }]
}, {
  "title": "When to Consider Using the Form Builder",
  "slug": "when-to-consider-using-the-form-builder",
  "children": []
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
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




<Alert type="success" title="WHAT YOU'LL LEARN" mdxType="Alert">
<ul>
<li parentName="ul">{`Form Builder features and common use-cases`}</li>
</ul>
</Alert>
<Image src={_Image1} alt={"Webiny CMS - Form Builder"} mdxType="Image" />
<p>{`The Form Builder allows you to build forms using a simple drag&drop editor. You can control the form layout, list of inputs, and their validation rules.`}</p>
<_Heading level={2} id={"features"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Features</_Heading>
<_Heading level={3} id={"no-code-builder"} nextElement={{
      "type": "paragraph"
    }}>No-Code Builder</_Heading>
<p>{`Build forms, add validators, webhooks, ReCaptcha, and terms of service conditions, all with no code using a simple drag&drop editor.`}</p>
<p>{`There are many different fields you can insert, the main ones are:`}</p>
<ul>
<li parentName="ul">{`Single-line input`}</li>
<li parentName="ul">{`Multi-line input`}</li>
<li parentName="ul">{`Number`}</li>
<li parentName="ul">{`Toggle`}</li>
<li parentName="ul">{`Checkbox`}</li>
<li parentName="ul">{`Radio button`}</li>
<li parentName="ul">{`Dropdown`}</li>
</ul>
<p>{`Besides fields, you can also control the layout of the form, in terms of grids and row elements. This allows you to model your form in a nice way so the user actually enjoys filling it out.`}</p>
<_Heading level={3} id={"validators"} nextElement={{
      "type": "paragraph"
    }}>Validators</_Heading>
<p>{`Each of the fields can take multiple validators. There are several built-in validators that differ based on the field type.`}</p>
<p>{`With validators you can prevent users from submitting the form with invalid data.`}</p>
<_Heading level={3} id={"form-builder-page-builder"} nextElement={{
      "type": "paragraph"
    }}>Form Builder + Page Builder</_Heading>
<p>{`To add a form to a page, in the Page Builder editor there is a built-in element that you just drag and drop to any page where you want your form to appear. It’s an end-to-end no-code experience.`}</p>
<p>{`For more advanced use-cases we provide a `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/tree/next/packages/app-form-builder"
      }}>{`React library`}</a>{` that you can use to render your forms on any React-based site. And for even more advanced cases, we expose a Form Builder API through which you can retrieve the from as a JSON data structure.`}</p>
<_Heading level={3} id={"themes"} nextElement={{
      "type": "paragraph"
    }}>Themes</_Heading>
<p>{`Forms are rendered using a built-in theme. A theme is a set of simple React components and some CSS. You can easily change the theme, or create several themes of your own. In the UI you can pick the theme with which your form will render.`}</p>
<_Heading level={3} id={"revisions"} nextElement={{
      "type": "paragraph"
    }}>Revisions</_Heading>
<p>{`When you edit a form your changes are versioned and tracked. You can have multiple versions of the same form active so you measure the performance between different versions. Revisions also help you to go back to a previously saved state of your form.`}</p>
<_Heading level={3} id={"terms-of-service-and-re-captcha"} nextElement={{
      "type": "paragraph"
    }}>Terms of Service and reCAPTCHA</_Heading>
<p>{`Often you might want to add terms to your form which the user needs to accept before they can submit the form. You can easily activate this option for your form inside your form settings.`}</p>
<p>{`Similar to the terms of service feature, you can activate the reCAPTCHA feature which prevents and bots from automatically submitting and spamming your forms.`}</p>
<_Heading level={3} id={"webhooks-and-api"} nextElement={{
      "type": "paragraph"
    }}>Webhooks and API</_Heading>
<p>{`Every time someone submits your form, you can specify a webhook endpoint to which the system will post the form payload. All the submissions are also automatically saved to the Webiny database.`}</p>
<p>{`All the form details, from the layout, fields, validators, terms of service to submissions are exposed with the GraphQL API. This makes it easy to retrieve any information you might need in other 3rd party systems.`}</p>
<_Heading level={2} id={"when-to-consider-using-the-form-builder"} nextElement={{
      "type": "paragraph"
    }}>When to Consider Using the Form Builder</_Heading>
<p>{`Form Builder is great when you have single-step forms. Your typical sales forms, contact us forms, support forms, and similar. Where the Form Builder is not a recommended solution would be for the survey or multi-step forms. It’s one we haven’t yet developed but might come in the future.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;