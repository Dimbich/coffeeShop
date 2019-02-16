import React, { Component } from 'react';
import coffeeService from '../../services';
import ItemDetails from '../itemDetails';


class CoffeeItem extends Component {

  coffeeService = new coffeeService();

    render() {      
        return (
            <ItemDetails
                name={this.props.name}
                type='coffee'
                getItem = {this.coffeeService.getItem}/>
            
        );
    }
}

export default CoffeeItem;