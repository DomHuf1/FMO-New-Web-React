import React from 'react';
import Event from './Event';

function EventRow() {
    return (
        <div className='event-row'>
            <Event imgPath='../../public/img/highlights/sample1.jpg' text='2018 Winter Quarter Highlights'/>
            <Event imgPath='../../public/img/highlights/sample2.jpg' text='2019 Winter Quarter Highlights'/>
            <Event imgPath='../../public/img/highlights/sample3.jpg' text='Other Highlights'/>
            <Event imgPath='../../public/img/highlights/sample4.jpg' text='More Highlights'/>
        </div>
    );
}

export default EventRow;