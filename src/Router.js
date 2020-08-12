import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

// Import the pages we need to route
import About from './pages/About';
import Home from './pages/Home';
import Members from './pages/Members';
import Eb1718 from './pages/eb/Eb17-18';
import Eb1819 from './pages/eb/Eb18-19';
import AllMem1718 from './pages/allMem/AllMem17-18';
import AllMem1819 from './pages/allMem/AllMem18-19';
import Events from './pages/Events';

class router extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/members' component={Members} />
                    <Route path='/eb17-18' component={Eb1718} />
                    <Route path='/eb18-19' component={Eb1819} />
                    <Route path='/allMem17-18' component={AllMem1718} />
                    <Route path='/allMem18-19' component={AllMem1819} />
                    <Route path='/events' component={Events} />
                </div>
            </Router>
        );
    }
}
export default router;