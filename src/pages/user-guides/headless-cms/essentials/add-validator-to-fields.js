/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import addValidatorsToFields from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/headless-cms/essentials/assets/add-validator-to-fields/add-validator-to-fields.mp4";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.9991ed.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "Add Validator to Fields",
  "description": "Learn how to add a validator to a content model's field in Headless CMS.",
  "type": "user-guides",
  "showPageHeader": true,
  "fullWidth": false,
  "version": "6.0.x"
};
const docsearch = {
  "type": "user-guides",
  "weight": 100,
  "versions": ["latest", "6.0.x"]
};
const navigation = _navigation;
const versions = _versions;
const tableOfContents = [{
  "title": "Step 1: Add Required and Min length Validators to a LONG TEXT Field",
  "slug": "step-1-add-required-and-min-length-validators-to-a-long-text-field",
  "children": []
}, {
  "title": "Step 2: Test the Validators",
  "slug": "step-2-test-the-validators",
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
<li parentName="ul">{`what is a field validator`}</li>
<li parentName="ul">{`how to add a validator to a content model’s field`}</li>
<li parentName="ul">{`how to test the applied validator`}</li>
</ul>
</Alert>
<p>{`A field validator helps you ensure the user input meets specific requirements and matches the expected format for a field.`}</p>
<p>{`In this tutorial, we will learn how to add validators to a content model’s fields.
As an example, we will add validators to the `}<strong parentName="p">{`LONG TEXT`}</strong>{` and `}<strong parentName="p">{`NUMBER`}</strong>{` fields used in the `}<strong parentName="p">{`Product`}</strong>{` content model that we created in the `}<_Link href="/docs/user-guides/headless-cms/essentials/create-content-model">{`Create Content Model`}</_Link>{` tutorial.`}</p>
<Video src={addValidatorsToFields} controls={true} mdxType="Video" />
<_Heading level={2} id={"step-1-add-required-and-min-length-validators-to-a-long-text-field"} nextElement={{
      "type": "paragraph"
    }}>Step 1: Add<code>Required</code>and<code>Min length</code>Validators to a LONG TEXT Field</_Heading>
<p>{`In this step we will:`}</p>
<ul>
<li parentName="ul">{`make the `}<strong parentName="li">{`Description`}</strong>{` field required.`}</li>
<li parentName="ul">{`set the minimum length for the input the `}<strong parentName="li">{`Description`}</strong>{` field to `}<strong parentName="li">{`20 characters`}</strong>{`.`}</li>
</ul>
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, Click `}<strong parentName="p">{`Content Modeling`}</strong>{` > `}<strong parentName="p">{`Models`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Content Models`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Hover over the `}<strong parentName="p">{`Product`}</strong>{` content model.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click ✏️ `}<strong parentName="p">{`Edit`}</strong>{`.`}</p>
<p parentName="li">{`✔️ Screen to configure the `}<strong parentName="p">{`Product`}</strong>{` content model’s fields opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click the `}<strong parentName="p">{`Edit Field`}</strong>{` icon (✏️) on the `}<strong parentName="p">{`Description`}</strong>{` field.`}</p>
<p parentName="li">{`✔️ `}<strong parentName="p">{`Field Settings - Long Text`}</strong>{` screen opens.`}</p>
</li>
</ol>
<ol {...{
      "start": 5
    }}>
<li parentName="ol">
<p parentName="li">{`Click the `}<strong parentName="p">{`Validations`}</strong>{` tab.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Enable the `}<strong parentName="p">{`Required`}</strong>{` validation by toggling the `}<strong parentName="p">{`Enabled`}</strong>{` button. This will make the `}<strong parentName="p">{`Description`}</strong>{` field mandatory.`}</p>
<p parentName="li">{`✔️ `}<strong parentName="p">{`Message`}</strong>{` textbox will appear to set the error message.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Message`}</strong>{` textbox, type `}<strong parentName="p">{`Please enter the product description`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Enable the `}<strong parentName="p">{`Min length`}</strong>{` validation by toggling the `}<strong parentName="p">{`Enabled`}</strong>{` button.`}</p>
<p parentName="li">{`✔️ `}<strong parentName="p">{`Message`}</strong>{` and `}<strong parentName="p">{`Value`}</strong>{` textboxes will appear to set the error message and minimum value.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Message`}</strong>{` textbox, type `}<strong parentName="p">{`Description cannot be less than 20 characters`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Value`}</strong>{` textbox, type `}<strong parentName="p">{`20`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`Save Field`}</strong>{`.`}</p>
<p parentName="li">{`✔️ Screen to configure the `}<strong parentName="p">{`Product`}</strong>{` content model’s fields opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`Save`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The message “Your content model was saved successfully!” displays.`}</p>
</li>
</ol>
<_Heading level={2} id={"step-2-test-the-validators"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 2: Test the Validators</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`On the screen to configure the `}<strong parentName="p">{`Product`}</strong>{` content model’s fields, click the `}<strong parentName="p">{`Preview`}</strong>{` tab.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click the `}<strong parentName="p">{`Description`}</strong>{` textbox.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click anywhere outside the `}<strong parentName="p">{`Description`}</strong>{` textbox.`}</p>
<p parentName="li">{`✔️ The message “Please enter the product description” appears.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Description`}</strong>{` textbox, type `}<strong parentName="p">{`Top sweatshirt`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click anywhere outside the `}<strong parentName="p">{`Description`}</strong>{` textbox.`}</p>
<p parentName="li">{`✔️ The message “Description cannot be less than 20 characters” appears.`}</p>
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