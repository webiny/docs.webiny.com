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
  "title": "Security",
  "description": "Overview of Webiny security strategy.",
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
  "children": [{
    "title": "Deploying Into Amazon Virtual Private Cloud (Amazon VPC)",
    "slug": "deploying-into-amazon-virtual-private-cloud-amazon-vpc",
    "children": []
  }]
}, {
  "title": "Application",
  "slug": "application",
  "children": []
}, {
  "title": "Data",
  "slug": "data",
  "children": []
}, {
  "title": "SOC2 Type 1 Certified",
  "slug": "soc-2-type-1-certified",
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
<p>{`If we don’t have security, we can’t say we have a good product. Although Webiny is a self-hosted solution, meaning you control your security, it’s still important for us to provide an overview of our security practices. This will make you acquainted with our approach, and will make it easier to align your implementation to some of the best practices we established.`}</p>
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
<p>{`Our code base is regularly scanned for vulnerabilities by `}<a parentName="p" {...{
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
<Alert type="info" title="Webiny Architecture" mdxType="Alert">
<p>{`To learn more about Webiny’s architecture, check out `}<_Link href="/docs/5.x/architecture/introduction">{`this article`}</_Link>{`.`}</p>
</Alert>
<p>{`The serverless services Webiny uses as part of its architecture are fault-tolerant by design. The only exception is Elasticsearch. In the Webiny production deployment stack, Elasticsearch is automatically deployed in multiple AZs, making it highly available. Any public access, in both VPC and non-VPC deployment, is restricted.`}</p>
<p>{`With Webiny there are zero servers you need to manage, reducing the risk of a security breach due to misconfiguration. Serverless services are tested by the cloud provider against all forms of attacks across millions of customers, giving your confidence in their security. Serverless services in general reduce the potential attack vectors that can be used against your application.`}</p>
<p>{`Webiny ships with two deployment modes by default, a development one and a production one.`}</p>
<Alert type="warning" title="Use the right deployment mode" mdxType="Alert">
<p>{`We highly recommend that you use the production deployment mode for all your projects running production traffic. `}<_Link href="/docs/5.x/architecture/deployment-modes/introduction">{`Learn more about the deployment modes.`}</_Link></p>
</Alert>
<p>{`The production stack by default is deployed inside a private VPC preventing direct access to resources like DynamoDB and the Elasticsearch database. Keeping your data safe.`}</p>
<_Heading level={3} id={"deploying-into-amazon-virtual-private-cloud-amazon-vpc"} nextElement={{
      "type": "paragraph"
    }}>Deploying Into Amazon Virtual Private Cloud (Amazon VPC)</_Heading>
<p>{`In its Enterprise tier, Webiny offers an additional infrastructure configuration, one that further hardens the security posture and keeps the communication between specific services within the private network without exposing any of its data or communication to the public internet.`}</p>
<p>{`Webiny Enterprise customers can deploy a Webiny project into their existing Amazon VPC that they already manage using their existing toolset.`}</p>
<p>{`In addition to deploying Webiny inside an Amazon VPC, Amazon VPC endpoints can be used with services like Amazon DynamoDB, Amazon S3, Amazon SQS and Amazon EventBridge.`}</p>
<p>{`As many organizations already have a securely configured Amazon VPC and Amazon VPC endpoints, a Webiny project can be configured to utilize those existing resources. If the preference is to deploy Webiny into an isolated AWS account, but still utilize the VPC and VPC endpoints, that configuration is also available.`}</p>
<Alert type={"info"} mdxType="Alert">
<p>{`To learn more about deploying your Webiny project into an existing Amazon VPC, check out the `}<_Link href="/docs/5.x/enterprise/use-existing-amazon-vpc">{`Use Existing Amazon VPC`}</_Link>{` article.`}</p>
</Alert>
<p>{`Additional security improvements you can make to your project:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`Firewall`}</strong>{`: Webiny intentionally deploys a CloudFront web distribution in front of an API Gateway. This setup allows you to place a web application firewall on all incoming requests for added security.`}</li>
</ul>
<_Heading level={2} id={"application"} nextElement={{
      "type": "paragraph"
    }}>Application</_Heading>
<p>{`Webiny is built to `}<_Link href="/docs/5.x/overview/features/sso-and-custom-authenticators">{`support different authentication mechanisms`}</_Link>{`. Out of the box, it is configured to work with `}<a parentName="p" {...{
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
<p>{`The data inside S3 bucket by default is not encrypted, but it’s limited to private access only. Public access is not allowed. Write operations to the buckets need to be signed with a security token to be allowed. We advise that you adjust these parameters to the needs of your project accordingly.`}</p>
<Alert type="info" title="Making S3 private" mdxType="Alert">
<p>{`As of version 5.31 all new Webiny projects will have S3 buckets restricted to private access only. Before 5.31 the S3 buckets have public access enabled.`}</p>
</Alert>
<_Heading level={2} id={"soc-2-type-1-certified"} nextElement={{
      "type": "paragraph"
    }}>SOC2 Type 1 Certified</_Heading>
<p>{`Webiny is proud to announce it has completed the System and Organization Controls (SOC) 2 Type I examination in recognition of its commitment to information security. Developed by the American Institute of CPAs (AICPA), SOC 2 (System and Organization Controls) defines criteria for managing customer data based on five “trust service principles” — security, availability, processing integrity, confidentiality, and privacy.`}</p>
<p>{`A SOC 2 examination provides organizations with a report on an organization’s internal controls and how it protects customer data and sensitive information. It is the standard for data security among digital companies in the U.S.
An independent auditor, Insight Assurance, conducted the detailed examination via Vanta. Through this process, Webiny demonstrated its adherence to data security, availability and confidentiality standards developed by the American Institute of Certified Public Accountants (AICPA). With its SOC 2 recognition, Webiny not only protects the safety of its customers’ data today but demonstrates that it has set the right standards in place for the future.`}</p>
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