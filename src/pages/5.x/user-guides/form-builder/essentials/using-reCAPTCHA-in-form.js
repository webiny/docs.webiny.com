/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import reCAPTCHAInForm from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/5.x/form-builder/essentials/assets/using-reCAPTCHA-in-form/form-reCAPTCHA.mp4";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.79c9f1.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "Using reCAPTCHA in Form",
  "description": "Learn how to integrate and use reCAPTCHA in a form",
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
  "title": "Step 1: Integrate reCAPTCHA in the Webiny Instance",
  "slug": "step-1-integrate-re-captcha-in-the-webiny-instance",
  "children": []
}, {
  "title": "Step 2: Enable reCAPTCHA for the Form",
  "slug": "step-2-enable-re-captcha-for-the-form",
  "children": []
}, {
  "title": "Step 3: Test the Form",
  "slug": "step-3-test-the-form",
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
<li parentName="ul">{`how to integrate reCAPTCHA in a Webiny instance`}</li>
<li parentName="ul">{`how to use reCAPTCHA in a form`}</li>
</ul>
</Alert>
<p>{`Webiny enables you to effortlessly integrate reCAPTCHA into your web app and leverage its robust features to bolster security and enhance user interactions. In this tutorial, we will learn how to integrate and use reCAPTCHA with a form. We will do this in `}{`_`}{` steps:`}</p>
<ul>
<li parentName="ul">{`Step 1: Integrate reCAPTCHA in the Webiny instance`}</li>
<li parentName="ul">{`Step 2: Enable reCAPTCHA for the form`}</li>
<li parentName="ul">{`Step 3: Test the form`}</li>
</ul>
<Video src={reCAPTCHAInForm} controls={true} mdxType="Video" />
<_Heading level={2} id={"step-1-integrate-re-captcha-in-the-webiny-instance"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 1: Integrate reCAPTCHA in the Webiny Instance</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, click `}<strong parentName="p">{`Settings`}</strong>{` > `}<strong parentName="p">{`FORM BUILDER`}</strong>{` > `}<strong parentName="p">{`reCAPTCHA`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`reCAPTCHA Settings`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click the `}<strong parentName="p">{`Enable Google reCAPTCHA`}</strong>{` button to toggle it on.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Domain`}</strong>{` textbox, type `}<em parentName="p">{`your domain`}</em>{` (e.g. `}<strong parentName="p"><a parentName="strong" {...{
              "href": "https://www.webiny.com"
            }}>{`https://www.webiny.com`}</a></strong>{`).`}</p>
<p parentName="li"><strong parentName="p">{`Note`}</strong>{`: In this tutorial, we will use the domain where your web app is published. Please note that this domain is different from the one where your Webiny CMS runs. You can find the published web app domain by visiting any published page, such as the `}<strong parentName="p">{`Contact Us`}</strong>{` page that we created in the `}<_Link href="/docs/5.x/user-guides/form-builder/essentials/create-form">{`Create Form`}</_Link>{` tutorial (e.g. `}<a parentName="p" {...{
            "href": "https://d3s7islumczq2q.cloudfront.net"
          }}>{`https://d3s7islumczq2q.cloudfront.net`}</a>{`).`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`Don’t have a site key?`}</strong>{` below the `}<strong parentName="p">{`Google reCAPTCHA site key`}</strong>{` textbox.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Register a new site`}</strong>{` screen on the `}<strong parentName="p">{`Google reCAPTCHA`}</strong>{` website opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Label`}</strong>{` textbox, type `}<em parentName="p">{`a label for your web app`}</em>{` (e.g. `}<strong parentName="p">{`webiny.com`}</strong>{`).`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Under `}<strong parentName="p">{`reCAPTCHA type`}</strong>{`, click `}<strong parentName="p">{`Challenge (v2)`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Under `}<strong parentName="p">{`Challenge (v2)`}</strong>{`, click `}<strong parentName="p">{`“I’m not a robot” tickbox`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Under `}<strong parentName="p">{`Domains`}</strong>{`, in the textbox, type `}<em parentName="p">{`your domain`}</em>{` (e.g. `}<strong parentName="p">{`webiny.com`}</strong>{`).`}</p>
<p parentName="li"><strong parentName="p">{`Note`}</strong>{`: Ensure that this domain matches the one you entered in `}<strong parentName="p">{`Step 3`}</strong>{`, excluding `}<strong parentName="p">{`http://`}</strong>{` and `}<strong parentName="p">{`https://`}</strong>{` (e.g. `}<strong parentName="p">{`d3s7islumczq2q.cloudfront.net`}</strong>{`).`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`SUBMIT`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Adding reCAPTCHA to your site`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`To add `}<strong parentName="p">{`Google reCAPTCHA site key`}</strong>{` to your Webiny instance:`}</p>
<p parentName="li">{`a. On the `}<strong parentName="p">{`Adding reCAPTCHA to your site`}</strong>{` screen, click `}<strong parentName="p">{`COPY SITE KEY`}</strong>{`.`}</p>
<p parentName="li">{`b. On the `}<strong parentName="p">{`reCAPTCHA Settings`}</strong>{` screen of your Webiny instance, paste the copied key in the `}<strong parentName="p">{`Google reCAPTCHA site key`}</strong>{` textbox.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`To add `}<strong parentName="p">{`Google reCAPTCHA secret key`}</strong>{` to your Webiny instance:`}</p>
<p parentName="li">{`a. On the `}<strong parentName="p">{`Adding reCAPTCHA to your site`}</strong>{` screen, click `}<strong parentName="p">{`COPY SECRET KEY`}</strong>{`.`}</p>
<p parentName="li">{`b. On the `}<strong parentName="p">{`reCAPTCHA Settings`}</strong>{` screen of your Webiny instance, paste the copied key in the `}<strong parentName="p">{`Google reCAPTCHA secret key`}</strong>{` textbox.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`On the `}<strong parentName="p">{`reCAPTCHA Settings`}</strong>{` screen, click `}<strong parentName="p">{`SAVE`}</strong>{`.`}</p>
</li>
</ol>
<_Heading level={2} id={"step-2-enable-re-captcha-for-the-form"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 2: Enable reCAPTCHA for the Form</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, click `}<strong parentName="p">{`Form Builder`}</strong>{` > `}<strong parentName="p">{`FORMS`}</strong>{` > `}<strong parentName="p">{`Forms`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Forms`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`On the `}<strong parentName="p">{`Forms`}</strong>{` screen, click the `}<strong parentName="p">{`Contact Form`}</strong>{` list item in the list of forms that we created in the `}<_Link href="/docs/5.x/user-guides/form-builder/essentials/create-form">{`Create Form`}</_Link>{` tutorial.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`FORM PREVIEW`}</strong>{` tab opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`FORM PREVIEW`}</strong>{` tab, click the `}<strong parentName="p">{`EDIT`}</strong>{` icon (✏️).`}</p>
<p parentName="li">{`✔️ The form editor screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click the `}<strong parentName="p">{`SETTINGS`}</strong>{` icon (⚙️).`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Form Settings`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click the `}<strong parentName="p">{`ReCAPTCHA`}</strong>{` tab.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click the `}<strong parentName="p">{`Enable`}</strong>{` button to toggle it on.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`SAVE SETTINGS`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The form editor screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`PUBLISH CHANGES`}</strong>{`.`}</p>
</li>
</ol>
<_Heading level={2} id={"step-3-test-the-form"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 3: Test the Form</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, click `}<strong parentName="p">{`Page Builder`}</strong>{` > `}<strong parentName="p">{`PAGES`}</strong>{` > `}<strong parentName="p">{`Pages`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Pages`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click the `}<strong parentName="p">{`Contact Us`}</strong>{` list item in the list of pages that we created in the `}<_Link href="/docs/5.x/user-guides/form-builder/essentials/create-form">{`Create Form`}</_Link>{` tutorial.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`PAGE PREVIEW`}</strong>{` tab opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click the `}<strong parentName="p">{`kebab menu`}</strong>{` icon ( ⁝ ) on the top right of the page.`}</p>
<p parentName="li">{`✔️ Menu opens with the options `}<strong parentName="p">{`View`}</strong>{` and `}<strong parentName="p">{`Set as homepage`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`View`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Contact Us`}</strong>{` page opens.`}</p>
</li>
</ol>
<p>{`The reCAPTCHA tickbox will be visibly displayed alongside the form.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;