import React from "react";

export default props => (
    <div className="video-responsive">
        <iframe
            width="805"
            height="390"
            src={"https://www.youtube.com/embed/" + props.id}
            frameBorder="0"
            allowFullScreen
        />
    </div>
);
