import React from "react";
import { Property, useIdGenerator } from "@webiny/react-properties";

interface NavigationRootProps {
  directory: string;
  linkPrefix?: string;
  children: React.ReactNode;
}

interface NavigationRootContext {
  directory: string;
  linkPrefix?: string;
}

const NavigationRootContext = React.createContext<NavigationRootContext | undefined>(undefined);

export const NavigationRoot = ({ directory, linkPrefix, children }: NavigationRootProps) => {
  let parentLinkPrefix;
  try {
    const parentRoot = useNavigationRoot();
    parentLinkPrefix = parentRoot.linkPrefix;
  } catch {
    // Simply means there's no parent <NavigationRoot>
  }

  return (
    <NavigationRootContext.Provider
      value={{ directory, linkPrefix: linkPrefix ?? parentLinkPrefix }}
    >
      {children}
    </NavigationRootContext.Provider>
  );
};

const useNavigationRoot = () => {
  const context = React.useContext(NavigationRootContext);
  if (!context) {
    throw Error(`Missing <NavigationRoot> component in the navigation hierarchy!`);
  }
  return context;
};

export const Draft = ({ children }: { children: React.ReactNode }) => {
  if (process.env.VERCEL_ENV === "production") {
    return null;
  }
  return <>{children}</>;
};

interface GroupContext {
  linkPrefix?: string;
}

const GroupContext = React.createContext<GroupContext | undefined>(undefined);

interface GroupProviderProps {
  children: React.ReactNode;
  linkPrefix?: string;
}

const GroupProvider = ({ children, linkPrefix }: GroupProviderProps) => {
  const parentGroup = useGroup();
  const navigationRoot = useNavigationRoot();

  const combinedPrefix = [
    parentGroup ? parentGroup.linkPrefix : navigationRoot.linkPrefix,
    linkPrefix
  ]
    .filter(Boolean)
    .join("/")
    .replace(/\/{2,}/, "/");

  return (
    <GroupContext.Provider value={{ linkPrefix: combinedPrefix }}>{children}</GroupContext.Provider>
  );
};

const useGroup = () => {
  return React.useContext(GroupContext);
};

interface GroupProps {
  title: string;
  children: React.ReactNode;
  linkPrefix?: string;
  remove?: boolean;
  before?: string;
  after?: string;
}

export const Group = ({ title, linkPrefix, children, remove, before, after }: GroupProps) => {
  const getId = useIdGenerator("collapsable");
  const id = getId(title);

  const placeAfter = after !== undefined ? getId(after) : undefined;
  const placeBefore = before !== undefined ? getId(before) : undefined;

  return (
    <GroupProvider linkPrefix={linkPrefix}>
      <Property
        id={id}
        name={"items"}
        array
        remove={remove}
        before={placeBefore}
        after={placeAfter}
      >
        <Property id={`${id}.type`} name={"type"} value={"group"} />
        <Property id={`${id}.title`} name={"title"} value={title} />
        {children}
      </Property>
    </GroupProvider>
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
  const getId = useIdGenerator(String(link || file));
  const navigationRoot = useNavigationRoot();
  const parentGroup = useGroup();

  const linkPrefix = parentGroup ? parentGroup.linkPrefix : navigationRoot.linkPrefix;

  return (
    <Property id={getId()} name={"items"} array remove={remove} before={before} after={after}>
      <Property id={getId("type")} name={"type"} value={"page"} />
      <Property id={getId("hidden")} name={"hidden"} value={hidden} />
      <Property id={getId("directory")} name={"directory"} value={navigationRoot.directory} />
      {linkPrefix ? (
        <Property id={getId("linkPrefix")} name={"linkPrefix"} value={linkPrefix} />
      ) : null}
      {title ? <Property id={getId("title")} name={"title"} value={title} /> : null}
      {link ? <Property id={getId("link")} name={"link"} value={link} /> : null}
      {file ? <Property id={getId("file")} name={"file"} value={file} /> : null}
    </Property>
  );
};
