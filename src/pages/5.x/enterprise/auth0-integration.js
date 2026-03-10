/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image2 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/assets/auth0-integration/auth0-client-id.png'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/assets/auth0-integration/auth0-login.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Setup Auth0",
  "description": "Learn how to configure Auth0 with a multi-tenant Webiny project",
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
  "title": "1) Prepare the Project",
  "slug": "1-prepare-the-project",
  "children": []
}, {
  "title": "2) Add New Dependencies",
  "slug": "2-add-new-dependencies",
  "children": []
}, {
  "title": "3) Configure Auth0 in the GraphQL API",
  "slug": "3-configure-auth0-in-the-graph-ql-api",
  "children": []
}, {
  "title": "4) Configure Admin App",
  "slug": "4-configure-admin-app",
  "children": []
}, {
  "title": "5) Configuring App Client ID for New Tenants",
  "slug": "5-configuring-app-client-id-for-new-tenants",
  "children": []
}, {
  "title": "6) Accessing Admin App of a Particular Tenant",
  "slug": "6-accessing-admin-app-of-a-particular-tenant",
  "children": []
}, {
  "title": "7) Customizing \"Not Authorized\" Component (Optional)",
  "slug": "7-customizing-not-authorized-component-optional",
  "children": []
}, {
  "title": "8) Tenant Access Control (Optional)",
  "slug": "8-tenant-access-control-optional",
  "children": []
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const CanIUseThis = makeShortcode("CanIUseThis");
const WhatYouWillLearn = makeShortcode("WhatYouWillLearn");
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





<CanIUseThis enterprise={true} since={"5.x"} mdxType="CanIUseThis" />
<WhatYouWillLearn mdxType="WhatYouWillLearn">
<ul>
<li parentName="ul">{`how to integrate Auth0 with a multi-tenant project`}</li>
</ul>
</WhatYouWillLearn>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Auth0 integration replaces the default Cognito setup, and allows companies to manage users and their access to Webiny instances from within Auth0. Since Webiny’s system of permissions contains rich permission objects, you can’t define these in Auth0. Instead, assignment to security groups is happening using JSON Web Token (JWT) claims, which help you map every identity to a specific security group within Webiny, on a particular tenant.`}</p>
<Image src={_Image1} alt={"Auth0 Sign In Widget"} mdxType="Image" />
<_Heading level={2} id={"1-prepare-the-project"} nextElement={{
      "type": "paragraph"
    }}>1) Prepare the Project</_Heading>
<p>{`Your project needs to be at version `}<inlineCode parentName="p">{`5.x`}</inlineCode>{`, or greater, to use this feature.
Please follow the `}<_Link href="/docs/release-notes/upgrade-webiny">{`upgrade guide`}</_Link>{` to upgrade your project to the appropriate version.`}</p>
<p>{`Alternatively, you can create a new `}<inlineCode parentName="p">{`>=5.x`}</inlineCode>{` project, by running:`}</p>
<Editor title="" lang="shell" mdxType="Editor">
{`npx create-webiny-project my-project`}
</Editor>
<Alert type="info" title="MULTI-TENANCY" mdxType="Alert">
<p>{`If you need to use multi-tenancy, follow `}<_Link href="/docs/5.x/enterprise/multi-tenancy">{`this guide`}</_Link>{` before continuing with the Auth0 setup.`}</p>
</Alert>
<Alert type="warning" title="IMPORTANT" mdxType="Alert">
<p>{`If creating a new project, before following further instructions, make sure you complete the initial setup wizard with Cognito. This is a required step to successfully replace Cognito with Auth0.`}</p>
</Alert>
<_Heading level={2} id={"2-add-new-dependencies"} nextElement={{
      "type": "paragraph"
    }}>2) Add New Dependencies</_Heading>
<p>{`We need to add several new packages to the project.`}</p>
<p>{`Add Auth0 module dependency to the GraphQL API dependencies:`}</p>
<Editor title="" lang="shell" mdxType="Editor">
{`yarn workspace api-graphql add @webiny/api-security-auth0`}
</Editor>
<p>{`Add Auth0 module dependency to the Admin app dependencies:`}</p>
<Editor title="" lang="shell" mdxType="Editor">
{`yarn workspace admin add @webiny/app-admin-auth0`}
</Editor>
<_Heading level={2} id={"3-configure-auth0-in-the-graph-ql-api"} nextElement={{
      "type": "paragraph"
    }}>3) Configure Auth0 in the GraphQL API</_Heading>
<p>{`We need to update security configuration in the `}<inlineCode parentName="p">{`graphql`}</inlineCode>{` Lambda function.`}</p>
<p>{`The difference between your original file and the one below, is that we removed all Cognito plugins, and added Auth0 plugin instead, with some other tweaks to the security configuration. The most important changes are highlighted and commented for your convenience.`}</p>
<Editor title="apps/api/graphql/src/security.ts" lang="diff-ts" mdxType="Editor">
{`import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { createTenancyContext, createTenancyGraphQL } from "@webiny/api-tenancy";
import { createStorageOperations as tenancyStorageOperations } from "@webiny/api-tenancy-so-ddb";
import { createSecurityContext, createSecurityGraphQL } from "@webiny/api-security";
import { createStorageOperations as securityStorageOperations } from "@webiny/api-security-so-ddb";
import { authenticateUsingHttpHeader } from "@webiny/api-security/plugins/authenticateUsingHttpHeader";
import apiKeyAuthentication from "@webiny/api-security/plugins/apiKeyAuthentication";
import apiKeyAuthorization from "@webiny/api-security/plugins/apiKeyAuthorization";
import anonymousAuthorization from "@webiny/api-security/plugins/anonymousAuthorization";
+ import { createAuth0 } from "@webiny/api-security-auth0";

export default ({ documentClient }: { documentClient: DocumentClient }) => [
    /**
     * Create Tenancy app in the \`context\`.
     */
    createTenancyContext({
        storageOperations: tenancyStorageOperations({ documentClient })
    }),

    /**
     * Expose tenancy GraphQL schema.
     */
    createTenancyGraphQL(),

    /**
     * Create Security app in the \`context\`.
     */
    createSecurityContext({
        storageOperations: securityStorageOperations({ documentClient })
    }),

    /**
     * Expose security GraphQL schema.
     */
    createSecurityGraphQL({
+       /**
+        * For Auth0, we must provide custom logic to determine the "default" tenant for current identity.
+        */
+       async getDefaultTenant(context) {
+           return context.tenancy.getRootTenant();
+       }
    }),

    /**
     * Perform authentication using the common "Authorization" HTTP header.
     * This will fetch the value of the header, and execute the authentication process.
     */
    authenticateUsingHttpHeader(),

+   /**
+    * Configure Auth0 authentication and authorization.
+    */
+   createAuth0({
+       /**
+        * \`domain\` is required for token verification.
+        */
+       domain: String(process.env.AUTH0_DOMAIN),
+       /**
+        * Construct the identity object and map token claims to arbitrary identity properties.
+        */
+       getIdentity({ token }) {
+           return {
+               id: token["sub"],
+               type: "admin",
+               displayName: token["name"],
+
+               // Assign a security group slug, to load user's permissions.
+               groups: [token["webiny_group"]]
+
+               // With the Teams feature enabled, you can also assign teams to the user.
+               // Learn more: https://www.webiny.com/docs/5.x/enterprise/aacl/teams
+               // teams: [token["webiny_team"]]
+
+               // Assign any custom values you might need.
+           };
+       }
+   }),

    /**
     * API Key authenticator.
     * API Keys are a standalone entity, and are not connected to users in any way.
     * They identify a project, a 3rd party client, not a particular user.
     * They are used for programmatic API access, CMS data import/export, etc.
     */
    apiKeyAuthentication({ identityType: "api-key" }),

    /**
     * Authorization plugin to fetch permissions for a verified API key.
     * The "identityType" must match the authentication plugin used to load the identity.
     */
    apiKeyAuthorization({ identityType: "api-key" }),

    /**
     * Authorization plugin to load permissions for anonymous requests.
     * This allows you to control which API resources can be accessed publicly.
     * The authorization is performed by loading permissions from the "anonymous" user group.
     */
    anonymousAuthorization()
];`}
</Editor>
<p>{`The last thing to do is to define Auth0 environment variables.`}</p>
<p>{`In your project directory, open the `}<inlineCode parentName="p">{`.env`}</inlineCode>{` file, and define the following variables. To find the values of these variables, in your Auth0 dashboard, navigate to `}<strong parentName="p">{`Applications -> Applications`}</strong>{`, and open the desired application. The values you need will be located under the `}<strong parentName="p">{`Basic Information`}</strong>{` section.`}</p>
<Editor title="" lang="yml" mdxType="Editor">
{`# Auth0 variables for the API.
AUTH0_DOMAIN=https://dev-12345678.us.auth0.com
AUTH0_CLIENT_ID=123456781234567812345678

# Auth0 variables for React apps (webpack will pick this up automatically, due to the REACT_APP_ prefix naming convention).
REACT_APP_AUTH0_DOMAIN=https://dev-12345678.us.auth0.com
REACT_APP_AUTH0_CLIENT_ID=123456781234567812345678`}
</Editor>
<p>{`This will ensure that, when Pulumi starts the deploy process, these environment variables are present in `}<inlineCode parentName="p">{`process.env`}</inlineCode>{`, and are assigned to your Lambda functions.`}</p>
<_Heading level={2} id={"4-configure-admin-app"} nextElement={{
      "type": "paragraph"
    }}>4) Configure Admin App</_Heading>
<p>{`Open `}<inlineCode parentName="p">{`apps/admin/src/App.tsx`}</inlineCode>{` and replace the Cognito plugin with Auth0 plugin:`}</p>
<Editor title="apps/admin/src/App.tsx" lang="diff-tsx" mdxType="Editor">
{`import React from "react";
import { Admin } from "@webiny/app-serverless-cms";
+ import { Auth0 } from "@webiny/app-admin-auth0";
import "./App.scss";

export const App = () => {
  return (
    <Admin>
+     <Auth0
+         auth0={{
+             domain: String(process.env.REACT_APP_AUTH0_DOMAIN),
+             clientId: String(process.env.REACT_APP_AUTH0_CLIENT_ID)
+         }}
+         rootAppClientId={String(process.env.REACT_APP_AUTH0_CLIENT_ID)}
+     />
    </Admin>
  );
};`}
</Editor>
<p>{`With this, you’re ready to deploy the project. To deploy the whole project, run the following:`}</p>
<Editor title="" lang="shell" mdxType="Editor">
{`yarn webiny deploy --env=dev`}
</Editor>
<p>{`Or deploy just the `}<inlineCode parentName="p">{`api`}</inlineCode>{` and `}<inlineCode parentName="p">{`admin`}</inlineCode>{` by running:`}</p>
<Editor title="" lang="shell" mdxType="Editor">
{`yarn webiny deploy api --env=dev && yarn webiny deploy admin --env=dev`}
</Editor>
<_Heading level={2} id={"5-configuring-app-client-id-for-new-tenants"} nextElement={{
      "type": "paragraph"
    }}>5) Configuring App Client ID for New Tenants</_Heading>
<p>{`Once your project is deployed, open your Admin app. If everything went well, you should be presented with an Auth0 login screen. The Auth0 user you’re using to login must have access to the `}<inlineCode parentName="p">{`root`}</inlineCode>{` tenant app client, and have the appropriate claims assigned to the user’s JWT so the user can be mapped to the correct security group, as described in the `}<_Link href="/docs/5.x/enterprise/auth0-integration#3-configure-auth0-in-the-graphql-api">{`Configure Auth0 in the GraphQL API`}</_Link>{` section.`}</p>
<Alert type="success" title="Recommendation" mdxType="Alert">
<p>{`We recommend that your main root tenant admin user has a `}<inlineCode parentName="p">{`full-access`}</inlineCode>{` group assignment. Think of this user as a `}<strong parentName="p">{`super admin`}</strong>{` user who can run system setup, create new tenants, and so on. A `}<inlineCode parentName="p">{`full-access`}</inlineCode>{` security group is always present in the system. So, you don’t need to create it manually.`}</p>
</Alert>
<p>{`Once you’ve logged in, navigate to `}<strong parentName="p">{`Tenant Manager -> Tenants`}</strong>{`. In the tenant creation form, there is a dedicated input for Auth0 App Client ID:`}</p>
<Image src={_Image2} alt={"Assign App Client ID to Tenant"} mdxType="Image" />
<p>{`The value entered here is what the Admin app will be fetching via the API during app bootstrap (on every browser reload). Since multiple tenants can use the same app client ID, for development purposes, you can have 1 Auth0 app shared between all the developers in the team, across all tenants in their development environments.`}</p>
<_Heading level={2} id={"6-accessing-admin-app-of-a-particular-tenant"} nextElement={{
      "type": "paragraph"
    }}>6) Accessing Admin App of a Particular Tenant</_Heading>
<p>{`To point the browser to a specific tenant you want to access, you simply need to use the `}<strong parentName="p">{`tenantId`}</strong>{` query string parameter:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`http://localhost:3001/?tenantId=root
http://localhost:3001/?tenantId=61e6db7813ab8e0009e252d1
...`}
</Editor>
<_Heading level={2} id={"7-customizing-not-authorized-component-optional"} nextElement={{
      "type": "paragraph"
    }}>7) Customizing &quot;Not Authorized&quot; Component (Optional)</_Heading>
<p>{`When a uses logs into an Admin app, and there are no permissions assigned to him, the app will render a `}<strong parentName="p">{`NotAuthorizedError`}</strong>{` component. You can customize this component by creating a component plugin (a decorator) around the existing component, and replace the output.`}</p>
<p>{`The `}<inlineCode parentName="p">{`@webiny/app-admin-auth0`}</inlineCode>{` exports all the components that support decoration via the `}<inlineCode parentName="p">{`Components`}</inlineCode>{` namespace.`}</p>
<Editor title="apps/admin/src/App.tsx" lang="tsx" mdxType="Editor">
{`import React from "react";
import { Admin, createComponentPlugin, useSecurity } from "@webiny/app-serverless-cms";
import { Auth0, Components } from "@webiny/app-admin-auth0";
import "./App.scss";

/**
 * Create a decorator plugin.
 */
const CustomError = createComponentPlugin(Components.NotAuthorizedError, () => {
  return function MyError() {
    const { identity } = useSecurity();
    return (
      <div>
        <h2>Sorry {identity?.displayName}, you can&apos;t access this tenant.</h2>
      </div>
    );
  };
});

export const App = () => {
  return (
    <Admin>
      <Auth0
        auth0={{
          domain: String(process.env.REACT_APP_AUTH0_DOMAIN),
          clientId: String(process.env.REACT_APP_AUTH0_CLIENT_ID)
        }}
        rootAppClientId={String(process.env.REACT_APP_AUTH0_CLIENT_ID)}
      />
      {/* Mount the plugin component to register the decorator. */}
      <CustomError />
    </Admin>
  );
};`}
</Editor>
<p>{`Next time the system renders the `}<strong parentName="p">{`NotAuthorizedError`}</strong>{` component, your decorator will intercept the output, and render your custom UI. `}</p>
<_Heading level={2} id={"8-tenant-access-control-optional"} nextElement={{
      "type": "paragraph"
    }}>8) Tenant Access Control (Optional)</_Heading>
<p>{`If you want to restrict which identity can access individual tenants, you can do it in an optional `}<inlineCode parentName="p">{`canAccessTenant`}</inlineCode>{` function. `}</p>
<p>{`Let’s imagine you want to restrict tenant access using the Auth0 client ID (it is stored in the idToken, in the `}<inlineCode parentName="p">{`aud`}</inlineCode>{` claim). First you would assign the client ID value to your identity, and then, in the `}<inlineCode parentName="p">{`canAccessTenant`}</inlineCode>{`, you would perform your checks:`}</p>
<Editor title="apps/api/graphql/src/security.ts" lang="diff-ts" mdxType="Editor">
{`createAuth0({
    domain: String(process.env.AUTH0_DOMAIN),
    getIdentity({ token }) {
        return {
            id: token["sub"],
            type: "admin",
            displayName: token["name"],
            group: token["webiny_group"],
+           clientId: token["aud"]
        };
    },
+   canAccessTenant(context) {
+       const tenant = context.tenancy.getCurrentTenant();
+       const identity = context.security.getIdentity();
+
+       // For \`root\` tenant, you need to use environment variables, to always have a client ID value.
+       if (tenant.id === "root") {
+           return identity.clientId === process.env.AUTH0_CLIENT_ID;
+       }
+
+       // For all other tenants, read the value from tenant's settings.
+       return identity.clientId === tenant.settings.appClientId;
+   }
})`}
</Editor>
<p>{`The logic of these checks can be anything you want. The `}<inlineCode parentName="p">{`context`}</inlineCode>{` object gives you programmatic access to all Webiny apps, and the `}<inlineCode parentName="p">{`canAccessTenant`}</inlineCode>{` can also be asynchronous, so you’re free to do whatever you need here.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;