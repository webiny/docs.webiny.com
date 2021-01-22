import React, { useState } from "react";
import classnames from "classnames";

import defaultAdmin from "./DiagramWebsite/images/webiny_website_default.png";
import visit from "./DiagramWebsite/images/webiny_website_visit.png";
import prerendering from "./DiagramWebsite/images/webiny_website_prerendering.png";

export default () => {
  const [flow, setFlow] = useState("defaultAdmin");

  return (
    <>
      <label htmlFor="flowSelector">
        Select flow: &nbsp;
        <select id={"flowSelector"} onChange={e => setFlow(e.target.value)}>
          <option value={"defaultAdmin"}>Default</option>
          <option value={"visit"}>Visit page</option>
          <option value={"prerendering"}>Prerendering</option>
        </select>
      </label>

      <hr />
      <br />

      <img
        className={classnames("no-shadow", { hidden: flow !== "defaultAdmin" })}
        src={defaultAdmin}
      />
      <img className={classnames("no-shadow", { hidden: flow !== "visit" })} src={visit} />
      <img
        className={classnames("no-shadow", { hidden: flow !== "prerendering" })}
        src={prerendering}
      />
    </>
  );
};
