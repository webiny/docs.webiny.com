/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/release-notes/assets/upgrading-webiny/ui-version.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/ReleaseNotesLayout"

import _navigation from "@/data/navigation.12bb74.json";

const Layout = _Layout;
const pageData = {
  "title": "How To Upgrade Webiny",
  "description": "Learn how to upgrade your Webiny project.",
  "type": "release-notes",
  "showPageHeader": true,
  "fullWidth": false
};
const docsearch = {
  "type": "release-notes",
  "weight": 50
};
const navigation = _navigation;
const tableOfContents = [{
  "title": "🔥 Precaution Measures",
  "slug": "precaution-measures",
  "children": [{
    "title": "Pre-Production Environments First",
    "slug": "pre-production-environments-first",
    "children": []
  }, {
    "title": "Production Data Backups",
    "slug": "production-data-backups",
    "children": []
  }]
}, {
  "title": "How to Upgrade",
  "slug": "how-to-upgrade",
  "children": []
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "While Upgrading, Can I Skip Versions, for Example From 5.30.0 to 5.35.0?",
    "slug": "while-upgrading-can-i-skip-versions-for-example-from-5-30-0-to-5-35-0",
    "children": []
  }, {
    "title": "Once Upgraded, Do We Need to Re-Deploy the Webiny Project in Order to See the Changes?",
    "slug": "once-upgraded-do-we-need-to-re-deploy-the-webiny-project-in-order-to-see-the-changes",
    "children": []
  }, {
    "title": "Is It Possible to Upgrade Webiny From V4 to V5?",
    "slug": "is-it-possible-to-upgrade-webiny-from-v4-to-v5",
    "children": []
  }, {
    "title": "How Can We Check What's the Version of Webiny We're Currently At?",
    "slug": "how-can-we-check-what-s-the-version-of-webiny-we-re-currently-at",
    "children": []
  }, {
    "title": "Where Can I Find Details on the Webiny Beta Releases?",
    "slug": "where-can-i-find-details-on-the-webiny-beta-releases",
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
tableOfContents
};
const MDXLayout = "wrapper"
export default function MDXContent({
  components,
  ...props
}) {
  return <MDXLayout {...layoutProps} {...props} components={components} mdxType="MDXLayout">




<Alert type="success" title="What you’ll learn" mdxType="Alert">
<ul>
<li parentName="ul">{`what does it mean to upgrade Webiny`}</li>
<li parentName="ul">{`how to upgrade Webiny to a specific version`}</li>
</ul>
</Alert>
<_Heading level={2} id={"precaution-measures"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>🔥 Precaution Measures</_Heading>
<_Heading level={3} id={"pre-production-environments-first"} nextElement={{
      "type": "paragraph"
    }}>Pre-Production Environments First</_Heading>
<p>{`Whenever you’re doing an upgrade, we recommended that you first deploy your changes into one of your pre-production environments, like `}<inlineCode parentName="p">{`dev`}</inlineCode>{` or `}<inlineCode parentName="p">{`staging`}</inlineCode>{`. Once you’ve confirmed everything works as expected, then you can start planning moving into the production.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`Learn how to deploy your project into multiple environments with the `}<_Link href="/docs/{version}/core-development-concepts/basics/project-deployment"><inlineCode parentName="p">{`deploy`}</inlineCode></_Link>{` command.`}</p>
</Alert>
<_Heading level={3} id={"production-data-backups"} nextElement={{
      "type": "paragraph"
    }}>Production Data Backups</_Heading>
<p>{`When deploying to production environments, in order to prevent data loss, make sure to `}<strong parentName="p">{`backup data stored in your `}<a parentName="strong" {...{
          "href": "https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-managedomains-snapshots.html"
        }}>{`ElasticSearch`}</a>{` and `}<a parentName="strong" {...{
          "href": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Backups.html"
        }}>{`DynamoDB`}</a>{` databases`}</strong>{`!`}</p>
<p>{`If you have any additional questions or concerns, please don’t hesitate to send us a message via our `}<a parentName="p" {...{
        "href": "https://www.webiny.com/slack"
      }}>{`community Slack channel`}</a>{`.`}</p>
<_Heading level={2} id={"how-to-upgrade"} nextElement={{
      "type": "paragraph"
    }}>How to Upgrade</_Heading>
<p>{`When planning an upgrade, always check if there’s a dedicated guide for your specific Webiny version. All the guides are located in the menu on the left, for example: `}<_Link href="/docs/release-notes/5.10.0/upgrade-guide">{`5.9.0 → 5.10.0`}</_Link>{`. If you see the guide that matches your versions, follow it. It may contain additional steps to upgrade your Webiny project, as sometimes there are changes in project file organization, project configs, etc.`}</p>
<p>{`If there’s no dedicated article, upgrades are as easy as upgrading all the `}<inlineCode parentName="p">{`@webiny/*`}</inlineCode>{` packages to the desired version.`}</p>
<p>{`Since every Webiny project is using `}<a parentName="p" {...{
        "href": "https://yarnpkg.com/"
      }}>{`yarn`}</a>{` as the package manager, to upgrade all `}<inlineCode parentName="p">{`@webiny/*`}</inlineCode>{` packages, you can use the `}<a parentName="p" {...{
        "href": "https://yarnpkg.com/cli/up"
      }}><inlineCode parentName="a">{`yarn up`}</inlineCode></a>{` command, like so:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`// Make sure you replace the version number in the command.
yarn up "@webiny/*@5.0.0"`}
</Editor>
<Alert type="info" mdxType="Alert">
<p>{`The `}<inlineCode parentName="p">{`yarn up`}</inlineCode>{` command updates all your `}<inlineCode parentName="p">{`package.json`}</inlineCode>{` files in all workspaces across the project. Learn more about it in the `}<a parentName="p" {...{
          "href": "https://yarnpkg.com/cli/up#details"
        }}>{`official documentation`}</a>{`.`}</p>
</Alert>
<p>{`Once that’s done, you can deploy your project.`}</p>
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"while-upgrading-can-i-skip-versions-for-example-from-5-30-0-to-5-35-0"} nextElement={{
      "type": "paragraph"
    }}>While Upgrading, Can I Skip Versions, for Example From 5.30.0 to 5.35.0?</_Heading>
<p>{`You should `}<strong parentName="p">{`never skip versions (major or minor)`}</strong>{` as each upgrade can contain additional manual steps that need to be taken. The steps will always be listed in upgrade guides.`}<br parentName="p"></br>{`
`}{`Please note that it’s possible to skip only `}<strong parentName="p">{`patch versions`}</strong>{`. For example, if you are currently on version `}<inlineCode parentName="p">{`5.30.0`}</inlineCode>{` and wish to upgrade to version `}<inlineCode parentName="p">{`5.32.0`}</inlineCode>{`. You can upgrade from `}<inlineCode parentName="p">{`5.30.0`}</inlineCode>{` to `}<inlineCode parentName="p">{`5.31.0`}</inlineCode>{` and then from `}<inlineCode parentName="p">{`5.31.0`}</inlineCode>{` to `}<inlineCode parentName="p">{`5.32.0`}</inlineCode>{` by skiping the patch versions within the `}<inlineCode parentName="p">{`5.31.0`}</inlineCode>{` series, such as `}<inlineCode parentName="p">{`5.31.1`}</inlineCode>{`, `}<inlineCode parentName="p">{`5.31.2`}</inlineCode>{`, and `}<inlineCode parentName="p">{`5.31.3`}</inlineCode>{`.`}</p>
<_Heading level={3} id={"once-upgraded-do-we-need-to-re-deploy-the-webiny-project-in-order-to-see-the-changes"} nextElement={{
      "type": "paragraph"
    }}>Once Upgraded, Do We Need to Re-Deploy the Webiny Project in Order to See the Changes?</_Heading>
<p>{`Yes, once you’ve completed the upgrade steps, in order to actually see the new features and fixes online, you need to re-deploy you project. Which project applications you need to re-deploy? It depends on the released fixes and features, but the easiest approach would be just to deploy the entire project, using the `}<_Link href="/docs/{version}/core-development-concepts/basics/project-deployment#the-deploy-command"><inlineCode parentName="p">{`yarn webiny deploy`}</inlineCode></_Link>{` command.`}</p>
<p>{`Additionally, before you re-deploy the changes into the production environment, it’s recommended that you re-deploy the changes into one of your test or preview environments first.`}</p>
<_Heading level={3} id={"is-it-possible-to-upgrade-webiny-from-v4-to-v5"} nextElement={{
      "type": "paragraph"
    }}>Is It Possible to Upgrade Webiny From V4 to V5?</_Heading>
<p>{`Differences between these two versions are so vast that it’s simply impossible to do the upgrade. If you’re interested in migrating your existing project to v5, unfortunately, you will have to recreate your existing content in a new v5 project, either manually, or by writing your own custom migration scripts.`}</p>
<_Heading level={3} id={"how-can-we-check-what-s-the-version-of-webiny-we-re-currently-at"} nextElement={{
      "type": "paragraph"
    }}>How Can We Check What&#39;s the Version of Webiny We&#39;re Currently At?</_Heading>
<p>{`In your terminal of choice and in your project root, run the following command:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`yarn webiny --version`}
</Editor>
<p>{`Additionally, the version is also shown in the deployed Admin Area React application, at the bottom of the main menu:`}</p>
<Image src={_Image1} alt={"Webiny Version in Admin Area"} mdxType="Image" />
<_Heading level={3} id={"where-can-i-find-details-on-the-webiny-beta-releases"} nextElement={{
      "type": "paragraph"
    }}>Where Can I Find Details on the Webiny Beta Releases?</_Heading>
<p>{`You can find details about beta versions on the `}<a parentName="p" {...{
        "href": "https://www.npmjs.com/package/create-webiny-project?activeTab=versions"
      }}>{`create-webiny-project - npm`}</a>{` page.`}<br parentName="p"></br>{`
`}{`If you are interested in setting up a Webiny project with a beta release, run the following command:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`npx create-webiny-project@beta my-project --tag=5.40.0-beta.5`}
</Editor>
<p>{`Additionally, set the environment variable `}<inlineCode parentName="p">{`WEBINY_VERSION=5.40.0`}</inlineCode>{`. Feel free to update the tag version to your intended beta version.`}</p>
<p>{`Please note, we do not recommend using beta versions for production projects. However, if you want to try out features available early in a beta release, you can set up a beta version.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}





    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;