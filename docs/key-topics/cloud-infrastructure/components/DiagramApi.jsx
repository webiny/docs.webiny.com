import React, { useState } from "react";
import defaultApi from "./images/webiny_api_default.png";
import gqlRequest from "./images/webiny_api_gql_request.png";
import fmUpload from "./images/webiny_api_fm_upload.png";
import fmDownload from "./images/webiny_api_fm_download.png";

export default () => {
  const [flow, setFlow] = useState("default");

  return (
    <>
      <label htmlFor="flowSelector">
        Select flow: &nbsp;
        <select id={"flowSelector"} onChange={e => setFlow(e.target.value)}>
          <option value={"default"}>Default</option>
          <option value={"gqlRequest"}>GraphQL request</option>
          <option value={"uploadFile"}>Upload file</option>
          <option value={"downloadFile"}>Download file</option>
        </select>
      </label>

      <hr />
      <br />
      {flow === "default" && <img className={"no-shadow"} src={defaultApi} />}
      {flow === "gqlRequest" && <img className={"no-shadow"} src={gqlRequest} />}
      {flow === "uploadFile" && <img className={"no-shadow"} src={fmUpload} />}
      {flow === "downloadFile" && <img className={"no-shadow"} src={fmDownload} />}
    </>
  );
};
