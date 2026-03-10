/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { SymbolList } from "@/components/SymbolList";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.64f62e.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Security",
  "description": "Security primitives: Identity, Authenticator, Authorizer",
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
  "title": "Services",
  "slug": "services",
  "children": [{
    "title": "ApiKeyFactory",
    "slug": "api-key-factory",
    "children": []
  }, {
    "title": "Authenticator",
    "slug": "authenticator",
    "children": []
  }, {
    "title": "Authorizer",
    "slug": "authorizer",
    "children": []
  }, {
    "title": "IdentityContext",
    "slug": "identity-context",
    "children": []
  }, {
    "title": "IdentityProvider",
    "slug": "identity-provider",
    "children": []
  }, {
    "title": "JwtIdentityProvider",
    "slug": "jwt-identity-provider",
    "children": []
  }, {
    "title": "OidcIdentityProvider",
    "slug": "oidc-identity-provider",
    "children": []
  }]
}, {
  "title": "Types & Classes",
  "slug": "types-and-classes",
  "children": [{
    "title": "ApiToken",
    "slug": "api-token",
    "children": []
  }]
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
<li parentName="ul">{`How to use the builder and factory APIs?`}</li>
<li parentName="ul">{`How to import and use each exported item?`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`This page documents everything exported from `}<inlineCode parentName="p">{`webiny/api/security`}</inlineCode>{`. Import any of the items below directly from this path in your Webiny extensions.`}</p>
<p><strong parentName="p">{`Services`}</strong></p>
<SymbolList symbols={[{
      name: "ApiKeyFactory",
      anchor: "api-key-factory"
    }, {
      name: "Authenticator",
      anchor: "authenticator"
    }, {
      name: "Authorizer",
      anchor: "authorizer"
    }, {
      name: "IdentityContext",
      anchor: "identity-context"
    }, {
      name: "IdentityProvider",
      anchor: "identity-provider"
    }, {
      name: "JwtIdentityProvider",
      anchor: "jwt-identity-provider"
    }, {
      name: "OidcIdentityProvider",
      anchor: "oidc-identity-provider"
    }]} mdxType="SymbolList" />
<p><strong parentName="p">{`Types & Classes`}</strong></p>
<SymbolList symbols={[{
      name: "ApiToken",
      anchor: "api-token"
    }]} mdxType="SymbolList" />
<_Heading level={2} id={"services"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Services</_Heading>
<_Heading level={3} id={"api-key-factory"} nextElement={{
      "type": "paragraph"
    }}><code>ApiKeyFactory</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ApiKeyFactory } from "webiny/api/security";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`ApiKeyFactory.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ApiKeyFactory.Interface {
    execute(): Promise<CodeApiKey[]> | CodeApiKey[];
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace ApiKeyFactory {
  type Interface = IApiKeyFactory;
  type Return = Promise<CodeApiKey[]> | CodeApiKey[];
  type ApiKey = CodeApiKey;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { ApiKeyFactory } from "webiny/api/security";

class MyImpl implements MyUseCase.Interface {
  public constructor(private apiKeyFactory: ApiKeyFactory.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.apiKeyFactory.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [ApiKeyFactory]
});`}
</Editor>
<_Heading level={3} id={"authenticator"} nextElement={{
      "type": "paragraph"
    }}><code>Authenticator</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Authenticator } from "webiny/api/security";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`Authenticator.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface Authenticator.Interface {
    authenticate(token: string): Promise<IdentityData | null>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace Authenticator {
  type Interface = IAuthenticator;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { Authenticator } from "webiny/api/security";

class MyImpl implements MyUseCase.Interface {
  public constructor(private authenticator: Authenticator.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.authenticator.authenticate(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [Authenticator]
});`}
</Editor>
<_Heading level={3} id={"authorizer"} nextElement={{
      "type": "paragraph"
    }}><code>Authorizer</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Authorizer } from "webiny/api/security";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`Authorizer.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface Authorizer.Interface {
    authorize(identity: Identity): Promise<SecurityPermission[] | null>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace Authorizer {
  type Interface = IAuthorizer;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { Authorizer } from "webiny/api/security";

class MyImpl implements MyUseCase.Interface {
  public constructor(private authorizer: Authorizer.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.authorizer.authorize(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [Authorizer]
});`}
</Editor>
<_Heading level={3} id={"identity-context"} nextElement={{
      "type": "paragraph"
    }}><code>IdentityContext</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { IdentityContext } from "webiny/api/security";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`IdentityContext.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface IdentityContext.Interface {
    getIdentity(): Identity;
    setIdentity(identity: Identity | undefined): void;
    withIdentity<T>(identity: Identity | undefined, cb: () => Promise<T>): Promise<T>;
    getPermission<TPermission extends SecurityPermission = SecurityPermission>(
        name: string
    ): Promise<TPermission | null>;
    getPermissions<TPermission extends SecurityPermission = SecurityPermission>(
        name: string
    ): Promise<TPermission[]>;
    listPermissions(): Promise<SecurityPermission[]>;
    hasFullAccess(): Promise<boolean>;
    withoutAuthorization<T>(cb: () => Promise<T>): Promise<T>;
    isAuthorizationEnabled(): boolean;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace IdentityContext {
  type Interface = IIdentityContext;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { IdentityContext } from "webiny/api/security";

class MyImpl implements MyUseCase.Interface {
  public constructor(private identityContext: IdentityContext.Interface) {}

  public async execute(/* ... */): Promise<void> {
    this.identityContext.getIdentity(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [IdentityContext]
});`}
</Editor>
<_Heading level={3} id={"identity-provider"} nextElement={{
      "type": "paragraph"
    }}><code>IdentityProvider</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { IdentityProvider } from "webiny/api/security";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`IdentityProvider.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface IdentityProvider.Interface {
    isApplicable(token: string): boolean;
    getIdentity(token: string): Promise<IProviderIdentityData | null>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace IdentityProvider {
  type Interface = IIdentityProvider;
  type IdentityData = IProviderIdentityData;
  type JwtPayload = IJwtPayload;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { IdentityProvider } from "webiny/api/security";

class MyImpl implements MyUseCase.Interface {
  public constructor(private identityProvider: IdentityProvider.Interface) {}

  public async execute(/* ... */): Promise<void> {
    this.identityProvider.isApplicable(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [IdentityProvider]
});`}
</Editor>
<_Heading level={3} id={"jwt-identity-provider"} nextElement={{
      "type": "paragraph"
    }}><code>JwtIdentityProvider</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { JwtIdentityProvider } from "webiny/api/security";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`JwtIdentityProvider.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface JwtIdentityProvider.Interface {
    isApplicable(token: IJwtPayload): boolean;
    getIdentity(token: string, jwt: IJwt): Promise<IProviderIdentityData | null>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace JwtIdentityProvider {
  type Interface = IJwtIdentityProvider;
  type Jwt = IJwt;
  type JwtPayload = IJwtPayload;
  type JwtHeader = IJwtHeader;
  type IdentityData = IProviderIdentityData;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { JwtIdentityProvider } from "webiny/api/security";

class MyImpl implements MyUseCase.Interface {
  public constructor(private jwtIdentityProvider: JwtIdentityProvider.Interface) {}

  public async execute(/* ... */): Promise<void> {
    this.jwtIdentityProvider.isApplicable(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [JwtIdentityProvider]
});`}
</Editor>
<_Heading level={3} id={"oidc-identity-provider"} nextElement={{
      "type": "paragraph"
    }}><code>OidcIdentityProvider</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { OidcIdentityProvider } from "webiny/api/security";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`OidcIdentityProvider.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface OidcIdentityProvider.Interface {
    issuer: string;
    clientId: string;
    isApplicable(token: IJwtPayload): boolean;
    getIdentity(jwt: IJwtPayload): Promise<IProviderIdentityData>;
    verifyToken?(token: string): Promise<IJwtPayload | undefined>;
    verifyTokenClaims?(token: IJwtPayload): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace OidcIdentityProvider {
  type Interface = IOidcIdentityProvider;
  type JwtPayload = IJwtPayload;
  type IdentityData = IProviderIdentityData;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { OidcIdentityProvider } from "webiny/api/security";

class MyImpl implements MyUseCase.Interface {
    public constructor(private oidcIdentityProvider: OidcIdentityProvider.Interface) {}

    public async execute(/* ... */): Promise<void> {
        this.oidcIdentityProvider.issuer: string(/* ... */);
    }
}

export default MyUseCase.createImplementation({
    implementation: MyImpl,
    dependencies: [OidcIdentityProvider]
});`}
</Editor>
<_Heading level={2} id={"types-and-classes"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Types &amp; Classes</_Heading>
<_Heading level={3} id={"api-token"} nextElement={{
      "type": "paragraph"
    }}><code>ApiToken</code></_Heading>
<p><strong parentName="p">{`Class`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ApiToken } from "webiny/api/security";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export class ApiToken {
    static validate(token: string): \`wat_$;
}`}
</Editor>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;