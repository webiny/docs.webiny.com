import React from "react";
import { Property, useParentProperty } from "@webiny/react-properties";

export const Draft = ({ children }: { children: React.ReactNode }) => {
  if (process.env.VERCEL_ENV === "production") {
    return null;
  }
  return <>{children}</>;
};

export const NavGroup = ({ type, children }: { type: string; children: React.ReactNode }) => {
  return (
    <Property id="groups" name={"groups"}>
      <Property id={type} name={type}>
        {children}
      </Property>
    </Property>
  );
};

export const Docs = ({ children }: { children: React.ReactNode }) => {
  return <NavGroup type={"docs"}>{children}</NavGroup>;
};

export const UserGuides = ({ children }: { children: React.ReactNode }) => {
  return <NavGroup type={"user-guides"}>{children}</NavGroup>;
};

export const Handbook = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
  // return <NavGroup type={"handbook"}>{children}</NavGroup>;
};

interface CollapsableProps {
  title: string;
  children: React.ReactNode;
  remove?: boolean;
  before?: string;
  after?: string;
}

export const Collapsable = ({ title, children, remove, before, after }: CollapsableProps) => {
  const parent = useParentProperty();
  const id = `${parent?.id}.collapsable.${title}`;
  const afterId = after ? `collapsable.${after}` : undefined;
  const beforeId = before ? `collapsable.${before}` : undefined;
  return (
    <Property id={id} name={"items"} array remove={remove} before={beforeId} after={afterId}>
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

  const id = `${parent.id}.section.${title}`;
  const afterId = after ? `${parent.id}.section.${after}` : undefined;
  const beforeId = before ? `${parent.id}.section.${before}` : undefined;
  return (
    <Property id={id} name={"items"} array remove={remove} before={beforeId} after={afterId}>
      <Property id={`${id}.type`} name={"type"} value={"section"} />
      <Property id={`${id}.title`} name={"title"} value={title} />
      {children}
    </Property>
  );
};

interface PageProps {
  link: string;
  title?: string;
  hidden?: boolean;
  remove?: boolean;
  before?: string;
  after?: string;
}

export const Page = ({ title, link, remove, before, after, hidden = false }: PageProps) => {
  const path = `${link}.mdx`;
  return (
    <>
      {!hidden ? (
        <Property id={link} name={"items"} array remove={remove} before={before} after={after}>
          <Property id={`${link}.type`} name={"type"} value={"page"} />
          <Property id={`${link}.title`} name={"title"} value={title ?? null} />
          <Property id={`${link}.protectedTitle`} name={"protectedTitle"} value={Boolean(title)} />
          <Property id={`${link}.path`} name={"path"} value={path} />
        </Property>
      ) : null}
      <Property id={`path.${link}`} name={"paths"} array root remove={remove} value={path} />
    </>
  );
};
