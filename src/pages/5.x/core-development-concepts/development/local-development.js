/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Local Development",
  "description": "Learn about how to do local development in Webiny",
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
  "title": "Is It Possible to Perform Local Development in Webiny Without Deploying Any Changes to the Cloud?",
  "slug": "is-it-possible-to-perform-local-development-in-webiny-without-deploying-any-changes-to-the-cloud",
  "children": []
}, {
  "title": "Can I Use a Tool Like LocalStack as Cloud Service Emulator for Development?",
  "slug": "can-i-use-a-tool-like-local-stack-as-cloud-service-emulator-for-development",
  "children": []
}, {
  "title": "What Is the Potential Cost Associated With Using an AWS Account for Development?",
  "slug": "what-is-the-potential-cost-associated-with-using-an-aws-account-for-development",
  "children": []
}, {
  "title": "Working With Team on a Webiny Project",
  "slug": "working-with-team-on-a-webiny-project",
  "children": []
}];

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
<li parentName="ul">{`how to do local development in Webiny`}</li>
<li parentName="ul">{`working with team on a Webiny project`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Serverless development has slightly different principles from traditional application development. In the traditional development process, developers typically develop and test their project locally before deploying it to a server. However, in the serverless world, this process is slightly different. `}</p>
<p>{`In this article, we will look at how to do local development in Webiny, a serverless CMS. If you are absolutely beginner to serverless, we will recommend you to read `}<a parentName="p" {...{
        "href": "https://www.webiny.com/knowledge-base/serverless"
      }}>{`this article`}</a>{`.`}</p>
<p>{`Webiny is a serverless application, which means that it uses serverless services like AWS Lambda, Amazon DynamoDB, Amazon S3, etc. to run. For the sake of simplifying the understanding, in context of development, we can devide Webiny code into two parts: the API & Infrastructure (backend) and the User Interface (frontend).`}</p>
<p>{`To do local development in Webiny, the API or any infrastructure changes must be deployed in the cloud. However, we have built various CLI tools that make the experience seamless, so when you make a change to the code and save it, it will be deployed to the cloud simultaneously, and you can see the changes in no time. For the frontend development, you can develop and test locally, and if everything looks good, you can deploy it to the cloud later.`}</p>
<p>{`In summary, changes made to API and infrastructure must be deployed to the cloud during local development. However, for changes made to only UI, deploying to the cloud is not necessary. Once the UI changes are finalised, these changes can be pushed to the cloud.`}</p>
<p>{`If you’re wondering how to push changes to the cloud during development, don’t worry. As previously mentioned, we have developed various CLI tools, such as the `}<_Link href="/docs/5.x/core-development-concepts/basics/watch-command"><inlineCode parentName="p">{`watch command`}</inlineCode></_Link>{` command, to make deploying changes to the cloud during development easy. The command allows you to continuously rebuild and redeploy your code, making the development process seamless.`}</p>
<p>{`Now let’s learn more about local development with the frequently asked questions related to Webiny development.`}</p>
<_Heading level={2} id={"is-it-possible-to-perform-local-development-in-webiny-without-deploying-any-changes-to-the-cloud"} nextElement={{
      "type": "paragraph"
    }}>Is It Possible to Perform Local Development in Webiny Without Deploying Any Changes to the Cloud?</_Heading>
<p>{`As previously mentioned, for the API and infrastructure related portion of the development, deployment to the cloud is necessary as it is powered by various serverless services such as AWS Lambda, Amazon DynamoDB, Amazon, etc. However, for frontend development, it is possible to develop and test locally and only deploy to the cloud once everything is looking good.`}</p>
<_Heading level={2} id={"can-i-use-a-tool-like-local-stack-as-cloud-service-emulator-for-development"} nextElement={{
      "type": "paragraph"
    }}>Can I Use a Tool Like LocalStack as Cloud Service Emulator for Development?</_Heading>
<p>{`Webiny utilizes a variety of AWS serverless services, such as AWS Lambda, Amazon DynamoDB, Amazon S3, etc.`}</p>
<p>{`And while simulating Lambda locally is not that hard (although it’s still not trivial), it’s still hard to emulate cloud native mechanisms, like reacting to Amazon S3 objects-related events, Amazon Event Bridge events, emulating services like Amazon Cognito, Amazon SQS, and more. `}</p>
<p>{`With that in mind, we don’t recommend using tools like `}<a parentName="p" {...{
        "href": "https://www.localstack.cloud/"
      }}>{`LocalStack`}</a>{`. Still, if you find it challenging to work with any part of local development, get in touch with us on our `}<a parentName="p" {...{
        "href": "https://www.webiny.com/slack"
      }}>{`Community Slack`}</a>{`. It will help us offer some advice or improve the local development experience.`}</p>
<_Heading level={2} id={"what-is-the-potential-cost-associated-with-using-an-aws-account-for-development"} nextElement={{
      "type": "paragraph"
    }}>What Is the Potential Cost Associated With Using an AWS Account for Development?</_Heading>
<p>{`Webiny supports `}<_Link href="/docs/5.x/architecture/introduction#different-database-setups">{`two database setups`}</_Link>{` at the moment:`}</p>
<ol>
<li parentName="ol">{`Amazon DynamoDB`}</li>
<li parentName="ol">{`Amazon DynamoDB + Amazon OpenSearch`}</li>
</ol>
<p>{`The Amazon DynamoDB database setup fully utilizes serverless services, which means it fully follows pay-per-use pricing. This means that for development, the cost is typically minimal or free.  `}</p>
<p>{`On the other hand, with the Amazon DynamoDB + Amazon OpenSearch version, `}<a parentName="p" {...{
        "href": "https://aws.amazon.com/opensearch-service/"
      }}>{`Amazon OpenSearch Service`}</a>{` is the only non-serverless service used by Webiny, which is not priced on a pay-per-use basis. This means that you will be charged for the time the service is running, regardless of whether you are using it or not.`}</p>
<p>{`To mitigate costs, you can have one Amazon OpenSearch Service domain that’s used by the entire team. This way, you can share the cost of the service among the team members. For more information on how to set this up, please refer to the `}<_Link href="/docs/5.x/infrastructure/basics/modify-cloud-infrastructure#using-a-shared-amazon-open-search-service-domain">{`Using a Shared Amazon OpenSearch Service Domain`}</_Link>{` article.`}</p>
<_Heading level={2} id={"working-with-team-on-a-webiny-project"} nextElement={{
      "type": "paragraph"
    }}>Working With Team on a Webiny Project</_Heading>
<p>{`Our recommended approach is for each developer to have their own isolated environment in which they deploy and work. This approach also involves each developer having their own AWS account. Once changes are ready, they are then merged into a shared environment, such as the `}<inlineCode parentName="p">{`dev`}</inlineCode>{` environment. For more information on this approach, including branches, environments, state files, and more, please refer to the `}<_Link href="/docs/5.x/core-development-concepts/ci-cd/introduction">{`CI/CD section`}</_Link>{`. If cost is your concern, please refer to the section above, which states that when using the DynamoDB-only flavor of Webiny, all services utilized are serverless, which typically results in minimal or no cost during development.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;