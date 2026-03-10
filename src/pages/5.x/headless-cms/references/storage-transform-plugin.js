/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image2 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/references/assets/storage-transform-plugin/fetching-the-data.png'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/references/assets/storage-transform-plugin/storing-the-data.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Storage Transform Plugin",
  "description": "Learn about `StorageTransformPlugin` and when to use it.",
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
  "title": "What Is It Used For?",
  "slug": "what-is-it-used-for",
  "children": []
}, {
  "title": "When Is the Plugin Executed?",
  "slug": "when-is-the-plugin-executed",
  "children": [{
    "title": "Storing the Data",
    "slug": "storing-the-data",
    "children": []
  }, {
    "title": "Fetching the Data",
    "slug": "fetching-the-data",
    "children": [{
      "title": "Why Execute fromStorage Just Before the Output?",
      "slug": "why-execute-from-storage-just-before-the-output"
    }]
  }]
}, {
  "title": "Examples",
  "slug": "examples",
  "children": [{
    "title": "Time Transform",
    "slug": "time-transform",
    "children": []
  }, {
    "title": "Text Transform",
    "slug": "text-transform",
    "children": [{
      "title": "Compressing the Value",
      "slug": "compressing-the-value"
    }, {
      "title": "Move to Other Storage System",
      "slug": "move-to-other-storage-system"
    }]
  }]
}, {
  "title": "Registering the Plugin",
  "slug": "registering-the-plugin",
  "children": []
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
<li parentName="ul">{`what is StorageTransformPlugin`}</li>
<li parentName="ul">{`when is it executed`}</li>
<li parentName="ul">{`why do we need it`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`The `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/next/packages/api-headless-cms/src/content/plugins/storage/StorageTransformPlugin.ts"
      }}>{`StorageTransformPlugin`}</a>{` serves as a transformer of field values, as it targets only certain field type.`}</p>
<_Heading level={2} id={"what-is-it-used-for"} nextElement={{
      "type": "paragraph"
    }}>What Is It Used For?</_Heading>
<p>{`The plugin is used to transform a certain field value to another value.
For example, the time in format `}<inlineCode parentName="p">{`15:45:59`}</inlineCode>{` is not usable when filtering, so we transform it to seconds and store it as a number.`}</p>
<_Heading level={2} id={"when-is-the-plugin-executed"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>When Is the Plugin Executed?</_Heading>
<_Heading level={3} id={"storing-the-data"} nextElement={{
      "type": "paragraph"
    }}>Storing the Data</_Heading>
<p>{`When storing the data (create, update and createFrom) the plugin’s `}<inlineCode parentName="p">{`toStorage`}</inlineCode>{` is executed just after the `}<inlineCode parentName="p">{`onBefore`}</inlineCode>{` lifecycle events and before actual call to the storage operations.`}</p>
<Image src={_Image1} alt={"storing the data flow"} mdxType="Image" />
<_Heading level={3} id={"fetching-the-data"} nextElement={{
      "type": "paragraph"
    }}>Fetching the Data</_Heading>
<p>{`When fetching the entries the plugin’s `}<inlineCode parentName="p">{`fromStorage`}</inlineCode>{` is executed in the GraphQL resolvers, just before the output of the field value. We decided to have it like this because of possible unnecessary calls to `}<inlineCode parentName="p">{`fromStorage`}</inlineCode>{` if we executed it just after fetching the data from the database.`}</p>
<Image src={_Image2} alt={"fetching the data flow"} mdxType="Image" />
<_Heading level={4} id={"why-execute-from-storage-just-before-the-output"} nextElement={{
      "type": "paragraph"
    }}>Why Execute<code>fromStorage</code>Just Before the Output?</_Heading>
<p>{`For example, let’s imagine there is a entry field with a few megabytes of data in it - we stored it to S3 bucket.
It is ok to fetch the data and output it, if the field was requested via the GraphQL.
If the field was not requested, there is really no point in fetching remote data if it is not going to be used at all.`}</p>
<_Heading level={2} id={"examples"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Examples</_Heading>
<_Heading level={3} id={"time-transform"} nextElement={{
      "type": "paragraph"
    }}>Time Transform</_Heading>
<p>{`If you have a `}<inlineCode parentName="p">{`time`}</inlineCode>{` field type, the input value of that field is in form of `}<inlineCode parentName="p">{`15:45:59`}</inlineCode>{`. That value is not comparable to another value when filtering in the database (or Elasticsearch in our case).`}</p>
<p><inlineCode parentName="p">{`StorageTransformPlugin`}</inlineCode>{` helps in this case by transforming the `}<inlineCode parentName="p">{`15:45:59`}</inlineCode>{` into `}<inlineCode parentName="p">{`56759`}</inlineCode>{`, which are the seconds of the day, before we store the value into the database.`}</p>
<p>{`Here is how the `}<inlineCode parentName="p">{`time`}</inlineCode>{` transform plugin should look like:`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`new StorageTransformPlugin({
  fieldType: "time",
  fromStorage: async ({ value }) => {
    const hours = Math.floor(value / 3600);
    const secondsAfterHours = value - hours * 3600;
    const minutes = secondsAfterHours > 0 ? Math.floor(secondsAfterHours / 60) : 0;
    const seconds = secondsAfterHours - minutes * 60;

    return [hours, minutes, seconds].map(value => String(value).padStart(2, "0")).join(":");
  },
  toStorage: async ({ value }) => {
    const [hours, minutes, seconds] = value.split(":").map(Number);

    return hours * 3600 + minutes * 60 + seconds;
  }
});`}
</Editor>
<_Heading level={3} id={"text-transform"} nextElement={{
      "type": "paragraph"
    }}>Text Transform</_Heading>
<p>{`If you have a `}<inlineCode parentName="p">{`extremelyLargeText`}</inlineCode>{` field type, which can get really large (couple of megabytes). You might want to compress it or not store it into the database at all (DynamoDB for example, as it has 400 kilobytes record limit).`}</p>
<_Heading level={4} id={"compressing-the-value"} nextElement={{
      "type": "paragraph"
    }}>Compressing the Value</_Heading>
<p>{`The `}<inlineCode parentName="p">{`StorageTransformPlugin`}</inlineCode>{` helps in this case by compressing the field value.`}</p>
<p>{`Here is how `}<inlineCode parentName="p">{`extremelyLargeText`}</inlineCode>{` transform plugin should look like:`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`new StorageTransformPlugin({
  fieldType: "extremelyLargeText",
  fromStorage: async ({ value }) => {
    return decompress(value);
  },
  toStorage: async ({ value }) => {
    return compress(value);
  }
});`}
</Editor>
<p>{`Of course, `}<inlineCode parentName="p">{`compress`}</inlineCode>{` and `}<inlineCode parentName="p">{`decompress`}</inlineCode>{` methods must be built as well. Or use some library for that.`}</p>
<_Heading level={4} id={"move-to-other-storage-system"} nextElement={{
      "type": "paragraph"
    }}>Move to Other Storage System</_Heading>
<p>{`If compression is not enough as the field value is extremely large, you can even move the value to some other storage system.`}</p>
<p>{`Here is an example for that:`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`new StorageTransformPlugin({
  fieldType: "extremelyLargeText",
  fromStorage: async ({ value: identifier }) => {
    return await fetchFromOtherStorageSystem(identifier);
  },
  toStorage: async ({ value, field, model }) => {
    const identifier = \`\${model.modelId}-\${field.fieldId}-\${randomlyGeneratedString()}\`;
    await copyToOtherStorageSystem(identifier, value);
    return identifier;
  }
});`}
</Editor>
<p>{`Of course, `}<inlineCode parentName="p">{`copyToOtherStorageSystem`}</inlineCode>{` and `}<inlineCode parentName="p">{`fetchFromOtherStorageSystem`}</inlineCode>{` are your own methods to copy and fetch the field value from other storage system.`}</p>
<_Heading level={2} id={"registering-the-plugin"} nextElement={{
      "type": "paragraph"
    }}>Registering the Plugin</_Heading>
<p>{`For the plugin to take effect you must register it in the system. File to register it in is `}<inlineCode parentName="p">{`api/graphql/src/index.ts`}</inlineCode>{`.`}</p>
<p>{`Note that if you register two plugins for the same field type, system will use the last one.`}</p>
<Editor title="api/graphql/src/index.ts" lang="typescript" mdxType="Editor">
{`const handler = createHandler({
  plugins: [
    // ... other plugins
    new StorageTransformPlugin()
  ]
});`}
</Editor>
<_Heading level={2} id={"conclusion"} nextElement={{
      "type": "paragraph"
    }}>Conclusion</_Heading>
<p>{`The `}<inlineCode parentName="p">{`StorageTransformPlugin`}</inlineCode>{` makes it possible for you manage the value of the field, and where is it stored in case of storing to another storage system, so it is searchable.`}</p>
<Alert type="warning" mdxType="Alert">
<p>{`Be aware that in case of storing the value to other storage system, for example `}<inlineCode parentName="p">{`extremelyLargeText`}</inlineCode>{`, you cannot search the value but only the identifier created when copying data to another storage system.`}</p>
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