import React, { useState, useEffect } from "react";
import preloadImages from "./utils/preloadImages";

import overview from "./DiagramApi/images/webiny_api_overview.png";
import gqlRequest from "./DiagramApi/images/webiny_api_gql_request.png";
import fmUpload from "./DiagramApi/images/webiny_api_fm_upload.png";
import fmDownload from "./DiagramApi/images/webiny_api_fm_download.png";

import Overview from "./DiagramApi/content/Overview.mdx";
import GqlRequest from "./DiagramApi/content/GqlRequest.mdx";
import FmUpload from "./DiagramApi/content/FmUpload.mdx";
import FmDownload from "./DiagramApi/content/FmDownload.mdx";
import Vpc from "./DiagramApi/content/OverviewVpc.mdx";

const FLOW = {
  OVERVIEW: "overview",
  OVERVIEW_VPC: "overviewVpc",
  GQL_REQUEST: "gqlRequest",
  FM_UPLOAD: "fmUpload",
  FM_DOWNLOAD: "fmDownload"
};

export default () => {
  const [flow, setFlow] = useState(FLOW.OVERVIEW);
  useEffect(() => {
    preloadImages(overview, gqlRequest, fmUpload, fmDownload);
  }, []);

  return (
    <React.Fragment>
      <label htmlFor="flowSelector">
        Diagram: &nbsp;
        <select id={"flowSelector"} onChange={e => setFlow(e.target.value)}>
          <option value={FLOW.OVERVIEW}>Overview (default VPC)</option>
          <option value={FLOW.OVERVIEW_VPC}>Overview (custom VPC)</option>
          <option disabled>──────────</option>
          <option value={FLOW.GQL_REQUEST}>GraphQL Request</option>
          <optgroup label={"File Manager"}>
            <option value={FLOW.FM_UPLOAD}>File Upload</option>
            <option value={FLOW.FM_DOWNLOAD}>File Download</option>
          </optgroup>
        </select>
      </label>
      <hr />

      {flow === FLOW.OVERVIEW && (
        <React.Fragment>
          <img className={"no-shadow"} src={overview} alt={"Overview"} />
          <Overview />
        </React.Fragment>
      )}

      {flow === FLOW.GQL_REQUEST && (
        <React.Fragment>
          <img className={"no-shadow"} src={gqlRequest} alt={"GraphQL Request"} />
          <GqlRequest />
        </React.Fragment>
      )}

      {flow === FLOW.FM_UPLOAD && (
        <React.Fragment>
          <img className={"no-shadow"} src={fmUpload} alt={"Upload File"} />
          <FmUpload />
        </React.Fragment>
      )}

      {flow === FLOW.FM_DOWNLOAD && (
        <React.Fragment>
          <img className={"no-shadow"} src={fmDownload} alt={"Download File"} />
          <FmDownload />
        </React.Fragment>
      )}
      {flow === FLOW.OVERVIEW_VPC && <Vpc />}
    </React.Fragment>
  );
};
