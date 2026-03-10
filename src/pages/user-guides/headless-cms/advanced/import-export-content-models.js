/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image6 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/headless-cms/advanced/assets/import-export-content-models/import-content-models-step-4.png'
import _Image5 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/headless-cms/advanced/assets/import-export-content-models/import-content-models-step-3.png'
import _Image4 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/headless-cms/advanced/assets/import-export-content-models/import-content-models-step-2.png'
import _Image3 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/headless-cms/advanced/assets/import-export-content-models/import-content-models-step-1.png'
import _Image2 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/headless-cms/advanced/assets/import-export-content-models/import-content-models.png'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/headless-cms/advanced/assets/import-export-content-models/export-content-models-step-1.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import importExportContentModel from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/headless-cms/advanced/assets/import-export-content-models/import-export-content-models.mp4";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.9991ed.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "Import/Export Content Models",
  "description": "Learn how to import and export content models in Webiny Headless CMS.",
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
  "title": "Exporting Content Models",
  "slug": "exporting-content-models",
  "children": []
}, {
  "title": "Importing Content Models",
  "slug": "importing-content-models",
  "children": []
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Video = makeShortcode("Video");
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
<li parentName="ul">{`how to export content models`}</li>
<li parentName="ul">{`how to import content models`}</li>
</ul>
</Alert>
<p>{`Webiny Headless CMS allows you to export all your content models as a JSON file. This is useful if you want to migrate your content models to another project or if you want to share them with other developers.`}</p>
<p>{`Similarly, you can use the generated JSON file to import those same content models into your project.
This tutorial will guide you through the process of exporting and importing content models.`}</p>
<Video src={importExportContentModel} controls={true} mdxType="Video" />
<_Heading level={2} id={"exporting-content-models"} nextElement={{
      "type": "paragraph"
    }}>Exporting Content Models</_Heading>
<p>{`To export one or more content models navigate to your Content Models view inside the Headless CMS application.`}</p>
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, Click `}<strong parentName="p">{`Content Modeling`}</strong>{` >`}<strong parentName="p">{`Models`}</strong>{`.`}<br parentName="p"></br>{`
`}{`✔️ The Content Models screen opens.`}</p>
</li>
<li parentName="ol">
{`Click the `}
<strong parentName="li">{`Export all models`}</strong>
{` icon.`}
<br parentName="li"></br>


{`✔️ The export action will generate a JSON file containing all your content models.
`}
<Image src={_Image1} alt={"Headless CMS - Export Content Models"} mdxType="Image" />
</li>
</ol>
<_Heading level={2} id={"importing-content-models"} nextElement={{
      "type": "paragraph"
    }}>Importing Content Models</_Heading>
<p>{`To import content models, navigate to your Content Models view inside the Headless CMS application.`}</p>
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, Click `}<strong parentName="p">{`Content Modeling`}</strong>{` > `}<strong parentName="p">{`Models`}</strong>{`.`}<br parentName="p"></br>{`
`}{`✔️ The Content Models screen opens.`}</p>
</li>
<li parentName="ol">
{`Click the `}
<strong parentName="li">{`Import models`}</strong>
{` icon.`}
<br parentName="li"></br>


{`✔️ The system will ask you to provide an export file.
`}
<Image src={_Image2} alt={"Headless CMS - Export Content Models"} mdxType="Image" />
</li>
<li parentName="ol">
{`Select the file you want to import and click `}
<strong parentName="li">{`Validate file`}</strong>
{`.
`}
<Image src={_Image3} alt={"Headless CMS - Import Content Models"} mdxType="Image" />
{`
✔️ The validation action will check the file and display a list of content models that can be imported.`}
</li>
<li parentName="ol">
{`Click the `}
<strong parentName="li">{`Model will be skipped`}</strong>
{` label in front of the title of the Content Models you want to import. From the list you can choose which content model you want to import and which ones you want to skip.
`}
<Image src={_Image4} alt={"Headless CMS - Import Content Models"} mdxType="Image" />
</li>
</ol>
<Alert type="success" title="Auto select referenced models" mdxType="Alert">
<p>{`Note that if you select to import a specific content model that references one or more content models that are also part of the export file, the system will automatically select those referenced content models as well. If you wish to skip them, you can just go back and exclude them from the import.`}</p>
</Alert>
<Image src={_Image5} alt={"Headless CMS - Import Content Models"} mdxType="Image" />
<p>{`All the content models are grouped in their respective content model groups. Those groups will be automatically created for you upon importing the file if such a group already doesn’t exist.`}</p>
<p>{`Inside the group section, you will have a list of individual content models that belong to that group. You can select which content models you want to import and which ones you want to skip by clicking the button on the right-hand side.`}</p>
<p>{`Also, underneath the content model name you will have a status for the content model. This status tells you if this content model will be `}<inlineCode parentName="p">{`updated`}</inlineCode>{` (meaning the content model already exists) or `}<inlineCode parentName="p">{`created`}</inlineCode>{` (meaning the content model currently doesn’t exist).`}</p>
<ol {...{
      "start": 5
    }}>
<li parentName="ol">{`Finally, once you have selected which content models you want to import. Click Import to start the import process.`}</li>
</ol>
<Image src={_Image6} alt={"Headless CMS - Import Content Models"} mdxType="Image" />
<p>{`✔️ The import process can take a few seconds to finish as it needs to validate all the information. Once the process is done you will see the status screen with the results of the import process.  `}</p>
<p>{`From the same status screen, you can proceed to import additional content models just by selecting them and clicking the `}<strong parentName="p">{`Import`}</strong>{` button again. In case you want to finish the import process, just click outside the content model dialog.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;