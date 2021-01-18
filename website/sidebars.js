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
                "key-topics/project-applications",
                {
                    type: "category",
                    label: "Deployments",
                    items: ["key-topics/deployment/iac-with-pulumi", "key-topics/deployment/environments"]
                },
                "key-topics/cloud-infrastructure"
            ]
        },
        {
            Contributing: ["contributing/documentation"]
        },
        "webiny-telemetry"
    ]
};
