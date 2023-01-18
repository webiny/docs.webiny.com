import React from "react";
import { Property, useParentProperty } from "@webiny/properties";
import { createContext, useContext } from "react";
import allPages from "@/data/mdxFiles.json";
import versions from "@/data/versions.json";

const VersionContext = createContext(null);

export const Version = ({ version, children }) => {
    return <VersionContext.Provider value={version}>{children}</VersionContext.Provider>;
};

export function useVersion() {
    return useContext(VersionContext);
}

export const Draft = ({ children }) => {
    if (process.env.VERCEL_ENV === "production") {
        return null;
    }
    return <>{children}</>;
};

export const NavGroup = ({ type, children }) => {
    return (
        <Property id="groups" name={"groups"}>
            <Property id={type} name={type}>
                {children}
            </Property>
        </Property>
    );
};

export const Collapsable = ({ title, children, remove, before, after }) => {
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

export const Separator = ({ after, before, remove }) => {
    return (
        <Property name={"items"} array after={after} before={before} remove={remove}>
            <Property name={"type"} value={"separator"} />
        </Property>
    );
};

export const Section = ({ title, children, remove, before, after }) => {
    const parent = useParentProperty();
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

function findPage(version, link) {
    const exactMatch = allPages.find(p => p.path === link && p.version === version);
    if (exactMatch) {
        return exactMatch;
    }

    const prevVersion = versions.allVersions[versions.allVersions.indexOf(version) + 1];

    if (!prevVersion && version !== "shared") {
        return findPage("shared", link);
    }

    if (!prevVersion && version === "shared") {
        return null;
    }

    return findPage(prevVersion, link);
}

const weightMap = {
    docs: 100,
    userGuides: 100,
    releaseNotes: 50
};

export const Page = ({ title, link, remove, before, after }) => {
    const version = useContext(VersionContext);
    const page = findPage(version, link);
    if (!page) {
        console.log(`Couldn't find a page to render for link "${link}@${version}".`);
        return null;
    }

    const id = `page.${link}`;
    const versionedId = `page.${link}.${version}`;
    const afterId = after ? `page.${after}` : undefined;
    const beforeId = before ? `page.${before}` : undefined;
    const relativePath = version === "latest" ? `/${link}` : `/${version}/${link}`;
    const articleType = relativePath.includes("/user-guides") ? "user-guides" : "docs";
    const algoliaVersions = [version, version === "latest" ? versions.latestVersion : null].filter(
        Boolean
    );

    const isUserGuide = relativePath.includes("/user-guides");
    const isReleaseNotes = relativePath.includes("/release-notes/");

    let weight;
    if (isUserGuide) {
        weight = weightMap.userGuides;
    } else if (isReleaseNotes) {
        weight = weightMap.releaseNotes;
    } else {
        weight = weightMap.docs;
    }

    const robots = isUserGuide ? "noindex" : "";

    return (
        <>
            <Property
                id={id}
                name={"items"}
                array
                remove={remove}
                before={beforeId}
                after={afterId}
            >
                <Property id={`${id}.type`} name={"type"} value={"page"} />
                <Property id={`${id}.title`} name={"title"} value={title || page.title} />
                <Property id={`${id}.link`} name={"link"} value={`/docs${relativePath}`} />
            </Property>
            {/* This section will create a new object in the root property called "catalog" */}
            <Property id={versionedId} name={"catalog"} array root remove={remove}>
                <Property name={"sourceFile"} value={page.file} />
                <Property name={"sourceVersion"} value={page.version} />
                <Property name={"relativePath"} value={relativePath} />
                <Property name={"fullPath"} value={`/docs${relativePath}`} />
                <Property name={"version"} value={version} />
                <Property name={"algoliaVersions"} value={algoliaVersions} />
                <Property name={"title"} value={title || page.title} />
                <Property name={"description"} value={page.description} />
                <Property name={"articleType"} value={articleType} />
                <Property name={"articleWeight"} value={weight} />
                <Property name={"robots"} value={robots} />
            </Property>
        </>
    );
};
