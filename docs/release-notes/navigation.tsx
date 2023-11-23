import React, { useMemo, useState } from "react";
import globby from "globby";
import { Page, Group, NavigationRoot } from "@webiny/docs-generator";
import { rcompare, valid } from "semver";

const rootDir = `${__dirname}/`;

const cache = new Map<string, string[]>();

const loadAllMdxFiles = (root: string) => {
  if (!cache.has(root)) {
    const files = globby.sync(`${root}**/*.mdx`).map(file => file.replace(rootDir, ""));
    cache.set(root, files);
  }

  return cache.get(root) as string[];
};

enum ReleaseNotesType {
  CHANGELOG = "changelog",
  UPGRADE_GUIDE = "upgrade-guide"
}

interface ReleaseNotes {
  [version: string]: Array<{ type: ReleaseNotesType; file: string }>;
}

export const Navigation = () => {
  const [allMdxFiles] = useState(() => loadAllMdxFiles(rootDir));

  const releases = useMemo(() => {
    return allMdxFiles.reduce((acc, file) => {
      const [version, type] = file.split("/") as [string, ReleaseNotesType];
      if (valid(version)) {
        return {
          ...acc,
          [version]: [...(acc[version] || []), { type, file }]
        };
      }
      return acc;
    }, {} as ReleaseNotes);
  }, []);

  const versions = useMemo(() => {
    return Object.keys(releases).sort((a, b) => {
      return rcompare(a, b);
    });
  }, [releases]);

  function MenuItem({ version }: { version: string }) {
    const predefinedTypes = [ReleaseNotesType.CHANGELOG, ReleaseNotesType.UPGRADE_GUIDE];
    const changeLog = releases[version].find(item => item.type === ReleaseNotesType.CHANGELOG);
    const upgrade = releases[version].find(item => item.type === ReleaseNotesType.UPGRADE_GUIDE);
    const other = releases[version].filter(item => !predefinedTypes.includes(item.type));

    return (
      <Group title={version}>
        {changeLog ? (
          <Page file={changeLog.file} link={`release-notes/${version}/changelog`} />
        ) : null}
        {upgrade ? (
          <Page file={upgrade.file} link={`release-notes/${version}/upgrade-guide`} />
        ) : null}
        {other.map(item => (
          <Page
            key={item.file}
            file={item.file}
            link={`release-notes/${item.file.replace(".mdx", "")}`}
          />
        ))}
      </Group>
    );
  }

  return (
    <NavigationRoot directory={__dirname}>
      <Group title={"Release Notes"}>
        <Page file={"./upgrade-webiny.mdx"} link={"release-notes/upgrade-webiny"} />
        <Group title={"Release Notes"}>
          {versions.slice(0, 5).map(version => (
            <MenuItem key={version} version={version} />
          ))}
          <Group title={"Older Releases"}>
            {versions.slice(5).map(version => (
              <MenuItem key={version} version={version} />
            ))}
          </Group>
        </Group>
      </Group>
    </NavigationRoot>
  );
};
