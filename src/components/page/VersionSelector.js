import { usePage } from "@/hooks/usePage";
import { useVersions } from "@/hooks/useVersions";
import { useRouter } from "next/router";

const createNewPath = (versions, path, currentVersion, newVersion) => {
    const latestVersion = versions.latestVersion;

    if (currentVersion === latestVersion && newVersion !== latestVersion) {
        // Add version to existing path
        return path.replace("/docs/", `/docs/${newVersion}/`);
    }

    if (currentVersion !== latestVersion && newVersion === latestVersion) {
        const parts = path.split("/").slice(3);
        // Remove version from existing path
        return ["", "docs", ...parts].join("/");
    }

    if (currentVersion !== latestVersion && newVersion !== latestVersion) {
        // Replace version in the existing path
        const parts = path.split("/").slice(3);
        return ["", "docs", newVersion, ...parts].join("/");
    }

    return path;
};

const wrapper = [
    "flex",
    "relative",
    "w-full",
    "after:w-0",
    "after:h-0",
    "after:absolute",
    "after:top-[50%]",
    "after:mt-[-2px]",
    "after:right-[10px]",
    "after:border-solid",
    "after:border-t-slate-500",
    "after:border-t-[5px]",
    "after:border-x-transparent",
    "after:border-x-[5px]"
].join(" ");

export const VersionSelector = () => {
    const versions = useVersions();
    const { page } = usePage();
    const { asPath, push } = useRouter();

    const onChange = e => {
        const value = e.target.value;
        const newPath = createNewPath(versions, asPath, page.version, value);

        push(newPath);
    };

    const selected = page.version === "latest" ? versions.latestVersion : page.version;

    return (
        <div className={wrapper}>
            <select
                value={selected}
                onChange={onChange}
                className={
                    "w-full appearance-none text-sm rounded-md ring-1 ring-slate-900/10 " +
                    "shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-dark-grey-2 dark:highlight-white/5 " +
                    "dark:hover:bg-slate-700 h-[36px]"
                }
            >
                {versions.allVersions.map(version => (
                    <option key={version} value={version}>
                        {version}
                    </option>
                ))}
            </select>
        </div>
    );
};
