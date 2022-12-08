import React from "react";
import { Alert } from "@/components/Alert";

export const WhatYouWillLearn = ({ children }) => {
    return (
        <Alert type="success" title="What you’ll learn">
            {children}
        </Alert>
    );
};
