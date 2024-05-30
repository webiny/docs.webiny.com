import Link from "next/link";
import { usePage } from "@/hooks/usePage";
import { Alert } from "@/components/Alert";

export const ViewLatestVersion = () => {
    const { page } = usePage();

    if (page.version === page.versions.latestVersion) {
        return null;
    }

    if (page.type === "docs") {
        return (
            <div className={"mb-10"}>
                <Alert type={"warning"} title={"Warning"}>
                    You&apos;re browsing the documentation for an old version of Webiny. Consider
                    upgrading your project to Webiny{" "}
                    <Link href={"/docs/get-started/welcome"}>
                        {page.versions.latestVersion}
                    </Link>
                    .
                </Alert>
            </div>
        );
    } else {
        return (
            <div className={"mb-10"}>
                <Alert type={"warning"} title={"Warning"}>
                    You&apos;re browsing the documentation for an old version of Webiny. Consider
                    upgrading your project to Webiny{" "}
                    <Link href={"/docs/user-guides/overview"}>{page.versions.latestVersion}</Link>.
                </Alert>
            </div>
        );
    }
};
