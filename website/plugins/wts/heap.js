import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import { WTS } from "wts/src/web";

export default (function() {
    if (!ExecutionEnvironment.canUseDOM) {
        return null;
    }

    const wts = new WTS();

    return {
        onRouteUpdate() {
            wts.identify();
        }
    };
})();
