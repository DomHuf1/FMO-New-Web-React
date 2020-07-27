import React, { Component } from 'react';

import Header from '../components/Header';
import TextOverImgBox from '../components/TextOverImgBox'; 
import VisionBox from '../components/VisionBox';
import Footer from '../components/Footer';
import SmallSpacing from '../components/SmallSpacing';
import BoxShade from '../components/BoxShade';

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