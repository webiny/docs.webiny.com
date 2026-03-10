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
  "title": "Result",
  "description": "About Result",
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
  "title": "Usage",
  "slug": "usage",
  "children": []
}, {
  "title": "Return Types",
  "slug": "return-types",
  "children": []
}, {
  "title": "Result Unwrap",
  "slug": "result-unwrap",
  "children": []
}, {
  "title": "Conclusion",
  "slug": "conclusion",
  "children": []
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
<li parentName="ul">{`What is the `}<inlineCode parentName="li">{`Result`}</inlineCode>{`?`}</li>
<li parentName="ul">{`How to use it?`}</li>
<li parentName="ul">{`How to use the return types?`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`System is utilizing the `}<inlineCode parentName="p">{`Result`}</inlineCode>{` pattern, and there is a `}<inlineCode parentName="p">{`Result`}</inlineCode>{` class that helps with that.`}</p>
<p>{`The `}<inlineCode parentName="p">{`Result`}</inlineCode>{` pattern is a way to represent the outcome of an operation that can either succeed or fail.
Instead of throwing exceptions, functions return a `}<inlineCode parentName="p">{`Result`}</inlineCode>{` object that encapsulates either a successful value or an error.`}</p>
<_Heading level={2} id={"usage"} nextElement={{
      "type": "paragraph"
    }}>Usage</_Heading>
<p>{`Let’s say you have a function that performs some async call to an operation which you import from a dependency, and it can either return a result or throw an error.`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Result } from "webiny/api";
import { someOperation } from "some-module";

const myMethod = async () => {
  try {
    const operationResult = await someOperation();
    return Result.ok(operationResult);
  } catch (ex) {
    return Result.fail(ex);
  }
};
const result = await myMethod();
if (result.isOk()) {
  console.log("Operation succeeded with value:", result.value);
} else {
  console.error("Operation failed with error:", result.error);
}`}
</Editor>
<p>{`This way you can be sure that the method does not throw an exception, and you do not have to worry about it down the call stack, which uses the `}<inlineCode parentName="p">{`myMethod`}</inlineCode>{` function.`}</p>
<_Heading level={2} id={"return-types"} nextElement={{
      "type": "paragraph"
    }}>Return Types</_Heading>
<p>{`When using the `}<inlineCode parentName="p">{`Result`}</inlineCode>{` pattern the return types are inferred from the values passed to the `}<inlineCode parentName="p">{`Result.ok()`}</inlineCode>{` and `}<inlineCode parentName="p">{`Result.fail()`}</inlineCode>{` methods.`}</p>
<p>{`For example, if you have a function that returns a `}<inlineCode parentName="p">{`Result`}</inlineCode>{` object with a successful value of type `}<inlineCode parentName="p">{`string`}</inlineCode>{` and an error of type `}<inlineCode parentName="p">{`Error`}</inlineCode>{`, the return type would be `}<inlineCode parentName="p">{`Result<string, Error>`}</inlineCode>{`.`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Result } from "webiny/api";
const myMethod = async (): Promise<Result<string, Error>> => {
  try {
    const operationResult = await someOperation();
    return Result.ok(operationResult);
  } catch (ex) {
    return Result.fail(ex);
  }
};`}
</Editor>
<p>{`For more complex return types, you can define custom types for the success value and error value.`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import type { Result } from "webiny/api";
import type { NotAuthorizedError, ValueNotFoundError } from "webiny/api/error";

export interface SuccessData {
  id: string;
  name: string;
}
export interface Success {
  data: SuccessData;
  timestamp: number;
}
interface PossibleErrors {
  notFound: ValueNotFoundError;
  notAuthorized: NotAuthorizedError;
}

type MyMethodErrors = PossibleErrors[keyof PossibleErrors];

type ReturnOfTheMethod = Promise<Result<Success, MyMethodErrors>>;

interface MyMethodParams {
  id: string;
}

export interface MyMethod {
  (params: MyMethodParams): ReturnOfTheMethod;
}`}
</Editor>
<p>{`And then you can implement the method like this:`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Result } from "webiny/api";

const myMethod: MyMethod = async params => {
  try {
    const operationResult = await someOperation(params.id);
    if (!operationResult) {
      return Result.fail(new ValueNotFoundError(\`Value with ID \${params.id} not found.\`));
    }
    const successData: SuccessData = {
      id: operationResult.id,
      name: operationResult.name
    };
    return Result.ok({
      data: successData,
      timestamp: Date.now()
    });
  } catch (ex) {
    return Result.fail(
      new NotAuthorizedError(\`Not authorized to access value with ID \${params.id}.\`)
    );
  }
};`}
</Editor>
<_Heading level={2} id={"result-unwrap"} nextElement={{
      "type": "paragraph"
    }}>Result Unwrap</_Heading>
<p>{`When using methods and functions that return a `}<inlineCode parentName="p">{`Result`}</inlineCode>{` object, you might want to get the actual value or error types from the `}<inlineCode parentName="p">{`Result`}</inlineCode>{` object.`}</p>
<p>{`If the type is not available for you to import, you can use the `}<inlineCode parentName="p">{`Result.UnwrapResult`}</inlineCode>{` and `}<inlineCode parentName="p">{`Result.UnwrapError`}</inlineCode>{` utility to get those types.`}</p>
<p>{`For example, using the `}<inlineCode parentName="p">{`GetEntryByIdUseCase`}</inlineCode>{` from Headless CMS:`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import type { Result } from "webiny/api";
import type { GetEntryByIdUseCase } from "webiny/api/cms/entry";

export type IGetEntryByIdValue = Result.UnwrapResult<GetEntryByIdUseCase.Result>;
export type IGetEntryByIdError = Result.UnwrapError<GetEntryByIdUseCase.Result>;`}
</Editor>
<p>{`This can be useful when you want to use return types from the system through your own code, but the types are not directly available for import.`}</p>
<_Heading level={2} id={"conclusion"} nextElement={{
      "type": "paragraph"
    }}>Conclusion</_Heading>
<p>{`The `}<inlineCode parentName="p">{`Result`}</inlineCode>{` pattern is a powerful way to handle success and failure in your code without relying on exceptions.
By using the `}<inlineCode parentName="p">{`Result`}</inlineCode>{` class, you can create functions that return a `}<inlineCode parentName="p">{`Result`}</inlineCode>{` object, making it easier to manage errors and success values in a consistent manner.
Additionally, the ability to infer return types from the `}<inlineCode parentName="p">{`Result`}</inlineCode>{` object allows for better type safety and clarity in your code.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;