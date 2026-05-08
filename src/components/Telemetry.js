import { useRouter } from "next/router";
import { TelemetryProvider, useTrackPageView } from "@webiny/wts-client/react";

function PageViewTracker() {
    const router = useRouter();
    useTrackPageView(router.asPath);
    return null;
}

/**
 * Wraps the app in the WTS telemetry provider and auto-tracks page-view events
 * on every route change. Posts to t.webiny.com.
 */
export function Telemetry({ children }) {
    return (
        <TelemetryProvider source="docs">
            <PageViewTracker />
            {children}
        </TelemetryProvider>
    );
}
