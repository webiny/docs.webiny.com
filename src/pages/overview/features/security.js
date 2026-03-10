/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.64f62e.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Security",
  "description": "Overview of Webiny security strategy.",
  "type": "docs",
  "showPageHeader": true,
  "fullWidth": false,
  "version": "6.0.x"
};
const docsearch = {
  "type": "docs",
  "weight": 100,
  "versions": ["latest", "6.0.x"]
};
const navigation = _navigation;
const versions = _versions;
const tableOfContents = [{
  "title": "About",
  "slug": "about",
  "children": []
}, {
  "title": "Codebase",
  "slug": "codebase",
  "children": []
}, {
  "title": "Infrastructure",
  "slug": "infrastructure",
  "children": []
}, {
  "title": "Application",
  "slug": "application",
  "children": []
}, {
  "title": "Data",
  "slug": "data",
  "children": []
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "Can I Use a Different Identity Provider?",
    "slug": "can-i-use-a-different-identity-provider",
    "children": []
  }, {
    "title": "Can I Roll My Own Authentication System Instead of Using a Third-Party IdP?",
    "slug": "can-i-roll-my-own-authentication-system-instead-of-using-a-third-party-id-p",
    "children": []
  }]
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



<Alert type="success" title="What You’ll Learn" mdxType="Alert">
<ul>
<li parentName="ul">{`How we approach security`}</li>
<li parentName="ul">{`Additional security recommendations`}</li>
</ul>
</Alert>
<_Heading level={2} id={"about"} nextElement={{
      "type": "paragraph"
    }}>About</_Heading>
<p>{`If we don’t have security, we can’t really say we have a good product. Although Webiny is a self-hosted solution, meaning you control your security, it’s still important for us to provide an overview of our security practices. This will make you acquainted with our approach, and will make it easier to align your implementation to some of the best practices we established.`}</p>
<p>{`This being an overview article, it will provide the main elements and a clear distinction in terms of the security responsibilities that are on your end in comparison to the ones being handled by Webiny.`}</p>
<p>{`We’ve structured the article into 4 main sections:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`Codebase`}</strong>{` - how we ensure our codebase isn’t compromised`}</li>
<li parentName="ul"><strong parentName="li">{`Infrastructure`}</strong>{` - how the security layer is implemented as part of the infrastructure that Webiny deploys`}</li>
<li parentName="ul"><strong parentName="li">{`Application`}</strong>{` - how Webiny protects the application from unauthorized access`}</li>
<li parentName="ul"><strong parentName="li">{`Data`}</strong>{` - how your data is stored and secured`}</li>
</ul>
<_Heading level={2} id={"codebase"} nextElement={{
      "type": "paragraph"
    }}>Codebase</_Heading>
<p>{`Webiny, being an open-source project, our code is public, and with that comes great responsibility for the security aspects around it.`}</p>
<p>{`Our code-base is regularly scanned for vulnerabilities by `}<a parentName="p" {...{
        "href": "https://securitylab.github.com/tools/codeql"
      }}>{`CodeQL`}</a>{`—the world’s most powerful code analysis engine.`}</p>
<p>{`All the 3rd party dependencies we use are scanned via `}<a parentName="p" {...{
        "href": "https://dependabot.com"
      }}>{`Dependabot`}</a>{`.`}</p>
<p>{`No single change made to our codebase skips these checks.`}</p>
<_Heading level={2} id={"infrastructure"} nextElement={{
      "type": "paragraph"
    }}>Infrastructure</_Heading>
<p>{`Webiny is designed to run on top of the AWS cloud at the moment, with support for other clouds coming at a later point.`}</p>
<p>{`The serverless services Webiny uses as part of its architecture are fault-tolerant by design. The only exception is Elasticsearch. In the Webiny production deployment stack, Elasticsearch is automatically deployed in multiple AZs, making it highly-available. Any public access, in both VPC and non-VPC deployment is restricted.`}</p>
<p>{`With Webiny there are zero servers you need to manage, reducing the risk of a security breach due to misconfiguration. Serverless services are tested by the cloud provider against all forms of attacks across millions of customers, giving your confidence in their security. Serverless services in general reduce the potential attack vectors that can be used against your application.`}</p>
<p>{`Webiny ships with 2 infrastructure stacks by default, a development one and a production one.`}</p>
<Alert type="warning" title="Use the right stack" mdxType="Alert">
<p>{`We highly recommend that you use the production stack for all your projects running production traffic.`}</p>
</Alert>
<p>{`The production stack by default is deployed inside a private VPC preventing direct access to resources like DynamoDB and the Elasticsearch database. Keeping your data safe.`}</p>
<p>{`Additional security improvements you can make to your project:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`Firewall`}</strong>{`: Webiny intentionally deploys a CloudFront web distribution in front of an API Gateway. This setup allows you to place a web application firewall to all incoming requests for added security.`}</li>
</ul>
<_Heading level={2} id={"application"} nextElement={{
      "type": "paragraph"
    }}>Application</_Heading>
<p>{`Webiny is built to support different authentication mechanisms. Out of the box, it is configured to work with `}<a parentName="p" {...{
        "href": "https://aws.amazon.com/cognito/"
      }}>{`AWS Cognito`}</a>{`, an enterprise-grade, battle-tested identity provider. The framework, however, supports any identity provider, by means of plugins.`}</p>
<p>{`Webiny draws a very clear line between `}<strong parentName="p">{`authentication`}</strong>{` and `}<strong parentName="p">{`authorization`}</strong>{`. We rely on third-party IdPs for authentication and use a very flexible system of permissions for authorization.`}</p>
<p>{`Authorization is usually very closely tied to business logic, so using scopes from the JWT, or simple string-based roles is not enough for complex business applications. To allow different types of integration, we provide a very thin security framework, based on plugins. On top of that, we define permissions as rich objects with different application-related properties.`}</p>
<_Heading level={2} id={"data"} nextElement={{
      "type": "paragraph"
    }}>Data</_Heading>
<p>{`Because Webiny is self-hosted and under the MIT license, your data stays within your cloud infrastructure. In practice, this usually means there is no need for any legal, data compliance or GDPR changes to be made when adopting Webiny.`}</p>
<p>{`When it comes to storing your data, it’s saved inside a DynamoDB database and Elasticsearch, and files are stored inside an S3 bucket.`}</p>
<p>{`All the data inside DynamoDB is encrypted in transit and at rest by default.`}</p>
<p>{`All the data inside Elasticsearch is encrypted at transit only, by default.`}</p>
<Alert type="info" title="Elasticsearch Encrypt at rest" mdxType="Alert">
<p>{`For production cases, we recommend you also encrypt data at rest in Elasticsearch. Ensure you have a proper key management strategy in place beforehand otherwise it could lead to making your data inaccessible. For more info visit: `}<a parentName="p" {...{
          "href": "https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/encryption-at-rest.html"
        }}>{`https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/encryption-at-rest.html`}</a></p>
</Alert>
<p>{`The data inside S3 bucket by default is not encrypted, is set to be publicly accessible and versioning is turned off. Public access is only allowed on the `}<inlineCode parentName="p">{`list`}</inlineCode>{` command. Write operations need to be signed with a security token to be allowed. We advise that you adjust these parameters to the needs of your project accordingly.`}</p>
<Alert type="info" title="Making S3 private" mdxType="Alert">
<p>{`If needed you can restrict access to the S3 buckets by modifying the ACL policy inside the Pulumi infrastructure files. At the moment if you make the S3 bucket private to non-authorized users, images embedded in the Page Builder and other places will not be displayed and potentially the Admin app might be made inaccessible. Please contact us in case you need to make your S3 completely private.`}</p>
</Alert>
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"can-i-use-a-different-identity-provider"} nextElement={{
      "type": "paragraph"
    }}>Can I Use a Different Identity Provider?</_Heading>
<p>{`Yes, absolutely. The default IdP implementation contains a set of plugins on the API and React sides. All you need to do is follow the same principle and implement your own plugins that will work with the IdP of your choice.`}</p>
<_Heading level={3} id={"can-i-roll-my-own-authentication-system-instead-of-using-a-third-party-id-p"} nextElement={{
      "type": "paragraph"
    }}>Can I Roll My Own Authentication System Instead of Using a Third-Party IdP?</_Heading>
<p>{`We don’t recommend it, but yes, you can. Following the same implementation strategy that comes with Webiny by default, you can create all kinds of authentication mechanisms.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;