import React from "react";
import Layout from "@theme/Layout";

export default () => {
    React.useEffect(() => {
        if (typeof window !== "undefined") {
            window.location.href = "/docs/webiny/introduction";
        }
    }, []);

    return (
        <Layout>
            <body>
                If you are not redirected automatically, follow this{" "}
                <a href="/docs/webiny/introduction">link</a>.
            </body>
        </Layout>
    );
};
