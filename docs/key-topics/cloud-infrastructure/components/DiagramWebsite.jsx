import React, { useState, useEffect } from "react";
import preloadImages from "./utils/preloadImages";

import overview from "./DiagramWebsite/images/webiny_website_overview.png";
import pageVisit from "./DiagramWebsite/images/webiny_website_visit.png";
import prerendering from "./DiagramWebsite/images/webiny_website_prerendering.png";

import Overview from "./DiagramWebsite/content/Overview.mdx";
import Serving from "./DiagramWebsite/content/Serving.mdx";
import Prerendering from "./DiagramWebsite/content/Prerendering.mdx";

const FLOW = {
  OVERVIEW: "overview",
  PRERENDERING: "prerendering",
  SERVING_PAGES: "servingPages"
};

export default () => {
  const [flow, setFlow] = useState(FLOW.OVERVIEW);
  useEffect(() => {
    preloadImages(overview, pageVisit, prerendering);
  }, []);

  return (
    <React.Fragment>
      <label htmlFor="flowSelector">
        Diagram: &nbsp;
        <select id={"flowSelector"} onChange={e => setFlow(e.target.value)}>
          <option value={FLOW.OVERVIEW}>Overview</option>
          <option disabled>──────────</option>
          <option value={FLOW.PRERENDERING}>Prerendering Pages</option>
          <option value={FLOW.SERVING_PAGES}>Serving Pages</option>
        </select>
      </label>
      <hr />
      {flow === FLOW.OVERVIEW && (
        <React.Fragment>
          <img className={"no-shadow"} src={overview} alt={"Overview"} />
          <Overview />
        </React.Fragment>
      )}

      {flow === FLOW.PRERENDERING && (
        <React.Fragment>
          <img className={"no-shadow"} src={prerendering} alt={"Prerendering"} />
          <Prerendering />
        </React.Fragment>
      )}
      {flow === FLOW.SERVING_PAGES && (
        <React.Fragment>
          <img className={"no-shadow"} src={pageVisit} alt={"Serving Pages"} />
          <Serving />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
