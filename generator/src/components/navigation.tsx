import React from "react";
import { Property, useIdGenerator, useParentProperty } from "@webiny/react-properties";

export const Draft = ({ children }: { children: React.ReactNode }) => {
  if (process.env.VERCEL_ENV === "production") {
    return null;
  }
  return <>{children}</>;
};

interface CollapsableProps {
  title: string;
  children: React.ReactNode;
  remove?: boolean;
  before?: string;
  after?: string;
}

export const Collapsable = ({ title, children, remove, before, after }: CollapsableProps) => {
  const getId = useIdGenerator("collapsable");
  const id = getId(title);

  const placeAfter = after !== undefined ? getId(after) : undefined;
  const placeBefore = before !== undefined ? getId(before) : undefined;

  return (
    <Property id={id} name={"items"} array remove={remove} before={placeBefore} after={placeAfter}>
      <Property id={`${id}.type`} name={"type"} value={"collapsable"} />
      <Property id={`${id}.title`} name={"title"} value={title} />
      {children}
    </Property>
  );
};

interface SeparatorProps {
  remove?: boolean;
  before?: string;
  after?: string;
}

export const Separator = ({ after, before, remove }: SeparatorProps) => {
  return (
    <Property name={"items"} array after={after} before={before} remove={remove}>
      <Property name={"type"} value={"separator"} />
    </Property>
  );
};

interface SectionProps {
  title: string;
  children: React.ReactNode;
  remove?: boolean;
  before?: string;
  after?: string;
}

export const Section = ({ title, children, remove, before, after }: SectionProps) => {
  const parent = useParentProperty();
  if (!parent) {
    return null;
  }

  const getId = useIdGenerator("section");
  const id = getId(title);
  const placeAfter = after !== undefined ? getId(after) : undefined;
  const placeBefore = before !== undefined ? getId(before) : undefined;

  return (
    <Property id={id} name={"items"} array remove={remove} before={placeBefore} after={placeAfter}>
      <Property id={`${id}.type`} name={"type"} value={"section"} />
      <Property id={`${id}.title`} name={"title"} value={title} />
      {children}
    </Property>
  );
};

interface PageProps {
  link?: string;
  file?: string;
  title?: string;
  hidden?: boolean;
  remove?: boolean;
  before?: string;
  after?: string;
}

export const Page = ({ title, link, file, remove, before, after, hidden = false }: PageProps) => {
  const id = link || file;

  return (
    <Property id={id} name={"items"} array remove={remove} before={before} after={after}>
      <Property id={`${id}.type`} name={"type"} value={"page"} />
      <Property id={`${id}.hidden`} name={"hidden"} value={hidden} />
      {title ? <Property id={`${id}.title`} name={"title"} value={title} /> : null}
      {link ? <Property id={`${id}.link`} name={"link"} value={link} /> : null}
      {file ? <Property id={`${id}.file`} name={"file"} value={file} /> : null}
    </Property>
  );
};
