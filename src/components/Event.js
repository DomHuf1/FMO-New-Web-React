import React from 'react';

function Event(props) {
    return (
        <div className='event'>
            <img src={props.imgPath} />
            <div className='description-background'></div>
            <a href='#' className='description-text'>{props.text}</a>
        </div>
    );
}

export default Event;