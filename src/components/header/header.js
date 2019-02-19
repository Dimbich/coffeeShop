import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Menu from '../menu';

import styled from 'styled-components';

const Banner = styled.div`
    height: 260px
    background: url(${process.env.PUBLIC_URL + '/img/Goods_bg.jpg'}) center center no-repeat
    background-size: cover;
    .title-big {
      margin-top: 60px;
      color: #fff;
      font-weight: 700;
      font-size: 40px;
      margin-bottom: 0;
      text-align: center;
      text-shadow: 0 4px 4px rgba(0, 0, 0, .25)
    }     
`;


const Header = () => {
  return(
  <Banner>
    <Container>
      <Row>
        <Col lg='6'>
          <header>
            <Menu/>
          </header>
        </Col>
      </Row>
      <h1 className="title-big">Our Coffee</h1>
      </Container>
  </Banner>   
  )
}

export default Header
