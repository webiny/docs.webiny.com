import { Layout } from "@/layouts/DocumentationLayout";
import { PageLayout } from "@/layouts/PageLayout";

export const Page404 = () => {
    return (
        <PageLayout>
            <p>The page you're looking for doesn't exist.</p>
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

export default Page404;
