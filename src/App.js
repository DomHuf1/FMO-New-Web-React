import React, { Component } from 'react';
import IndexInfoBox from './components/IndexInfoBox.js';
import Header from './components/Header.js';



class App extends Component {
   render(){
      return(
         <div>
            <Header />
            <IndexInfoBox />
         </div>
      );
   }
}
export default App;
