import React from "react";
import Case from "case";

export default ({ prNumber, title, children, useTitleCase }) => {
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
                {useTitleCase === false ? title : Case.title(title)} (
                <a href={`https://github.com/webiny/webiny-js/pull/${prNumber}`}>#{prNumber}</a>)
            </h3>
            {children}
        </div>
    );
};
