/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { CanIUseThis } from "@/components/CanIUseThis";
import { WhatYouWillLearn } from "@/components/WhatYouWillLearn";
import YouTube from "@/components/YouTube";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Private Models",
  "description": "Learn about private models and how to create them",
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
  "title": "Introduction",
  "slug": "introduction",
  "children": []
}, {
  "title": "Public Models",
  "slug": "public-models",
  "children": []
}, {
  "title": "Private Models",
  "slug": "private-models",
  "children": [{
    "title": "Use Cases",
    "slug": "use-cases",
    "children": []
  }, {
    "title": "Examples",
    "slug": "examples",
    "children": []
  }]
}, {
  "title": "Building a Private Book Model",
  "slug": "building-a-private-book-model",
  "children": [{
    "title": "Step 1: Create a Book App",
    "slug": "step-1-create-a-book-app",
    "children": []
  }, {
    "title": "Step 2: Define Model Definition",
    "slug": "step-2-define-model-definition",
    "children": []
  }, {
    "title": "Step 3: Implement CRUD Operations",
    "slug": "step-3-implement-crud-operations",
    "children": [{
      "title": "Step 3.1: Define Context and Various Types",
      "slug": "step-3-1-define-context-and-various-types"
    }, {
      "title": "Step 3.2: Define Interfaces & Methods for Creating and Listing Books",
      "slug": "step-3-2-define-interfaces-and-methods-for-creating-and-listing-books"
    }, {
      "title": "Step 3.3: Implement Storage Functionality",
      "slug": "step-3-3-implement-storage-functionality"
    }]
  }, {
    "title": "Step 4: Define GraphQL Schema",
    "slug": "step-4-define-graph-ql-schema",
    "children": []
  }, {
    "title": "Step 5: Create Book App and Register Plugins",
    "slug": "step-5-create-book-app-and-register-plugins",
    "children": []
  }, {
    "title": "Step 6: Export the App",
    "slug": "step-6-export-the-app",
    "children": []
  }, {
    "title": "Step 7: Register the Book App in Webiny",
    "slug": "step-7-register-the-book-app-in-webiny",
    "children": []
  }, {
    "title": "Step 8: Deploy the Application",
    "slug": "step-8-deploy-the-application",
    "children": []
  }, {
    "title": "Step 9: Testing",
    "slug": "step-9-testing",
    "children": []
  }]
}, {
  "title": "Next Steps",
  "slug": "next-steps",
  "children": [{
    "title": "Video Reference",
    "slug": "video-reference",
    "children": []
  }, {
    "title": "Example Code References",
    "slug": "example-code-references",
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






<CanIUseThis since={"5.39.2"} mdxType="CanIUseThis" />
<WhatYouWillLearn mdxType="WhatYouWillLearn">
<ul>
<li parentName="ul">{`what is private model`}</li>
<li parentName="ul">{`how to create a private model`}</li>
<li parentName="ul">{`how to implement CRUD operations for a private model`}</li>
</ul>
</WhatYouWillLearn>
<_Heading level={2} id={"introduction"} nextElement={{
      "type": "paragraph"
    }}>Introduction</_Heading>
<p>{`Content models are a main building block in Headless CMS. The first step to storing information in a Headless CMS is to create a `}<_Link href="/docs/5.x/user-guides/headless-cms/essentials/glossary#content-model">{`content model`}</_Link>{`.`}</p>
<p>{`Let’s delve into the details of both public and private models and explore how you can leverage them in Webiny.`}</p>
<_Heading level={2} id={"public-models"} nextElement={{
      "type": "paragraph"
    }}>Public Models</_Heading>
<p>{`Public models in Webiny are those content models that are visible within the admin app. These models come with a generated navigation menu, allowing easy access to content entries through the user interface.`}</p>
<p>{`Creating public models involves the conventional process of logging into the admin app and using the user interface to create a content model or you can also define public content model via code. The result is the automatic generation of an API, including a GraphQL type and a set of resolvers for seamless data interaction.
Alternatively, you can also build public models through code using a `}<_Link href="/docs/5.x/headless-cms/extending/content-models-via-code-storage-id">{`plugin`}</_Link>{`.`}</p>
<_Heading level={2} id={"private-models"} nextElement={{
      "type": "paragraph"
    }}>Private Models</_Heading>
<p>{`Private models, in contrast, remain hidden from the admin app UI. These models are defined programmatically through a plugin. While the schema and resolvers aren’t auto-generated, developers have the freedom to design them on the backend or API.`}</p>
<_Heading level={3} id={"use-cases"} nextElement={{
      "type": "paragraph"
    }}>Use Cases</_Heading>
<p>{`Private models find their significance in scenarios where UI visibility is not necessary. They don’t generate a navigation menu, UI, or expose content models in the CMS API endpoints.`}</p>
<_Heading level={3} id={"examples"} nextElement={{
      "type": "paragraph"
    }}>Examples</_Heading>
<p>{`In Webiny, we used private models in various apps. Notable examples include the file manager, folders component, and advanced filters in the Headless CMS UI. These applications showcase the power and flexibility of private models in developing tailored UIs.`}</p>
<_Heading level={2} id={"building-a-private-book-model"} nextElement={{
      "type": "paragraph"
    }}>Building a Private<code>Book</code>Model</_Heading>
<p>{`Let’s walk through the process of building a private model, taking the `}<inlineCode parentName="p">{`Book`}</inlineCode>{` model with `}<inlineCode parentName="p">{`title`}</inlineCode>{` and `}<inlineCode parentName="p">{`price`}</inlineCode>{` fields as an example.
We will also implement create book and list books operations on this model.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`The code that we cover in this tutorial can also be found in our `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-examples/tree/master/headless-cms/private-model/5.39.0"
        }}>{`GitHub examples repository`}</a>{`.`}</p>
</Alert>
<_Heading level={3} id={"step-1-create-a-book-app"} nextElement={{
      "type": "paragraph"
    }}>Step 1: Create a Book App</_Heading>
<p>{`We will start by creating a Book App, which is a collection of various plugins needed for Private models.
In simple terms, the Book App is a package containing various plugins. We will explore each plugin in the upcoming steps.`}</p>
<p>{`Create a directory named `}<inlineCode parentName="p">{`packages/books`}</inlineCode>{` at the root of the Webiny project, and create `}<inlineCode parentName="p">{`package.json`}</inlineCode>{` and `}<inlineCode parentName="p">{`tsconfig.json`}</inlineCode>{` files.`}</p>
<Editor title="package.json" lang="json" mdxType="Editor">
{`{
  "name": "@myapp/books",
  "main": "./src/index.ts"
}`}
</Editor>
<Editor title="tsconfig.json" lang="json" mdxType="Editor">
{`{
  "extends": "../../tsconfig",
  "include": ["./src"],
  "compilerOptions": {
    "composite": false
  }
}`}
</Editor>
<p>{`Now, create an `}<inlineCode parentName="p">{`src`}</inlineCode>{` directory under the `}<inlineCode parentName="p">{`packages/books`}</inlineCode>{` directory. We will write our custom code in this directory.`}</p>
<_Heading level={3} id={"step-2-define-model-definition"} nextElement={{
      "type": "paragraph"
    }}>Step 2: Define Model Definition</_Heading>
<p>{`Create a file (`}<inlineCode parentName="p">{`book.model.ts`}</inlineCode>{`) where you define the private model for your content. This file includes the definition of the book model with fields like `}<inlineCode parentName="p">{`title`}</inlineCode>{` and `}<inlineCode parentName="p">{`price`}</inlineCode>{`, along with their respective validations. We will utilize the `}<inlineCode parentName="p">{`createPrivateModel`}</inlineCode>{` utility for this.`}</p>
<p>{`Please create these two files in the `}<inlineCode parentName="p">{`packages/books/src`}</inlineCode>{` directory.`}</p>
<Editor title="book.model.ts" lang="tsx" mdxType="Editor">
{`import { createPrivateModel, createModelField } from "@webiny/api-headless-cms";

const required = () => {
  return {
    name: "required",
    message: "Value is required."
  };
};

export const BOOK_MODEL_ID = "pvBook";

export const createBookModel = () => {
  return createPrivateModel({
    name: "PvBook",
    modelId: BOOK_MODEL_ID,
    titleFieldId: "title",
    fields: [
      createModelField({
        label: "Title",
        fieldId: "title",
        type: "text",
        validation: [required()]
      }),
      createModelField({
        label: "Price",
        fieldId: "price",
        type: "number",
        validation: [required()]
      })
    ]
  });
};`}
</Editor>
<_Heading level={3} id={"step-3-implement-crud-operations"} nextElement={{
      "type": "paragraph"
    }}>Step 3: Implement CRUD Operations</_Heading>
<p>{`Now that the private model `}<inlineCode parentName="p">{`Book`}</inlineCode>{` is ready, the next step is to perform CRUD operations on the private model. In this example, we will demonstrate two operations: Create Book and List Books. We will do this in the following three steps.`}</p>
<_Heading level={4} id={"step-3-1-define-context-and-various-types"} nextElement={{
      "type": "paragraph"
    }}>Step 3.1: Define Context and Various Types</_Heading>
<p>{`We will use these Context and types further, so for now, let’s define them.`}</p>
<p>{`Create a file named `}<inlineCode parentName="p">{`src/types.ts`}</inlineCode>{`.`}</p>
<Editor title="types.ts" lang="tsx" mdxType="Editor">
{`import type { Context as BaseContext } from "api-graphql/src/types";

export interface Book {
  id: string;
  title: string;
  price: number;
}

export type CreateBookInput = Pick<Book, "title" | "price">;

export interface BooksStorageOperationsListResponseMeta {
  hasMoreItems: boolean;
  totalCount: number;
  cursor: string | null;
}

export type BooksStorageOperationsListResponse = [Book[], BooksStorageOperationsListResponseMeta];

export interface BooksStorageOperationsListParams {
  limit: number;
  after?: string | null;
  search?: string;
}

export interface IBooksCrud {
  createBook(data: CreateBookInput): Promise<Book>;
  listBooks(params: BooksStorageOperationsListParams): Promise<BooksStorageOperationsListResponse>;
}

export interface IBooksStorage {
  create(book: CreateBookInput): Promise<Book>;
  list(params: BooksStorageOperationsListParams): Promise<BooksStorageOperationsListResponse>;
}

export interface BooksContext {
  books: IBooksCrud;
}

export interface Context extends BaseContext, BooksContext {}`}
</Editor>
<_Heading level={4} id={"step-3-2-define-interfaces-and-methods-for-creating-and-listing-books"} nextElement={{
      "type": "paragraph"
    }}>Step 3.2: Define Interfaces &amp; Methods for Creating and Listing Books</_Heading>
<p>{`In this step, we will define interfaces for book objects, input for creating books, and methods for creating and listing books.`}</p>
<p>{`Create a file named `}<inlineCode parentName="p">{`src/books.crud.ts`}</inlineCode>{`.`}</p>
<Editor title="books.crud.ts" lang="tsx" mdxType="Editor">
{`import {
  BooksStorageOperationsListParams,
  CreateBookInput,
  IBooksCrud,
  IBooksStorage
} from "./types";

export class BooksCrud implements IBooksCrud {
  private storage: IBooksStorage;

  constructor(storage: IBooksStorage) {
    this.storage = storage;
  }

  async createBook(data: CreateBookInput) {
    return await this.storage.create(data);
  }

  async listBooks(params: BooksStorageOperationsListParams) {
    return await this.storage.list(params);
  }
}

/**
 * You also add lifecycle event and permission checks here.:
 * - add lifecycle events (optional)
 * - add permission checks (optional)
 */`}
</Editor>
<_Heading level={4} id={"step-3-3-implement-storage-functionality"} nextElement={{
      "type": "paragraph"
    }}>Step 3.3: Implement Storage Functionality</_Heading>
<p>{`Now we will implement storage functionality for the private model and interact with the storage layer using the CMS SDK. We will define a class `}<inlineCode parentName="p">{`BooksStorage`}</inlineCode>{` with methods for creating and listing books and for converting CMS entries to book objects.`}</p>
<p>{`Create a file named `}<inlineCode parentName="p">{`src/books.storage.ts`}</inlineCode>{`.`}</p>
<Editor title="books.storage.ts" lang="tsx" mdxType="Editor">
{`import { CmsEntry, CmsModel, HeadlessCms } from "@webiny/api-headless-cms/types";
import { Book, CreateBookInput } from "./types";
import { BooksStorageOperationsListParams, BooksStorageOperationsListResponse } from "./types";

interface GetTenantId {
  (): string;
}

interface GetLocaleCode {
  (): string;
}

interface BooksStorageParams {
  bookModel: CmsModel;
  cms: HeadlessCms;
  getTenantId: () => string;
  getLocaleCode: () => string;
}

export class BooksStorage {
  private readonly cms: HeadlessCms;
  private readonly getTenantId: GetTenantId;
  private readonly getLocaleCode: GetLocaleCode;
  private readonly model: CmsModel;

  static async create(params: BooksStorageParams) {
    return new BooksStorage(params.bookModel, params.cms, params.getTenantId, params.getLocaleCode);
  }

  private constructor(
    bookModel: CmsModel,
    cms: HeadlessCms,
    getTenantId: GetTenantId,
    getLocaleCode: GetLocaleCode
  ) {
    this.getTenantId = getTenantId;
    this.getLocaleCode = getLocaleCode;
    this.model = bookModel;
    this.cms = cms;
  }

  async create(book: CreateBookInput): Promise<Book> {
    const model = this.getModel();
    const entry = await this.cms.createEntry(model, {
      ...book
    });
    return this.getBookFromEntry(entry);
  }

  private getModel(): CmsModel {
    return { ...this.model, tenant: this.getTenantId(), locale: this.getLocaleCode() };
  }

  /**
   * Convert a CMS entry to a Book object.
   */
  private getBookFromEntry(cmsEntry: CmsEntry) {
    return {
      id: cmsEntry.entryId,
      ...cmsEntry.values
    } as Book;
  }

  async list(
    params: BooksStorageOperationsListParams
  ): Promise<BooksStorageOperationsListResponse> {
    const model = this.getModel();
    const [entries, meta] = await this.cms.listLatestEntries(model, {
      after: params.after,
      limit: params.limit,
      search: params.search
    });
    return [entries.map(entry => this.getBookFromEntry(entry)), meta];
  }
}`}
</Editor>
<_Heading level={3} id={"step-4-define-graph-ql-schema"} nextElement={{
      "type": "paragraph"
    }}>Step 4: Define GraphQL Schema</_Heading>
<p>{`Our CRUD operations are ready. Now, let’s learn how to make them accessible through the GraphQL API. For this, we will use `}<inlineCode parentName="p">{`GraphQLSchemaPlugin`}</inlineCode>{`. Whenever you want to add something new to GraphQL in Webiny, you register a `}<inlineCode parentName="p">{`GraphQLSchemaPlugin`}</inlineCode>{` and specify type definitions and resolvers. Here, we will define type definitions and resolvers for querying and mutating books.`}</p>
<p>{`Create a file named `}<inlineCode parentName="p">{`src/books.graphql.ts`}</inlineCode>{`.`}</p>
<Editor title="books.graphql.ts" lang="tsx" mdxType="Editor">
{`import {
  ErrorResponse,
  GraphQLSchemaPlugin,
  ListResponse,
  Response
} from "@webiny/handler-graphql";
import { Context, BooksStorageOperationsListParams } from "./types";

interface CreateBookInput {
  title: string;
  price: number;
}

export const booksGraphql = new GraphQLSchemaPlugin<Context>({
  typeDefs: /* GraphQL */ \`
    extend type Query {
      books: BooksQuery
    }

    type BookError {
      code: String
      message: String
      data: JSON
      stack: String
    }

    type BookListMeta {
      cursor: String
      totalCount: Int
      hasMoreItems: Boolean
    }

    type Book {
      id: ID!
      title: String!
      price: Number!
    }

    type BooksListResponse {
      data: [Book]
      error: BookError
      meta: BookListMeta
    }

    type BookResponse {
      data: Book
      error: BookError
    }

    type BooksQuery {
      listBooks(limit: Int, search: String, after: String): BooksListResponse
    }

    extend type Mutation {
      books: BooksMutation
    }

    input CreateBookInput {
      title: String!
      price: Number!
    }

    type BooksMutation {
      createBook(input: CreateBookInput!): BookResponse
    }
  \`,
  resolvers: {
    Query: {
      books: () => ({})
    },
    Mutation: {
      books: () => ({})
    },
    BooksQuery: {
      async listBooks(_, args, context) {
        try {
          const { limit, after, search } = args as BooksStorageOperationsListParams;
          const [books, meta] = await context.books.listBooks({ limit, after, search });
          return new ListResponse(books, meta);
        } catch (err) {
          return new ErrorResponse(err);
        }
      }
    },
    BooksMutation: {
      async createBook(_, args, context) {
        try {
          const { title, price } = args["input"] as CreateBookInput;
          const book = await context.books.createBook({ title, price });
          return new Response(book);
        } catch (err) {
          return new ErrorResponse(err);
        }
      }
    }
  }
});`}
</Editor>
<_Heading level={3} id={"step-5-create-book-app-and-register-plugins"} nextElement={{
      "type": "paragraph"
    }}>Step 5: Create Book App and Register Plugins</_Heading>
<p>{`As the next step, we will register all the plugins that we created earlier, i.e.`}</p>
<ul>
<li parentName="ul">{`the private model created in Step 2`}</li>
<li parentName="ul">{`the CRUD operations defined in Step 3`}</li>
<li parentName="ul">{`and the GraphQL schema plugin created in Step 4`}</li>
</ul>
<p>{`Let’s register all these plugins. Create a `}<inlineCode parentName="p">{`src/books.app.ts`}</inlineCode>{` file. This file sets up the context plugin for handling CRUD operations and the GraphQL schema plugin for exposing CRUD operations via GraphQL.`}</p>
<Editor title="books.app.ts" lang="tsx" mdxType="Editor">
{`import { ContextPlugin } from "@webiny/handler-aws";
import { Context } from "./types";
import { CmsModelPlugin, isHeadlessCmsReady } from "@webiny/api-headless-cms";
import WebinyError from "@webiny/error";
import { booksGraphql } from "./books.graphql";
import { BOOK_MODEL_ID, createBookModel } from "./book.model";
import { BooksStorage } from "./books.storage";
import { BooksCrud } from "./books.crud";

export const createBooksApp = () => {
  return new ContextPlugin<Context>(async context => {
    // Exit early if Headless CMS is not installed.
    if (!(await isHeadlessCmsReady(context))) {
        return;
    }

    // Registering the private model.
    context.plugins.register(new CmsModelPlugin(createBookModel()));

    const bookModel = await context.cms.getModel(BOOK_MODEL_ID);

    if (!bookModel) {
      throw new WebinyError(\`Missing private model "\${BOOK_MODEL_ID}".\`);
    }

    const getTenantId = () => {
      return context.tenancy.getCurrentTenant().id;
    };

    const getLocaleCode = () => {
      const locale = context.i18n.getContentLocale();
      if (!locale) {
        throw new WebinyError("Missing locale in Books module.", "LOCALE_ERROR");
      }
      return locale.code;
    };

    const booksStorage = await BooksStorage.create({
      bookModel,
      cms: context.cms,
      getTenantId,
      getLocaleCode
    });

    context.books = new BooksCrud(booksStorage);

    // Registering the GraphQL schema
    context.plugins.register(booksGraphql);
  });
};`}
</Editor>
<_Heading level={3} id={"step-6-export-the-app"} nextElement={{
      "type": "paragraph"
    }}>Step 6: Export the App</_Heading>
<p>{`Create an index file `}<inlineCode parentName="p">{`src/index.ts`}</inlineCode>{`, export the created app.`}</p>
<Editor title="index.ts" lang="tsx" mdxType="Editor">
{`export { createBooksApp } from "./books.app";`}
</Editor>
<_Heading level={3} id={"step-7-register-the-book-app-in-webiny"} nextElement={{
      "type": "paragraph"
    }}>Step 7: Register the Book App in Webiny</_Heading>
<p>{`As the next step, we will register the Book App in the Headless CMS application. Let’s make the following changes in `}<inlineCode parentName="p">{`apps/api/graphql/src/index.ts`}</inlineCode>{` file:`}</p>
<Editor title="apps/api/graphql/src/index.ts" lang="diff-js" mdxType="Editor">
{`(...)

// Import the Book application (private model)
+ import { createBooksApp } from "@myapp/books";

export default [
     // Rest of the plugins
     (...)
     createHeadlessCmsGraphQL({ debug }),
    scaffoldsPlugins(),
+   createBooksApp()
];`}
</Editor>
<_Heading level={3} id={"step-8-deploy-the-application"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 8: Deploy the Application</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`Run the `}<inlineCode parentName="p">{`yarn`}</inlineCode>{` command from the Webiny project root to build our newly created package.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Run the deploy command`}</p>
</li>
</ol>
<Editor title="" lang="null" mdxType="Editor">
{`yarn webiny deploy apps/api --env dev`}
</Editor>
<Alert type="info" mdxType="Alert">
<p>{`Use the `}<_Link href="/docs/5.x/core-development-concepts/basics/watch-command"><inlineCode parentName="p">{`webiny watch`}</inlineCode></_Link>{` command to continuously deploy application code changes into the cloud and instantly see them in action.`}</p>
</Alert>
<_Heading level={3} id={"step-9-testing"} nextElement={{
      "type": "paragraph"
    }}>Step 9: Testing</_Heading>
<p>{`Once the application is deployed, you will be able to see Query and Mutation related to the Book model.`}</p>
<p>{`Here are two example Query and Mutation that you can try in API playground.`}</p>
<Editor title="" lang="graphql" mdxType="Editor">
{`mutation CreateBook {
  books {
    createBook(input: { title: "Getting Started with React", price: 200 }) {
      data {
        id
        title
        price
      }
      error {
        code
        stack
        message
      }
    }
  }
}

query listBook {
  books {
    listBooks(limit: 10) {
      data {
        id
        title
        price
      }
      meta {
        cursor
        hasMoreItems
        totalCount
      }
    }
  }
}`}
</Editor>
<_Heading level={2} id={"next-steps"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Next Steps</_Heading>
<_Heading level={3} id={"video-reference"} nextElement={{
      "type": "paragraph"
    }}>Video Reference</_Heading>
<p>{`For more code examples, references and further exploration, please refer to the attached video.`}</p>
<YouTube id="iKeew6xvUb8" mdxType="YouTube" />
<_Heading level={3} id={"example-code-references"} nextElement={{
      "type": "paragraph"
    }}>Example Code References</_Heading>
<p>{`If you’re looking for code references on private models, as mentioned earlier in Webiny, we used private models in various apps like `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/next/packages/api-file-manager/src/cmsFileStorage/file.model.ts"
      }}>{`File Manager`}</a>{`, `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/next/packages/api-aco/src/filter/filter.model.ts"
      }}>{`Advanced Content Organization`}</a>{`, `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/next/packages/api-apw/src/storageOperations/models/reviewer.model.ts"
      }}>{`Advanced Publishing Workflow`}</a>{`, etc. You can have a look into the codebase for more details on how we used them.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;