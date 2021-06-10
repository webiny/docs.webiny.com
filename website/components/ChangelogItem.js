import React from "react";

export default ({ prNumber, title, children }) => {
    if (!title) {
        return (
            <div>
                <code>title</code> prop not provided.
            </div>
        );
    }

    if (!prNumber) {
        return (
            <div>
                <code>prNumber</code> prop not provided.
            </div>
        );
    }

    return (
        <div>
            <h3>
                {title} (
                <a href={`https://github.com/webiny/webiny-js/pull/${prNumber}`}>#{prNumber}</a>)
            </h3>
            {children}
        </div>
    );
};
