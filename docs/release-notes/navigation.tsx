import React, { useMemo, useState } from "react";
import globby from "globby";
import { Page, Group, NavigationRoot } from "@webiny/docs-generator";
import { rcompare, valid } from "semver";

const rootDir = `${__dirname}/`;

// Versions to hide from the Release Notes navigation. 6.5.0's release notes were
// merged into `master` prematurely (the release/6.5.0 PR was merged by accident),
// so hide it here until the 6.5.0 release is actually finalized. Remove the version
// from this list (or empty the list) once 6.5.0 is done.
const HIDDEN_VERSIONS = ["6.5.0"];

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
    return Object.keys(releases)
      .filter(version => !HIDDEN_VERSIONS.includes(version))
      .sort((a, b) => {
        return rcompare(a, b);
      });
  }, [releases]);

  const v6Versions = useMemo(() => versions.filter(v => !v.startsWith("5.")), [versions]);
  const v5Versions = useMemo(() => versions.filter(v => v.startsWith("5.")), [versions]);

  const currentVersions = useMemo(() => v6Versions.slice(0, 5), [v6Versions]);
  const olderVersions = useMemo(
    () => [...v6Versions.slice(5), ...v5Versions],
    [v6Versions, v5Versions]
  );

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
          {currentVersions.map(version => (
            <MenuItem key={version} version={version} />
          ))}
          <Group title={"Older Releases"}>
            {olderVersions.map(version => (
              <MenuItem key={version} version={version} />
            ))}
          </Group>
        </Group>
      </Group>
    </NavigationRoot>
  );
};
