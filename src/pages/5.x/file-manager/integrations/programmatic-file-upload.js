/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image3 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/file-manager/integrations/assets/api-key-token.png'
import _Image2 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/file-manager/integrations/assets/api-key-permissions.png'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/file-manager/integrations/assets/api-keys-menu.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Programmatic File Upload",
  "description": "Learn how to upload files into the File Manager programmatically.",
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
  "title": "Creating an API Key",
  "slug": "creating-an-api-key",
  "children": []
}, {
  "title": "Upload File to the File Manager",
  "slug": "upload-file-to-the-file-manager",
  "children": []
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
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






<Alert type="info" title="Can I Use This?" mdxType="Alert">
<p>{`This feature is available since Webiny `}<strong parentName="p">{`v5.36.0`}</strong>{`.`}</p>
</Alert>
<Alert type="success" title="What you'll learn" mdxType="Alert">
<ul>
<li parentName="ul">{`how to programmatically upload files into the File Manager`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Upload of files into the File Manager is a 3-step process, which is described, from the architectural point of view, in the `}<_Link href="/docs/5.x/architecture/api/file-upload">{`File Upload`}</_Link>{` article. Very often, files can be several gigabytes (or even terabytes) large, which makes it impossible to use the GraphQL API, or even a REST API, to upload binary content using the Lambda functions, which power our API, due to its physical limitations.`}</p>
<p>{`To make it possible to handle files of all sizes, up to 5TB in size, we have to upload those binary payloads directly to the AWS S3 service. The three steps to upload a file into the File Manager are as follows:`}</p>
<ul>
<li parentName="ul">
<p parentName="li">{`Create a pre-signed POST payload for the file you’re uploading.`}</p>
</li>
<li parentName="ul">
<p parentName="li">{`Send the file directly to AWS S3, using the pre-signed POST payload.`}</p>
</li>
<li parentName="ul">
<p parentName="li">{`Create a file record in the system, so the File Manager is aware of the file in the AWS S3 bucket.`}</p>
</li>
</ul>
<_Heading level={2} id={"creating-an-api-key"} nextElement={{
      "type": "paragraph"
    }}>Creating an API Key</_Heading>
<p>{`Since the GraphQL API sits behind a security layer, that forbids unauthorized access, we need to create an API key, which we’ll then use in our file upload process.`}</p>
<p>{`An API key is a random non-human-readable string, which essentially contains a list of allowed operations that its user (a real user or an application) can perform. Once created, we include it as the `}<inlineCode parentName="p">{`Authorization`}</inlineCode>{` header on every HTTP request we issue (with our GraphQL client of choice), for example:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`Authorization: Bearer {random-non-human-readable-api-token}`}
</Editor>
<Alert type="info" mdxType="Alert">
<p>{`Make sure to include the required `}<inlineCode parentName="p">{`Bearer`}</inlineCode>{` keyword, placed before our actual API token.`}</p>
</Alert>
<Alert type="warning" mdxType="Alert">
<p>{`Failing to correctly include the API key via the `}<inlineCode parentName="p">{`Authorization`}</inlineCode>{` HTTP request header will prevent you from performing any sensitive GraphQL query or mutation.`}</p>
<p>{`Check your GraphQL client’s documentation in order to ensure that the API token is correctly included in every HTTP request.`}</p>
</Alert>
<p>{`API Tokens are created via the Security Webiny application, by opening the `}<strong parentName="p">{`API Keys`}</strong>{` section:`}</p>
<Image src={_Image1} alt={"Security - API Keys"} mdxType="Image" />
<p>{`Once selected, we’re redirected to the API Keys section, where we can create a new, or update an existing API key. But most importantly, we get fine-grained control over which operations our API keys can, or cannot, perform. For example, the following selection allows API key users to perform all File Manager actions exposed by the GraphQL API:`}</p>
<Image src={_Image2} alt={"Fine-grained Access Controls"} mdxType="Image" />
<p>{`Once the API key has been created, the key token is automatically generated, and you should see it in the user interface:`}</p>
<Image src={_Image3} alt={"Copy the API Token"} mdxType="Image" />
<p>{`From there, you can easily grab it by clicking on the `}<strong parentName="p">{`Copy`}</strong>{` button, located on the right side of the API token, and paste it in an appropriate place, somewhere where your GraphQL client can access it.`}</p>
<_Heading level={2} id={"upload-file-to-the-file-manager"} nextElement={{
      "type": "paragraph"
    }}>Upload File to the File Manager</_Heading>
<p>{`To make it really easy for developers to dive right into the upload process, we’ve created this script, which covers all 3 steps, which you can copy/paste, update the required variables, and run.`}</p>
<p>{`The script uses two external packages, which you will need to install from `}<inlineCode parentName="p">{`npm`}</inlineCode>{`:`}</p>
<ul>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://www.npmjs.com/package/node-fetch"
        }}>{`node-fetch`}</a>{` to send HTTP requests`}</li>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://www.npmjs.com/package/form-data"
        }}>{`form-data`}</a>{` to create a file upload form`}</li>
</ul>
<Alert type={"warning"} title={"Please note!"} mdxType="Alert">
  This script does not include error handling, or multi-part upload of large files, where you need
  to utilize file chunking (files larger than 5GB). This script is a solid starting point, but is
  not a final product.
</Alert>{" "}
<Editor title="fileUpload.js" lang="js" mdxType="Editor">
{`const fs = require("fs");
const fetch = require("node-fetch");
const FormData = require("form-data");

// This is the Webiny API token, described in the previous section of the article.
const TOKEN = "YOUR_WEBINY_API_TOKEN"; // <---- Make sure you replace this value with your own!

// This is your Webiny GraphQL API endpoint.
const API_URL = "YOUR_WEBINY_API_URL/graphql"; // <---- Make sure you replace this value with your own!

// For demo purposes, this contains the path to a physical file which we'll be uploading.
const FILE_PATH = __dirname + "/video.mp4";

// This GraphQL query is used to create pre-signed POST payloads using the basic file information (name, type, and size).
const GetPreSignedPostPayload = \`
  query GetPreSignedPostPayload($data: PreSignedPostPayloadInput!) {
    fileManager {
      getPreSignedPostPayload(data: $data) {
        data {
          data
          file {
            id
            name
            type
            size
            key
          }
        }
        error {
          code
          data
          message
        }
      }
    }
  }
\`;

// This GraphQL mutation is used to store file information in the File Manager, after the file is uploaded to the S3 bucket.
const CreateFile = \`
  mutation CreateFile($data: FmFileCreateInput!) {
    fileManager {
      createFile(data: $data) {
        data {
          id
          createdOn
          savedOn
          src
          name
          key
          type
          size
          tags
          location {
            folderId
          }
        }
        error {
          code
          message
          data
        }
      }
    }
  }
\`;

async function getPreSignedPostPayload(data) {
  console.log("Getting pre-signed POST payload...");
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: \`Bearer \${TOKEN}\`
    },
    body: JSON.stringify({
      query: GetPreSignedPostPayload,
      variables: {
        data
      }
    })
  }).then(r => r.json());

  return response.data.fileManager.getPreSignedPostPayload.data;
}

async function createFileInFileManager(file) {
  console.log("Creating file record in the File Manager...");
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: \`Bearer \${TOKEN}\`
    },
    body: JSON.stringify({
      query: CreateFile,
      variables: {
        data: file
      }
    })
  }).then(r => r.json());

  return response.data.fileManager.createFile.data;
}

function uploadFileToS3(buffer, preSignedPostPayload) {
  console.log("Uploading file to S3...");
  // Create a form object, which we'll send to the AWS S3.
  const formData = new FormData();
  // Add all pre-signed payload fields to "FormData".
  Object.keys(preSignedPostPayload.fields).forEach(key => {
    formData.append(key, preSignedPostPayload.fields[key]);
  });
  // Add file content to "FormData".
  formData.append("file", buffer);

  // Finally make the upload request to S3.
  return fetch(preSignedPostPayload.url, {
    method: "POST",
    body: formData
  });
}

(async () => {
  // Read the size of the file, so we can request a pre-signed POST payload.
  const { size } = fs.statSync(FILE_PATH);

  // \`data\` represents S3 related data; \`file\` represents File Manager related information.
  const { data, file } = await getPreSignedPostPayload({
    name: "video.mp4",
    type: "video/mp4",
    size
  });

  // Read the file from the filesystem.
  const buffer = fs.readFileSync(FILE_PATH);

  // Upload the file binary data to AWS S3, using the pre-signed POST payload.
  await uploadFileToS3(buffer, data);

  const fileInput = {
    ...file,
    // Optionally, set file aliases. This allows you to set SEO friendly file paths.
    aliases: ["/videos/promo.mp4"],
    // Optionally, tag your file with some tags, for easier filtering in the File Manager UI.
    tags: ["programmatic"],
    // Optionally, specify an exact \`folderId\` to store the file into a specific folder.
    location: {
      folderId: "root"
    }
  };

  const createdFile = await createFileInFileManager(fileInput);

  console.log(\`Your file is now accessible at the following URL:\\n\${createdFile.src}\`);
})();`}
</Editor>
<p>{`Once you run this script in your CLI, using a simple `}<inlineCode parentName="p">{`node fileUpload.js`}</inlineCode>{` command, the file from the script will be uploaded to the File Manager, and will be accessible via the public URL. You will also find the uploaded file in your File Manager UI.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;