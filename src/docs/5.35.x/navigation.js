import React from "react";
import { Collapsable, NavGroup, Page, Section } from "@/docs/utils/navigation";
import { Navigation as BaseNavigation } from "../5.34.x/navigation";

export const Navigation = () => {
    return (
        <>
            {/* Inherit navigation from 5.34.x. */}
            <BaseNavigation />
            
        </>
    );
};