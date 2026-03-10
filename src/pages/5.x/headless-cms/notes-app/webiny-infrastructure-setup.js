/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image5 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/notes-app/assets/notes-app/note-model-step-2.png'
import _Image4 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/notes-app/assets/notes-app/note-model-step-1.png'
import _Image3 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/notes-app/assets/notes-app/roles-creation-step-3.png'
import _Image2 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/notes-app/assets/notes-app/roles-creation-step-2.png'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/notes-app/assets/notes-app/roles-creation-step-1.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Webiny Infrastructure Setup",
  "description": "Learn how to set up a new User Pool in Webiny, enable authentication for it, and restrict users’ access to only their own content.",
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
  "title": "Webiny Infrastructure Setup",
  "slug": "webiny-infrastructure-setup",
  "children": [{
    "title": "Notes App User Pool and User Pool Client",
    "slug": "notes-app-user-pool-and-user-pool-client",
    "children": []
  }, {
    "title": "Add Cognito Authenticator for Notes App Users",
    "slug": "add-cognito-authenticator-for-notes-app-users",
    "children": []
  }, {
    "title": "Add Types for Environment Variables",
    "slug": "add-types-for-environment-variables",
    "children": []
  }, {
    "title": "Deploy the Core and API Applications",
    "slug": "deploy-the-core-and-api-applications",
    "children": []
  }, {
    "title": "Create Role for Notes App Users",
    "slug": "create-role-for-notes-app-users",
    "children": []
  }, {
    "title": "Create Note Model to Store User Notes",
    "slug": "create-note-model-to-store-user-notes",
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








<Alert type="info" title="Can I Use This?" mdxType="Alert">
<p>{`This feature has been available since Webiny `}<strong parentName="p">{`v5.40.0`}</strong>{` and is available in Business & Enterprise tier.`}</p>
</Alert>
<Alert type="success" title="What you will learn" mdxType="Alert">
<ul>
<li parentName="ul">{`how to set up a new User Pool in Webiny and enable authentication for it`}</li>
<li parentName="ul">{`how to limit users’ access to only the content they’ve created`}</li>
</ul>
</Alert>
<_Heading level={2} id={"webiny-infrastructure-setup"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Webiny Infrastructure Setup</_Heading>
<_Heading level={3} id={"notes-app-user-pool-and-user-pool-client"} nextElement={{
      "type": "jsx"
    }}>Notes App User Pool and User Pool Client</_Heading>
<Alert type="info" mdxType="Alert">
<p>{`The `}<inlineCode parentName="p">{`extensions/notesApp`}</inlineCode>{` code covered in this section can be found in our `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-examples/tree/master/headless-cms/notes-app/5.40.0/webiny"
        }}>{`GitHub examples repository`}</a>{`.`}</p>
</Alert>
<p>{`The first step is to set up an AWS Cognito User Pool and User Pool Client specifically for Notes App users. All users who sign up through our Notes App (React App) will be created in this User Pool.`}</p>
<ol>
<li parentName="ol">{`To get started, we first scaffold a new workspace extension in the `}<inlineCode parentName="li">{`/extensions/notesApp`}</inlineCode>{` folder, via the following command:`}</li>
</ol>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny scaffold workspace \\
--name notesApp \\
--dependencies @webiny/api-headless-cms`}
</Editor>
<p>{`This command will create `}<inlineCode parentName="p">{`notesApp`}</inlineCode>{` extensions in `}<inlineCode parentName="p">{`<webiny-project-home>/extensions/`}</inlineCode>{` location.`}</p>
<ol {...{
      "start": 2
    }}>
<li parentName="ol">{`In the `}<inlineCode parentName="li">{`extensions/notesApp/src`}</inlineCode>{` directory, create the `}<inlineCode parentName="li">{`configureNotesAppCognitoUserPool.ts`}</inlineCode>{` and `}<inlineCode parentName="li">{`applyNotesAppEnvVariables.ts`}</inlineCode>{` files.`}</li>
</ol>
<Editor title="configureNotesAppCognitoUserPool.ts" lang="tsx" mdxType="Editor">
{`import * as aws from "@pulumi/aws";
import * as pulumi from "@pulumi/pulumi";
import { CorePulumiApp } from "@webiny/pulumi-aws";

// We mark resources as protected if deploying via CI/CD and into one of the specified environments.
const protectResource = (app: CorePulumiApp) => {
    return "CI" in process.env && ["prod", "staging"].includes(app.params.run["env"]);
};

export type CustomCoreOutput = {
    notesAppUserPoolId: string;
    notesAppUserPoolRegion: string;
    notesAppUserPoolClient: string;
    notesAppUserPoolArn: string;
};

export const configureNotesAppCognitoUserPool = (app: CorePulumiApp) => {

    const userPool = app.addResource(aws.cognito.UserPool, {
        name: "notes-app-users",
        config: {
            schemas: [
                {
                    attributeDataType: "String",
                    name: "email",
                    required: false,
                    developerOnlyAttribute: false,
                    mutable: true,
                    stringAttributeConstraints: {
                        maxLength: "2048",
                        minLength: "0"
                    }
                },
                {
                    attributeDataType: "String",
                    name: "family_name",
                    required: false,
                    developerOnlyAttribute: false,
                    mutable: true,
                    stringAttributeConstraints: {
                        maxLength: "2048",
                        minLength: "0"
                    }
                },
                {
                    attributeDataType: "String",
                    name: "given_name",
                    required: false,
                    developerOnlyAttribute: false,
                    mutable: true,
                    stringAttributeConstraints: {
                        maxLength: "2048",
                        minLength: "0"
                    }
                },
                {
                    attributeDataType: "String",
                    name: "wby_tenant",
                    required: false,
                    developerOnlyAttribute: false,
                    mutable: true,
                    stringAttributeConstraints: {
                        maxLength: "30",
                        minLength: "0"
                    }
                },
                {
                    attributeDataType: "String",
                    name: "wby_notes_app_group",
                    required: false,
                    developerOnlyAttribute: false,
                    mutable: true,
                    stringAttributeConstraints: {
                        maxLength: "50",
                        minLength: "0"
                    }
                }
            ],
            passwordPolicy: {
                minimumLength: 8,
                requireLowercase: false,
                requireNumbers: false,
                requireSymbols: false,
                requireUppercase: false,
                temporaryPasswordValidityDays: 7
            },
            autoVerifiedAttributes: ["email"],
            aliasAttributes: ["preferred_username"],
        },
        opts: { protect: protectResource(app) }
    });

    const userPoolClient = app.addResource(aws.cognito.UserPoolClient, {
        name: "notes-app",
        config: {
            userPoolId: userPool.output.id,
            explicitAuthFlows: [
                "ALLOW_USER_SRP_AUTH",
                "ALLOW_CUSTOM_AUTH",
                "ALLOW_REFRESH_TOKEN_AUTH"
            ],

            supportedIdentityProviders: ["COGNITO"]
        }
    });

    app.addOutputs({
        notesAppUserPoolId: userPool.output.id,
        notesAppUserPoolRegion: String(process.env.AWS_REGION),
        notesAppUserPoolArn: userPool.output.arn,
        notesAppUserPoolClient: userPoolClient.output.id
    });
};`}
</Editor>
<Editor title="applyNotesAppEnvVariables.ts" lang="tsx" mdxType="Editor">
{`
import { ApiPulumiApp } from "@webiny/pulumi-aws";
import { getStackOutput } from "@webiny/cli-plugin-deploy-pulumi/utils";

export const applyNotesAppEnvVariables = (app: ApiPulumiApp) => {
    const core = getStackOutput({
        folder: "apps/core",
        env: app.params.run["env"]
    });

    if (!core) {
        throw new Error("Core application is not deployed.");
    }

    app.setCommonLambdaEnvVariables({
        NOTES_APP_COGNITO_REGION: core["notesAppUserPoolRegion"],
        NOTES_APP_COGNITO_USER_POOL_ID: core["notesAppUserPoolId"]
    });

    // Add permission to GraphQL Lambda policy to interact with the Notes App User Pool
    app.resources.graphql.policy.config.policy(policy => {
        if (typeof policy === "string") {
            return policy;
        }

        return {
            ...policy,
            Statement: [
                ...policy.Statement,
                {
                    Sid: "PermissionForNotesAppCognitoUserPool",
                    Effect: "Allow",
                    Action: "cognito-idp:*",
                    Resource: \`\${core["notesAppUserPoolArn"]}\`
                }
            ]
        };
    });
};
`}
</Editor>
<ol {...{
      "start": 3
    }}>
<li parentName="ol">{`Now export the `}<inlineCode parentName="li">{`configureNotesAppCognitoUserPool`}</inlineCode>{` and `}<inlineCode parentName="li">{`applyNotesAppEnvVariables`}</inlineCode>{` modules.
Add the following content in the `}<inlineCode parentName="li">{`extensions/notesApp/src/index.ts`}</inlineCode>{` file.`}</li>
</ol>
<Editor title="index.ts" lang="tsx" mdxType="Editor">
{`export * from "./configureNotesAppCognitoUserPool";
export * from "./applyNotesAppEnvVariables";`}
</Editor>
<ol {...{
      "start": 4
    }}>
<li parentName="ol">{`In the core app configuration, add the Cognito User Pool for Notes App users by updating the `}<inlineCode parentName="li">{`apps/core/webiny.application.ts`}</inlineCode>{` file with the following changes.`}</li>
</ol>
<Editor title="apps/core/webiny.application.ts" lang="diff-tsx" mdxType="Editor">
{`import { createCoreApp } from "@webiny/serverless-cms-aws";
+ import { configureNotesAppCognitoUserPool } from "notes-app"

export default createCoreApp({
-    pulumiResourceNamePrefix: "wby-"
+    pulumiResourceNamePrefix: "wby-",
+    pulumi(app) {
+        configureNotesAppCognitoUserPool(app);
+    }
});
`}
</Editor>
<ol {...{
      "start": 7
    }}>
<li parentName="ol">{`Add environment variables related to the Notes App’s Cognito User Pool to the Webiny API application by updating the `}<inlineCode parentName="li">{`apps/api/webiny.application.ts`}</inlineCode>{` file with the following changes.`}</li>
</ol>
<Editor title="apps/api/webiny.application.ts" lang="diff-tsx" mdxType="Editor">
{`import { createApiApp } from "@webiny/serverless-cms-aws";
+ import { applyNotesAppEnvVariables } from "notes-app";

export default createApiApp({
-    pulumiResourceNamePrefix: "wby-",
+    pulumiResourceNamePrefix: "wby-",
+    pulumi(app) {
+        applyNotesAppEnvVariables(app);
+    }
});`}
</Editor>
<_Heading level={3} id={"add-cognito-authenticator-for-notes-app-users"} nextElement={{
      "type": "paragraph"
    }}>Add Cognito Authenticator for Notes App Users</_Heading>
<p>{`Add the Cognito Authenticator for Notes App users. This authenticator will be responsible for authenticating and authorizing the Notes App users. Add the following Cognito Authenticator to the `}<inlineCode parentName="p">{`apps/api/graphql/src/security.ts`}</inlineCode>{` file.`}</p>
<Editor title="apps/api/graphql/src/security.ts" lang="diff-tsx" mdxType="Editor">
{`    cognitoAuthentication({
        region: String(process.env.COGNITO_REGION),
        userPoolId: String(process.env.COGNITO_USER_POOL_ID),
        identityType: "admin"
    }),
+    cognitoAuthentication({
+        region: String(process.env.NOTES_APP_COGNITO_REGION),
+        userPoolId: String(process.env.NOTES_APP_COGNITO_USER_POOL_ID),
+        identityType: "notes-app-users",
+        getIdentity({ token, identityType}) {
+            return {
+                id: token.sub,
+               type: identityType,
+               displayName: \`\${token.given_name} \${token.family_name}\`,
+               email: token.email,
+               firstName: token.given_name,
+               lastName: token.family_name,
+               group: token["custom:wby_notes_app_group"]
+           }
+       }
+   }),
`}
</Editor>
<_Heading level={3} id={"add-types-for-environment-variables"} nextElement={{
      "type": "paragraph"
    }}>Add Types for Environment Variables</_Heading>
<p>{`Since we have used `}<inlineCode parentName="p">{`process.env.NOTES_APP_COGNITO_REGION`}</inlineCode>{` and `}<inlineCode parentName="p">{`process.env.NOTES_APP_COGNITO_USER_POOL_ID`}</inlineCode>{` in
the `}<inlineCode parentName="p">{`security.ts`}</inlineCode>{` file above, let’s add these types to the `}<inlineCode parentName="p">{`types/env/index.d.ts`}</inlineCode>{` file.
This file is located at `}<inlineCode parentName="p">{`<project-root>/types/env/index.d.ts`}</inlineCode>{`.`}</p>
<Editor title="types/env/index.d.ts" lang="diff-tsx" mdxType="Editor">
{`        COGNITO_USER_POOL_ID?: string;
        COGNITO_REGION?: string;
+       NOTES_APP_COGNITO_REGION?: string;
+       NOTES_APP_COGNITO_USER_POOL_ID?: string;`}
</Editor>
<_Heading level={3} id={"deploy-the-core-and-api-applications"} nextElement={{
      "type": "paragraph"
    }}>Deploy the Core and API Applications</_Heading>
<p>{`The next step is to deploy the Core and API applications. This will create the necessary infrastructure and enable the Cognito authenticator for Notes App users that we created earlier.`}</p>
<p>{`Please run the following commands to deploy the Core and API applications in the development environment. If you are deploying to another environment, replace “dev” with the appropriate environment in the command.`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny deploy apps/core --env dev
yarn webiny deploy apps/api --env dev`}
</Editor>
<Alert type="info" mdxType="Alert">
<p>{`After deployment, you will receive the following values as output:`}</p>
<ul>
<li parentName="ul"><inlineCode parentName="li">{`notesAppUserPoolId`}</inlineCode></li>
<li parentName="ul"><inlineCode parentName="li">{`notesAppUserPoolRegion`}</inlineCode></li>
<li parentName="ul"><inlineCode parentName="li">{`notesAppUserPoolArn`}</inlineCode></li>
<li parentName="ul"><inlineCode parentName="li">{`notesAppUserPoolClient`}</inlineCode></li>
</ul>
<p>{`Please save these values, as they will be needed when creating the React App.`}</p>
<p>{`If you lost these values, don’t worry. You can also retrieve them from the `}<inlineCode parentName="p">{`your-webiny-project-root/.pulumi/apps/core/.pulumi/stacks/core/dev.json`}</inlineCode>{` file within your Webiny project.`}</p>
<p>{`Since we’ve deployed the `}<inlineCode parentName="p">{`dev`}</inlineCode>{` environment for the demo, we’re seeing the `}<inlineCode parentName="p">{`dev.json`}</inlineCode>{` file. If you’ve deployed your project in a different environment, you’ll find a file named after your environment, such as `}<inlineCode parentName="p">{`your-env-name.json`}</inlineCode>{` stack file .`}</p>
</Alert>
<Alert type="success" mdxType="Alert">
<p>{`With the `}<_Link href="/docs/5.x/core-development-concepts/basics/watch-command"><inlineCode parentName="p">{`webiny watch`}</inlineCode></_Link>{` command running, any changes to the application code will be automatically rebuilt and redeployed to the cloud.`}</p>
</Alert>
<_Heading level={3} id={"create-role-for-notes-app-users"} nextElement={{
      "type": "paragraph"
    }}>Create Role for Notes App Users</_Heading>
<p>{`Now, we will create a role for Notes App users and define the permissions for this role. In our scenario, users can read, write, and delete only the content entries they have created.`}</p>
<p>{`Navigate to the Roles section under Access Management.`}</p>
<Image src={_Image1} alt={"Access Management / Roles"} mdxType="Image" />
<p><strong parentName="p">{`Step 1:`}</strong>{` Enter the Role Name, Slug, and Description. Set the permissions for either All locales or Specific locales based on your use case.`}</p>
<p><strong parentName="p">{`Please note that the `}<inlineCode parentName="strong">{`slug`}</inlineCode>{` is important and should match the one we defined in the `}<_Link href="/docs/5.x/headless-cms/notes-app/webiny-infrastructure-setup#add-cognito-authenticator-for-notes-app-users">{`Cognito Authenticator for Notes App Users`}</_Link>{`. For our use case, the `}<inlineCode parentName="strong">{`slug`}</inlineCode>{` should be `}<inlineCode parentName="strong">{`notes-app-users`}</inlineCode>{`.`}</strong></p>
<p>{`Additionally, under the Permissions/Content section, select ”`}<strong parentName="p">{`All locales`}</strong>{`” (as shown in the image below). For this demo, we’ve chosen “All locales.” However, for your app, you can opt to select specific locales if needed.`}</p>
<Image src={_Image2} alt={"Role Details"} mdxType="Image" />
<p><strong parentName="p">{`Step 3:`}</strong>{` Set the custom access level for the Headless CMS. Grant Read access to the content model group and content model. For Content Entries, set the scope to `}<inlineCode parentName="p">{`Only entries created by the user`}</inlineCode>{`. Refer to the screenshot below for details.`}</p>
<Image src={_Image3} alt={"Headless CMS permissions"} mdxType="Image" />
<_Heading level={3} id={"create-note-model-to-store-user-notes"} nextElement={{
      "type": "paragraph"
    }}>Create Note Model to Store User Notes</_Heading>
<p>{`As the final step on the Webiny side, we’ll create a Note Model to store user notes. If you’re new to creating models in Webiny, refer to the `}<_Link href="/docs/5.x/user-guides/headless-cms/essentials/create-content-model">{`Create Content Model`}</_Link>{` user guide.`}</p>
<p>{`We’ll set up a Note content model with the following fields:`}</p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": "left"
          }}>{`Field`}</th>
<th parentName="tr" {...{
            "align": "left"
          }}>{`Field Type`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}>{`Title`}</td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`Text`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}>{`Description`}</td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`Long text`}</td>
</tr>
</tbody>
</table>
<p><strong parentName="p">{`Step 1`}</strong>{`: Create the Note Model.`}</p>
<Image src={_Image4} alt={"Create Note Model"} mdxType="Image" />
<p><strong parentName="p">{`Step 2`}</strong>{`: Add Title and Description Fields to the Note Model.`}</p>
<Image src={_Image5} alt={"Add Title and Description Field to Note Model "} mdxType="Image" />
<p>{`Great, we’re all set on the Webiny side. Now, let’s move on to building the `}<_Link href="/docs/5.x/headless-cms/notes-app/react-notes-app">{`Notes App in React`}</_Link>{`.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;