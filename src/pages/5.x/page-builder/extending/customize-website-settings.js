/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { CanIUseThis } from "@/components/CanIUseThis";
import { WhatYouWillLearn } from "@/components/WhatYouWillLearn";
import socialNetworksAttributes from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/customize-website-settings/social-networks-end-result.png";
import customFooterIcons from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/customize-website-settings/custom-footer-icons.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Customize Website Settings",
  "description": "Learn how to add new website settings fields, and render them on the website.",
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
  "title": "Add a New Group of Fields",
  "slug": "add-a-new-group-of-fields",
  "children": []
}, {
  "title": "Extend the GraphQL Schema",
  "slug": "extend-the-graph-ql-schema",
  "children": []
}, {
  "title": "Render Fields in the Website App",
  "slug": "render-fields-in-the-website-app",
  "children": []
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Gallery = makeShortcode("Gallery");
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






<CanIUseThis since={"5.34.1"} mdxType="CanIUseThis" />
<WhatYouWillLearn mdxType="WhatYouWillLearn">
<ul>
<li parentName="ul">{`how to add a website settings group in the Admin app`}</li>
<li parentName="ul">{`how to extend website settings GraphQL schema`}</li>
<li parentName="ul">{`how to render the new fields in the website app`}</li>
</ul>
</WhatYouWillLearn>
<p>{`Webiny Page Builder provides a module for managing your most common website settings, like website URLs, homepage, favicon, logo, social media links, etc. However, sometimes you need to add your own settings. To add a new group of fields, store them to the database, and retrieve on the website, we need to do 3 things:`}</p>
<ol>
<li parentName="ol">{`Add new inputs to the Website Settings view in the Admin app`}</li>
<li parentName="ol">{`Extend the GraphQL schema, so it is aware of the new fields`}</li>
<li parentName="ol">{`Add the new field selection to the Website app, so they are returned by the GraphQL query`}</li>
</ol>
<p>{`The end result will look like this:`}</p>
<Gallery mdxType="Gallery">
  <Image src={socialNetworksAttributes} alt={"Social Networks group in the Admin app"} mdxType="Image" />
  <Image src={customFooterIcons} alt={"Custom icons in the website footer"} mdxType="Image" />
</Gallery>
<_Heading level={2} id={"add-a-new-group-of-fields"} nextElement={{
      "type": "paragraph"
    }}>Add a New Group of Fields</_Heading>
<p>{`First we need to create a component that will register the new group of fields. Create the following file in your `}<inlineCode parentName="p">{`apps/admin/src`}</inlineCode>{` folder:`}</p>
<Editor title="apps/admin/src/SocialNetworks.tsx" lang="tsx" mdxType="Editor">
{`import React from "react";
import gql from "graphql-tag";
import { WebsiteSettingsConfig } from "@webiny/app-page-builder";
import { Bind } from "@webiny/form";
import { validation } from "@webiny/validation";
import { Input } from "@webiny/ui/Input";

const { Group, Element } = WebsiteSettingsConfig;

const Network1 = () => {
  return (
    <Bind name={"network1"} validators={validation.create("url")}>
      <Input label="Network 1" />
    </Bind>
  );
};

const Network2 = () => {
  return (
    <Bind name={"network2"} validators={validation.create("url")}>
      <Input label="Network 2" />
    </Bind>
  );
};

export const SocialNetworks = () => {
  const socialNetworks = gql\`
    {
      network1
      network2
    }
  \`;

  return (
    <WebsiteSettingsConfig>
      <Group name={"socialNetworks"} label={"Social Networks"} querySelection={socialNetworks}>
        <Element name={"network1"} element={<Network1 />} />
        <Element name={"network2"} element={<Network2 />} />
      </Group>
    </WebsiteSettingsConfig>
  );
};`}
</Editor>
<p>{`With this we’ve created a new group called `}<em parentName="p">{`Social Networks`}</em>{`, and told Webiny what fields to query and mutate when settings are saved. We also added two inputs to the settings form, and connected them to the form data using the `}<inlineCode parentName="p">{`Bind`}</inlineCode>{` component (this establishes a bidirectional connection between the form and the input).`}</p>
<p>{`Now register this component in the Admin app:`}</p>
<Editor title="apps/admin/src/App.tsx" lang="diff-tsx" mdxType="Editor">
{`import React from "react";
+ import { Admin, Plugins } from "@webiny/app-serverless-cms";
import { Cognito } from "@webiny/app-admin-users-cognito";
+ import { SocialNetworks } from "./SocialNetworks";
import "./App.scss";

export const App = () => {
    return (
        <Admin>
            <Cognito />
+           <Plugins>
+               <SocialNetworks />
+           </Plugins>
        </Admin>
    );
};`}
</Editor>
<p>{`At this point, the Admin app will throw an error saying that `}<inlineCode parentName="p">{`network1`}</inlineCode>{` and `}<inlineCode parentName="p">{`network2`}</inlineCode>{` fields do not exist in the GraphQL schema. Move on to the next section to update the schema.`}</p>
<_Heading level={2} id={"extend-the-graph-ql-schema"} nextElement={{
      "type": "paragraph"
    }}>Extend the GraphQL Schema</_Heading>
<p>{`In your GraphQL Lambda function, add the following plugin to the bottom of the plugins list. Note that you can’t copy and paste this file; you’ll have to add this manually into the source code.`}</p>
<Editor title="apps/api/graphql/src/index.ts" lang="ts" mdxType="Editor">
{`import { GraphQLSchemaPlugin } from "@webiny/handler-graphql";

new GraphQLSchemaPlugin({
  typeDefs: /* GraphQL */ \`
    extend type PbSettings {
      network1: String
      network2: String
    }

    extend input PbSettingsInput {
      network1: String
      network2: String
    }
  \`
});`}
</Editor>
<p>{`With this we’ve extended the GraphQL schema, and added two new fields to the `}<inlineCode parentName="p">{`PbSettings`}</inlineCode>{` type. You can add more elaborate types, make them nested, etc. For this example, this simple approach will suffice.`}</p>
<p>{`Deploy your API, by running the following command:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny deploy api --env=dev`}
</Editor>
<p>{`Once deployed, reload your Admin app, and you should now be able to save your new fields.`}</p>
<_Heading level={2} id={"render-fields-in-the-website-app"} nextElement={{
      "type": "paragraph"
    }}>Render Fields in the Website App</_Heading>
<p>{`Before we can render our new fields, we need to add them to the GraphQL query selection in the Website app. Create the following file in your Website app (you can copy and paste the whole file):`}</p>
<Editor title="apps/website/src/SocialNetworks.tsx" lang="tsx" mdxType="Editor">
{`import { useEffect } from "react";
import gql from "graphql-tag";
import { AddQuerySelectionPlugin } from "@webiny/app";
import { plugins } from "@webiny/plugins";

export const SocialNetworks = () => {
  useEffect(() => {
    plugins.register(
      new AddQuerySelectionPlugin({
        operationName: "PbGetSettings",
        selectionPath: "pageBuilder.getSettings.data",
        addSelection: gql\`
          {
            network1
            network2
          }
        \`
      })
    );
  }, []);

  return null;
};`}
</Editor>
<p>{`When this component mounts in the Website app, it will register an `}<inlineCode parentName="p">{`AddQuerySelectionPlugin`}</inlineCode>{` plugin, which will add your fields selection every time the `}<inlineCode parentName="p">{`PbGetSettings`}</inlineCode>{` query is executed.`}</p>
<p>{`Now register this component in the Website app:`}</p>
<Editor title="apps/website/src/App.tsx" lang="diff-tsx" mdxType="Editor">
{`import React from "react";
+ import { Plugins } from "@webiny/app";
import { Website } from "@webiny/app-website";
+ import { SocialNetworks } from "./SocialNetworks";

export const App = () => {
    return (
+       <Website>
+           <Plugins>
+               <SocialNetworks />
+           </Plugins>
+       </Website>
    );
};`}
</Editor>
<p>{`The last thing to do is to add your new fields to the website footer. To do that, we need to edit the website’s `}<inlineCode parentName="p">{`theme`}</inlineCode>{`. For simplicity, we’ve attached the whole file for you to copy and paste:`}</p>
<Editor title="apps/theme/layouts/pages/Static/Footer.tsx" lang="diff-tsx" mdxType="Editor">
{`import * as React from "react";
import { Link } from "@webiny/react-router";
+ import { ReactComponent as RocketIcon } from "@material-design-icons/svg/round/rocket_launch.svg"
+ import { ReactComponent as StartIcon } from "@material-design-icons/svg/round/star.svg"
import { ReactComponent as FacebookIcon } from "./assets/facebook-square-brands.svg";
import { ReactComponent as TwitterIcon } from "./assets/twitter-square-brands.svg";
import { ReactComponent as InstagramIcon } from "./assets/instagram-brands.svg";
import { ReactComponent as LinkedInIcon } from "./assets/linkedin-brands.svg";

import styled from "@emotion/styled";
import { usePage } from "@webiny/app-page-builder-elements";

export const Footer = () => {
    const { layoutProps } = usePage();
+   const { name, logo, social, network1, network2 } = layoutProps["settings"];
+   const showSocial = social || network1 || network2;

    return (
        <FooterWrapper data-testid={"pb-footer"}>
            <FooterBody>
                <FooterLogo className={"logo"}>
                    <Link to="/">{logo && logo.src && <img src={logo.src} alt={name} />}</Link>
                    <div className={"copy"}>
                        {name} © {new Date().getFullYear()}
                    </div>
                </FooterLogo>
+               {showSocial && (
                    <FooterSocial className={"social"}>
+                       {social?.facebook && (
                            <a href={social.facebook}>
                                <FacebookIcon />
                            </a>
                        )}
+                       {social?.twitter && (
                            <a href={social.twitter}>
                                <TwitterIcon />
                            </a>
                        )}
+                       {social?.instagram && (
                            <a href={social.instagram}>
                                <InstagramIcon />
                            </a>
                        )}
+                       {social?.linkedIn && (
                            <a href={social.linkedIn}>
                                <LinkedInIcon />
                            </a>
                        )}
+                       {network1 && (
+                           <a href={network1}>
+                               <RocketIcon />
+                           </a>
+                       )}
+                       {network2 && (
+                           <a href={network2}>
+                               <StartIcon />
+                           </a>
+                       )}
                    </FooterSocial>
                )}
            </FooterBody>
        </FooterWrapper>
    );
};

const FooterWrapper = styled.footer\`
    background-color: \${props => props.theme.styles.colors["color5"]};
    height: 100px;
\`;

const FooterBody = styled.div\`
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1200px;

    \${props => props.theme.breakpoints["tablet"]} {
        flex-direction: column;
    }
\`;

const FooterLogo = styled.div\`
    align-items: center;
    display: flex;
    flex: 1;

    a {
        line-height: 80%;
    }

    img {
        margin-right: 10px;
        max-height: 25px;
    }

    .copy {
        \${props => props.theme.styles.typography["paragraphs"].stylesById("paragraph2")}
        color: \${props => props.theme.styles.colors["color4"]}
    }
\`;

const FooterSocial = styled.div\`
    text-align: right;

    \${props => props.theme.breakpoints["tablet"]} {
        margin-bottom: 15px;
    }

    a {
        display: inline-block;

        svg {
            height: 25px;
            margin-left: 10px;
            opacity: 0.6;
            transition: opacity 0.3s;
            color: \${props => props.theme.styles.colors["color4"]};

            &:hover {
                opacity: 1;
            }
        }
    }
\`;`}
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