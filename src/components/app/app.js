import React, { Component } from 'react';

import Header from '../header';
import Shop from '../shop';
import Footer from '../footer';


class App extends Component {
  render() {
    return (
      <>
      <Header/>
      <Shop/>
      <Footer/>
     </>
    );
  }
}

export default App;
