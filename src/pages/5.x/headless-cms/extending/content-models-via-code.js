/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image4 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/content-models-plugins/faq-icon-selector.png'
import _Image3 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/content-models-plugins/product-model.png'
import _Image2 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/content-models-plugins/basics-plugins-work.png'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/content-models-plugins/content-models-group-editor.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { WhatYouWillLearn } from "@/components/WhatYouWillLearn";
import securityPermissions from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/security-permissions.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Define Content Models via Code",
  "description": "Learn how to define content models and content model groups programmatically.",
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
  "children": [{
    "title": "Via the Admin Area",
    "slug": "via-the-admin-area",
    "children": []
  }, {
    "title": "Programmatically",
    "slug": "programmatically",
    "children": []
  }]
}, {
  "title": "Getting Started",
  "slug": "getting-started",
  "children": []
}, {
  "title": "Basic Example",
  "slug": "basic-example",
  "children": []
}, {
  "title": "More Examples",
  "slug": "more-examples",
  "children": [{
    "title": "Model Field With Multiple Validators",
    "slug": "model-field-with-multiple-validators",
    "children": []
  }, {
    "title": "Reference Fields",
    "slug": "reference-fields",
    "children": []
  }, {
    "title": "Object Fields",
    "slug": "object-fields",
    "children": []
  }, {
    "title": "Disable Authorization for Content Models and Entries",
    "slug": "disable-authorization-for-content-models-and-entries",
    "children": []
  }, {
    "title": "Define a Content Model Only for a Specific Locale",
    "slug": "define-a-content-model-only-for-a-specific-locale",
    "children": []
  }, {
    "title": "Define a Content Model Only for a Specific Tenant",
    "slug": "define-a-content-model-only-for-a-specific-tenant",
    "children": []
  }]
}, {
  "title": "Best Practices",
  "slug": "best-practices",
  "children": [{
    "title": "Some Field Properties Must Never Change",
    "slug": "some-field-properties-must-never-change",
    "children": []
  }]
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "Can Content Models (And Groups) Defined Programmatically Be Edited via Admin Area?",
    "slug": "can-content-models-and-groups-defined-programmatically-be-edited-via-admin-area",
    "children": []
  }, {
    "title": "How to Set a Default Value for a Field?",
    "slug": "how-to-set-a-default-value-for-a-field",
    "children": []
  }, {
    "title": "Are There Any Differences When It Comes to Security Controls?",
    "slug": "are-there-any-differences-when-it-comes-to-security-controls",
    "children": []
  }, {
    "title": "Can I Convert a Content Model That Was Defined via Admin Area Into a Plugin (And Vice-Versa)?",
    "slug": "can-i-convert-a-content-model-that-was-defined-via-admin-area-into-a-plugin-and-vice-versa",
    "children": []
  }, {
    "title": "What Are the Values That I Can Pass to the icon Property of the CmsGroupPlugin Plugin?",
    "slug": "what-are-the-values-that-i-can-pass-to-the-icon-property-of-the-cms-group-plugin-plugin",
    "children": []
  }, {
    "title": "What Is the Purpose of titleFieldId in the Content Model Definition?",
    "slug": "what-is-the-purpose-of-title-field-id-in-the-content-model-definition",
    "children": []
  }, {
    "title": "Can I Modify the Singular API Name and Plural API Name of a Model?",
    "slug": "can-i-modify-the-singular-api-name-and-plural-api-name-of-a-model",
    "children": []
  }]
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Image = makeShortcode("Image");
const ExtensionsGettingStarted = makeShortcode("ExtensionsGettingStarted");
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









<WhatYouWillLearn mdxType="WhatYouWillLearn">
  
  - how to define content models and content model groups programmatically
</WhatYouWillLearn>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Content models and content model groups can be defined in two ways.`}</p>
<_Heading level={3} id={"via-the-admin-area"} nextElement={{
      "type": "paragraph"
    }}>Via the Admin Area</_Heading>
<p>{`The most straightforward way to define content models and content model groups would be via the Admin Area application, via the Content Model Editor and the Content Model Groups module. This is especially suitable for users that are not developers, and just want to manage everything in a quick and easy way.`}</p>
<Image src={_Image1} alt={"Defining Content Models and Content Model Groups via the Admin Area Application"} mdxType="Image" />
<_Heading level={3} id={"programmatically"} nextElement={{
      "type": "paragraph"
    }}>Programmatically</_Heading>
<p>{`And although we can get pretty far by defining content models and content model groups via the Admin Area, on the other hand, we can also do this within our application code, by creating a new extension. Once defined, content models and content model groups can be then used via the Admin Area in the same way as if they were created regularly, via the Content Model Editor.`}</p>
<p>{`Some of the benefits of this approach are:`}</p>
<ul>
<li parentName="ul">{`content models and content model groups get to be stored in version control`}</li>
<li parentName="ul">{`since everything is done programmatically, in some case we may receive additional flexibility`}</li>
<li parentName="ul">{`by default, defined content models and content model groups are available for all available locales and tenants`}</li>
<li parentName="ul">{`basically, only developers have the ability to perform changes on content models and content model groups`}</li>
</ul>
<p>{`In the following sections, we cover a couple of examples that show how to define content models and content model groups via plugins.`}</p>
<_Heading level={2} id={"getting-started"} nextElement={{
      "type": "jsx"
    }}>Getting Started</_Heading>
<ExtensionsGettingStarted type={"api"} name={"models"} dependencies={"@webiny/api-serverless-cms,@webiny/api-headless-cms"} scaffoldCommandExtraInfo={<>
      Since we'll be using a couple of utilities from the <code>@webiny/api-serverless-cms</code>{" "} and <code>@webiny/api-headless-cms</code>{" "}
      packages, we've immediately included it in the list of dependencies. Also, note that the scaffolded
      files can be used for all of the examples shown in this guide.
    </>} mdxType="ExtensionsGettingStarted" />
<_Heading level={2} id={"basic-example"} nextElement={{
      "type": "paragraph"
    }}>Basic Example</_Heading>
<p>{`In this example, we define a simple `}<strong parentName="p">{`Product`}</strong>{` content model, that belongs to the `}<strong parentName="p">{`E-Commerce`}</strong>{` content model group.`}</p>
<p>{`To create a content model group and a content model, we use `}<inlineCode parentName="p">{`createModelGroupPlugin`}</inlineCode>{` and `}<inlineCode parentName="p">{`createModelPlugin`}</inlineCode>{` plugin factories, as shown in the following code snippet.`}</p>
<Editor title="extensions/models/src/index.ts" lang="ts" mdxType="Editor">
{`import {
    createModelGroupPlugin,
    createModelPlugin
} from "@webiny/api-serverless-cms";

import { createModelField } from "@webiny/api-headless-cms";

export const createExtension = () => {
    return [
        // Defines a new "E-Commerce" content models group.
        createModelGroupPlugin({
            id: "ecommerce",
            name: "E-Commerce",
            description: "E-Commerce content model group",
            slug: "e-commerce",
            icon: "fas/shopping-cart"
        }),

        // Defines a new "Product" content model.
        createModelPlugin({
            name: "Product",
            modelId: "product",
            description: "Product content model",
            group: {
                id: "ecommerce",
                name: "E-Commerce"
            },
            fields: [
                createModelField({
                    fieldId: "name",
                    type: "text",
                    label: "name",
                    helpText: "A short product name",
                    renderer: { name: "text-input" },
                    validation: [
                        {
                            name: "required",
                            message: "Value is required."
                        }
                    ]
                }),
                createModelField({
                    fieldId: "productSku",
                    type: "text",
                    label: "SKU",
                    placeholderText: "SKU = Stock Keeping Unit",
                    renderer: { name: "text-input" }
                }),
                createModelField({
                    fieldId: "productPrice",
                    type: "number",
                    label: "Price",
                    renderer: { name: "text-input" }
                })
            ],
            layout: [["name"], ["productSku", "productPrice"]],
            titleFieldId: "name"
        })
    ];
};`}
</Editor>
<p>{`As we can see, first we define a new content model group via the `}<inlineCode parentName="p">{`createModelGroupPlugin`}</inlineCode>{` plugin factory. The following properties are required:`}</p>
<ul>
<li parentName="ul"><inlineCode parentName="li">{`id`}</inlineCode>{` - a unique identifier of the content model group`}</li>
<li parentName="ul"><inlineCode parentName="li">{`name`}</inlineCode>{` - the name of the content model group`}</li>
<li parentName="ul"><inlineCode parentName="li">{`description`}</inlineCode>{` - a short description of the content model group`}</li>
<li parentName="ul"><inlineCode parentName="li">{`slug`}</inlineCode>{` - a unique identifier of the content model group, used in URLs`}</li>
<li parentName="ul"><inlineCode parentName="li">{`icon`}</inlineCode>{` - the icon of the content model group (more info in the `}<a parentName="li" {...{
          "href": "#what-are-the-values-that-i-can-pass-to-the-icon-property-of-the-cms-group-plugin-plugin"
        }}>{`FAQ`}</a>{` section)`}</li>
</ul>
<p>{`Furthermore, upon calling the `}<inlineCode parentName="p">{`createModelPlugin`}</inlineCode>{` plugin factory, we get to define all of our content model’s properties, like its name, ID (`}<inlineCode parentName="p">{`modelId`}</inlineCode>{`), a content model group to which it belongs to, and most importantly, all of the fields that it consists of.`}</p>
<p>{`Fields of a content model are defined via the `}<inlineCode parentName="p">{`fields`}</inlineCode>{` property, which is an array of `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/next/packages/api-headless-cms/src/types/modelField.ts#L23"
      }}><inlineCode parentName="a">{`CmsModelField`}</inlineCode></a>{` objects, which we create via the `}<inlineCode parentName="p">{`createModelField`}</inlineCode>{` factory function.`}</p>
<p>{`Note that some of the properties that we need to define for each field are simpler than others, for example `}<inlineCode parentName="p">{`label`}</inlineCode>{` or `}<inlineCode parentName="p">{`placeholderText`}</inlineCode>{`. On the other hand, properties like `}<inlineCode parentName="p">{`type`}</inlineCode>{`, `}<inlineCode parentName="p">{`renderer.name`}</inlineCode>{`, and `}<inlineCode parentName="p">{`validation.name`}</inlineCode>{` contain values that actually reference other plugins. In case an invalid reference was provided, an error will be thrown and you will have to make corrections.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`  All available `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-js/tree/v5.35.0/packages/api-headless-cms/src/graphqlFields"
        }}>{`field types
(`}<inlineCode parentName="a">{`type`}</inlineCode>{`)`}</a>{`, `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-js/tree/v5.35.0/packages/app-headless-cms/src/admin/plugins/fieldRenderers"
        }}>{`field
renderers
(`}<inlineCode parentName="a">{`renderer.name`}</inlineCode>{`)`}</a>{`,
and `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-js/tree/v5.35.0/packages/api-headless-cms/src/validators"
        }}>{`field validators
(`}<inlineCode parentName="a">{`validators.name`}</inlineCode>{`)`}</a>{` can be
found in our GitHub repository.`}</p>
</Alert>
<Alert type="success" mdxType="Alert">
<p>{`  Want to learn how to create your own custom field type? Check out the `}<_Link href="/docs/5.x/headless-cms/extending/custom-field-type">{`Create a Custom Field Type`}</_Link>{`
how-to guide.`}</p>
</Alert>
<p>{`Ultimately, with this code in place, we should be able to see the following two items in our Admin Area main menu:`}</p>
<Image src={_Image2} alt={"E-Commerce Group and Product Model"} mdxType="Image" />
<p>{`Note that both the `}<strong parentName="p">{`Product`}</strong>{` content model and the `}<strong parentName="p">{`E-Commerce`}</strong>{` content model group will be available for all existing locales and tenants. If you’re interested in defining a content model only for a specific locale or tenant, check out the examples below.`}</p>
<_Heading level={2} id={"more-examples"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>More Examples</_Heading>
<_Heading level={3} id={"model-field-with-multiple-validators"} nextElement={{
      "type": "paragraph"
    }}>Model Field With Multiple Validators</_Heading>
<p>{`In this example, we define a new `}<strong parentName="p">{`Product Category`}</strong>{` content model, which consists of a single field: `}<strong parentName="p">{`Name`}</strong>{`. We also add two validators to the field: `}<inlineCode parentName="p">{`required`}</inlineCode>{` and `}<inlineCode parentName="p">{`unique`}</inlineCode>{`.`}</p>
<Alert type={"info"} mdxType="Alert">
<p>{`  A list of all available field validators can be found in our `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-js/tree/v5.39.0/packages/api-headless-cms/src/validators"
        }}>{`GitHub repository`}</a>{`.`}</p>
</Alert>
<Editor title="extensions/models/src/index.ts" lang="ts" mdxType="Editor">
{`import {
    createModelGroupPlugin,
    createModelPlugin
} from "@webiny/api-serverless-cms";

import { createModelField } from "@webiny/api-headless-cms";

export const createExtension = () => {
    return [
        createModelGroupPlugin({
            // E-Commerce content model group.
        }),
        createModelPlugin({
            name: "Product Category",
            modelId: "productCategory",
            description: "Product category.",
            group: {
                id: "ecommerce",
                name: "E-Commerce"
            },
            fields: [
                createModelField({
                    id: "name",
                    fieldId: "name",
                    type: "text",
                    label: "Name",
                    renderer: { name: "text-input" },

                    // Validators for the field.
                    validation: [
                        {
                            // Ensure the field value is required.
                            name: "required",
                            message: "Value is required."
                        },
                        {
                            // Ensure the field value is unique.
                            name: "unique",
                            message: "Field value must be unique."
                        }
                    ]
                })
            ],
            layout: [["name"]],
            titleFieldId: "name"
        })
    ];
};`}
</Editor>
<_Heading level={3} id={"reference-fields"} nextElement={{
      "type": "paragraph"
    }}>Reference Fields</_Heading>
<p>{`In this example, we add a new field to the `}<strong parentName="p">{`Product`}</strong>{` content model that we created in the `}<a parentName="p" {...{
        "href": "#basic-example"
      }}>{`basic example`}</a>{`. The new field is called `}<strong parentName="p">{`Category`}</strong>{`, and it is a reference field that references the `}<strong parentName="p">{`Product Category`}</strong>{` content model.`}</p>
<Editor title="extensions/models/src/index.ts" lang="diff-ts" mdxType="Editor">
{`import {
    createModelGroupPlugin,
    createModelPlugin
} from "@webiny/api-serverless-cms";

import { createModelField } from "@webiny/api-headless-cms";

export const createExtension = () => {
    return [
        createModelGroupPlugin({
            // E-Commerce content model group.
        }),
        createModelPlugin({
            // Product category content model.
        }),
        createModelPlugin({
            name: "Product",
            modelId: "product",
            description: "Product content model",
            group: {
                id: "ecommerce",
                name: "E-Commerce"
            },
            fields: [
                createModelField({
                    fieldId: "name",
                    type: "text",
                    label: "name",
                    helpText: "A short product name",
                    renderer: { name: "text-input" },
                    validation: [
                        {
                            name: "required",
                            message: "Value is required."
                        }
                    ]
                }),
                createModelField({
                    fieldId: "productSku",
                    type: "text",
                    label: "SKU",
                    placeholderText: "SKU = Stock Keeping Unit",
                    renderer: { name: "text-input" }
                }),
                createModelField({
                    fieldId: "productPrice",
                    type: "number",
                    label: "Price",
                    renderer: { name: "text-input" }
                }),
+               createModelField({
+                   id: "productCategory",
+                   fieldId: "productCategory",
+                   type: "ref",
+                   label: "Category",
+                   renderer: { name: "ref-input" },
+                   settings: {
+                       models: [
+                           {
+                               modelId: "productCategory"
+                           }
+                       ]
+                   }
+               })
            ],
+           layout: [["name"], ["productSku", "productPrice"], ["productCategory"]],
            titleFieldId: "name"
        })
    ];
};`}
</Editor>
<p>{`The following screenshot shows the `}<strong parentName="p">{`Product`}</strong>{` content model with the `}<strong parentName="p">{`Category`}</strong>{` reference field.`}</p>
<Image src={_Image3} alt={"Product Model"} mdxType="Image" />
<_Heading level={3} id={"object-fields"} nextElement={{
      "type": "paragraph"
    }}>Object Fields</_Heading>
<p>{`In this example, we define a new `}<strong parentName="p">{`Product Review`}</strong>{` content model, which consists of three fields: `}<strong parentName="p">{`Reviewer Name`}</strong>{`, `}<strong parentName="p">{`Rating`}</strong>{`, and `}<strong parentName="p">{`Review`}</strong>{`.`}</p>
<p>{`The `}<strong parentName="p">{`Review`}</strong>{` field is an `}<strong parentName="p">{`object`}</strong>{` field that consists of two subfields: `}<strong parentName="p">{`Review Title`}</strong>{` and `}<strong parentName="p">{`Review Description`}</strong>{`. Also, via the `}<inlineCode parentName="p">{`multipleValues: true`}</inlineCode>{` flag, the `}<strong parentName="p">{`Review`}</strong>{` field is set to allow multiple values. In other words, a single product review can consist of multiple review titles and descriptions.`}</p>
<Editor title="extensions/models/src/index.ts" lang="ts" mdxType="Editor">
{`import {
    createModelGroupPlugin,
    createModelPlugin
} from "@webiny/api-serverless-cms";

import { createModelField } from "@webiny/api-headless-cms";


export const createExtension = () => {
    return [
        createModelGroupPlugin({
            // E-Commerce content model group.
        }),
        createModelPlugin({
            name: "Product Review",
            modelId: "productReview",
            description: "Review of a product",
            group: {
                id: "ecommerce",
                name: "E-Commerce"
            },
            fields: [
                createModelField({
                    id: "reviewerName",
                    fieldId: "reviewerName",
                    type: "text",
                    label: "Reviewer Name",
                    helpText: "Name of Reviewer",
                    renderer: { name: "text-input" },
                    validation: [
                        {
                            name: "required",
                            message: "Reviewer name is required."
                        }
                    ]
                }),
                createModelField({
                    id: "productRating",
                    fieldId: "productRating",
                    type: "number",
                    label: "Rating",
                    helpText: "Number of stars out of 5",
                    renderer: { name: "text-input" }
                }),
                createModelField({
                    id: "review",
                    fieldId: "review",
                    type: "object",
                    label: "Product Review",
                    helpText: "Product review from a reviewer",

                    // Allow multiple values for the field. In other words, 
                    // a single product review can consist of multiple review
                    // titles and descriptions.
                    multipleValues: true,

                    // The "objects" renderer is used to render the object field, when the field
                    // is set to allow multiple values. In case the field is set to allow a single
                    // value, the "object" renderer is used.
                    renderer: { name: "objects" },

                    settings: {
                        fields: [
                            createModelField({
                                id: "reviewTitle",
                                fieldId: "reviewTitle",
                                type: "text",
                                label: "Review title",
                                renderer: { name: "text-input" },
                                validation: [
                                    {
                                        name: "required",
                                        message: "Review title is required."
                                    }
                                ]
                            }),
                            createModelField({
                                id: "reviewDescription",
                                fieldId: "reviewDescription",
                                type: "text",
                                label: "Review description",
                                renderer: { name: "text-input" },
                                validation: [
                                    {
                                        name: "required",
                                        message: "Review description is required."
                                    }
                                ]
                            })
                        ],
                        layout: [["reviewTitle"], ["reviewDescription"]]
                    }
                })
            ],
            layout: [["reviewerName"], ["productRating"], ["review"]],
            titleFieldId: "reviewerName"
        })
    ];
};
`}
</Editor>
<_Heading level={3} id={"disable-authorization-for-content-models-and-entries"} nextElement={{
      "type": "paragraph"
    }}>Disable Authorization for Content Models and Entries</_Heading>
<p>{`With this 5.39.2 release, upon defining content models programmatically, developers now also have the ability to disable authorization checks for the content model and its entries. This can be useful when you want to quickly grant full access to all `}<strong parentName="p">{`authenticated`}</strong>{` users, without the need to have the required security permissions in place, defined via the Security application.`}</p>
<Image src={securityPermissions} alt="Security Permissions Defined via the Security Application" mdxType="Image" />
<p>{`Additionally, in case the `}<_Link href="/docs/5.x/enterprise/aacl/folder-level-permissions">{`Folder Level Permissions`}</_Link>{` feature is enabled in your Webiny project, the content model entries will not be subject to folder level permissions.`}</p>
<p>{`The following example demonstrates how to disable authorization for a content model and its entries.`}</p>
<Editor title="extensions/models/src/index.ts" lang="diff-ts" mdxType="Editor">
{`createModelPlugin({
    name: "Product",
    modelId: "product",
    description: "Product content model",

+   // Disable authorization for the content model and its entries. All
+   // authenticated users will have full access to the content model and its entries.
+   authorization: false,

    // The rest of the properties...
});`}
</Editor>
<p>{`With the `}<inlineCode parentName="p">{`authorization`}</inlineCode>{` property set to `}<inlineCode parentName="p">{`false`}</inlineCode>{`, base authorization checks are disabled for the content model and its entries. Furthermore, in case the `}<_Link href="/docs/5.x/enterprise/aacl/folder-level-permissions">{`Folder Level Permissions`}</_Link>{` feature is enabled in your Webiny project, the content model entries will not be subject to folder level permissions.`}</p>
<_Heading level={3} id={"define-a-content-model-only-for-a-specific-locale"} nextElement={{
      "type": "paragraph"
    }}>Define a Content Model Only for a Specific Locale</_Heading>
<p>{`In this example, we show how we can define content models and content model groups only for a specific locale, in our case, the `}<inlineCode parentName="p">{`en-US`}</inlineCode>{`.`}</p>
<Editor title="extensions/models/src/index.ts" lang="ts" mdxType="Editor">
{`import {
    createContextPlugin,
    createModelGroupPlugin,
    createModelPlugin
} from "@webiny/api-serverless-cms";

import { createModelField } from "@webiny/api-headless-cms";


export const createExtension = () => {
  return [
    createContextPlugin(context => {
      // Only register needed plugins if the current
      // content locale is set to "en-US".
      const contentLocale = context.i18n.getContentLocale();
      if (!contentLocale || contentLocale.code !== "en-US") {
        return;
      }

      // Register content model and group plugins.
      context.plugins.register([
        createModelGroupPlugin({
          // ...
        }),
        createModelPlugin({
          // ...
        })
      ]);
    })
  ];
};`}
</Editor>
<p>{`As we can see, we’ve used the `}<inlineCode parentName="p">{`createContextPlugin`}</inlineCode>{` first in order to create a new context plugin and to first be able to access the dynamic `}<inlineCode parentName="p">{`context`}</inlineCode>{` object and the `}<inlineCode parentName="p">{`context.i18nContent.getLocale`}</inlineCode>{` method. Once we’ve determined that the `}<inlineCode parentName="p">{`en-US`}</inlineCode>{` is the current locale, we proceed by registering the neccessary plugins.`}</p>
<_Heading level={3} id={"define-a-content-model-only-for-a-specific-tenant"} nextElement={{
      "type": "paragraph"
    }}>Define a Content Model Only for a Specific Tenant</_Heading>
<p>{`In this example, we show how we can define content models and content model groups only for a specific tenant, in our case, the `}<inlineCode parentName="p">{`root`}</inlineCode>{`.`}</p>
<Editor title="extensions/models/src/index.ts" lang="ts" mdxType="Editor">
{`
import {
    createContextPlugin,
    createModelGroupPlugin,
    createModelPlugin
} from "@webiny/api-serverless-cms";

export const createExtension = () => {
  return [
    createContextPlugin(context => {
      // Only register needed plugins if the current tenant is set to "root".
      const currentTenant = context.tenancy.getCurrentTenant();
      if (currentTenant.id !== "root") {
        return;
      }

      // Register content model and group plugins.
      context.plugins.register([
        createModelGroupPlugin({
          // ...
        }),
        createModelPlugin({
          // ...
        })
      ]);
    })
  ];
};`}
</Editor>
<p>{`As we can see, like in the previous example, we’re again utilizing the `}<inlineCode parentName="p">{`createContextPlugin`}</inlineCode>{` plugin factory, in order to be able to access the dynamic `}<inlineCode parentName="p">{`context`}</inlineCode>{` object, and the `}<inlineCode parentName="p">{`context.tenancy.getCurrentTenant`}</inlineCode>{` method. Once we’ve determined that the `}<inlineCode parentName="p">{`root`}</inlineCode>{` is the current tenant, we proceed by registering the necessary plugins.`}</p>
<_Heading level={2} id={"best-practices"} nextElement={{
      "type": "paragraph"
    }}>Best Practices</_Heading>
<p>{`When defining content models programmatically, there are a couple of best practices that you should follow.`}</p>
<_Heading level={3} id={"some-field-properties-must-never-change"} nextElement={{
      "type": "paragraph"
    }}>Some Field Properties Must Never Change</_Heading>
<p>{`When defining content models programmatically, there are a couple of properties that should not be changed once the content model is created. Changing these properties can lead to data loss, and in some cases, even to data corruption.`}</p>
<p>{`When it comes to content models, the `}<inlineCode parentName="p">{`modelId`}</inlineCode>{` property of the content model should never be changed. Changing the `}<inlineCode parentName="p">{`modelId`}</inlineCode>{` property can lead to data loss, as the data stored in the database will no longer be associated with the content model.`}</p>
<p>{`When it comes to content model fields, the following properties should not be changed:`}</p>
<ol>
<li parentName="ol"><inlineCode parentName="li">{`id`}</inlineCode></li>
<li parentName="ol"><inlineCode parentName="li">{`storageId`}</inlineCode>{` (if you have defined it manually)`}</li>
<li parentName="ol"><inlineCode parentName="li">{`type`}</inlineCode></li>
<li parentName="ol"><inlineCode parentName="li">{`multipleValues`}</inlineCode></li>
<li parentName="ol"><inlineCode parentName="li">{`predefinedValues`}</inlineCode>{` (you can add values but do not remove them)`}</li>
</ol>
<p>{`Furthermore, within the `}<inlineCode parentName="p">{`settings`}</inlineCode>{` object, the following properties should not be changed:`}</p>
<ul>
<li parentName="ul"><inlineCode parentName="li">{`settings.fields`}</inlineCode>{` - same rules apply as for the parent field`}</li>
<li parentName="ul"><inlineCode parentName="li">{`settings.models`}</inlineCode>{` - you can add models but do not remove them`}</li>
<li parentName="ul"><inlineCode parentName="li">{`settings.type`}</inlineCode></li>
</ul>
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"can-content-models-and-groups-defined-programmatically-be-edited-via-admin-area"} nextElement={{
      "type": "paragraph"
    }}>Can Content Models (And Groups) Defined Programmatically Be Edited via Admin Area?</_Heading>
<p>{`Content models and content model groups that were defined programmatically cannot be edited via Admin Area (via the Content Model Editor and Content Model Groups module). All of the changes need to be done within the application code.`}</p>
<_Heading level={3} id={"how-to-set-a-default-value-for-a-field"} nextElement={{
      "type": "paragraph"
    }}>How to Set a Default Value for a Field?</_Heading>
<p>{`You can set a default value for a field using the `}<inlineCode parentName="p">{`defaultValue`}</inlineCode>{` property. For example:`}</p>
<Editor title="" lang="diff-ts" mdxType="Editor">
{`import { createModelPlugin, createModelField } from "@webiny/api-serverless-cms";

export const createExtension = () => {
    return [
        createModelPlugin({
            name: "Blog Post",
            modelId: "blogPost",
            group: {
                id: "group",
                name: "Group"
            },
            fields: [
                createModelField({
                    id: "id",
                    type: "number",
                    fieldId: "id",
                    label: "ID"
                }),
                createModelField({
                    id: "title",
                    type: "text",
                    fieldId: "title",
                    label: "Title",
+                   settings: {
+                       defaultValue: "Untitled"
+                   }
                })
                // Other fields...
            ]
        })
    ];
};`}
</Editor>
<p>{`In short, you will need to add `}<inlineCode parentName="p">{`settings.defaultValue`}</inlineCode>{` property to define a default value to a field.`}</p>
<_Heading level={3} id={"are-there-any-differences-when-it-comes-to-security-controls"} nextElement={{
      "type": "paragraph"
    }}>Are There Any Differences When It Comes to Security Controls?</_Heading>
<p>{`When it comes to security, both ways of defining content models and content model groups have access to the same features and follow the same security-related built-in mechanisms. In other words, via the Security application, you can still decide which users have access to particular content models and content model groups that were defined via plugins, and which don’t.`}</p>
<_Heading level={3} id={"can-i-convert-a-content-model-that-was-defined-via-admin-area-into-a-plugin-and-vice-versa"} nextElement={{
      "type": "paragraph"
    }}>Can I Convert a Content Model That Was Defined via Admin Area Into a Plugin (And Vice-Versa)?</_Heading>
<p>{`You can, but this will require a bit of manual work. You will have to find the content model record directly in the Amazon DynamoDB table, and copy the data into your application code and try to fit it into the `}<inlineCode parentName="p">{`createModelPlugin`}</inlineCode>{` plugin factory.`}</p>
<p>{`If you’re doing this and require additional assistance, feel free to contact us over our community `}<a parentName="p" {...{
        "href": "https://www.webiny.com/slack"
      }}>{`Slack`}</a>{`.`}</p>
<_Heading level={3} id={"what-are-the-values-that-i-can-pass-to-the-icon-property-of-the-cms-group-plugin-plugin"} nextElement={{
      "type": "paragraph"
    }}>What Are the Values That I Can Pass to the<code>icon</code>Property of the<a href={"https://github.com/webiny/webiny-js/blob/v5.21.0/packages/api-headless-cms/src/content/plugins/CmsGroupPlugin.ts#L4"}>CmsGroupPlugin</a>Plugin?</_Heading>
<p>{`When defining content model groups via Admin Area, we pick its icon via a simple drop-down menu:`}</p>
<Image src={_Image4} alt={"Content Model Groups Form - Icon Selector"} mdxType="Image" />
<p>{`On the other hand, when defining content model groups via a plugin, we need to specify the icon manually, by setting the same string value that would be set once an icon was picked from the above seen drop-down menu.`}</p>
<p>{`By default, we include three free sets of Font Awesome icons (via the `}<a parentName="p" {...{
        "href": "https://fortawesome.com/"
      }}>{`Fort Awesome`}</a>{` library): `}<a parentName="p" {...{
        "href": "https://fortawesome.com/sets/font-awesome-5-regular"
      }}>{`regular`}</a>{`, `}<a parentName="p" {...{
        "href": "https://fortawesome.com/sets/font-awesome-5-solid"
      }}>{`solid`}</a>{`, and `}<a parentName="p" {...{
        "href": "https://fortawesome.com/sets/font-awesome-5-brands"
      }}>{`brands`}</a>{`. So, when defining your plugin, simply use the icon code listed on the set’s icons list page, prepended with the set code.`}</p>
<p>{`Here are a couple of examples of specifying icons from solid, regular, and brands sets:`}</p>
<ul>
<li parentName="ul"><inlineCode parentName="li">{`fas/shopping-cart`}</inlineCode></li>
<li parentName="ul"><inlineCode parentName="li">{`fas/id-card-alt`}</inlineCode></li>
<li parentName="ul"><inlineCode parentName="li">{`far/address-book`}</inlineCode></li>
<li parentName="ul"><inlineCode parentName="li">{`far/copy`}</inlineCode></li>
<li parentName="ul"><inlineCode parentName="li">{`fab/aws`}</inlineCode>{`.`}</li>
<li parentName="ul"><inlineCode parentName="li">{`fab/react`}</inlineCode>{`.`}</li>
</ul>
<_Heading level={3} id={"what-is-the-purpose-of-title-field-id-in-the-content-model-definition"} nextElement={{
      "type": "paragraph"
    }}>What Is the Purpose of<code>titleFieldId</code>in the Content Model Definition?</_Heading>
<p>{`The `}<inlineCode parentName="p">{`titleFieldId`}</inlineCode>{` in a content model is used to specify which field should be used as the title for the entries of that content model. This is a `}<inlineCode parentName="p">{`text`}</inlineCode>{` field that provides a human-readable summary of each entry.`}</p>
<p>{`For example, a blog post content model might consists of three fields: Title, Body, and Author. By setting `}<inlineCode parentName="p">{`titleFieldId`}</inlineCode>{` to the Title field (its field ID: `}<inlineCode parentName="p">{`title`}</inlineCode>{`), the value of the field will be used as the title for each blog post in the list of all blog posts.`}</p>
<Editor title="" lang="diff-ts" mdxType="Editor">
{`import { createModelPlugin, createModelField } from "@webiny/api-serverless-cms";

export const createExtension = () => {
    return [
        createModelPlugin({
            name: "Blog Post",
            modelId: "blogPost",
            group: {
                id: "group",
                name: "Group"
            },
            fields: [
                createModelField({
                    id: "id",
                    type: "number",
                    fieldId: "id",
                    label: "ID"
                }),
                createModelField({
                    id: "title",
                    type: "text",
                    fieldId: "title",
                    label: "Title"
                })
                // Other fields...
            ],

+           // Here, \`title\` field is used as the title for each entry.
+           titleFieldId: "title"
        })
    ];
};`}
</Editor>
<_Heading level={3} id={"can-i-modify-the-singular-api-name-and-plural-api-name-of-a-model"} nextElement={{
      "type": "paragraph"
    }}>Can I Modify the Singular API Name and Plural API Name of a Model?</_Heading>
<p>{`Modifying the Singular API Name and Plural API Name of a model cannot be done via the UI due to the potential risks involved. However, you can achieve this through the API by using the `}<inlineCode parentName="p">{`updateContentModel`}</inlineCode>{` mutation in the `}<_Link href="/docs/5.x/headless-cms/basics/graphql-api#manage">{`Headless CMS Manage GraphQL API`}</_Link>{`, accessible in the API Playground.`}</p>
<p>{`Please be extra caution when using the `}<inlineCode parentName="p">{`updateContentModel`}</inlineCode>{` mutation. You must pass the entire content model object, including all fields, during the update. To get all the details about a model, you can use the `}<inlineCode parentName="p">{`getContentModel`}</inlineCode>{` API. The reason for passing the complete object is to avoid ambiguity in partial updates, where it is unclear whether you intend to remove a value or keep it unchanged.`}</p>
<p>{`For greater control over your models, you can create them via code as detailed in this tutorial.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;