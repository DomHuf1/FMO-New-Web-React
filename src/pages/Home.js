import React, { Component } from 'react';

import Header from '../components/Header';
import IndexInfoBox from '../components/IndexInfoBox';
import Footer from '../components/Footer';


class Home extends Component {
   render() {
      return(
         <div>
            <Header />
            <IndexInfoBox />
            <Footer />
         </div>
      );
   }
}
export default Home;