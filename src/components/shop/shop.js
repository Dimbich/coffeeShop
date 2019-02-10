import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import RowBlock from '../rowBlock';
import TextBlock from '../textBlock';
import ImgBlock from '../imgBlock';
import SearchPanel from '../searchPanel';
import Filter from '../filter/';
import ShopWrapper from '../shopWrapper';

import styled from 'styled-components';


const ShopStyle = styled.section`
    padding: 70px 0 40px 0;
    
    .shop__wrapper {
        display: flex; 
        flex-wrap: wrap;
    }    
    .shop__item {
        width: 220px;
        min-height: 240px;
        margin: 60px 40px 0 40px;
        padding: 22px 24px;
        background: rgba(255, 255, 255, 0.65);
        border-radius: 8px;
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.25);
        transition: 0.3s all;
        .shop:hover {
            box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.25);
        }    
        img {
            display: block; 
            margin: 0 auto;
            width: 151px;
            height: 130px; 
            object-fit: cover;
        }    
        .shop-title, .shop-price, .shop-country {
            font-size: 14px;
            margin-top: 10px;
            text-align: right;
        }    
    }        
    .shop__point {
        margin-top: 16px;;
        span {
            font-weight: bold;
        }    
        .shop-price {
            font-size: 24px;
            font-weight: normal !important;
        }    
        .shop:first-child {
            margin-top: 26px;
        }    
    }        
`;

const Shop = () => {
   

const content = <TextBlock 
                    title='About our beans' 
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
      
   
    
   const col1 = {
       config: {size: 4, offset: 2},
       content: <ImgBlock alt="girl" src="img/coffee_girl.jpg"/>
   }

   const col2 = {
       config: {size: 4},
       content
   }

   const col3 = {
        config: {size: 4, offset: 2},
        content: <SearchPanel/>
   }

   const col4 = {
        config: {size: 4},
        content: <Filter/>
   }

   const col5 = {
       config: {size: 10, offset: 1},
       content: <ShopWrapper/>
   }
 

  
  return(
    <ShopStyle>
        <Container>
            <RowBlock columns = {[col1, col2]}/>
            <div className="line"></div>
            <RowBlock columns = {[col3, col4]}/>
            <RowBlock columns = {[col5]}/>           
        </Container>
    </ShopStyle>
  )
}

export default Shop;