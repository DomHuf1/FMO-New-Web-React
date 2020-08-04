import React, { Component } from 'react';

import Header from '../components/Header';
import Title from '../components/PageTitle';
import GrpMemDiv from '../components/GrpMemDiv';
import Footer from '../components/Footer';
import SmallSpacing from '../components/SmallSpacing';
import WebStaffInfo from '../components/WebStaffInfo';

class Members extends Component {
    render() {
        return (
            <div>
                <Header />
                <SmallSpacing />
                <Title title='member-sub-header' text='Meet Us'/>
                <SmallSpacing />
                <GrpMemDiv />
                <SmallSpacing />
                <WebStaffInfo />
                <SmallSpacing />
                <Footer />
            </div>
        )
    }
}

export default Members;