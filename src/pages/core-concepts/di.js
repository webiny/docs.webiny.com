/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.64f62e.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Dependency Injection",
  "description": "Creating abstractions and implementations in Webiny",
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
  "title": "Creating an Abstraction",
  "slug": "creating-an-abstraction",
  "children": [{
    "title": "Advanced Namespace Pattern",
    "slug": "advanced-namespace-pattern",
    "children": []
  }]
}, {
  "title": "Creating an Implementation",
  "slug": "creating-an-implementation",
  "children": [{
    "title": "With Dependencies",
    "slug": "with-dependencies",
    "children": []
  }]
}, {
  "title": "Using Decorators",
  "slug": "using-decorators",
  "children": []
}, {
  "title": "Key Points",
  "slug": "key-points",
  "children": [{
    "title": "Dependency Order Matters",
    "slug": "dependency-order-matters",
    "children": []
  }, {
    "title": "Always Use .Interface Types",
    "slug": "always-use-interface-types",
    "children": []
  }, {
    "title": "Export the Implementation",
    "slug": "export-the-implementation",
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
<li parentName="ul">{`How to create an abstraction?`}</li>
<li parentName="ul">{`How to create an implementation of an abstraction?`}</li>
<li parentName="ul">{`How to declare dependencies?`}</li>
<li parentName="ul">{`How to use the decorator pattern?`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Webiny uses `}<inlineCode parentName="p">{`@webiny/di`}</inlineCode>{`, a type-safe dependency injection container built for SOLID principles. The core concept is `}<inlineCode parentName="p">{`Abstraction<T>`}</inlineCode>{`, which unifies tokens and types for compile-time safety. As a developer, you create implementations using `}<inlineCode parentName="p">{`createImplementation()`}</inlineCode>{` and export them.`}</p>
<_Heading level={2} id={"creating-an-abstraction"} nextElement={{
      "type": "paragraph"
    }}>Creating an Abstraction</_Heading>
<p>{`An abstraction is a type-safe token that represents an interface. Use `}<inlineCode parentName="p">{`createAbstraction()`}</inlineCode>{` to create one:`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { createAbstraction, Result } from "webiny/api";
import type { IBook } from "~/types/index.js";

interface IBookRepository {
  getById(id: string): Promise<Result<IBook, RepositoryError>>;
  save(book: IBook): Promise<Result<void, RepositoryError>>;
}

const BookRepository = createAbstraction<IBookRepository>("Library/BookRepository");

namespace BookRepository {
  export type Interface = IBookRepository;
  export type Book = IBook;
}

export { BookRepository };`}
</Editor>
<p><strong parentName="p">{`Naming Convention:`}</strong></p>
<ul>
<li parentName="ul">{`The abstraction name typically matches the interface name without the `}<inlineCode parentName="li">{`I`}</inlineCode>{` prefix`}</li>
<li parentName="ul">{`Use a prefix to organize abstractions by domain (e.g., `}<inlineCode parentName="li">{`Library/BookRepository`}</inlineCode>{`, `}<inlineCode parentName="li">{`Store/CreateOrder`}</inlineCode>{`)`}</li>
</ul>
<p><strong parentName="p">{`Namespace Pattern:`}</strong>{` Use a namespace with the same name as the abstraction to export related types. Export everything implementers will need - the interface, domain types, input/output types, etc. This allows consumers to use `}<inlineCode parentName="p">{`BookRepository.Interface`}</inlineCode>{` and `}<inlineCode parentName="p">{`BookRepository.Book`}</inlineCode>{` without additional imports.`}</p>
<_Heading level={3} id={"advanced-namespace-pattern"} nextElement={{
      "type": "paragraph"
    }}>Advanced Namespace Pattern</_Heading>
<p>{`For more complex abstractions like use cases, you can organize additional types in the namespace:`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { createAbstraction, Result } from "webiny/api";
import type { IBook, IAuthor, ICategory } from "~/types/index.js";

interface ICreateBookUseCase {
  execute(input: CreateBookInput): Promise<Result<IBook, CreateBookError>>;
}

interface CreateBookInput {
  title: string;
  authorId: string;
  categoryId: string;
}

type CreateBookError = ValidationError | AuthorizationError;

const CreateBookUseCase = createAbstraction<ICreateBookUseCase>("Library/CreateBook");

namespace CreateBookUseCase {
  export type Interface = ICreateBookUseCase;
  export type Input = CreateBookInput;
  export type Error = CreateBookError;
  export type Return = Promise<Result<IBook, CreateBookError>>;
  export type Book = IBook;
  export type Author = IAuthor;
  export type Category = ICategory;
}

export { CreateBookUseCase };`}
</Editor>
<p>{`This pattern allows consumers to reference all related types through the abstraction:`}</p>
<ul>
<li parentName="ul"><inlineCode parentName="li">{`CreateBookUseCase.Interface`}</inlineCode>{` - for implementing the use case`}</li>
<li parentName="ul"><inlineCode parentName="li">{`CreateBookUseCase.Input`}</inlineCode>{` - for the input parameters`}</li>
<li parentName="ul"><inlineCode parentName="li">{`CreateBookUseCase.Error`}</inlineCode>{` - for error types`}</li>
<li parentName="ul"><inlineCode parentName="li">{`CreateBookUseCase.Return`}</inlineCode>{` - for the return type`}</li>
<li parentName="ul"><inlineCode parentName="li">{`CreateBookUseCase.Book`}</inlineCode>{`, `}<inlineCode parentName="li">{`CreateBookUseCase.Author`}</inlineCode>{`, `}<inlineCode parentName="li">{`CreateBookUseCase.Category`}</inlineCode>{` - domain types needed by implementers`}</li>
</ul>
<p><strong parentName="p">{`Key Principle:`}</strong>{` Export everything an implementer needs. This creates a complete, self-contained abstraction where consumers only need to import the abstraction itself.`}</p>
<_Heading level={2} id={"creating-an-implementation"} nextElement={{
      "type": "paragraph"
    }}>Creating an Implementation</_Heading>
<p>{`Use `}<inlineCode parentName="p">{`createImplementation()`}</inlineCode>{` from the abstraction to bind your class to it. This method is available on every abstraction and requires three properties:`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { BookRepository } from "./abstractions/BookRepository.js";
import { Result } from "webiny/api";

class InMemoryBookRepository implements BookRepository.Interface {
  private books = new Map<string, BookRepository.Book>();

  public async getById(id: string): Promise<Result<BookRepository.Book, RepositoryError>> {
    const book = this.books.get(id);
    if (!book) {
      return Result.fail(new NotFoundError("Book not found"));
    }
    return Result.ok(book);
  }

  public async save(book: BookRepository.Book): Promise<Result<void, RepositoryError>> {
    this.books.set(book.id, book);
    return Result.ok();
  }
}

const InMemoryBookRepositoryImpl = BookRepository.createImplementation({
  implementation: InMemoryBookRepository,
  dependencies: []
});

export default InMemoryBookRepositoryImpl;`}
</Editor>
<_Heading level={3} id={"with-dependencies"} nextElement={{
      "type": "paragraph"
    }}>With Dependencies</_Heading>
<p>{`Dependencies are declared in the constructor and must match the `}<inlineCode parentName="p">{`dependencies`}</inlineCode>{` array order:`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { CreateBookUseCase } from "./abstractions/CreateBookUseCase.js";
import { BookRepository } from "./abstractions/BookRepository.js";
import { AuthorRepository } from "./abstractions/AuthorRepository.js";
import { CategoryRepository } from "./abstractions/CategoryRepository.js";
import { Result } from "webiny/api";

class CreateBookUseCaseImpl implements CreateBookUseCase.Interface {
  public constructor(
    private bookRepository: BookRepository.Interface,
    private authorRepository: AuthorRepository.Interface,
    private categoryRepository: CategoryRepository.Interface
  ) {}

  public async execute(input: CreateBookUseCase.Input): CreateBookUseCase.Return {
    const authorResult = await this.authorRepository.getById(input.authorId);
    if (authorResult.isFail()) {
      return authorResult;
    }

    const categoryResult = await this.categoryRepository.getById(input.categoryId);
    if (categoryResult.isFail()) {
      return categoryResult;
    }

    const book: CreateBookUseCase.Book = {
      id: generateId(),
      title: input.title,
      author: authorResult.value,
      category: categoryResult.value
    };

    const saveResult = await this.bookRepository.save(book);
    if (saveResult.isFail()) {
      return saveResult;
    }

    return Result.ok(book);
  }
}

const CreateBookUseCaseImplementation = CreateBookUseCase.createImplementation({
  implementation: CreateBookUseCaseImpl,
  dependencies: [BookRepository, AuthorRepository, CategoryRepository]
});

export default CreateBookUseCaseImplementation;`}
</Editor>
<_Heading level={2} id={"using-decorators"} nextElement={{
      "type": "paragraph"
    }}>Using Decorators</_Heading>
<p>{`Decorators extend behavior without modifying the original implementation. Use `}<inlineCode parentName="p">{`createDecorator()`}</inlineCode>{` from the abstraction to wrap existing functionality:`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { CreateBookUseCase } from "./abstractions/CreateBookUseCase.js";
import { Logger } from "webiny/api/logger";

class LoggingCreateBookDecorator implements CreateBookUseCase.Interface {
  public constructor(
    private logger: Logger.Interface,
    private decoratee: CreateBookUseCase.Interface
  ) {}

  public async execute(input: CreateBookUseCase.Input): CreateBookUseCase.Return {
    this.logger.info("Creating book", { title: input.title });

    const result = await this.decoratee.execute(input);

    if (result.isOk()) {
      this.logger.info("Book created successfully", { bookId: result.value.id });
    } else {
      this.logger.error("Failed to create book", { error: result.error });
    }

    return result;
  }
}

const LoggingCreateBookDec = CreateBookUseCase.createDecorator({
  decorator: LoggingCreateBookDecorator,
  dependencies: [Logger]
});

export default LoggingCreateBookDec;`}
</Editor>
<p><strong parentName="p">{`Key Point:`}</strong>{` The decorator’s last constructor parameter must be the type being decorated. The `}<inlineCode parentName="p">{`decoratee`}</inlineCode>{` is automatically injected - you only list other dependencies in the `}<inlineCode parentName="p">{`dependencies`}</inlineCode>{` array.`}</p>
<_Heading level={2} id={"key-points"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Key Points</_Heading>
<_Heading level={3} id={"dependency-order-matters"} nextElement={{
      "type": "paragraph"
    }}>Dependency Order Matters</_Heading>
<p>{`The order in the `}<inlineCode parentName="p">{`dependencies`}</inlineCode>{` array must exactly match the constructor parameter order:`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`class MyClass implements SomeAbstraction.Interface {
  public constructor(
    private firstDep: FirstDep.Interface,
    private secondDep: SecondDep.Interface
  ) {}
}

const MyClassImpl = SomeAbstraction.createImplementation({
  implementation: MyClass,
  dependencies: [FirstDep, SecondDep]
});`}
</Editor>
<_Heading level={3} id={"always-use-interface-types"} nextElement={{
      "type": "paragraph"
    }}>Always Use .Interface Types</_Heading>
<p>{`Constructor parameters should use the `}<inlineCode parentName="p">{`.Interface`}</inlineCode>{` type from the abstraction:`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`// ✅ Correct
public constructor(private bookRepository: BookRepository.Interface) {}

// ❌ Wrong - don't use the concrete class
public constructor(private bookRepository: InMemoryBookRepository) {}`}
</Editor>
<_Heading level={3} id={"export-the-implementation"} nextElement={{
      "type": "paragraph"
    }}>Export the Implementation</_Heading>
<p>{`Always export the result of `}<inlineCode parentName="p">{`createImplementation()`}</inlineCode>{` or `}<inlineCode parentName="p">{`createDecorator()`}</inlineCode>{`:`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`const MyImplementation = Something.createImplementation({
  implementation: SomethingImpl,
  dependencies: []
});

export default MyImplementation;`}
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