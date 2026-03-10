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
  "title": "Form",
  "description": "Form primitives: Bind, Form, useForm, validation",
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
  "title": "Components",
  "slug": "components",
  "children": [{
    "title": "Bind",
    "slug": "bind",
    "children": []
  }, {
    "title": "Form",
    "slug": "form",
    "children": []
  }, {
    "title": "UnsetOnUnmount",
    "slug": "unset-on-unmount",
    "children": []
  }, {
    "title": "Validation",
    "slug": "validation",
    "children": []
  }, {
    "title": "ValidationError",
    "slug": "validation-error",
    "children": []
  }]
}, {
  "title": "Hooks",
  "slug": "hooks",
  "children": [{
    "title": "useBind",
    "slug": "use-bind",
    "children": []
  }, {
    "title": "useBindPrefix",
    "slug": "use-bind-prefix",
    "children": []
  }, {
    "title": "useForm",
    "slug": "use-form",
    "children": []
  }, {
    "title": "useGenerateSlug",
    "slug": "use-generate-slug",
    "children": []
  }]
}, {
  "title": "Types",
  "slug": "types",
  "children": [{
    "title": "FormApi",
    "slug": "form-api",
    "children": []
  }, {
    "title": "FormOnSubmit",
    "slug": "form-on-submit",
    "children": []
  }, {
    "title": "GenericFormData",
    "slug": "generic-form-data",
    "children": []
  }]
}, {
  "title": "Other",
  "slug": "other",
  "children": [{
    "title": "validation",
    "slug": "validation-1",
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
<li parentName="ul">{`What is exported from `}<inlineCode parentName="li">{`webiny/admin/form`}</inlineCode>{`?`}</li>
<li parentName="ul">{`How to import and use each exported item?`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`This page documents everything exported from `}<inlineCode parentName="p">{`webiny/admin/form`}</inlineCode>{`. Import any of the items below directly from this path in your Webiny extensions.`}</p>
<p><strong parentName="p">{`Components`}</strong></p>
<SymbolList symbols={[{
      name: "Bind",
      anchor: "bind"
    }, {
      name: "Form",
      anchor: "form"
    }, {
      name: "UnsetOnUnmount",
      anchor: "unset-on-unmount"
    }, {
      name: "Validation",
      anchor: "validation"
    }, {
      name: "ValidationError",
      anchor: "validation-error"
    }]} mdxType="SymbolList" />
<p><strong parentName="p">{`Hooks`}</strong></p>
<SymbolList symbols={[{
      name: "useBind",
      anchor: "use-bind"
    }, {
      name: "useBindPrefix",
      anchor: "use-bind-prefix"
    }, {
      name: "useForm",
      anchor: "use-form"
    }, {
      name: "useGenerateSlug",
      anchor: "use-generate-slug"
    }]} mdxType="SymbolList" />
<p><strong parentName="p">{`Types`}</strong></p>
<SymbolList symbols={[{
      name: "FormApi",
      anchor: "form-api"
    }, {
      name: "FormOnSubmit",
      anchor: "form-on-submit"
    }, {
      name: "GenericFormData",
      anchor: "generic-form-data"
    }]} mdxType="SymbolList" />
<p><strong parentName="p">{`Other`}</strong></p>
<SymbolList symbols={[{
      name: "validation",
      anchor: "validation"
    }]} mdxType="SymbolList" />
<_Heading level={2} id={"components"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Components</_Heading>
<_Heading level={3} id={"bind"} nextElement={{
      "type": "paragraph"
    }}><code>Bind</code></_Heading>
<p><strong parentName="p">{`Function`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/form`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Bind } from "webiny/admin/form";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export function Bind(`}
</Editor>
<_Heading level={3} id={"form"} nextElement={{
      "type": "paragraph"
    }}><code>Form</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/form`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Form } from "webiny/admin/form";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const Form = observer(
  React.forwardRef(FormInner) as <T extends GenericFormData = GenericFormData>(
    props: FormProps<T> & { ref?: React.ForwardedRef<any> }
  ) => ReturnType<typeof FormInner<T>>
);`}
</Editor>
<_Heading level={3} id={"unset-on-unmount"} nextElement={{
      "type": "paragraph"
    }}><code>UnsetOnUnmount</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/form`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { UnsetOnUnmount } from "webiny/admin/form";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const UnsetOnUnmount = ({ name, children }: { name: string; children: React.ReactNode }) => {
    const form = useForm();

    useEffect(() => {
        return () => {
            form.setValue(name, undefined);
        };
    }, []);

    return <>{children}</>;
};`}
</Editor>
<_Heading level={3} id={"validation"} nextElement={{
      "type": "paragraph"
    }}><code>Validation</code></_Heading>
<p><strong parentName="p">{`Class`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/form`}</inlineCode></p>
<p>{`Main class of Validation library.
Exported as a singleton instance, it offers methods for sync/async data validation and overwriting or adding new validators.`}</p>
<p>{`@class Validation
@example
import { validation } from ‘@webiny/validation’;`}</p>
<p>{`// `}<inlineCode parentName="p">{`validation`}</inlineCode>{` is a preconfigured instance of Validation class.
// From here you can either add new validators or use it as-is.`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Validation } from "webiny/admin/form";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`class Validation {
    __validators:;
    constructor();
    setValidator(name: string, callable: Validator): this;
    getValidator(name: string): Validator;
    async validate(
        value: any,
        validators: string,
        options: ValidateOptions =;
    validateSync(
        value: any,
        validators: string,
        options: ValidateOptions =;
    create(validators: string);
    createSync(validators: string);
    __parseValidateProperty(validators: string): ParsedValidators;
}`}
</Editor>
<_Heading level={3} id={"validation-error"} nextElement={{
      "type": "paragraph"
    }}><code>ValidationError</code></_Heading>
<p><strong parentName="p">{`Class`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/form`}</inlineCode></p>
<p>{`This class is used by validators to throw an error when value validation fails.`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ValidationError } from "webiny/admin/form";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`class ValidationError extends Error {
  public override readonly message: string;
  public readonly validator: string | null;
  public readonly value: any;
  constructor(message = "", validator: string | null = null, value: string | null = null);
}`}
</Editor>
<_Heading level={2} id={"hooks"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Hooks</_Heading>
<_Heading level={3} id={"use-bind"} nextElement={{
      "type": "paragraph"
    }}><code>useBind</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/form`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { useBind } from "webiny/admin/form";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const useBind = makeDecoratable((props: BindComponentProps): UseBindHook => {
    const form = useForm();
    const bindPrefix = useBindPrefix();

    const bindName = useMemo(() => {
        return [bindPrefix, props.name].filter(Boolean).join(".");
    }, [props.name]);

    const fieldProps = { ...props, name: bindName };

    useEffect(() => {
        form.registerField(fieldProps);

`}
</Editor>
<_Heading level={3} id={"use-bind-prefix"} nextElement={{
      "type": "paragraph"
    }}><code>useBindPrefix</code></_Heading>
<p><strong parentName="p">{`Function`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/form`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { useBindPrefix } from "webiny/admin/form";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export function useBindPrefix();`}
</Editor>
<_Heading level={3} id={"use-form"} nextElement={{
      "type": "paragraph"
    }}><code>useForm</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/form`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { useForm } from "webiny/admin/form";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const useForm = <T extends GenericFormData = GenericFormData>() => {
  const context = useContext(FormContext) as FormAPI<T>;
  if (!context) {
    throw new Error("Missing Form component in the component hierarchy!");
  }
  return context;
};`}
</Editor>
<_Heading level={3} id={"use-generate-slug"} nextElement={{
      "type": "paragraph"
    }}><code>useGenerateSlug</code></_Heading>
<p><strong parentName="p">{`Function`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/form`}</inlineCode></p>
<p>{`This hook is designed to be used with the `}<inlineCode parentName="p">{`useForm`}</inlineCode>{` hook.
When `}<inlineCode parentName="p">{`generateSlug`}</inlineCode>{` is called, it will generate a slug using the `}<inlineCode parentName="p">{`from`}</inlineCode>{` form field, and set it into the `}<inlineCode parentName="p">{`to`}</inlineCode>{` form field.
@param form
@param from
@param to`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { useGenerateSlug } from "webiny/admin/form";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export function useGenerateSlug(form: FormAPI, from: string, to = "slug");`}
</Editor>
<_Heading level={2} id={"types"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Types</_Heading>
<_Heading level={3} id={"form-api"} nextElement={{
      "type": "paragraph"
    }}><code>FormApi</code></_Heading>
<p><strong parentName="p">{`Type`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/form`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import type { FormApi } from "webiny/admin/form";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export interface FormAPI<T = GenericFormData> { ... }`}
</Editor>
<_Heading level={3} id={"form-on-submit"} nextElement={{
      "type": "paragraph"
    }}><code>FormOnSubmit</code></_Heading>
<p><strong parentName="p">{`Type`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/form`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import type { FormOnSubmit } from "webiny/admin/form";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export interface FormOnSubmit<T = GenericFormData> {
  (data: T, form: FormAPI<T>): any;
}`}
</Editor>
<_Heading level={3} id={"generic-form-data"} nextElement={{
      "type": "paragraph"
    }}><code>GenericFormData</code></_Heading>
<p><strong parentName="p">{`Type`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/form`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import type { GenericFormData } from "webiny/admin/form";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export type GenericFormData = {
  [key: string]: any;
};`}
</Editor>
<_Heading level={2} id={"other"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Other</_Heading>
<_Heading level={3} id={"validation-1"} nextElement={{
      "type": "paragraph"
    }}><code>validation</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/form`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { validation } from "webiny/admin/form";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const validation = new Validation();`}
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