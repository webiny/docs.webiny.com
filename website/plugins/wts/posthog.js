import posthog from "posthog-js";

const PH_API = "ZdDZgkeOt4Z_m-UWmqFsE1d6-kcCK3BH0ypYTUIFty4";
const PH_HOST = "https://t.webiny.com";

class PosthogTracker {
    constructor() {
        this.instance = null;
    }

    activateTracking(callback, uid) {
        if (this.instance !== null) {
            callback(this);
            return;
        }

        posthog.init(PH_API, {
            api_host: PH_HOST,
            loaded: async posthog => {
                if (uid !== false) {
                    posthog.identify(uid);
                }

                this.instance = posthog;
                callback(this);
            }
        });
    }

    setUserData(data) {
        if (this.instance !== null) {
            this.instance.people.set(data);
            return;
        }

        throw new Error("Posthog tracker not initialized!");
    }

    captureEvent(event, data) {
        if (this.instance !== null) {
            this.instance.capture(event, data);
            return;
        }
        throw new Error("Posthog tracker not initialized!");
    }
}

export default PosthogTracker;
