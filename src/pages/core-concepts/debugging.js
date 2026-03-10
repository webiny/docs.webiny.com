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
  "title": "Debugging",
  "description": "Effective debugging strategies for Webiny applications.",
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
  "title": "Overview",
  "slug": "overview",
  "children": []
}, {
  "title": "Error Types",
  "slug": "error-types",
  "children": []
}, {
  "title": "Debugging API Application",
  "slug": "debugging-api-application",
  "children": [{
    "title": "Console Logs",
    "slug": "console-logs",
    "children": []
  }, {
    "title": "Webiny Logger",
    "slug": "webiny-logger",
    "children": []
  }, {
    "title": "When to Use Each",
    "slug": "when-to-use-each",
    "children": []
  }, {
    "title": "Logger Methods",
    "slug": "logger-methods",
    "children": []
  }, {
    "title": "Production API Debugging",
    "slug": "production-api-debugging",
    "children": []
  }]
}, {
  "title": "Debugging Admin Application",
  "slug": "debugging-admin-application",
  "children": [{
    "title": "Browser DevTools",
    "slug": "browser-dev-tools",
    "children": []
  }, {
    "title": "Common Admin Issues",
    "slug": "common-admin-issues",
    "children": []
  }]
}, {
  "title": "Debugging Deployment Errors",
  "slug": "debugging-deployment-errors",
  "children": []
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
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



<Alert type="success" title="WHAT YOU'LL LEARN" mdxType="Alert">
<ul>
<li parentName="ul">{`How to debug API application errors`}</li>
<li parentName="ul">{`How to debug Admin application errors`}</li>
<li parentName="ul">{`Tools and techniques for each application type`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Webiny consists of Admin and API applications. Errors can occur in different places, and understanding where an error originates is the first step to fixing it efficiently.`}</p>
<_Heading level={2} id={"error-types"} nextElement={{
      "type": "paragraph"
    }}>Error Types</_Heading>
<p>{`Errors occur in three main areas:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`API application`}</strong>{` - Server-side Lambda function errors, GraphQL operations`}</li>
<li parentName="ul"><strong parentName="li">{`Admin application`}</strong>{` - Client-side React errors in the browser`}</li>
<li parentName="ul"><strong parentName="li">{`Infrastructure`}</strong>{` - Deployment errors from Pulumi`}</li>
</ul>
<_Heading level={2} id={"debugging-api-application"} nextElement={{
      "type": "paragraph"
    }}>Debugging API Application</_Heading>
<p>{`API errors occur in AWS Lambda functions. During local development with `}<inlineCode parentName="p">{`yarn webiny watch api`}</inlineCode>{`, debugging is straightforward because code runs locally.`}</p>
<_Heading level={3} id={"console-logs"} nextElement={{
      "type": "paragraph"
    }}>Console Logs</_Heading>
<p>{`Console logs are quick and effective for debugging API extensions:`}</p>
<Editor title="extensions/MyApiExtension.ts" lang="typescript" mdxType="Editor">
{`import { ApiKeyAfterUpdateHandler } from "webiny/api/security/api-key";

class MyApiKeyAfterUpdateImpl implements ApiKeyAfterUpdateHandler.Interface {
  async handle() {
    console.log("An API key was updated!");
  }
}

const MyApiKeyAfterUpdate = ApiKeyAfterUpdateHandler.createImplementation({
  implementation: MyApiKeyAfterUpdateImpl
});

export default MyApiKeyAfterUpdate;`}
</Editor>
<p>{`With Local AWS Lambda Development (`}<inlineCode parentName="p">{`yarn webiny watch api`}</inlineCode>{`), console logs appear directly in the terminal. You get instant feedback like any local Node.js application.`}</p>
<_Heading level={3} id={"webiny-logger"} nextElement={{
      "type": "paragraph"
    }}>Webiny Logger</_Heading>
<p>{`For production logging that persists to CloudWatch, use Webiny’s Logger:`}</p>
<Editor title="extensions/MyApiExtension.ts" lang="typescript" mdxType="Editor">
{`import { ApiKeyAfterUpdateHandler } from "webiny/api/security/api-key";
import { Logger } from "webiny/api/logger";

class MyApiKeyAfterUpdateImpl implements ApiKeyAfterUpdateHandler.Interface {
  constructor(private logger: Logger.Interface) {}

  async handle() {
    this.logger.warn("An API key was updated!");
  }
}

const MyApiKeyAfterUpdate = ApiKeyAfterUpdateHandler.createImplementation({
  implementation: MyApiKeyAfterUpdateImpl,
  dependencies: [Logger]
});

export default MyApiKeyAfterUpdate;`}
</Editor>
<_Heading level={3} id={"when-to-use-each"} nextElement={{
      "type": "list",
      "ordered": false,
      "start": null,
      "spread": false
    }}>When to Use Each</_Heading>
<ul>
<li parentName="ul"><strong parentName="li"><inlineCode parentName="strong">{`console.log`}</inlineCode></strong>{` - Quick debugging during local development`}</li>
<li parentName="ul"><strong parentName="li"><inlineCode parentName="strong">{`Logger`}</inlineCode></strong>{` - Production logging that needs to persist to CloudWatch`}</li>
</ul>
<_Heading level={3} id={"logger-methods"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>Logger Methods</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`this.logger.debug("Debug information");
this.logger.info("Informational message");
this.logger.warn("Warning message");
this.logger.error("Error message");`}
</Editor>
<_Heading level={3} id={"production-api-debugging"} nextElement={{
      "type": "paragraph"
    }}>Production API Debugging</_Heading>
<p>{`When debugging deployed Lambda functions, logs are sent to CloudWatch. Access them via the `}<a parentName="p" {...{
        "href": "https://console.aws.amazon.com/cloudwatch/home"
      }}>{`CloudWatch Management Console`}</a>{` under Log groups. Each Lambda function has its own log group.`}</p>
<_Heading level={2} id={"debugging-admin-application"} nextElement={{
      "type": "paragraph"
    }}>Debugging Admin Application</_Heading>
<p>{`The Admin application is a React application running in the browser. Use standard browser debugging tools.`}</p>
<_Heading level={3} id={"browser-dev-tools"} nextElement={{
      "type": "paragraph"
    }}>Browser DevTools</_Heading>
<p>{`Essential tools for Admin debugging:`}</p>
<p><strong parentName="p">{`Console`}</strong>{` - View logs and errors`}</p>
<Editor title="extensions/MyAdminExtension.tsx" lang="tsx" mdxType="Editor">
{`const MyComponent = () => {
  console.log("Component rendered");
  return <div>My Component</div>;
};`}
</Editor>
<p><strong parentName="p">{`Network Tab`}</strong>{` - Inspect GraphQL requests and responses`}</p>
<ul>
<li parentName="ul">{`View request/response payloads`}</li>
<li parentName="ul">{`Check authentication headers`}</li>
<li parentName="ul">{`Monitor API call timing`}</li>
</ul>
<p><strong parentName="p">{`React Developer Tools`}</strong>{` - Debug React component state and props`}</p>
<ul>
<li parentName="ul">{`Install: `}<a parentName="li" {...{
          "href": "https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi"
        }}>{`Chrome`}</a></li>
<li parentName="ul">{`Select elements to see component hierarchy`}</li>
<li parentName="ul">{`Inspect props and state`}</li>
<li parentName="ul">{`View component re-renders`}</li>
</ul>
<p><strong parentName="p">{`GraphQL Network Inspector`}</strong>{` - Inspect GraphQL operations`}</p>
<ul>
<li parentName="ul">{`Install: `}<a parentName="li" {...{
          "href": "https://chromewebstore.google.com/detail/graphql-network-inspector/ndlbedplllcgconngcnfmkadhokfaaln"
        }}>{`Chrome`}</a></li>
<li parentName="ul">{`View query/mutation details`}</li>
<li parentName="ul">{`Inspect variables and responses`}</li>
<li parentName="ul">{`Debug GraphQL errors`}</li>
</ul>
<Alert type="info" title="Finding Components" mdxType="Alert">
<p>{`Use React DevTools “Select Element” tool to click any UI element and immediately see which React component renders it. Invaluable when working with unfamiliar code.`}</p>
</Alert>
<_Heading level={3} id={"common-admin-issues"} nextElement={{
      "type": "paragraph"
    }}>Common Admin Issues</_Heading>
<p><strong parentName="p">{`Component Not Rendering`}</strong></p>
<ul>
<li parentName="ul">{`Check browser console for errors`}</li>
<li parentName="ul">{`Verify component is registered in `}<inlineCode parentName="li">{`webiny.config.tsx`}</inlineCode></li>
<li parentName="ul">{`Check React DevTools for component presence`}</li>
</ul>
<p><strong parentName="p">{`GraphQL Errors`}</strong></p>
<ul>
<li parentName="ul">{`Use GraphQL Network Inspector to view error details`}</li>
<li parentName="ul">{`Check Network tab for failed requests`}</li>
<li parentName="ul">{`Verify API authentication`}</li>
</ul>
<p><strong parentName="p">{`Styling Issues`}</strong></p>
<ul>
<li parentName="ul">{`Use browser DevTools Elements panel`}</li>
<li parentName="ul">{`Inspect applied CSS`}</li>
<li parentName="ul">{`Check for conflicting styles`}</li>
</ul>
<_Heading level={2} id={"debugging-deployment-errors"} nextElement={{
      "type": "paragraph"
    }}>Debugging Deployment Errors</_Heading>
<p>{`Deployment errors occur when you run `}<inlineCode parentName="p">{`yarn webiny deploy`}</inlineCode>{`. When Pulumi fails to deploy, errors are printed in the terminal, which helps you identify and fix issues in your infrastructure code.`}</p>
<p>{`Example error:`}</p>
<Editor title="" lang="text" mdxType="Editor">
{`error: update failed
error: aws:lambda:Function myfunction: creating Lambda Function: InvalidParameterValueException:
The role defined for the function cannot be assumed by Lambda.`}
</Editor>
<p>{`Pulumi errors show which resource failed and why. Common causes include AWS permission errors, resource limits, or configuration errors in `}<inlineCode parentName="p">{`webiny.config.tsx`}</inlineCode>{`.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;