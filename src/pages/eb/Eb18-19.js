import React, { Component } from 'react';

import Header from '../../components/Header';
import BigSpacing from '../../components/BigSpacing';
import SmallSpacing from '../../components/SmallSpacing';
import Eb1819Cards from '../../components/mem-cards/Eb1819Cards';
import Title from '../../components/PageTitle';
import Footer from '../../components/Footer';


class Eb1819 extends Component {
   render() {
      return(
         <div>
            <Header />
            <BigSpacing />
            <Title title='eboard-sub-header' text='2018 - 2019 Eboard Members' />
            <Eb1819Cards />
            <SmallSpacing />
            <Footer />
         </div>
      );
   }
}
export default Eb1819;