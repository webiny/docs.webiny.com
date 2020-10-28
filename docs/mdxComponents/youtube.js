import React from 'react';

export default props => (
    <div class="video-responsive">
        <iframe
            width="805"
            height="390"
            src={"https://www.youtube.com/embed/"+props.id}
            frameborder="0"
            allowfullscreen
        ></iframe>
    </div>
);