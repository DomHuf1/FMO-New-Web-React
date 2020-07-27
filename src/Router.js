import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

// Import the pages we need to route
import About from './pages/About';
import Home from './pages/Home';
import Members from './pages/Members';
import Events from './pages/Events';

class router extends Component {
    render() {
        return(
            <Router>    
                <div>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/members' component={Members} />
                    <Route path='/events' component={Events} />    
                </div>
            </Router>
        );
    }   
}
export default router;