/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/core-development-concepts/basics/assets/environment-variables/error-overlay.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Environment Variables",
  "description": "Learn what are environment variables and how you can assign them.",
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
  "title": "How to Assign Environment Variables",
  "slug": "how-to-assign-environment-variables",
  "children": [{
    "title": "Using .env File",
    "slug": "using-env-file",
    "children": []
  }, {
    "title": "Using Terminal",
    "slug": "using-terminal",
    "children": []
  }, {
    "title": "CI/CD",
    "slug": "ci-cd",
    "children": []
  }]
}, {
  "title": "Webiny Built-in Environment Variables",
  "slug": "webiny-built-in-environment-variables",
  "children": [{
    "title": "DEBUG",
    "slug": "debug",
    "children": [{
      "title": "Backend Error Reporting",
      "slug": "backend-error-reporting"
    }, {
      "title": "Visual Feedback",
      "slug": "visual-feedback"
    }]
  }, {
    "title": "WEBINY_ENABLE_VERSION_HEADER",
    "slug": "webiny-enable-version-header",
    "children": []
  }, {
    "title": "WEBINY_TRASH_BIN_RETENTION_PERIOD_DAYS",
    "slug": "webiny-trash-bin-retention-period-days",
    "children": []
  }]
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "Do I Need to Redeploy My Applications When Adding Environment Variables?",
    "slug": "do-i-need-to-redeploy-my-applications-when-adding-environment-variables",
    "children": []
  }, {
    "title": "Can You Provide Any Details on How the Root .env File Is Loaded?",
    "slug": "can-you-provide-any-details-on-how-the-root-env-file-is-loaded",
    "children": []
  }]
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




<Alert type="success" title="What you'll learn" mdxType="Alert">
<ul>
<li parentName="ul">{`what are environment variables`}</li>
<li parentName="ul">{`how you can assign environment variables in your project applications`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`It’s not unusual to have our application code rely on one or more `}<a parentName="p" {...{
        "href": "https://en.wikipedia.org/wiki/Environment_variable"
      }}>{`environment variables`}</a>{`. Different pieces of information, like for example, API keys, API URLs, different configuration parameters, or environment metadata, are just some of the things that our application might need in order to work as expected.`}</p>
<p>{`Environment variables can be used with all three project applications that get shipped with every Webiny project:`}</p>
<ol>
<li parentName="ol"><strong parentName="li">{`API`}</strong>{` (`}<a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/v5.35.0/packages/cwp-template-aws/template/ddb/apps/api"
        }}><inlineCode parentName="a">{`apps/api`}</inlineCode></a>{`)`}</li>
<li parentName="ol"><strong parentName="li">{`Admin`}</strong>{` (`}<a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/v5.35.0/packages/cwp-template-aws/template/common/apps/admin"
        }}><inlineCode parentName="a">{`apps/admin`}</inlineCode></a>{`)`}</li>
<li parentName="ol"><strong parentName="li">{`Website`}</strong>{` (`}<a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/v5.35.0/packages/cwp-template-aws/template/common/apps/website"
        }}><inlineCode parentName="a">{`apps/website`}</inlineCode></a>{`)`}</li>
</ol>
<p>{`Upon adding new environment variables, we use the following naming convention:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`WEBINY_{APP_NAME}_{VARIABLE_NAME}`}
</Editor>
<p>{`For example, in order to inject `}<inlineCode parentName="p">{`MY_CUSTOM_ENV_VAR`}</inlineCode>{` variable into all three application, we’d define the following three environment variables:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`WEBINY_API_MY_CUSTOM_ENV_VAR=...
WEBINY_ADMIN_MY_CUSTOM_ENV_VAR=...
WEBINY_WEBSITE_MY_CUSTOM_ENV_VAR=...`}
</Editor>
<p>{`Note that, upon accessing added environment variables in the application code, you need to specify variable’s full name, including the `}<inlineCode parentName="p">{`WEBINY_{APP_NAME}_`}</inlineCode>{` prefix:`}</p>
<Editor title="" lang="ts" mdxType="Editor">
{`// In the API application code:
const myCustomEnvVar = process.env["WEBINY_API_MY_CUSTOM_ENV_VAR"];

// In the Admin application code:
const myCustomEnvVar = process.env["WEBINY_ADMIN_MY_CUSTOM_ENV_VAR"];

// In the Website application code:
const myCustomEnvVar = process.env["WEBINY_WEBSITE_MY_CUSTOM_ENV_VAR"];`}
</Editor>
<_Heading level={2} id={"how-to-assign-environment-variables"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>How to Assign Environment Variables</_Heading>
<_Heading level={3} id={"using-env-file"} nextElement={{
      "type": "paragraph"
    }}>Using<code>.env</code>File</_Heading>
<p>{`For development purposes, the recommended way to do it would be via the `}<inlineCode parentName="p">{`.env`}</inlineCode>{` file, located in your project root.`}</p>
<p>{`When you set up a brand new Webiny project, the content of the file might look similar to the following:`}</p>
<Editor title=".env" lang="diff-bash" mdxType="Editor">
{`# The region into which your project will be deployed.
AWS_REGION=eu-central-1

# Needed for project deployment.
PULUMI_CONFIG_PASSPHRASE=9f174eea6ec6148dc1467s59b1112591
PULUMI_SECRETS_PROVIDER=passphrase

+ WEBINY_API_MY_CUSTOM_ENV_VAR=some-random-value`}
</Editor>
<p>{`From there, we can easily add additional environment variables, like we did with the `}<inlineCode parentName="p">{`WEBINY_API_MY_CUSTOM_ENV_VAR`}</inlineCode>{`.`}</p>
<_Heading level={3} id={"using-terminal"} nextElement={{
      "type": "paragraph"
    }}>Using Terminal</_Heading>
<p>{`Apart from setting them via the shown `}<inlineCode parentName="p">{`.env`}</inlineCode>{` file, environment variables can also be set using a terminal of your choice, and a command that’s available on your operating system.`}</p>
<p>{`For example, on Linux or MacOS, you can use the `}<a parentName="p" {...{
        "href": "https://www.geeksforgeeks.org/export-command-in-linux-with-examples/"
      }}>{`export`}</a>{` command:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`export AWS_PROFILE=my-profile`}
</Editor>
<p>{`On Windows, you can utilize the `}<a parentName="p" {...{
        "href": "https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/set_1"
      }}>{`set`}</a>{` and `}<a parentName="p" {...{
        "href": "https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/setx"
      }}>{`setx`}</a>{` commands, for example:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`setx AWS_PROFILE my-profile`}
</Editor>
<p>{`This approach can be used both in development and CI/CD environments, although in case of the latter, using built-in methods for securely storing environment variables is recommended.`}</p>
<_Heading level={3} id={"ci-cd"} nextElement={{
      "type": "paragraph"
    }}>CI/CD</_Heading>
<p>{`Different CI/CD providers offer different options when it comes to setting environment variables. For example, `}<a parentName="p" {...{
        "href": "https://github.com/features/actions"
      }}>{`GitHub Actions`}</a>{` enable this via `}<a parentName="p" {...{
        "href": "https://docs.github.com/en/actions/reference/encrypted-secrets"
      }}>{`repository secrets`}</a>{`. On the other hand, if using `}<a parentName="p" {...{
        "href": "https://aws.amazon.com/codebuild/"
      }}>{`AWS CodeBuild`}</a>{`, you can use the `}<a parentName="p" {...{
        "href": "https://aws.amazon.com/codepipeline/"
      }}>{`AWS CodePipeline`}</a>{` service.`}</p>
<p>{`Make sure to read the relevant documentation for best practices around how to properly set environment variables in your CI/CD provider.`}</p>
<_Heading level={2} id={"webiny-built-in-environment-variables"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Webiny Built-in Environment Variables</_Heading>
<_Heading level={3} id={"debug"} nextElement={{
      "type": "paragraph"
    }}><code>DEBUG</code></_Heading>
<p>{`In order to provide the best possible debugging experience, and at the same time, maintain a strong security posture, Webiny uses the `}<inlineCode parentName="p">{`DEBUG`}</inlineCode>{` environment variable to determine what information needs to be revealed in case one or more errors were thrown in the application runtime.`}</p>
<p>{`By default, the `}<inlineCode parentName="p">{`DEBUG`}</inlineCode>{` environment variable is set to `}<inlineCode parentName="p">{`true`}</inlineCode>{`, via the `}<inlineCode parentName="p">{`.env`}</inlineCode>{` file located in your project root. For development purposes, this can useful as you’ll get to see full error reports whenever an error has been returned from for example the GraphQL API, or maybe even in your React application code.`}</p>
<p>{`On the other hand, for some pre-production and production environments, most probably you will want to not have this variable set to `}<inlineCode parentName="p">{`true`}</inlineCode>{`, as in some cases, full error reports might reveal sensitive data, and may pose a security vulnerability.`}</p>
<p>{`In the following text, we cover a couple of key features that are available while the `}<inlineCode parentName="p">{`DEBUG`}</inlineCode>{` flag is set to `}<inlineCode parentName="p">{`true`}</inlineCode>{`.`}</p>
<_Heading level={4} id={"backend-error-reporting"} nextElement={{
      "type": "paragraph"
    }}>Backend Error Reporting</_Heading>
<p>{`In case of a backend error, for example, an error in a GraphQL resolver function, by default, the client that issued the request will receive the following error response:`}</p>
<Editor title="" lang="json" mdxType="Editor">
{`{
  "error": {
    "name": "Error",
    "message": "Internal Sever Error"
  }
}`}
</Editor>
<p>{`As mentioned, the reason for the obscurity is primarily security, as we want to avoid potential leaking of sensitive information to the public.`}</p>
<p>{`On the other hand, for development purposes, setting the `}<inlineCode parentName="p">{`DEBUG`}</inlineCode>{` environment variable to `}<inlineCode parentName="p">{`true`}</inlineCode>{`, will force the backend to return something like the following:`}</p>
<Editor title="" lang="json" mdxType="Editor">
{`{
  "error": {
    "name": "Error",
    "message": "Unknown type\\"Stringgg\\". Did you mean \\"String\\"?",
    "stack": "Error: Unknown type \\"Stringgg\\". Did you mean \\"String\\"?\\n    at p (/var/task/handler.js:15:52587)\\n    at x (/var/task/handler.js:45:166906)\\n    at fe (/var/task/handler.js:126:504732)\\n    at Ee (/var/task/handler.js:126:514113)\\n    at t.createGraphQLSchema (/var/task/handler.js:57:373)\\n    at handle (/var/task/handler.js:45:189370)\\n    at /var/task/handler.js:45:187469\\n    at new Promise (<anonymous>)\\n    at i (/var/task/handler.js:45:187419)\\n    at /var/task/handler.js:45:187592"
  }
}`}
</Editor>
<Alert type="info" mdxType="Alert">
<p>{`You must redeploy your backend project application after updating the environment variables. Otherwise, the change will not be reflected.`}</p>
</Alert>
<_Heading level={4} id={"visual-feedback"} nextElement={{
      "type": "paragraph"
    }}>Visual Feedback</_Heading>
<p>{`The `}<inlineCode parentName="p">{`DEBUG`}</inlineCode>{` environment variable can also be used within your frontend (React) applications.`}</p>
<p>{`If set to `}<inlineCode parentName="p">{`true`}</inlineCode>{`, all errors detected in the application runtime will be presented within a clear error report, with all of the relevant information like the error message and a complete stack trace:`}</p>
<Image src={_Image1} alt={"Error overlay in debug mode"} mdxType="Image" />
<_Heading level={3} id={"webiny-enable-version-header"} nextElement={{
      "type": "paragraph"
    }}><code>WEBINY_ENABLE_VERSION_HEADER</code></_Heading>
<p>{`The `}<inlineCode parentName="p">{`WEBINY_ENABLE_VERSION_HEADER`}</inlineCode>{` environment variable is used to add the Webiny version header to all GraphQL response headers.
By default, version headers are not set into the response headers. If you want the version headers to be included, you must set the environment variable to `}<inlineCode parentName="p">{`true`}</inlineCode>{`.`}</p>
<p>{`Only the `}<inlineCode parentName="p">{`true`}</inlineCode>{` word will have effect. If you set it to anything else, `}<inlineCode parentName="p">{`WEBINY_ENABLE_VERSION_HEADER`}</inlineCode>{` will be considered as `}<inlineCode parentName="p">{`false`}</inlineCode>{` / not set.`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`WEBINY_ENABLE_VERSION_HEADER=true`}
</Editor>
<p>{`When the environment variable is set to true it will add the `}<inlineCode parentName="p">{`x-webiny-version`}</inlineCode>{` header. Which looks like this:`}</p>
<Editor title="" lang="yaml" mdxType="Editor">
{`x-webiny-version: 5.21.0`}
</Editor>
<_Heading level={3} id={"webiny-trash-bin-retention-period-days"} nextElement={{
      "type": "paragraph"
    }}><code>WEBINY_TRASH_BIN_RETENTION_PERIOD_DAYS</code></_Heading>
<p>{`To manage how long deleted entries are retained within Webiny, developers can configure the retention period using the `}<inlineCode parentName="p">{`WEBINY_TRASH_BIN_RETENTION_PERIOD_DAYS`}</inlineCode>{` environment variable.`}</p>
<p>{`For example, setting `}<inlineCode parentName="p">{`WEBINY_TRASH_BIN_RETENTION_PERIOD_DAYS=7`}</inlineCode>{` will preserve deleted entries for 7 days.`}</p>
<p>{`Adjusting this variable allows developers to customize the retention period according to their needs. `}</p>
<p>{`Setting `}<inlineCode parentName="p">{`WEBINY_TRASH_BIN_RETENTION_PERIOD_DAYS=0`}</inlineCode>{` will apply the default retention period of 90 days.`}</p>
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"do-i-need-to-redeploy-my-applications-when-adding-environment-variables"} nextElement={{
      "type": "paragraph"
    }}>Do I Need to Redeploy My Applications When Adding Environment Variables?</_Heading>
<p>{`If you are adding an `}<strong parentName="p">{`API`}</strong>{` environment variable (prefix `}<inlineCode parentName="p">{`WEBINY_API_`}</inlineCode>{`), then yes, you will need to redeploy the application.`}</p>
<p>{`Otherwise, for `}<strong parentName="p">{`Admin`}</strong>{` (prefix `}<inlineCode parentName="p">{`WEBINY_ADMIN_`}</inlineCode>{`) and `}<strong parentName="p">{`Website`}</strong>{` (prefix `}<inlineCode parentName="p">{`WEBINY_WEBSITE_`}</inlineCode>{`) applications, a simple rerun of the `}<_Link href="/docs/5.x/core-development-concepts/basics/watch-command"><inlineCode parentName="p">{`webiny watch`}</inlineCode></_Link>{` command will do the trick.`}</p>
<_Heading level={3} id={"can-you-provide-any-details-on-how-the-root-env-file-is-loaded"} nextElement={{
      "type": "paragraph"
    }}>Can You Provide Any Details on How the Root<code>.env</code>File Is Loaded?</_Heading>
<p>{`Behind the scenes, `}<_Link href="/docs/5.x/core-development-concepts/basics/webiny-cli">{`Webiny CLI`}</_Link>{` uses the `}<a parentName="p" {...{
        "href": "https://www.npmjs.com/package/dotenv"
      }}><inlineCode parentName="a">{`dotenv`}</inlineCode></a>{` library in order to load the shown `}<inlineCode parentName="p">{`.env`}</inlineCode>{` file. Note that the values that are defined in the `}<inlineCode parentName="p">{`.env`}</inlineCode>{` file will not get assigned as environment variables if they were already assigned in the running process (e.g. via terminal, or as a secret in your CI/CD workflow). This is the default behaviour of the `}<inlineCode parentName="p">{`dotenv`}</inlineCode>{` library.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;