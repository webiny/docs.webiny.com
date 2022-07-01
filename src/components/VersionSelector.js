import { useRouter } from "next/router";
import versions from "@/data/versions.json";

const createNewPath = (path, currentVersion, newVersion) => {
    const latestVersion = versions.latestVersion;

    if (currentVersion === "latest" && newVersion !== latestVersion) {
        // Add version to existing path
        return path.replace("/docs/", `/docs/${newVersion}/`);
    }

    if (currentVersion !== "latest" && newVersion === latestVersion) {
        const parts = path.split("/").slice(3);
        // Remove version from existing path
        return ["", "docs", ...parts].join("/");
    }

    if (currentVersion !== "latest" && newVersion !== latestVersion) {
        // Replace version in the existing path
        const parts = path.split("/").slice(3);
        return ["", "docs", newVersion, ...parts].join("/");
    }

    return path;
};

export const VersionSelector = ({ version: currentVersion }) => {
    const { pathname, push } = useRouter();

    const onChange = e => {
        const value = e.target.value;
        const newPath = createNewPath(pathname, currentVersion, value);

        push(newPath);
    };

    return (
        <>
            <div className="h-5 bg-white dark:bg-dark-theme"></div>
            <div className={"w-full pr-5 h-[37px]"}>
                <select
                    value={currentVersion}
                    onChange={onChange}
                    className={
                        "w-full text-sm rounded-md ring-1 ring-slate-900/10 " +
                        "shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-dark-grey-2 dark:highlight-white/5 " +
                        "dark:hover:bg-slate-700 mr-[15px] h-[36px]"
                    }
                >
                    {versions.allVersions.map(version => (
                        <option key={version} value={version}>
                            {version}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
};
