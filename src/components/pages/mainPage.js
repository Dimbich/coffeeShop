import React from 'react';
import { Container } from 'reactstrap';
import RowBlock from '../rowBlock';
import TextBlock from '../textBlock';
import ShopWrapper from '../shopWrapper';
import CoffeeService from '../../services';

import {withRouter} from 'react-router-dom';

import styled from 'styled-components';

const About = styled.section`
    padding: 80px 0 110px 0;
    background-color: #fff;
`;

const Best = styled.section` 
    padding: 80px 0 110px 0;
    background-color: #fff;
    background: url(../img/paper.jpg) center center no-repeat;
    background-size: cover;
    .title {
    font-size: 24px;
    text-align: center;
}
`;


const MainPage = (props) => {
 
  const mainText = {
    config: {size: 6, offset: 3},
    content:<TextBlock title='About Us' 
        textAlign='center'>
      <>
        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
        Afraid at highly months do things on at. Situation recommend objection do intention
        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
        met spot shy want. Children me laughing we prospect answered followed. At it went
        is song that held help face.<br/><br/>

        Now residence dashwoods she excellent you. Shade being under his bed her, Much
        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
        horrible but confined day end marriage. Eagerness furniture set preserved far
        recommend. Did even but nor are most gave hope. Secure active living depend son
        repair day ladies now.
      </>
    </TextBlock>
    }
    
  const bestSellers = {
      config: {size: 10, offset: 1},
      content: <ShopWrapper 
                  getData = {new CoffeeService().getAllItems} 
                  type='bestsellers'
                  onItemSelected = {(name)=>{                        
                      props.history.push(`/coffee/${name}`)
                  }}    
                  />
      }   


  return (
    <>
      <About>
        <Container>
          <RowBlock columns = {[mainText]}/>                   
        </Container>
      </About>
      <Best> 
        <Container>
          <div className='title'>Our best</div>
          <RowBlock columns = {[bestSellers]}/>           
        </Container>
      </Best>
    </>
  );

}

export default withRouter(MainPage);