import React, { Component } from 'react';

import Header from '../../components/Header';
import BigSpacing from '../../components/BigSpacing';
import SmallSpacing from '../../components/SmallSpacing';
import Title from '../../components/PageTitle';
import SubTitle from '../../components/PageSubTitle';
import InstruCards from '../../components/mem-cards/all-mem-cards/AllMem1718Instru';
import IACards from '../../components/mem-cards/all-mem-cards/AllMem1718IA';
import PubCards from '../../components/mem-cards/all-mem-cards/AllMem1718Pub';
import VocalCards from '../../components/mem-cards/all-mem-cards/AllMem1718Vocal';
import Footer from '../../components/Footer';


class AllMem1718 extends Component {
   render() {
      return (
         <div>
            <Header />
            <BigSpacing />
            <Title title='all-mem-sub-header' text='2017-2018 All Members' />
            <SmallSpacing />

            <SubTitle title='department-sub-header' text='Instrumental Department' />
            <InstruCards />

            <SubTitle title='department-sub-header' text='Department of Voice' />
            <VocalCards />

            <SubTitle title='department-sub-header' text='Department of Internal Affair' />
            <IACards />

            <SubTitle title='department-sub-header' text='Department of Publicity' />
            <PubCards />
            <Footer />
         </div>
      );
   }
}
export default AllMem1718;