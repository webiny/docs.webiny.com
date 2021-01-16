module.exports = {
    docs: [
        "introduction",
        {
            Tutorials: ["tutorials/install-webiny"],
            "How-to guides": [
                {
                    type: "category",
                    label: "Deployment",
                    items: ["how-to-guides/deployment/configure-aws-credentials"]
                }
            ],
            "Key Topics": [
                "key-topics/project-organisation",
                {
                    type: "category",
                    label: "Project Applications",
                    items: [
                        "key-topics/project-applications/overview",
                        "key-topics/project-applications/environments",
                    ]
                },
                "key-topics/cloud-infrastructure",
                "key-topics/iac-with-pulumi",
            ]
        },
        {
            Contributing: ["contributing/documentation"]
        },
        "webiny-telemetry"
    ]
};
