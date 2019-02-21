import React, { Component } from 'react';

import Header from '../header';
import {Shop, CoffeeItem, Goods, MainPage} from '../pages';
import Footer from '../footer';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
     <Router> 
      <>
        <Header/>
        <Route path='/' exact component = {MainPage}/>
        <Route path='/goods' exact component = {Goods}/>
        <Route path='/coffee' exact component = {Shop}/>
        <Route path='/coffee/:name' exact render = {
          ({match})=>{            
            const {name} = match.params;
            return <CoffeeItem name = {name.replace('_',' ')}/>}
        }/>
        <Footer/>
        
     </>
    </Router> 
    );
  }
}

export default App;
