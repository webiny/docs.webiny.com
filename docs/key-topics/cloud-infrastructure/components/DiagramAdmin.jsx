import React, { useState } from "react";
import classnames from "classnames";

import defaultAdmin from "./DiagramAdmin/images/webiny_admin_default.png";
import visit from "./DiagramAdmin/images/webiny_admin_visit.png";
import Content from "./DiagramAdmin/Content.mdx";

export default () => {
  const [flow, setFlow] = useState("defaultAdmin");

  return (
    <React.Fragment>
      <label htmlFor="flowSelector">
        Select flow: &nbsp;
        <select id={"flowSelector"} onChange={e => setFlow(e.target.value)}>
          <option value={"defaultAdmin"}>Default</option>
          <option value={"visit"}>Open Admin Area</option>
        </select>
      </label>

      <hr />
      <br />

      <img className={classnames("no-shadow", { hidden: flow !== "defaultAdmin" })} src={defaultAdmin} />
      <img className={classnames("no-shadow", { hidden: flow !== "visit" })} src={visit} />

      <Content />
    </React.Fragment>
  );
};
