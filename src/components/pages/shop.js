import React, {Component} from 'react';
import { Container } from 'reactstrap';
import RowBlock from '../rowBlock';
import TextBlock from '../textBlock';
import ImgBlock from '../imgBlock';
import SearchPanel from '../searchPanel';
import Filter from '../filter/';
import ShopWrapper from '../shopWrapper';

import coffeeService from '../../services';
import {withRouter} from 'react-router-dom';

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

class Shop extends Component {
    state = {
        term:'',
        filter:''
    }

    coffeeService  = new coffeeService();

    onUpdateSearch = (term) => {
        this.setState({term});
      }

    onFilterSelect = (filter) => {
        this.setState({filter});
      }
    

    render() {
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
       
        const aboutImg = {
            config: {size: 4, offset: 2},
            content: <ImgBlock alt="girl" src="img/coffee_girl.jpg"/>
        }

        const aboutText = {
        config: {size: 4},
        content
        }

        const search = {
            config: {size: 4, offset: 2},
            content: <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
        }

        const filter = {
            config: {size: 4},
            content: <Filter onFilterSelect={this.onFilterSelect}/>
        }

        const coffeeItems = {
        config: {size: 10, offset: 1},
        content: <ShopWrapper 
                    getData = {this.coffeeService.getAllItems} 
                    type='coffee'
                    term = {this.state.term}
                    filter = {this.state.filter}
                    onItemSelected = {(name)=>{                        
                        this.props.history.push(`/coffee/${name}`)
                    }}    
                    />
        }  
        return(
            <ShopStyle>
                <Container>
                    <RowBlock columns = {[aboutImg, aboutText]}/>
                    <div className="line"></div>
                    <RowBlock columns = {[search, filter]}/>
                    <RowBlock columns = {[coffeeItems]}/>           
                </Container>
            </ShopStyle>
        )
    }
}

export default withRouter(Shop);