import React from "react";
import Layout from "@theme/Layout";

class Home extends React.Component {
    componentWillMount() {
        window.location.href = "/docs/webiny/introduction";
    }

    render() {
        return (
            <Layout>
                <body>
                    If you are not redirected automatically, follow this{" "}
                    <a href="/docs/webiny/introduction">link</a>.
                </body>
            </Layout>
        );
    }
}

export default Home;
