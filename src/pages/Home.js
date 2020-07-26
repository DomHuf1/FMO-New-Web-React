import React, { Component } from 'react';

import Header from '../components/Header.js';
import IndexInfoBox from '../components/IndexInfoBox.js';
import Footer from '../components/Footer.js';


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