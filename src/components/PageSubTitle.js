import React from 'react';

function PageSubTitle(props) {
    return (
        <div>
            <h2 className={props.title}>{props.text}</h2>
        </div>
    );
}

export default PageSubTitle;