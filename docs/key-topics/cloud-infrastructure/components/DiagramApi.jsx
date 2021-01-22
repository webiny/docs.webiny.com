import React, { useState } from "react";
import classnames from "classnames";

import defaultApi from "./DiagramApi/images/webiny_api_default.png";
import gqlRequest from "./DiagramApi/images/webiny_api_gql_request.png";
import fmUpload from "./DiagramApi/images/webiny_api_fm_upload.png";
import fmDownload from "./DiagramApi/images/webiny_api_fm_download.png";

const style = {
  hidden: { display: "none" }
};

export default () => {
  const [flow, setFlow] = useState("defaultApi");

  return (
    <>
      <label htmlFor="flowSelector">
        Select flow: &nbsp;
        <select id={"flowSelector"} onChange={e => setFlow(e.target.value)}>
          <option value={"defaultApi"}>Default</option>
          <option value={"gqlRequest"}>GraphQL request</option>
          <option value={"fmUpload"}>Upload file</option>
          <option value={"fmDownload"}>Download file</option>
        </select>
      </label>

      <hr />
      <br />

      <img
        className={classnames("no-shadow", { hidden: flow !== "defaultApi" })}
        src={defaultApi}
      />
      <img
        className={classnames("no-shadow", { hidden: flow !== "gqlRequest" })}
        src={gqlRequest}
      />
      <img className={classnames("no-shadow", { hidden: flow !== "fmUpload" })} src={fmUpload} />
      <img
        className={classnames("no-shadow", { hidden: flow !== "fmDownload" })}
        src={fmDownload}
      />
    </>
  );
};
