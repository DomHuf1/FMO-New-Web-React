import React, { Component } from 'react';
import IndexInfoBox from './components/IndexInfoBox.js';
import Header from './components/Header.js';
import IndexBox from './IndexBox.js';


class App extends Component {
   render(){
      return(
         <div>
            <Header />
            <IndexBox />
         </div>
      );
   }
}
export default App;
