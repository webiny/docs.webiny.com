/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import submitRecordForReviewVideo from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/5.x/apw/essentials/assets/submit-record-for-review/apw-submit-record-for-review.mp4";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.79c9f1.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "Submit Record for Review",
  "description": "Learn how to submit a record for review in a Publishing Workflow.",
  "type": "user-guides",
  "showPageHeader": true,
  "fullWidth": false,
  "version": "5.x"
};
const docsearch = {
  "type": "user-guides",
  "weight": 100,
  "versions": ["5.x"]
};
const navigation = _navigation;
const versions = _versions;
const tableOfContents = [{
  "title": "Prerequisites",
  "slug": "prerequisites",
  "children": []
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Video = makeShortcode("Video");
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
<li parentName="ul">{`how to submit a record for review`}</li>
</ul>
</Alert>
<p>{`In this tutorial, we will learn how you can submit a record for review in a Publishing Workflow.`}</p>
<_Heading level={2} id={"prerequisites"} nextElement={{
      "type": "paragraph"
    }}>Prerequisites</_Heading>
<p>{`To follow this tutorial: `}</p>
<ul>
<li parentName="ul">
<p parentName="li">{`You need the `}<strong parentName="p">{`Content`}</strong>{` content model group and `}<strong parentName="p">{`Blog`}</strong>{` content model. If you don’t have these, please follow the `}<_Link href="/docs/5.x/user-guides/apw/essentials/define-workflow">{`Define Workflow`}</_Link>{` tutorial to create them.`}</p>
</li>
<li parentName="ul">
<p parentName="li">{`You need to have the `}<strong parentName="p">{`John Author`}</strong>{` user account in your Webiny instance. If you don’t have it, please follow the `}<_Link href="/docs/5.x/user-guides/apw/essentials/apw-user-guides-outline-users-creation">{`Create Users`}</_Link>{` tutorial to create it.`}</p>
</li>
</ul>
<Video src={submitRecordForReviewVideo} controls={true} mdxType="Video" />
<ol>
<li parentName="ol">
<p parentName="li">{`Log in with the `}<strong parentName="p">{`John Author`}</strong>{` user account.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, click `}<strong parentName="p">{`Headless CMS`}</strong>{` > `}<strong parentName="p">{`CONTENT`}</strong>{` > `}<strong parentName="p">{`Blog`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Blog`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`+ NEW ENTRY`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`CONTENT`}</strong>{` tab for the new entry opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Title`}</strong>{` textbox, type `}<strong parentName="p">{`Elevate Your Style: 5 Stylish Ways to Wear a Black T-Shirt for Men`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Slug`}</strong>{` textbox, type `}<strong parentName="p">{`elevate-your-style-5-stylish-ways-to-wear-a-black-t-shirt-for-men`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the body of the blog, type the following:`}</p>
<p parentName="li">{`Fashion for men thrives on versatility, and the black t-shirt stands as a timeless wardrobe essential. Here are five stylish ways to wear a black t-shirt, proving that this simple garment can be the foundation for countless fashionable looks.`}</p>
<h3 parentName="li"><strong parentName="h3">{`1. Effortless Edge: Monochromatic Mastery`}</strong></h3>
<p parentName="li">{`Pair your black t-shirt with dark bottoms for a sleek monochromatic look. Whether it’s tailored black trousers or black denim, this ensemble exudes confidence. Add a pop of color with statement sneakers or a bold watch to break the monotony. Achieve an effortlessly edgy look suitable for various occasions.`}</p>
<h3 parentName="li"><strong parentName="h3">{`2. Street-Style Swagger: Tucked Distinction`}</strong></h3>
<p parentName="li">{`For a casual yet cool vibe, tuck your black t-shirt into distressed jeans. This classic combination creates a laid-back aesthetic perfect for street-style swagger. Complete the look with stylish sneakers or rugged boots. Consider adding a leather bracelet or a beanie for an extra touch of personality.`}</p>
<h3 parentName="li"><strong parentName="h3">{`3. Relaxed Casual: Knot It Up`}</strong></h3>
<p parentName="li">{`Give your black t-shirt a relaxed feel by knotting it at the waist. This simple styling trick adds a touch of casual charm. Pair it with joggers or denim shorts for an easygoing vibe. The knotted detail adds visual interest and showcases your laid-back style.`}</p>
<h3 parentName="li"><strong parentName="h3">{`4. Smart-Casual Sophistication: Blazer Elegance`}</strong></h3>
<p parentName="li">{`Transform your black t-shirt into a sophisticated ensemble by layering it under a tailored blazer. This combination merges comfort with style, suitable for various occasions. Choose a well-fitted blazer that complements the black hue, creating a sleek appearance. Pair it with tailored chinos or dark denim for a polished finish.`}</p>
<h3 parentName="li"><strong parentName="h3">{`5. Urban Explorer: Cargo Cool`}</strong></h3>
<p parentName="li">{`Embrace an urban vibe by pairing your black t-shirt with cargo pants. This combination offers a balance between utility and style. Opt for neutral-colored cargo pants and complete the look with rugged boots or sneakers. Accessorize with a minimalist backpack or a watch for the perfect urban explorer aesthetic.`}</p>
<p parentName="li">{`In men’s fashion, a black t-shirt is a versatile canvas waiting to be styled. Whether you’re aiming for monochromatic edge, street-style swagger, relaxed casual, smart-casual sophistication, or urban exploration, the possibilities are vast. Experiment with these stylish ways to wear a black t-shirt, and let your personal style shine through.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`SAVE & PUBLISH`}</strong>{`.`}</p>
<p parentName="li">{`✔️The `}<strong parentName="p">{`Request review`}</strong>{` screen opens with the message “This content requires peer review approval before it can be published. Do you wish to request a review?”`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`CONFIRM`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The review screen opens with the message “A peer review is required.”`}</p>
</li>
</ol>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;