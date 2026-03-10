/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { CanIUseThis } from "@/components/CanIUseThis";
import { Gallery, Image } from "@/components/Image";
import { WhatYouWillLearn } from "@/components/WhatYouWillLearn";
import externalOidc from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/assets/cognito-federation/externalOidc.png";
import onlyExternal from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/assets/cognito-federation/onlyExternal.png";
import userMenu from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/assets/cognito-federation/userMenu.png";
import cognitoGoogle from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/assets/cognito-google.png";
import cognitoOutput from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/assets/core-output.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Cognito Federation",
  "description": "Learn how to configure Cognito Federation to sign into the Admin app.",
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
  "title": "Cognito With Social IdPs",
  "slug": "cognito-with-social-id-ps",
  "children": [{
    "title": "Configure AWS Infrastructure",
    "slug": "configure-aws-infrastructure",
    "children": []
  }, {
    "title": "Configure GraphQL API",
    "slug": "configure-graph-ql-api",
    "children": []
  }, {
    "title": "Configure Admin App",
    "slug": "configure-admin-app",
    "children": []
  }]
}, {
  "title": "Cognito With OIDC IdPs",
  "slug": "cognito-with-oidc-id-ps",
  "children": [{
    "title": "Configure AWS Infrastructure",
    "slug": "configure-aws-infrastructure-1",
    "children": []
  }, {
    "title": "Configure GraphQL API",
    "slug": "configure-graph-ql-api-1",
    "children": []
  }, {
    "title": "Configure Admin App",
    "slug": "configure-admin-app-1",
    "children": []
  }]
}, {
  "title": "Customizing the Sign-in Screen",
  "slug": "customizing-the-sign-in-screen",
  "children": []
}, {
  "title": "Disable Default User Management",
  "slug": "disable-default-user-management",
  "children": []
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Alert = makeShortcode("Alert");
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










<CanIUseThis enterprise={true} mdxType="CanIUseThis">
<ul>
<li parentName="ul">
{`social providers support is available since `}
<strong>
{`v5.37.6`}
</strong>
</li>
<li parentName="ul">
{`OpenID Connect (OIDC) support is available since `}
<strong>
{`v5.40.0`}
</strong>
</li>
</ul>
</CanIUseThis>
<WhatYouWillLearn mdxType="WhatYouWillLearn">
<ul>
<li parentName="ul">{`how to configure federated identity providers in the Admin app`}</li>
<li parentName="ul">{`how to configure social IdPs (Facebook, Google, Apple, Amazon)`}</li>
<li parentName="ul">{`how to configure OpenID Connect (OIDC) IdPs`}</li>
</ul>
</WhatYouWillLearn>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Out of the box, Webiny comes with an AWS Cognito setup to manage its admin users. There’s a preconfigured Cognito User Pool dedicated to admin users. This user pool doesn’t allow external users to sign-up, which means that new admin user accounts can only be created by a Webiny admin, from within the Admin app.`}</p>
<p>{`In this article, we show the process of configuring your Webiny project to use external identity providers (both social and custom).`}</p>
<Gallery mdxType="Gallery">
  <Image src={cognitoGoogle} title={"Cognito with Social IdP"} mdxType="Image" />
  <Image src={externalOidc} title={"Cognito with External OIDC IdP"} mdxType="Image" />
  <Image src={onlyExternal} title={"Custom Login Screen"} mdxType="Image" />
</Gallery>
<Alert type="warning" title={"Update Your AWS Permissions!"} mdxType="Alert">
<p>{`If your project was created before `}<strong parentName="p">{`v5.37.6`}</strong>{`, and you used our `}<a parentName="p" {...{
          "href": "https://webiny-public.s3.us-east-2.amazonaws.com/cloudformation/DEPLOY_WEBINY_PROJECT_CF_TEMPLATE.yaml"
        }}>{`AWS Cloudformation template`}</a>{` to set up your deployment user, make sure you update the permissions using the template.`}</p>
</Alert>
<_Heading level={2} id={"cognito-with-social-id-ps"} nextElement={{
      "type": "paragraph"
    }}>Cognito With Social IdPs</_Heading>
<p>{`In this article, we’re using Google as the identity provider of choice. To set up a Google Cloud project and obtain the `}<inlineCode parentName="p">{`client_id`}</inlineCode>{` and `}<inlineCode parentName="p">{`client_secret`}</inlineCode>{`, `}<a parentName="p" {...{
        "href": "https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-social-idp.html"
      }}>{`follow the official documentation`}</a>{`. In particular, see the `}<strong parentName="p">{`To register an app with Google`}</strong>{` section.`}</p>
<_Heading level={3} id={"configure-aws-infrastructure"} nextElement={{
      "type": "paragraph"
    }}>Configure AWS Infrastructure</_Heading>
<p>{`Cognito resources are part of the Core app, which is responsible for stateful resources (databases, user pools, S3 buckets, etc.). To configure Cognito to use federated identity providers, we need to modify the `}<inlineCode parentName="p">{`webiny.application.ts`}</inlineCode>{` file of the `}<inlineCode parentName="p">{`core`}</inlineCode>{` app. Webiny provides a utility to facilitate the configuration of infrastructure resources involved.`}</p>
<p>{`Once you have your `}<inlineCode parentName="p">{`client_id`}</inlineCode>{` and `}<inlineCode parentName="p">{`client_secret`}</inlineCode>{` ready, you can store them in your project’s `}<inlineCode parentName="p">{`.env`}</inlineCode>{` file, like so:`}</p>
<Editor title=".env" lang="dotenv" mdxType="Editor">
{`GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret`}
</Editor>
<Editor title="apps/core/webiny.application.ts" lang="diff-ts" mdxType="Editor">
{`+ import { createCoreApp, configureAdminCognitoFederation } from "@webiny/serverless-cms-aws";

export default createCoreApp({
  pulumiResourceNamePrefix: "wby-",
+ pulumi(app) {
+   configureAdminCognitoFederation(app, {
+     // Provide a name for the user pool domain.
+     domain: "webiny-admin",
+     // Whitelist callback URLs (can be localhost or real domain).
+     callbackUrls: ["http://localhost:3001"],
+     // Configure external identity providers.
+     identityProviders: [
+       {
+         type: "google",
+         providerDetails: {
+           authorize_scopes: "email profile openid",
+           client_id: String(process.env.GOOGLE_CLIENT_ID),
+           client_secret: String(process.env.GOOGLE_CLIENT_SECRET)
+         }
+       }
+     ]
+   });
+ }
});`}
</Editor>
<Alert type={"info"} title={"Multiple Identity Providers"} mdxType="Alert">
<p>{`You can add multiple identity providers to your Cognito user pool. Simply add more identity provider configs to the `}<inlineCode parentName="p">{`identityProviders`}</inlineCode>{` array.`}</p>
</Alert>
<Alert type="warning" title={"Real Callback URLs"} mdxType="Alert">
<p>{`Note that for development purposes, it’s enough to have just the `}<inlineCode parentName="p">{`localhost`}</inlineCode>{` defined in the `}<inlineCode parentName="p">{`callbackUrls`}</inlineCode>{`. This article assumes that you’ll be researching this feature in a development environment, on localhost.`}</p>
<p>{`However, once you deploy your Admin app, and want to use the real Cloudfront URL, or a custom domain, you’ll need to go back to this config, and update the `}<inlineCode parentName="p">{`callbackUrls`}</inlineCode>{` with the live URL. You’ll also need to redeploy your `}<inlineCode parentName="p">{`core`}</inlineCode>{` app for your config to apply.`}</p>
</Alert>
<p>{`Once the config of your identity provider is in place, you need to deploy your `}<inlineCode parentName="p">{`core`}</inlineCode>{` app, to apply the new infrastructure configuration:`}</p>
<Editor title="" lang="shell" mdxType="Editor">
{`yarn webiny deploy core --env=dev`}
</Editor>
<p>{`Once deployed, you need to whitelist your Cognito domain in your Google OAuth 2.0 Client ID, as described in the `}<a parentName="p" {...{
        "href": "https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-social-idp.html"
      }}>{`official documentation`}</a>{` (see points `}<strong parentName="p">{`13-14`}</strong>{` in the `}<strong parentName="p">{`To register an app with Google`}</strong>{` section).`}</p>
<p>{`To get the domain name, copy the value of `}<inlineCode parentName="p">{`cognitoUserPoolDomain`}</inlineCode>{` output from the following command:`}</p>
<Editor title="" lang="shell" mdxType="Editor">
{`yarn webiny output core --env=dev`}
</Editor>
<Image src={cognitoOutput} title={"Core App Output"} mdxType="Image" />
<_Heading level={3} id={"configure-graph-ql-api"} nextElement={{
      "type": "paragraph"
    }}>Configure GraphQL API</_Heading>
<p>{`Cognito will be handling the communication with the external identity providers, and creating the `}<inlineCode parentName="p">{`idToken`}</inlineCode>{` which is then sent to the API from the Admin app. This means that the authentication process remains the same as with regular Cognito users. However, external user profiles do not exist in the Admin app, and cannot be mapped to a security group or a team using their profile.`}</p>
<p>{`To help Webiny map your external users to specific user groups, we need to add the group information to the identity object, generated in the authentication process.`}</p>
<p>{`Open your `}<inlineCode parentName="p">{`apps/api/graphql/src/security.ts`}</inlineCode>{` file, and update the existing `}<inlineCode parentName="p">{`cognitoAuthentication`}</inlineCode>{` configuration:`}</p>
<Editor title="apps/api/graphql/src/security.ts" lang="diff-ts" mdxType="Editor">
{`// ...
cognitoAuthentication({
    region: String(process.env.COGNITO_REGION),
    userPoolId: String(process.env.COGNITO_USER_POOL_ID),
    identityType: "admin",
+   getIdentity({ identity, token }) {
+     const federatedIdentity = Boolean(token.identities);
+
+     return {
+       ...identity,
+       group: federatedIdentity ? "full-access" : undefined
+     };
+   }
});
// ...`}
</Editor>
<p>{`In this basic example, we’re checking if the token contains the `}<inlineCode parentName="p">{`identities`}</inlineCode>{` claim, which is only present on tokens of identities coming from external IdPs. If so, we map those identities to a `}<inlineCode parentName="p">{`full-access`}</inlineCode>{` user group.`}</p>
<p><inlineCode parentName="p">{`group`}</inlineCode>{` is an identity attribute which Webiny uses to map the identity to the specified user group. This gives identities their permissions, which are then used in the authorization process. If this attribute is not set (or is `}<inlineCode parentName="p">{`undefined`}</inlineCode>{`), Webiny will attempt to load the user group using a user profile, which exist only for users created via the Admin app.`}</p>
<p>{`With this approach, we can manage group mapping programmatically, and decide where the mapping information is coming from. We might fetch the group slug from the `}<inlineCode parentName="p">{`idToken`}</inlineCode>{` claim (which can be managed outside Webiny, within Cognito, or within the external identity provider), or we can use a hardcoded map (as we do in this example, using the `}<inlineCode parentName="p">{`full-access`}</inlineCode>{` group slug).`}</p>
<p>{`Once the config is in place, you need to deploy your `}<inlineCode parentName="p">{`api`}</inlineCode>{` app:`}</p>
<Editor title="" lang="shell" mdxType="Editor">
{`yarn webiny deploy api --env=dev`}
</Editor>
<_Heading level={3} id={"configure-admin-app"} nextElement={{
      "type": "paragraph"
    }}>Configure Admin App</_Heading>
<p>{`We need to update the default Cognito configuration in the Admin app, to enable sign in via Google. We also need a component to render the Google sign in button, so we’ll use the `}<inlineCode parentName="p">{`react-social-login-buttons`}</inlineCode>{` package from NPM, to get a styled button.`}</p>
<Alert type="info" title={"Custom Component"} mdxType="Alert">
<p>{`You are free to skip this step and render whatever component you want. The important bit is that you call the `}<inlineCode parentName="p">{`signIn`}</inlineCode>{` callback that is passed to you as a prop, which initiates the sign-in process.`}</p>
</Alert>
<Editor title="Install react-social-login-buttons" lang="bash" mdxType="Editor">
{`yarn workspace admin add react-social-login-buttons`}
</Editor>
<Editor title="apps/admin/src/App.tsx" lang="diff-tsx" mdxType="Editor">
{`import React from "react";
+ import { GoogleLoginButton } from "react-social-login-buttons";
import { Admin } from "@webiny/app-serverless-cms";
+ import { Cognito, CreateAuthenticationConfig } from "@webiny/app-admin-users-cognito";
import "./App.scss";

+ const cognitoConfig: CreateAuthenticationConfig = {
+   oauth: {
+     domain: String(process.env.REACT_APP_USER_POOL_DOMAIN),
+     redirectSignIn: "http://localhost:3001",
+     redirectSignOut: "http://localhost:3001",
+     scope: ["profile", "email", "openid"],
+     responseType: "token"
+   },
+   federatedProviders: [
+     { name: "google", component: ({ signIn }) => <GoogleLoginButton onClick={signIn} /> }
+   ]
+ };

export const App = () => {
    return (
      <Admin>
+       <Cognito config={cognitoConfig} />
      </Admin>
    );
};`}
</Editor>
<Alert type="warning" title={"Real Callback URLs"} mdxType="Alert">
<p>{`Notice the use of `}<inlineCode parentName="p">{`localhost`}</inlineCode>{` redirect URLs. In your staging and production environments, you’ll
need to update these values to reflect the domains of your deployed systems.`}</p>
</Alert>
<p>{`And lastly, we need to get the value of `}<inlineCode parentName="p">{`REACT_APP_USER_POOL_DOMAIN`}</inlineCode>{` environment variable in the code above. Its value is the fully qualified Cognito User Pool domain, which lives in the Core app. It looks something like this: `}<inlineCode parentName="p">{`webiny-admin.auth.us-east-1.amazoncognito.com`}</inlineCode>{`, and is generated once the User Pool Domain is created in your AWS infrastructure.`}</p>
<p>{`To pull this value from the Core app, and inject it into the Admin app, there’s a utility provided by Webiny. Update your `}<inlineCode parentName="p">{`apps/admin/webiny.config.ts`}</inlineCode>{` file like so:`}</p>
<Editor title="apps/admin/webiny.config.ts" lang="diff-ts" mdxType="Editor">
{`import {
  createAdminAppConfig,
+ configureAdminCognitoUserPoolDomain
} from "@webiny/serverless-cms-aws";

+ export default createAdminAppConfig(modifier => {
+   configureAdminCognitoUserPoolDomain(modifier);
+ });`}
</Editor>
<p>{`To run and test the new identity provider, start your Admin app:`}</p>
<Editor title="" lang="shell" mdxType="Editor">
{`yarn webiny watch admin --env=dev`}
</Editor>
<p>{`Once your app is up and running, you should see the following login screen:`}</p>
<Image src={cognitoGoogle} title={"Using Google IdP to Sign Into the Admin App"} mdxType="Image" />
<_Heading level={2} id={"cognito-with-oidc-id-ps"} nextElement={{
      "type": "paragraph"
    }}>Cognito With OIDC IdPs</_Heading>
<p>{`Using OpenID Connect, you can connect your user pool with almost any remote IdP. Before you begin configuring your Webiny project, you need to obtain some information from the remote IdP: `}<inlineCode parentName="p">{`client_id`}</inlineCode>{`, `}<inlineCode parentName="p">{`client_secret`}</inlineCode>{`, and `}<inlineCode parentName="p">{`oidc_issuer`}</inlineCode>{`.`}</p>
<p>{`Here’s an example of the `}<inlineCode parentName="p">{`oidc_issuer`}</inlineCode>{`, just so you have an idea of what you’re looking for in your remote IdP: `}<inlineCode parentName="p">{`https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_12345678`}</inlineCode></p>
<p>{`AWS documentation provides detailed instructions on `}<a parentName="p" {...{
        "href": "https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-oidc-idp.html"
      }}>{`registering with an OIDC IdP`}</a>{`, so please consult the official documentation before proceeding with this article. You only need to read `}<inlineCode parentName="p">{`Step 1.`}</inlineCode>{` of the AWS guide to get the information you need.`}</p>
<Alert type="info" title={"Remote IdP Callback URL"} mdxType="Alert">
<p>{`While configuring the remote IdP, at one point you will have to specify the callback URL pointing to the user pool deployed by Webiny. Since you don’t know the exact URL until you deploy your configured Webiny project, temporarily specify any random URL, and then come back and update the URL after you finish the Webiny infrastructure setup.`}</p>
</Alert>
<_Heading level={3} id={"configure-aws-infrastructure-1"} nextElement={{
      "type": "paragraph"
    }}>Configure AWS Infrastructure</_Heading>
<p>{`Cognito resources are part of the Core app, which is responsible for stateful resources (databases, user pools, S3 buckets, etc.). To configure Cognito to use federated identity providers, we need to modify the `}<inlineCode parentName="p">{`webiny.application.ts`}</inlineCode>{` file of the `}<inlineCode parentName="p">{`core`}</inlineCode>{` app. Webiny provides a utility to facilitate the configuration of infrastructure resources involved.`}</p>
<p>{`Once you have your `}<inlineCode parentName="p">{`client_id`}</inlineCode>{`, `}<inlineCode parentName="p">{`client_secret`}</inlineCode>{`, and `}<inlineCode parentName="p">{`oidc_issuer`}</inlineCode>{` ready, you can store them in your project’s `}<inlineCode parentName="p">{`.env`}</inlineCode>{` file, like so:`}</p>
<Editor title=".env" lang="dotenv" mdxType="Editor">
{`REMOTE_IDP_CLIENT_ID=your_remote_idp_client_id
REMOTE_IDP_CLIENT_SECRET=your_remote_idp_client_secret
REMOTE_IDP_ISSUER=your_remote_idp_issuer_url`}
</Editor>
<Editor title="apps/core/webiny.application.ts" lang="diff-ts" mdxType="Editor">
{`+ import { createCoreApp, configureAdminCognitoFederation } from "@webiny/serverless-cms-aws";

  export default createCoreApp({
    pulumiResourceNamePrefix: "wby-",
+   pulumi(app) {
+     configureAdminCognitoFederation(app, {
+       // Provide a name for the user pool domain.
+       domain: "webiny-admin",
+       // Whitelist callback URLs (can be localhost or real domain).
+       callbackUrls: ["http://localhost:3001"],
+       // Configure external identity providers.
+       identityProviders: [
+         {
+           name: "MyIDP",
+           type: "oidc",
+           providerDetails: {
+             attributes_request_method: "POST",
+             authorize_scopes: "email profile openid",
+             client_id: String(process.env.REMOTE_IDP_CLIENT_ID),
+             client_secret: String(process.env.REMOTE_IDP_CLIENT_SECRET),
+             oidc_issuer: String(process.env.REMOTE_IDP_ISSUER)
+           }
+         }
+       ]
+     });
+   }
  });`}
</Editor>
<Alert type={"warning"} title={"Provider Name"} mdxType="Alert">
<p>{`AWS has `}<a parentName="p" {...{
          "href": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateIdentityProvider.html#API_CreateIdentityProvider_RequestSyntax"
        }}>{`very strict rules`}</a>{` around the `}<inlineCode parentName="p">{`name`}</inlineCode>{` of your custom provider. Our advice is to keep your names really simple: no spaces, `}{`[a-zA-Z]`}{`, maximum length of 32 characters. This will save you a lot of headache.`}</p>
</Alert>
  
<Alert type={"info"} title={"Multiple Identity Providers"} mdxType="Alert">
<p>{`You can add multiple identity providers to your Cognito user pool. Simply add more identity provider configs to the `}<inlineCode parentName="p">{`identityProviders`}</inlineCode>{` array.`}</p>
</Alert>
<Alert type="warning" title={"Real Callback URLs"} mdxType="Alert">
<p>{`Note that for development purposes, it’s enough to have just the `}<inlineCode parentName="p">{`localhost`}</inlineCode>{` defined in the `}<inlineCode parentName="p">{`callbackUrls`}</inlineCode>{`. This article assumes that you’ll be researching this feature in a development environment, on localhost.`}</p>
<p>{`However, once you deploy your Admin app, and want to use the real Cloudfront URL, or a custom domain, you’ll need to go back to this config, and update the `}<inlineCode parentName="p">{`callbackUrls`}</inlineCode>{` with the live URL. You’ll also need to redeploy your `}<inlineCode parentName="p">{`core`}</inlineCode>{` app for your config to apply.`}</p>
</Alert>
<p>{`Once the config of your identity provider is in place, you need to deploy your `}<inlineCode parentName="p">{`core`}</inlineCode>{` app, to apply the new infrastructure configuration:`}</p>
<Editor title="" lang="shell" mdxType="Editor">
{`yarn webiny deploy core --env=dev`}
</Editor>
<p>{`Once deployed, you need to update the callback URL on your remote IdP, so it can connect to your Webiny user pool. To get the domain name, copy the value of `}<inlineCode parentName="p">{`cognitoUserPoolDomain`}</inlineCode>{` output from the following command:`}</p>
<Editor title="" lang="shell" mdxType="Editor">
{`yarn webiny output core --env=dev`}
</Editor>
<Image src={cognitoOutput} title={"Core App Output"} mdxType="Image" />
<p>{`The final callback URL might look something like this: `}<inlineCode parentName="p">{`https://{domainName}.auth.{region}.amazoncognito.com/oauth2/idpresponse`}</inlineCode>{`. The `}<inlineCode parentName="p">{`/oauth2/idpresponse`}</inlineCode>{` part may vary depending on the IdP you’re using, so consult the documentation of your remote IdP.`}</p>
<_Heading level={3} id={"configure-graph-ql-api-1"} nextElement={{
      "type": "paragraph"
    }}>Configure GraphQL API</_Heading>
<p>{`Cognito will be handling the communication with the external identity providers, and creating the `}<inlineCode parentName="p">{`idToken`}</inlineCode>{` which is then sent to the API from the Admin app. This means that the authentication process remains the same as with regular Cognito users. However, external user profiles do not exist in the Admin app, and cannot be mapped to a security group or a team using their profile.`}</p>
<p>{`To help Webiny map your external users to specific user groups, we need to add the group information to the identity object, generated in the authentication process.`}</p>
<p>{`Open your `}<inlineCode parentName="p">{`apps/api/graphql/src/security.ts`}</inlineCode>{` file, and update the existing `}<inlineCode parentName="p">{`cognitoAuthentication`}</inlineCode>{` configuration:`}</p>
<Editor title="apps/api/graphql/src/security.ts" lang="diff-ts" mdxType="Editor">
{`  // ...
  cognitoAuthentication({
    region: String(process.env.COGNITO_REGION),
    userPoolId: String(process.env.COGNITO_USER_POOL_ID),
    identityType: "admin",
+   getIdentity({ identity, token }) {
+     const federatedIdentity = Boolean(token.identities);
+   
+     return {
+       ...identity,
+       group: federatedIdentity ? "full-access" : undefined
+     };
+   }
  });
  // ...`}
</Editor>
<p>{`In this basic example, we’re checking if the token contains the `}<inlineCode parentName="p">{`identities`}</inlineCode>{` claim, which is only present on tokens of identities coming from external IdPs. If so, we map those identities to a `}<inlineCode parentName="p">{`full-access`}</inlineCode>{` user group.`}</p>
<p><inlineCode parentName="p">{`group`}</inlineCode>{` is an identity attribute which Webiny uses to map the identity to the specified user group. This gives identities their permissions, which are then used in the authorization process. If this attribute is not set (or is `}<inlineCode parentName="p">{`undefined`}</inlineCode>{`), Webiny will attempt to load the user group using a user profile, which exist only for users created via the Admin app.`}</p>
<p>{`With this approach, we can manage group mapping programmatically, and decide where the mapping information is coming from. We might fetch the group slug from the `}<inlineCode parentName="p">{`idToken`}</inlineCode>{` claim (which can be managed outside Webiny, within Cognito, or within the external identity provider), or we can use a hardcoded map (as we do in this example, using the `}<inlineCode parentName="p">{`full-access`}</inlineCode>{` group slug).`}</p>
<p>{`Once the config is in place, you need to deploy your `}<inlineCode parentName="p">{`api`}</inlineCode>{` app:`}</p>
<Editor title="" lang="shell" mdxType="Editor">
{`yarn webiny deploy api --env=dev`}
</Editor>
<_Heading level={3} id={"configure-admin-app-1"} nextElement={{
      "type": "paragraph"
    }}>Configure Admin App</_Heading>
<p>{`We need to update the default Cognito configuration in the Admin app, to enable sign in via the custom IdP. In the `}<inlineCode parentName="p">{`federatedProviders`}</inlineCode>{` config key, you can specify one or more federated providers, and use the same `}<inlineCode parentName="p">{`name`}</inlineCode>{` you used in the infrastructure setup. You also have the ability to specify the component that will be used to render the UI for your IdP (usually a button).`}</p>
<Editor title="apps/admin/src/App.tsx" lang="diff-tsx" mdxType="Editor">
{`import React from "react";
import { Admin } from "@webiny/app-serverless-cms";
+ import { Cognito, CreateAuthenticationConfig } from "@webiny/app-admin-users-cognito";
import "./App.scss";

+ const cognitoConfig: CreateAuthenticationConfig = {
+   oauth: {
+     domain: String(process.env.REACT_APP_USER_POOL_DOMAIN),
+     redirectSignIn: "http://localhost:3001",
+     redirectSignOut: "http://localhost:3001",
+     scope: ["profile", "email", "openid"],
+     responseType: "token"
+   },
+   federatedProviders: [
+     {
+       name: "MyIDP",
+       component: ({ signIn }) => <ButtonPrimary onClick={signIn}>Sign in via My IDP</ButtonPrimary>
+     }
+   ]
+ };

export const App = () => {
    return (
      <Admin>
+       <Cognito config={cognitoConfig} />
      </Admin>
    );
};`}
</Editor>
<Alert type="warning" title={"Real Callback URLs"} mdxType="Alert">
<p>{`Notice the use of `}<inlineCode parentName="p">{`localhost`}</inlineCode>{` redirect URLs. In your staging and production environments, you’ll
need to update these values to reflect the domains of your deployed systems.`}</p>
</Alert>
<p>{`And lastly, we need to get the value of `}<inlineCode parentName="p">{`REACT_APP_USER_POOL_DOMAIN`}</inlineCode>{` environment variable in the code above. Its value is the fully qualified Cognito User Pool domain, which lives in the Core app. It looks something like this: `}<inlineCode parentName="p">{`webiny-admin.auth.us-east-1.amazoncognito.com`}</inlineCode>{`, and is generated once the User Pool Domain is created in your AWS infrastructure.`}</p>
<p>{`To pull this value from the Core app, and inject it into the Admin app, there’s a utility provided by Webiny. Update your `}<inlineCode parentName="p">{`apps/admin/webiny.config.ts`}</inlineCode>{` file like so:`}</p>
<Editor title="apps/admin/webiny.config.ts" lang="diff-ts" mdxType="Editor">
{`  import {
    createAdminAppConfig,
+   configureAdminCognitoUserPoolDomain
  } from "@webiny/serverless-cms-aws";
  
  export default createAdminAppConfig(modifier => {
+   configureAdminCognitoUserPoolDomain(modifier);
  });`}
</Editor>
<p>{`To run and test the new identity provider, start your Admin app:`}</p>
<Editor title="" lang="shell" mdxType="Editor">
{`yarn webiny watch admin --env=dev`}
</Editor>
<p>{`Once your app is up and running, you should see the following login screen:`}</p>
<Image src={externalOidc} title={"Using external OIDC IdP"} mdxType="Image" />
<_Heading level={2} id={"customizing-the-sign-in-screen"} nextElement={{
      "type": "paragraph"
    }}>Customizing the Sign-in Screen</_Heading>
<p>{`Sometimes, you might want to only allow your users to sign in via a remote IdP, and completely hide the default Cognito sign in via username/password. You might also want to change the title and the description of the screen, implement a completely different UI.`}</p>
<p>{`The following example demonstrates how you can apply a decorator to the default `}<inlineCode parentName="p">{`SignIn`}</inlineCode>{` component, and modify its props:`}</p>
<Editor title="apps/admin/src/App.tsx" lang="diff-tsx" mdxType="Editor">
{`import React from "react";
import { Admin } from "@webiny/app-serverless-cms";
+ import { Cognito, CreateAuthenticationConfig, Components } from "@webiny/app-admin-users-cognito";
import { ButtonPrimary } from "@webiny/ui/Button";
import "./App.scss";

+ const cognitoConfig: CreateAuthenticationConfig = {
+   oauth: {
+     domain: String(process.env.REACT_APP_USER_POOL_DOMAIN),
+     redirectSignIn: "http://localhost:3001",
+     redirectSignOut: "http://localhost:3001",
+     scope: ["profile", "email", "openid"],
+     responseType: "token"
+   },
+   federatedProviders: [
+     {
+       name: "MyIDP",
+       component: ({ signIn }) => <ButtonPrimary onClick={signIn}>Sign in via My IDP</ButtonPrimary>
+     }
+   ]
+ };

+ // Decorate the SignIn view, and customize props.
+ const SignInDecorator = Components.SignIn.createDecorator(Original => {
+   return function SignIn(props) {
+     return (
+       <Original
+         {...props}
+         allowSignInWithCredentials={false}
+         title={"Sign In"}
+         description={"You will be taken to an external service to complete the sign in process."}
+       />
+     );
+   };
+ });

  export const App = () => {
    return (
      <Admin>
+       <Cognito config={cognitoConfig} />
+       {/* Register the decorator! */}
+       <SignInDecorator />
      </Admin>
    );
  };`}
</Editor>
<p>{`Notice the use of `}<inlineCode parentName="p">{`allowSignInWithCredentials`}</inlineCode>{` prop. This tells the system that the username/password UI should not be rendered. There are other props, like `}<inlineCode parentName="p">{`footer`}</inlineCode>{` (which allows you to render a footer), and a `}<inlineCode parentName="p">{`content`}</inlineCode>{`, which allows you to completely replace the main content of the login screen, and render everything yourself.`}</p>
<p>{`The result of this customization looks like this:`}</p>
<Image src={onlyExternal} title={"External IdP Only"} mdxType="Image" />
<_Heading level={2} id={"disable-default-user-management"} nextElement={{
      "type": "paragraph"
    }}>Disable Default User Management</_Heading>
<p>{`By default, the `}<inlineCode parentName="p">{`@webiny/app-admin-users-cognito`}</inlineCode>{` package provides the sign-in UI, but also a module to manage admin users that are stored in the default Cognito user pool. When using external IdPs, you can’t really manage users from outside of the IdP control panel. In that case, the user management module provided by Webiny is of no use.`}</p>
<p>{`To only use the sign-in UI provided by Webiny, you only need to swap the `}<inlineCode parentName="p">{`Cognito`}</inlineCode>{` component, for `}<inlineCode parentName="p">{`CognitoLogin`}</inlineCode>{`. Here’s a full example:`}</p>
<Editor title="apps/admin/src/App.tsx" lang="diff-tsx" mdxType="Editor">
{`  import React from "react";
  import { Admin } from "@webiny/app-serverless-cms";
  import {
+   CognitoLogin,
+   CreateAuthenticationConfig,
+   Components
  } from "@webiny/app-admin-users-cognito";
+ import { ButtonPrimary } from "@webiny/ui/Button";
  import "./App.scss";
  
+ const cognitoConfig: CreateAuthenticationConfig = {
+   oauth: {
+     domain: String(process.env.REACT_APP_USER_POOL_DOMAIN),
+     redirectSignIn: "http://localhost:3001",
+     redirectSignOut: "http://localhost:3001",
+     scope: ["profile", "email", "openid"],
+     responseType: "token"
+   },
+   federatedProviders: [
+     {
+       name: "MyIDP",
+       component: ({ signIn }) => <ButtonPrimary onClick={signIn}>Sign in via My IDP</ButtonPrimary>
+     }
+   ]
+ };
  
+ // Decorate the SignIn view, and customize props.
+ const SignInDecorator = Components.SignIn.createDecorator(Original => {
+   return function SignIn(props) {
+     return (
+       <Original
+         {...props}
+         allowSignInWithCredentials={false}
+         title={"Sign In"}
+         description={"You will be taken to an external service to complete the sign in process."}
+       />
+     );
+   };
+ });
  
  export const App = () => {
    return (
      <Admin>
+       <CognitoLogin config={cognitoConfig} userMenuItems={{ userInfo: true, signOut: true }} />
+       <SignInDecorator />
      </Admin>
    );
  };`}
</Editor>
<p>{`The entire Cognito configuration is the same. The only difference is the component you import from `}<inlineCode parentName="p">{`@webiny/app-admin-users-cognito`}</inlineCode>{`. With the `}<inlineCode parentName="p">{`CognitoLogin`}</inlineCode>{` component, you only get the most necessary things registered into the system. You also get an ability to control which user menu items will be visible in the top-right user menu, because, regardless of your IdP, you need to allow users to sign out.`}</p>
<Image src={userMenu} title={"User Menu Items"} mdxType="Image" />
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;