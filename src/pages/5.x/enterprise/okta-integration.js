/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image2 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/assets/okta-integration/app-client-id-input.png'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/assets/okta-integration/okta-login.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Setup Okta",
  "description": "Learn how to configure Okta with a multi-tenant Webiny project",
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
  "title": "3) Configure Okta in the GraphQL API",
  "slug": "3-configure-okta-in-the-graph-ql-api",
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
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const CanIUseThis = makeShortcode("CanIUseThis");
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





<CanIUseThis enterprise since={"5.22.0"} mdxType="CanIUseThis" />
<Alert type="success" title="What you'll learn" mdxType="Alert">
<ul>
<li parentName="ul">{`how to integrate Okta with a multi-tenant project`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Okta integration replaces the default Cognito setup, and allows companies to manage users and their access to Webiny instances from within Okta. Since Webiny’s system of permissions contains rich permission objects, you can’t define these in Okta. Instead, assignment to security groups is happening using JSON Web Token (JWT) claims, which help you map every identity to a specific security group within Webiny, on a particular tenant.`}</p>
<Image src={_Image1} alt={"Okta SignIn Widget"} mdxType="Image" />
<_Heading level={2} id={"1-prepare-the-project"} nextElement={{
      "type": "paragraph"
    }}>1) Prepare the Project</_Heading>
<p>{`Your project needs to be at version `}<inlineCode parentName="p">{`5.22.0`}</inlineCode>{` to use this feature.
Please follow the `}<_Link href="/docs/release-notes/upgrade-webiny">{`upgrade guide`}</_Link>{` to upgrade your project to the appropriate version.`}</p>
<p>{`Alternatively, you can create a new `}<inlineCode parentName="p">{`>=5.22.0`}</inlineCode>{` project, by running:`}</p>
<Editor title="" lang="shell" mdxType="Editor">
{`npx create-webiny-project my-project`}
</Editor>
<Alert type="info" title="IMPORTANT" mdxType="Alert">
<p>{`If creating a new project, you’ll have to first configure multi-tenancy. Follow `}<_Link href="/docs/5.x/enterprise/multi-tenancy">{`this guide`}</_Link>{`, if that’s the case.`}</p>
</Alert>
<_Heading level={2} id={"2-add-new-dependencies"} nextElement={{
      "type": "paragraph"
    }}>2) Add New Dependencies</_Heading>
<p>{`We need to add several new packages to the project.`}</p>
<p>{`Add Okta module dependency to the GraphQL API dependencies:`}</p>
<Editor title="" lang="shell" mdxType="Editor">
{`yarn workspace api-graphql add @webiny/api-security-okta`}
</Editor>
<p>{`Add Okta module dependency to the Admin app dependencies:`}</p>
<Editor title="" lang="shell" mdxType="Editor">
{`yarn workspace admin add @webiny/app-admin-okta`}
</Editor>
<_Heading level={2} id={"3-configure-okta-in-the-graph-ql-api"} nextElement={{
      "type": "paragraph"
    }}>3) Configure Okta in the GraphQL API</_Heading>
<p>{`We need to update security configuration in the `}<inlineCode parentName="p">{`graphql`}</inlineCode>{` Lambda function.`}</p>
<p>{`The difference between your original file and the one below, is that we removed all Cognito plugins, and added Okta plugin instead, with some other tweaks to the security configuration. The most important changes are highlighted and commented for your convenience.`}</p>
<Alert type="info" title="IMPORTANT" mdxType="Alert">
  You need to update one file for the `graphql` Lambda function. Please grab the code from below.
</Alert>
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
+ import { createOkta } from "@webiny/api-security-okta";

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
+        * For Okta, we must provide custom logic to determine the "default" tenant for current identity.
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
+    * Configure Okta authentication and authorization.
+    */
+   createOkta({
+       /**
+        * \`issuer\` is required for token verification.
+        */
+       issuer: process.env.OKTA_ISSUER as string,
+       /**
+        * Construct the identity object and optinally map token claims to arbitrary identity properties.
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
<p>{`The last thing to do is to define the `}<inlineCode parentName="p">{`OKTA_ISSUER`}</inlineCode>{` environment variable.`}</p>
<p>{`In your project directory, open the `}<inlineCode parentName="p">{`.env`}</inlineCode>{` file, and define the `}<inlineCode parentName="p">{`OKTA_ISSUER`}</inlineCode>{` variable, using your authorization server URI. You can find this URI in the Okta dashboard, by navigating to `}<strong parentName="p">{`Security -> API`}</strong>{`.`}</p>
<Editor title="" lang="yml" mdxType="Editor">
{`OKTA_ISSUER=https://dev-123456.oktapreview.com/oauth2/default`}
</Editor>
<p>{`This will ensure that, when Pulumi starts the deploy process, this environment variable is present in `}<inlineCode parentName="p">{`process.env`}</inlineCode>{`, and it will be assigned to your Lambda functions.`}</p>
<_Heading level={2} id={"4-configure-admin-app"} nextElement={{
      "type": "paragraph"
    }}>4) Configure Admin App</_Heading>
<p>{`Open `}<inlineCode parentName="p">{`apps/admin/src/App.tsx`}</inlineCode>{` and replace the Cognito plugin with Okta plugin:`}</p>
<Editor title="apps/admin/src/App.tsx" lang="diff-tsx" mdxType="Editor">
{`import React from "react";
import { Admin } from "@webiny/app-serverless-cms";
+ import { Okta } from "@webiny/app-admin-okta";
import "./App.scss";

+ import { oktaFactory, rootAppClientId } from "./okta";

export const App = () => {
  return (
    <Admin>
+     <Okta factory={oktaFactory} rootAppClientId={rootAppClientId} />
    </Admin>
  );
};`}
</Editor>
<p>{`Next, we need to add this new `}<inlineCode parentName="p">{`./okta`}</inlineCode>{` file which contains the factory for `}<a parentName="p" {...{
        "href": "https://developer.okta.com/code/react/okta_react_sign-in_widget/"
      }}>{`Okta SignIn Widget`}</a>{` and `}<a parentName="p" {...{
        "href": "https://developer.okta.com/code/react/okta_react/"
      }}>{`Okta Auth JS`}</a>{`. This file allows you to configure the entire Okta SDK however you like, and also apply style changes if you need them.`}</p>
<p>{`Copy the following code, and place it in `}<inlineCode parentName="p">{`apps/admin/src/okta.ts`}</inlineCode>{`:`}</p>
<Editor title="apps/admin/src/okta.ts" lang="tsx" mdxType="Editor">
{`import { OktaFactory } from "@webiny/app-admin-okta";
// @ts-ignore
import OktaSignIn from "@okta/okta-signin-widget";
import { OktaAuth } from "@okta/okta-auth-js";
import "@okta/okta-signin-widget/dist/css/okta-sign-in.min.css";

const redirectUri = window.location.origin + "/";

// These scopes are required to populate all the necessary user data on the API side.
const scopes = ["openid", "email", "profile"];

const oktaDomain = "{YOUR_OKTA_DOMAIN}"; // Example: https://dev-123456.oktapreview.com

export const rootAppClientId = "{YOUR_ROOT_TENANT_APP_CLIENT_ID}";

export const oktaFactory: OktaFactory = ({ clientId }) => {
  const oktaSignIn = new OktaSignIn({
    // Additional documentation on config options can be found at https://github.com/okta/okta-signin-widget#basic-config-options
    baseUrl: oktaDomain,
    clientId,
    redirectUri,
    logo: "https://raw.githubusercontent.com/webiny/webiny-js/next/docs/static/webiny-logo.svg",
    authParams: {
      scopes
    }
  });

  const oktaAuth = new OktaAuth({
    issuer: \`\${oktaDomain}/oauth2/default\`,
    clientId,
    redirectUri,
    scopes,
    pkce: true,
    restoreOriginalUri: null,
    devMode: false
  });

  return { oktaSignIn, oktaAuth };
};`}
</Editor>
<p>{`We’re using Okta SignIn Widget to handle the whole login process, so we need to import and configure it. The reason we’re exporting a factory is that we need to obtain an Okta App Client ID depending on the tenant we’re trying to access. We do that by sending a GraphQL query to our API, which returns the App Client ID for the given tenant. Only then we can configure the Okta SignIn Widget and start the authentication flow. App Client ID configuration for tenants is described in the next section.`}</p>
<p>{`There are two important variables you need to insert into this new `}<inlineCode parentName="p">{`okta.ts`}</inlineCode>{` file, `}<strong parentName="p">{`oktaDomain`}</strong>{` and `}<strong parentName="p">{`rootAppClientId`}</strong>{`. Even though we obtain App Client IDs through the API, we’re unable to do it for the root tenant, since we need to login into the root tenant to execute the installation wizard (chicken & egg problem). So, for the root tenant, we must have its App Client ID present in the code.`}</p>
<p>{`With this, you’re ready to deploy the project. To deploy the whole project, run the following:`}</p>
<Editor title="" lang="shell" mdxType="Editor">
{`yarn webiny deploy --env=dev`}
</Editor>
<p>{`Or deploy just `}<strong parentName="p">{`API`}</strong>{` and `}<strong parentName="p">{`Admin`}</strong>{` project applications by running:`}</p>
<Editor title="" lang="shell" mdxType="Editor">
{`yarn webiny deploy api,admin --env=dev`}
</Editor>
<_Heading level={2} id={"5-configuring-app-client-id-for-new-tenants"} nextElement={{
      "type": "paragraph"
    }}>5) Configuring App Client ID for New Tenants</_Heading>
<p>{`Once your project is deployed, open your Admin app. If everything went well, you should be presented with an Okta login screen. The Okta user you’re using to login must have access to the root tenant app client, and have the appropriate claims assigned to the user’s JWT so the user can be mapped to the correct security group, as described in the `}<_Link href="/docs/5.x/enterprise/okta-integration#3-configure-okta-in-the-graphql-api">{`Configure Okta in the GraphQL API`}</_Link>{` section.`}</p>
<Alert type="success" title="Recommendation" mdxType="Alert">
<p>{`We recommend that your main root tenant admin user has a `}<inlineCode parentName="p">{`full-access`}</inlineCode>{` group assignment. Think of this user as a `}<strong parentName="p">{`super admin`}</strong>{` user who can run system setup, create new tenants, and so on. A `}<inlineCode parentName="p">{`full-access`}</inlineCode>{` security group is always present in the system. So, you don’t need to create it manually.`}</p>
</Alert>
<p>{`Once you’ve logged in, navigate to `}<strong parentName="p">{`Tenant Manager -> Tenants`}</strong>{`. In the tenant creation form, there is a dedicated input for Okta App Client ID:`}</p>
<Image src={_Image2} alt={"Assign App Client ID to Tenant"} mdxType="Image" />
<p>{`The value entered here is what the Admin app will be fetching via the API during app bootstrap (on every browser reload). Since multiple tenants can use the same app client ID, for development purposes, you can have 1 Okta app shared between all the developers in the team, across all tenants in their development environments.`}</p>
<_Heading level={2} id={"6-accessing-admin-app-of-a-particular-tenant"} nextElement={{
      "type": "paragraph"
    }}>6) Accessing Admin App of a Particular Tenant</_Heading>
<p>{`To point the browser to a specific tenant you want to access, you simply need to use the `}<strong parentName="p">{`tenantId`}</strong>{` query string parameter:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`http://localhost:3001/?tenantId=root
http://localhost:3001/?tenantId=61e6db7813ab8e0009e252d1
...`}
</Editor>
<p>{`For production environments, this query parameter is exactly how you’ll setup the `}<strong parentName="p">{`Initiate login URI`}</strong>{` in your Okta dashboard, to point users to the respective tenant.`}</p>
<p>{`For development purposes, though, developers will need to specify the query string parameter manually in the browser, since they’ll most likely be sharing the same Okta app client, but their tenant IDs will be different.`}</p>
<_Heading level={2} id={"7-customizing-not-authorized-component-optional"} nextElement={{
      "type": "paragraph"
    }}>7) Customizing &quot;Not Authorized&quot; Component (Optional)</_Heading>
<p>{`When a uses logs into an Admin app, and there are no permissions assigned to him, the app will render a `}<strong parentName="p">{`NotAuthorizedError`}</strong>{` component. You can customize this component by creating a component plugin (a decorator) around the existing component, and replace the output.`}</p>
<p>{`The `}<inlineCode parentName="p">{`@webiny/app-admin-okta`}</inlineCode>{` exports all the components that support decoration via the `}<inlineCode parentName="p">{`Components`}</inlineCode>{` namespace.`}</p>
<Editor title="apps/admin/src/App.tsx" lang="tsx" mdxType="Editor">
{`import React from "react";
import { Admin, createComponentPlugin, useSecurity } from "@webiny/app-serverless-cms";
import { Okta, Components } from "@webiny/app-admin-okta";
import "./App.scss";

import { oktaFactory, rootAppClientId } from "./okta";

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
      <Okta factory={oktaFactory} rootAppClientId={rootAppClientId} />
      {/* Mount the plugin component to register the decorator. */}
      <CustomError />
    </Admin>
  );
};`}
</Editor>
<p>{`Next time the system renders the `}<strong parentName="p">{`NotAuthorizedError`}</strong>{` component, your decorator will intercept the output, and render your custom UI.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;