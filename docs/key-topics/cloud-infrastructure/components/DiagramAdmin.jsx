import React, { useState, useEffect } from "react";
import preloadImages from "./utils/preloadImages";

import overview from "./DiagramAdmin/images/webiny_admin_overview.png";
import pageVisit from "./DiagramAdmin/images/webiny_admin_page_visit.png";

import Overview from "./DiagramAdmin/content/Overview.mdx";
import PageVisit from "./DiagramAdmin/content/PageVisit.mdx";

const FLOW = {
  OVERVIEW: "overview",
  PAGE_VISIT: "pageVisit"
};

export default () => {
  const [flow, setFlow] = useState(FLOW.OVERVIEW);
  useEffect(() => {
    preloadImages(overview, pageVisit);
  }, []);

  return (
    <React.Fragment>
      <label htmlFor="flowSelector">
        Diagram: &nbsp;
        <select id={"flowSelector"} onChange={e => setFlow(e.target.value)}>
          <option value={FLOW.OVERVIEW}>Overview</option>
          <option disabled>──────────</option>
          <option value={FLOW.PAGE_VISIT}>Serving the Application</option>
        </select>
      </label>
      <hr />

      {flow === FLOW.OVERVIEW && (
        <React.Fragment>
          <img className={"no-shadow"} src={overview} alt={"Overview"} />
          <Overview />
        </React.Fragment>
      )}

      {flow === FLOW.PAGE_VISIT && (
        <React.Fragment>
          <img className={"no-shadow"} src={pageVisit} alt={"Serving Application"} />
          <PageVisit />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
