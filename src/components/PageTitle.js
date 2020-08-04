import React from 'react';

function PageTitle(props) {
    return (
        <div>
            <h1 className={props.title}>{props.text}</h1>
        </div>
    );p
}

export default PageTitle;