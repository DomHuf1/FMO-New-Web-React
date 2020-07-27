import React, { Component } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import EventRow from '../components/EventRow';

class Events extends Component {
    render() {
        return (
            <div>
                <Header />
                <EventRow />
                <Footer />
            </div>
        );
    }
}

export default Events;