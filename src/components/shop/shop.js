import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import RowBlock from '../rowBlock';
import TextBlock from '../textBlock';

import styled from 'styled-components';


const ShopStyle = styled.section`
    padding: 70px 0 40px 0;
    .title {
        margin-top: 10px;
    }    
    .shop__girl {
        display: block;
        margin: 0 auto;
    }    
    .shop__text {
        margin-top: 25px;
        font-size: 14px;
        text-align: center;
    }    
    .shop__search {
        .shop-label {
            margin-right: 20px;
        }    
        .shop-input {
            width: 180px;
            height: 30px;
            box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
            border: none;
            border-radius: 4px;
            font-size: 12px;
            padding: 0 15px;
            .shop::placeholder {
                text-align: center;
            }    
        }        
    }            
    .shop__filter {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .shop-label {
            margin-right: 35px;
        }    
        .shop-btn { 
            width: 75px; 
            height: 30px;
            background-color: #fff;
            border: none;
            box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
            font-size: 12px;
            outline: none;
            cursor: pointer;
            .shop:first-child {
                border-radius: 4px 0px 0px 4px;
            }    
            .shop:last-child {
                border-radius: 0px 4px 4px 0px;
            }    
            .shop:focus {
                outline: none;
            }    
        }        
    }            
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
    const text1 = <>

Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
            <br/><br/>
            Afraid at highly months do things on at. Situation recommend objection do intention<br/>
            so questions. <br/>
            As greatly removed calling pleased improve an. Last ask him cold feel<br/>
            met spot shy want. Children me laughing we prospect answered followed. At it went<br/>
            is song that held help face.'
    </>;
    

    const content = <TextBlock title='About our beans' textAlign='center' text = {text1}/>
      
   
    
   const col1 = {
       config: {size: 4, offset: 2},
       content: <img className="shop__girl" src="img/coffee_girl.jpg" alt="girl"/>
   }

   const col2 = {
       config: {size: 4},
       content
   }
 

  
  return(
    <ShopStyle>
        <Container>
            <RowBlock columns = {[col1, col2]}/>
            <div className="line"></div>
            <Row>
                <Col lg={{size: 4, offset: 2}}>
                    <form action="#" className="shop__search">
                        <label className="shop__search-label" htmlFor="filter">Looking for</label>
                        <input id="filter" type="text" placeholder="start typing here..." className="shop__search-input"/>>
                    </form>
                </Col>
                <Col lg={{size: 4, offset: 2}}>
                    <div className="shop__filter">
                        <div className="shop__filter-label">
                            Or filter
                        </div>
                        <div className="shop__filter-group">
                            <button className="shop__filter-btn">Brazil</button>
                            <button className="shop__filter-btn">Kenya</button>
                            <button className="shop__filter-btn">Columbia</button>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg = {{size: 10, offset: 1}}>
                    <div className="shop__wrapper">
                        <div className="shop__item">
                            <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee"/>
                            <div className="shop__item-title">
                                Solimo Coffee Beans 2kg
                            </div>
                            <div className="shop__item-country">Brazil</div>
                            <div className="shop__item-price">10.73$</div>
                        </div>
                        <div className="shop__item">
                            <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee"/>
                            <div className="shop__item-title">
                                Presto Coffee Beans 1kg
                            </div>
                            <div className="shop__item-country">Brazil</div>
                            <div className="shop__item-price">15.99$</div>
                        </div>
                        <div className="shop__item">
                            <img src="https://hhp-blog.s3.amazonaws.com/2018/07/iStock-673468996.jpg" alt="coffee"/>
                            <div className="shop__item-title">
                                AROMISTICO Coffee 1kg
                            </div>
                            <div className="shop__item-country">Brazil</div>
                            <div className="shop__item-price">6.99$</div>
                        </div>
                        <div className="shop__item">
                            <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee"/>
                            <div className="shop__item-title">
                                Solimo Coffee Beans 2kg
                            </div>
                            <div className="shop__item-country">Brazil</div>
                            <div className="shop__item-price">10.73$</div>
                        </div>
                        <div className="shop__item">
                            <img src="https://i0.wp.com/www.healthline.com/hlcmsresource/images/AN_images/AN275-cup-of-coffee-732x549-Thumb.jpg?w=756" alt="coffee"/>
                            <div className="shop__item-title">
                                Solimo Coffee Beans 2kg
                            </div>
                            <div className="shop__item-country">Brazil</div>
                            <div className="shop__item-price">10.73$</div>
                        </div>
                        <div className="shop__item">
                            <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee"/>
                            <div className="shop__item-title">
                                Solimo Coffee Beans 2kg
                            </div>
                            <div className="shop__item-country">Brazil</div>
                            <div className="shop__item-price">10.73$</div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </ShopStyle>
  )
}

export default Shop;