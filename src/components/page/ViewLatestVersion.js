import Link from "next/link";
import { usePage } from "@/hooks/usePage";
import { useVersions } from "@/hooks/useVersions";
import { Alert } from "@/components/Alert";

export const ViewLatestVersion = () => {
    const { version, type } = usePage();
    const versions = useVersions();

    if (version === "latest") {
        return null;
    }

    if (type === "docs") {
        return (
            <div className={"mb-10"}>
                <Alert type={"warning"} title={"Warning"}>
                    You&apos;re browsing the documentation for an old version of Webiny. Consider
                    upgrading your project to Webiny{" "}
                    <Link href={"/docs/get-started/install-webiny"}>{versions.latestVersion}</Link>.
                </Alert>
            </div>
        );
    } else {
        return (
            <div className={"mb-10"}>
                <Alert type={"warning"} title={"Warning"}>
                    You&apos;re browsing the documentation for an old version of Webiny. Consider
                    upgrading your project to Webiny{" "}
                    <Link href={"/docs/user-guides/overview"}>{versions.latestVersion}</Link>.
                </Alert>
            </div>
        );
    }
};
