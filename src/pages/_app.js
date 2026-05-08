import "focus-visible";
import Router from "next/router";
import { NavigationProvider } from "@/components/page/Navigation";
import { Page } from "@/components/page/Page";
import { PageProvider } from "@/components/page/PageProvider";
import { Telemetry } from "@/components/Telemetry";
import ProgressBar from "@badrap/bar-of-progress";
import { ResizeObserver } from "@juggle/resize-observer";
import "../css/fonts.css";
import "../css/main.css";

if (typeof window !== "undefined" && !("ResizeObserver" in window)) {
    window.ResizeObserver = ResizeObserver;
}

const progress = new ProgressBar({
    size: 2,
    color: "#38bdf8",
    className: "bar-of-progress",
    delay: 100
});

// this fixes safari jumping to the bottom of the page
// when closing the search modal using the `esc` key
if (typeof window !== "undefined") {
    progress.start();
    progress.finish();
}

Router.events.on("routeChangeStart", () => progress.start());
Router.events.on("routeChangeComplete", () => progress.finish());
Router.events.on("routeChangeError", () => progress.finish());

export default function App({ Component, pageProps }) {
    return (
        <Telemetry>
            <NavigationProvider>
                <PageProvider Component={Component} pageProps={pageProps}>
                    <Page />
                </PageProvider>
            </NavigationProvider>
        </Telemetry>
    );
}
