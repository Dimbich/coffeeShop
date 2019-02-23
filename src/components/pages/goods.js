import React from 'react';
import { Container } from 'reactstrap';
import RowBlock from '../rowBlock';
import ShopWrapper from '../shopWrapper';
import TextBlock from '../textBlock';
import ImgBlock from '../imgBlock';

import styled from 'styled-components';
import CoffeeService from '../../services';

const GoodsPage = styled.section`
  padding: 70px 0 40px 0;    
`;

const Goods = () => {
 
  const col1 = {
    config: {size: 10, offset: 1},
    content: <ShopWrapper 
                getData = {new CoffeeService().getAllItems} 
                type='goods'
                onItemSelected = {(name)=>{                        
                    this.props.history.push(`/goods/${name}`)
                }}    
                />
  }  
  
  const content = <TextBlock 
                title='About our goods' 
                textAlign='center'
                isMainPage>
        <>
            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
            <br/><br/>
            Afraid at highly months do things on at. Situation recommend objection do intention<br/>
            so questions. <br/>
            As greatly removed calling pleased improve an. Last ask him cold feel<br/>
            met spot shy want. Children me laughing we prospect answered followed. At it went<br/>
            is song that held help face.'
        </>
    </TextBlock>     
   
    const aboutImg = {
        config: {size: 4, offset: 2},
        content: <ImgBlock alt="coffee-goods" src="img/coffee_goods.jpg"/>
    }

    const aboutText = {
    config: {size: 4},
    content
    }


  return (
    <GoodsPage>
      <Container>
        <RowBlock columns = {[aboutImg, aboutText]}/>
        <div className="line"></div>
        <RowBlock columns = {[col1]}/>         
      </Container>
    </GoodsPage>
  );

}

export default Goods;