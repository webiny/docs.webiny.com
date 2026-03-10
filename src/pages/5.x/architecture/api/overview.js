/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import apiOverview from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/architecture/api/assets/webiny_api_overview.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Overview",
  "description": "What are the necessary cloud infrastructure resources on which the API project application relies on",
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
  "title": "The API Project Application",
  "slug": "the-api-project-application",
  "children": []
}, {
  "title": "Diagram",
  "slug": "diagram",
  "children": []
}, {
  "title": "Description",
  "slug": "description",
  "children": [{
    "title": "1. Security",
    "slug": "1-security",
    "children": []
  }, {
    "title": "2. I18N",
    "slug": "2-i18-n",
    "children": []
  }, {
    "title": "3. File Manager",
    "slug": "3-file-manager",
    "children": []
  }, {
    "title": "4. Page Builder (With Prerendering Service)",
    "slug": "4-page-builder-with-prerendering-service",
    "children": []
  }, {
    "title": "5. Form Builder",
    "slug": "5-form-builder",
    "children": []
  }, {
    "title": "6. Headless CMS",
    "slug": "6-headless-cms",
    "children": []
  }, {
    "title": "7. Background Tasks",
    "slug": "7-background-tasks",
    "children": []
  }]
}, {
  "title": "Additional Information",
  "slug": "additional-information",
  "children": [{
    "title": "Separate HTTP and WebSockets Amazon API Gateway Instances",
    "slug": "separate-http-and-web-sockets-amazon-api-gateway-instances",
    "children": []
  }]
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "Why Is Webiny Using AWS Lambda to Host a GraphQL Handler and Not AWS AppSync?",
    "slug": "why-is-webiny-using-aws-lambda-to-host-a-graph-ql-handler-and-not-aws-app-sync",
    "children": []
  }, {
    "title": "Which GraphQL Implementation Are You Using?",
    "slug": "which-graph-ql-implementation-are-you-using",
    "children": []
  }, {
    "title": "Which Amazon API Gateway Is Deployed as Part of the API Application?",
    "slug": "which-amazon-api-gateway-is-deployed-as-part-of-the-api-application",
    "children": []
  }]
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




<Alert type="success" title="What you’ll learn" mdxType="Alert">
<ul>
<li parentName="ul">{`what does the `}<strong parentName="li">{`API`}</strong>{` project application represent`}</li>
<li parentName="ul">{`what are the necessary cloud infrastructure resources on which the `}<strong parentName="li">{`API`}</strong>{` project application relies on`}</li>
</ul>
</Alert>
<_Heading level={2} id={"the-api-project-application"} nextElement={{
      "type": "paragraph"
    }}>The API Project Application</_Heading>
<p>{`The `}<strong parentName="p">{`API`}</strong>{` project application represents your project’s GraphQL API, which is utilized by the `}<strong parentName="p">{`Admin`}</strong>{` and `}<strong parentName="p">{`Website`}</strong>{` applications.`}</p>
<p>{`But do note that the `}<strong parentName="p">{`API`}</strong>{` application is more than just a simple GraphQL interface. The default Webiny applications not only define and extend the application’s GraphQL schema, but also introduce additional processes and cloud infrastructure resources in order to achieve their goal. For example, in order to serve files and optimize images, the File Manager application brings a couple of dedicated AWS Lambda functions.`}</p>
<p>{`Of course, the application can additionally grow in terms of application code and cloud infrastructure on your behalf, if need be.`}</p>
<_Heading level={2} id={"diagram"} nextElement={{
      "type": "jsx"
    }}>Diagram</_Heading>
<Alert type="info" mdxType="Alert">
<p>{`For brevity, the diagram doesn’t include network-level cloud infrastructure resources, like region, VPC, availability zones, and so on. Check out the `}<_Link href="/docs/5.x/architecture/deployment-modes/introduction">{`Deployment Modes`}</_Link>{` section if you’re interested in that aspect of the deployed cloud infrastructure.`}</p>
</Alert>
<Alert type="info" mdxType="Alert">
<p>{`Note that the stateful resources like Amazon S3, Amazon Cognito, Amazon DynamoDB and Amazon OpenSearch are deployed as part of the `}<_Link href="/docs/5.x/architecture/core/overview">{`Core`}</_Link>{` project application. These are still included in the diagram, just so it’s more clear to the reader.`}</p>
</Alert>
<Image src={apiOverview} title="Webiny Cloud Infrastructure - API - Overview" shadow={false} mdxType="Image" />
<_Heading level={2} id={"description"} nextElement={{
      "type": "paragraph"
    }}>Description</_Heading>
<p>{`The diagram gives an overview of the complete cloud infrastructure that is deployed by different Webiny applications, which together form the `}<strong parentName="p">{`API`}</strong>{` project application.`}</p>
<ol>
<li parentName="ol">{`Security`}</li>
<li parentName="ol">{`I18N`}</li>
<li parentName="ol">{`File Manager`}</li>
<li parentName="ol">{`Page Builder (with Prerendering Service)`}</li>
<li parentName="ol">{`Form Builder`}</li>
<li parentName="ol">{`Headless CMS`}</li>
<li parentName="ol">{`Background Tasks`}</li>
</ol>
<p>{`In the following text, we briefly cover how each of the different Webiny applications are utilizing the shown cloud infrastructure.`}</p>
<_Heading level={3} id={"1-security"} nextElement={{
      "type": "paragraph"
    }}>1. Security</_Heading>
{`Although the Security application does work with multiple identity providers, by default, it works with Amazon Cognito, hence its icon in the lower section of the diagram `}
<diagram-letter>
{`d`}
</diagram-letter>
{`. The identity checks are performed from the GraphQL Handler `}
<diagram-letter>
{`C`}
</diagram-letter>
{` AWS Lambda function.`}
{`With Amazon Cognito, the application also extends the GraphQL schema located on the GraphQL Handler `}
<diagram-letter>
{`C`}
</diagram-letter>
{`.`}
{`For storing data, the application relies on Amazon DynamoDB `}
<diagram-letter>
{`E`}
</diagram-letter>
{`.`}
<_Heading level={3} id={"2-i18-n"} nextElement={{
      "type": "paragraph"
    }}>2. I18N</_Heading>
{`The I18N application doesn’t bring any additional cloud infrastructure resources. It just expands the GraphQL schema with its own types and resolvers, so we can say only the GraphQL Handler AWS Lambda function `}
<diagram-letter>
{`C`}
</diagram-letter>
{` gets affected by it.`}
{`For storing data, the application relies on Amazon DynamoDB `}
<diagram-letter>
{`E`}
</diagram-letter>
{`.`}
<_Heading level={3} id={"3-file-manager"} nextElement={{
      "type": "paragraph"
    }}>3. File Manager</_Heading>
{`Besides extending the GraphQL schema located on the GraphQL Handler AWS Lambda function `}
<diagram-letter>
{`c`}
</diagram-letter>
{`, the File Manager application also introduces a couple of dedicated AWS Lambda functions. These perform various file-related tasks like uploading, downloading, and also image optimizations. It also introduces a single Amazon S3 bucket `}
<diagram-letter>
{`G`}
</diagram-letter>
{`, in which the files are ultimately stored.`}
{`For storing data and performing search queries, the application relies on Amazon DynamoDB `}
<diagram-letter>
{`E`}
</diagram-letter>
{` and Amazon OpenSearch Service `}
<diagram-letter>
{`F`}
</diagram-letter>
{`, respectively.`}
<_Heading level={3} id={"4-page-builder-with-prerendering-service"} nextElement={{
      "type": "paragraph"
    }}>4. Page Builder (With Prerendering Service)</_Heading>
<p>{`Besides extending the GraphQL schema, the Page Builder application also introduces a couple of AWS Lambda functions that are responsible for importing and exporting of pages.`}</p>
<p>{`Also, via an Amazon EventBridge (part of the `}<strong parentName="p">{`Core`}</strong>{` project application, now shown on the diagram), it interacts with the prerendering service that’s deployed as part of the `}<strong parentName="p">{`Website`}</strong>{` project application (more on this in the `}<_Link href="/docs/5.x/architecture/website/overview">{`Website`}</_Link>{` section.`}</p>
{`For storing data and performing search queries, the application relies on Amazon DynamoDB `}
<diagram-letter>
{`E`}
</diagram-letter>
{` and Amazon OpenSearch Service `}
<diagram-letter>
{`F`}
</diagram-letter>
{`, respectively.`}
<_Heading level={3} id={"5-form-builder"} nextElement={{
      "type": "paragraph"
    }}>5. Form Builder</_Heading>
{`The Form Builder application doesn’t bring any additional cloud infrastructure resources. It just extends the GraphQL schema with its own types and resolvers, so we can say only the GraphQL Handler AWS Lambda function `}
<diagram-letter>
{`C`}
</diagram-letter>
{` gets affected by it.`}
{`For storing data and performing search queries, the application relies on Amazon DynamoDB `}
<diagram-letter>
{`E`}
</diagram-letter>
{` and Amazon OpenSearch Service `}
<diagram-letter>
{`F`}
</diagram-letter>
{`, respectively.`}
<_Heading level={3} id={"6-headless-cms"} nextElement={{
      "type": "paragraph"
    }}>6. Headless CMS</_Heading>
{`For storing data and performing search queries, the application relies on Amazon DynamoDB `}
<diagram-letter>
{`E`}
</diagram-letter>
{` and Amazon OpenSearch Service `}
<diagram-letter>
{`F`}
</diagram-letter>
{`, respectively.`}
<Alert type="info" mdxType="Alert">
<p>{`Learn more about the Headless CMS API in the `}<_Link href="/docs/5.x/headless-cms/basics/graphql-api">{`Headless CMS GraphQL API Overview`}</_Link>{` article.`}</p>
</Alert>
<_Heading level={3} id={"7-background-tasks"} nextElement={{
      "type": "paragraph"
    }}>7. Background Tasks</_Heading>
<p>{`For background tasks (jobs)-related requirements, Webiny relies on `}<a parentName="p" {...{
        "href": "https://aws.amazon.com/step-functions/"
      }}>{`AWS Step Functions`}</a>{` and AWS Lambda. The Step Functions are used to orchestrate the execution of the background tasks, while a single AWS Lambda function is used to execute the tasks themselves.`}</p>
<p>{`Note that background tasks are triggered via an Amazon EventBridge event. Amazon EventBridge is deployed as part of the `}<strong parentName="p">{`Core`}</strong>{` project application (not shown on the diagram).  `}</p>
<p>{`For more information on how to create and execute background tasks, check out the `}<_Link href="/docs/5.x/core-development-concepts/background-tasks/about-background-tasks">{`Background Tasks`}</_Link>{` article. `}</p>
<_Heading level={2} id={"additional-information"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Additional Information</_Heading>
<_Heading level={3} id={"separate-http-and-web-sockets-amazon-api-gateway-instances"} nextElement={{
      "type": "paragraph"
    }}>Separate HTTP and WebSockets Amazon API Gateway Instances</_Heading>
{`Webiny deploys two separate Amazon API Gateway `}
<diagram-letter>
{`B`}
</diagram-letter>
{` instances:`}
<ol>
<li parentName="ol">{`one for HTTP requests`}</li>
<li parentName="ol">{`one for WebSockets`}</li>
</ol>
<p>{`This is done because Amazon API Gateway does not support both HTTP and WebSockets in a single instance, and Webiny needs both.`}</p>
<p>{`Both instances are utilized by different applications within the `}<strong parentName="p">{`Admin Area`}</strong>{` project application. When it comes to `}<strong parentName="p">{`Website`}</strong>{`, only the HTTP instance is used.`}</p>
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"why-is-webiny-using-aws-lambda-to-host-a-graph-ql-handler-and-not-aws-app-sync"} nextElement={{
      "type": "paragraph"
    }}>Why Is Webiny Using AWS Lambda to Host a GraphQL Handler and Not AWS AppSync?</_Heading>
<p>{`There are a couple of reason for that.`}</p>
<p>{`First, implementing a GraphQL Handler using AWS Lambda enables us and our users to make additional customizations to server’s behavior.`}</p>
<p>{`The default Webiny applications rely on this fact as well. For example, the I18N application gives you the ability to check what is the current locale that the user is on. The Security application gives you the ability to perform custom authentication and authorization checks inside of your resolvers. Finally, it also makes it possible for the Headless CMS application to generate different GraphQL schemas, based on the current I18N locale.`}</p>
<p>{`Secondly, you can test your GraphQL Handler easily with a testing library like `}<a parentName="p" {...{
        "href": "https://jestjs.io/"
      }}>{`Jest`}</a>{`, as you would do with any other JavaScript piece of code.`}</p>
<p>{`Finally, this approach makes it much easier for Webiny to be hosted on not just one cloud infrastructure provider (AWS), but on many more, like Microsoft Azure or Google Cloud Platform.`}</p>
<_Heading level={3} id={"which-graph-ql-implementation-are-you-using"} nextElement={{
      "type": "paragraph"
    }}>Which GraphQL Implementation Are You Using?</_Heading>
<p>{`We started with `}<a parentName="p" {...{
        "href": "https://www.apollographql.com/docs/apollo-server/"
      }}>{`Apollo GraphQL Server`}</a>{`, but for Webiny version 5, we migrated to `}<a parentName="p" {...{
        "href": "https://www.graphql-tools.com/"
      }}>{`GraphQL tools`}</a>{`, because it’s more lightweight and both easier to implement and grasp.`}</p>
<_Heading level={3} id={"which-amazon-api-gateway-is-deployed-as-part-of-the-api-application"} nextElement={{
      "type": "paragraph"
    }}>Which Amazon API Gateway Is Deployed as Part of the API Application?</_Heading>
<p>{`By default, we deploy `}<a parentName="p" {...{
        "href": "https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api.html"
      }}>{`HTTP APIs`}</a>{`. This can be changed on your behalf, if need be.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;