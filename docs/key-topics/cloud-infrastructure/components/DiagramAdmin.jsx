import React, { useState } from "react";
import defaultAdmin from "./images/webiny_admin_default.png";
import visit from "./images/webiny_admin_visit.png";

export default () => {
  const [flow, setFlow] = useState("default");

  return (
    <>
      <label htmlFor="flowSelector">
        Select flow: &nbsp;
        <select id={"flowSelector"} onChange={e => setFlow(e.target.value)}>
          <option value={"default"}>Default</option>
          <option value={"pageVisit"}>Open Admin Area</option>
        </select>
      </label>

      <hr />
      <br />
      {flow === "default" && <img className={"no-shadow"} src={defaultAdmin} />}
      {flow === "pageVisit" && <img className={"no-shadow"} src={visit} />}
    </>
  );
};
