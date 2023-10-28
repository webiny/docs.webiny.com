import React from "react";
import { Property, useParentProperty } from "@webiny/react-properties";
import { createContext, useContext } from "react";

const PageProviderContext = createContext<NavigationPageProvider>(() => undefined);

export const PageProvider = ({
  pageProvider,
  children
}: {
  pageProvider: NavigationPageProvider;
  children: React.ReactNode;
}) => {
  return (
    <PageProviderContext.Provider value={pageProvider}>{children}</PageProviderContext.Provider>
  );
};

export interface NavigationPage {
  id: string;
  title: string;
  path: string;
}

export interface NavigationPageProvider {
  (path: string): NavigationPage | undefined;
}

export function usePageProvider() {
  const pageProvider = useContext(PageProviderContext);
  if (!pageProvider) {
    throw Error(`Missing PageProvider context!`);
  }
  return pageProvider;
}

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
  return <NavGroup type={"handbook"}>{children}</NavGroup>;
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

// function findPage(version, link) {
//   const exactMatch = allPages.find(p => p.path === link && p.version === version);
//   if (exactMatch) {
//     return exactMatch;
//   }
//
//   const prevVersion = versions.allVersions[versions.allVersions.indexOf(version) + 1];
//
//   if (!prevVersion && version !== "shared") {
//     return findPage("shared", link);
//   }
//
//   if (!prevVersion && version === "shared") {
//     return null;
//   }
//
//   return findPage(prevVersion, link);
// }
//
// const weightMap = {
//   docs: 100,
//   userGuides: 100,
//   handbook: 80,
//   releaseNotes: 50
// };

interface PageProps {
  link: string;
  title?: string;
  hidden?: boolean;
  remove?: boolean;
  before?: string;
  after?: string;
}

export const Page = ({ title, link, remove, before, after, hidden = false }: PageProps) => {
  // const version = useContext(VersionContext);
  const pageProvider = usePageProvider();
  const page = pageProvider(link);
  if (!page) {
    console.log(`Couldn't find a page to render for link "${link}".`);
    return null;
  }

  // const id = `page.${link}`;
  // const versionedId = `page.${link}.${version}`;

  const afterId = after ? pageProvider(after)?.id : undefined;
  const beforeId = before ? pageProvider(before)?.id : undefined;
  // const relativePath = version === "latest" ? `/${link}` : `/${version}/${link}`;
  // const algoliaVersions = [version, version === "latest" ? versions.latestVersion : null].filter(
  //   Boolean
  // );

  return (
    <>
      {!hidden ? (
        <Property
          id={page.id}
          name={"items"}
          array
          remove={remove}
          before={beforeId}
          after={afterId}
        >
          <Property id={`${page.id}.type`} name={"type"} value={"page"} />
          <Property id={`${page.id}.title`} name={"title"} value={title || page.title} />
          <Property id={`${page.id}.link`} name={"link"} value={`/docs${page.path}`} />
        </Property>
      ) : null}
      {/* This section will create a new object in the root property called "catalog" */}
      {/*<Property id={versionedId} name={"catalog"} array root remove={remove}>*/}
      {/*  <Property name={"sourceFile"} value={page.file} />*/}
      {/*  <Property name={"sourceVersion"} value={page.version} />*/}
      {/*  <Property name={"relativePath"} value={relativePath} />*/}
      {/*  <Property name={"fullPath"} value={`/docs${relativePath}`} />*/}
      {/*  <Property name={"version"} value={version} />*/}
      {/*  <Property name={"algoliaVersions"} value={algoliaVersions} />*/}
      {/*  <Property name={"title"} value={title || page.title} />*/}
      {/*  <Property name={"description"} value={page.description} />*/}
      {/*  <Property name={"articleType"} value={articleType} />*/}
      {/*  <Property name={"articleWeight"} value={weight} />*/}
      {/*</Property>*/}
    </>
  );
};
