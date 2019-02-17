import React from 'react';
import { Container } from 'reactstrap';
import RowBlock from '../rowBlock';
import ShopWrapper from '../shopWrapper';
import CoffeeService from '../../services';



const Goods = () => {
 
  const col1 = {
    config: {size: 10, offset: 1},
    content: <ShopWrapper 
                getData = {new CoffeeService().getAllItems} 
                type='goods'
                // onItemSelected = {(name)=>{                        
                //     this.props.history.push(`/coffee/${name}`)
                // }}    
                />
    }  


  return (
    <Container>
      <RowBlock columns = {[col1]}/>         
    </Container>
  );

}

export default Goods;