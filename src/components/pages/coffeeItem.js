import React, { Component } from 'react';
import CoffeeService from '../../services';
import ItemDetails from '../itemDetails';


class CoffeeItem extends Component {

  coffeeService = new CoffeeService();   
    render() {  
        let {name} = this.props;          
        return (
            <ItemDetails
                name={name}
                type='coffee'
                getItem = {this.coffeeService.getItem}/>
            
        );
    }
}

export default CoffeeItem;