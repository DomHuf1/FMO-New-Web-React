import React, { Component } from 'react';

import Header from '../components/Header.js';
import TextOverImgBox from '../components/TextOverImgBox.js'; 
import VisionBox from '../components/VisionBox.js';
import Footer from '../components/Footer.js';
import SmallSpacing from '../components/SmallSpacing.js';
import BoxShade from '../components/BoxShade.js';


class About extends Component {
   render() {
      return(
         <div>
            <Header />
            <SmallSpacing />
            <TextOverImgBox />
            <BoxShade />
            <SmallSpacing />
            <VisionBox />
            <BoxShade />
            <Footer />
         </div>
      );
   }
}
export default About;