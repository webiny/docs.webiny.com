import React from "react";
import { Alert } from "@/components/Alert";
import { InputFooter } from "@/components/page/InputFooter";

export const StandaloneVersionNotice = () => {
    return (
        <Alert type="info" title="No AWS? No problem.">
            <p>
                We're building a standalone version of Webiny that doesn't require AWS — runs on any
                infrastructure. It's weeks away, not months. Drop your email and we'll ping you the
                moment it's ready.
            </p>
            <div className="mt-4 max-w-md">
                <InputFooter formId="u3h0b2" />
            </div>
        </Alert>
    );
};
