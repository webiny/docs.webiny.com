import React, { useState } from "react";
import Lightbox from "react-image-lightbox";

export default props => {
    const [isOpen, setState] = useState(false);
    return (
        <div
            style={{
                display: "block",
                margin: "20px auto"
            }}
        >
            <img
                onClick={() => setState(true)}
                style={props.style || {}}
                className={props.className}
                alt={props.alt}
                title={props.title || props.alt}
                src={props.src}
            />
            {isOpen && (
                <Lightbox
                    mainSrc={props.src}
                    onCloseRequest={() => setState(false)}
                    imageTitle={props.title}
                    imageCaption={props.alt}
                />
            )}
        </div>
    );
};
