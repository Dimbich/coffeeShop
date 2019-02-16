import React, { Component } from 'react';

import Header from '../header';
import {Shop, CoffeeItem} from '../pages';
import Footer from '../footer';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
     <Router> 
      <>
        <Header/>
        <Route path='/' exact render = {()=><h1>Home page</h1>}/>
        <Route path='/coffee' exact component = {Shop}/>
        <Route path='/coffee/:name' exact render = {
          ({match})=>{            
            const {name} = match.params;
            return <CoffeeItem name = {name}/>}
        }/>
        <Footer/>
        
     </>
    </Router> 
    );
  }
}

export default App;
