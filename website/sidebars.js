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
                "key-topics/cloud-infrastructure",
                {
                    type: "category",
                    label: "Project Stacks",
                    items: [
                        "key-topics/stacks/overview",
                        "key-topics/stacks/deploying-with-pulumi",
                        "key-topics/stacks/working-with-stacks-using-cli",
                        "key-topics/stacks/environments",
                    ]
                }
            ]
        },
        {
            Contributing: ["contributing/documentation"]
        },
        "webiny-telemetry"
    ]
};
