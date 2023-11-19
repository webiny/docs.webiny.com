import { usePage } from "@/hooks/usePage";
import { Layout } from "@/layouts/DocumentationLayout";
import { PageLayout } from "@/layouts/PageLayout";
import Link from "next/link";
import { useRouter } from "next/router";
const allPages = [];

export const Page404 = () => {
    const { page } = usePage();
    const router = useRouter();

    const isRoot = router.asPath === "/";

    const regex = new RegExp(
        router.asPath
            .replace("/docs/", "/")
            .replace(/\//g, "\\/")
            .replace(`${page.version}\\/`, "(?:\\d+\\.\\d+\\.[x|\\d+]\\/)?")
    );

    const alternatives = isRoot ? [] : allPages.filter(page => regex.test(page.relativePath));

    return (
        <PageLayout>
            {alternatives.length ? (
                <>
                    <p>
                        The page you're looking for doesn't exist for this version of Webiny, but it
                        was found in the following versions:
                    </p>
                    <ul>
                        {alternatives.map(page => {
                            return (
                                <li key={page.fullPath}>
                                    <Link href={page.fullPath}>
                                        {page.version === "latest"
                                            ? page.versions.latestVersion
                                            : page.version}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </>
            ) : (
                <p>The page you're looking for doesn't exist.</p>
            )}
        </PageLayout>
    );
};

Page404.layoutProps = {
    Layout,
    meta: {
        title: "Page not found"
    }
};

Page404.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};
