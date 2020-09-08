import {activateTracking} from 'wts';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default (function () {
  activateTracking ();

  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }

  return {
    onRouteUpdate () {
      if (window.posthog) {
        window.posthog.capture ('$pageview');
      }
    },
  };
}) ();
