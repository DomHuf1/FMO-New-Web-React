import React, { Component } from 'react';

import Header from '../../components/Header';
import BigSpacing from '../../components/BigSpacing';
import SmallSpacing from '../../components/SmallSpacing';
import Eb1718Cards from '../../components/mem-cards/Eb1718Cards';
import Title from '../../components/PageTitle';
import Footer from '../../components/Footer';


class Eb1718 extends Component {
   render() {
      return(
         <div>
            <Header />
            <BigSpacing />
            <Title title='eboard-sub-header' text='2017 - 2018 Eboard Members' />
            <Eb1718Cards />
            <SmallSpacing />
            <Footer />
         </div>
      );
   }
}
export default Eb1718;