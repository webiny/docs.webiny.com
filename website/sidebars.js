module.exports = {
    docs: [
        "introduction",
        {
            Tutorials: [
                {
                    type: "category",
                    label: "Install Webiny",
                    items: ["tutorials/install-webiny/overview"],
                },
            ],
            "How-to guides": [
                {
                    type: "category",
                    label: "Deployment",
                    items: ["how-to-guides/deployment/configure-aws-credentials"],
                },
                {
                    type: "category",
                    label: "Headless CMS",
                    items: ["how-to-guides/headless-cms/create-a-webiny-headless-cms-field-plugin"],
                },
            ],
        },
        {
            Contributing: ["contributing/documentation"],
        },
        "webiny-telemetry",
    ],
};
