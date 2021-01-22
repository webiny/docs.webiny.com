import React, { useState } from "react";
import defaultAdmin from "./images/webiny_website_default.png";
import visit from "./images/webiny_website_visit.png";
import prerendering from "./images/webiny_website_prerendering.png";

export default () => {
    const [flow, setFlow] = useState("default");

    return (
        <>
            <label htmlFor="flowSelector">
                Select flow: &nbsp;
                <select id={"flowSelector"} onChange={e => setFlow(e.target.value)}>
                    <option value={"default"}>Default</option>
                    <option value={"pageVisit"}>Open Admin Area</option>
                    <option value={"prerendering"}>Prerendering</option>
                </select>
            </label>

            <hr />
            <br />
            {flow === "default" && <img className={"no-shadow"} src={defaultAdmin} />}
            {flow === "pageVisit" && <img className={"no-shadow"} src={visit} />}
            {flow === "prerendering" && <img className={"no-shadow"} src={prerendering} />}
        </>
    );
};
