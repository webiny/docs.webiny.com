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
            "Key Topics": ["key-topics/project-organisation"]
        },
        {
            Contributing: ["contributing/documentation"]
        },
        "webiny-telemetry"
    ]
};
