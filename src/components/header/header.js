import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';

const Banner = styled.div`
    height: 260px
    background: url(${process.env.PUBLIC_URL + '/img/Coffee_bg.jpg'}) center center no-repeat
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

const MenuList = styled.ul`
    display: flex;
    align-items: flex-end;
    margin-top: 30px;
    list-style-type: none;
    `;

const MenuItem = styled.li` 
        font-size: 12px;
        margin-right: 40px;
        font-weight: normal;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        &:first-child {
          transform: translateY(3px);
          webkit-transform: translateY(3px);                    
        } 
        a {
            color: #fff; 
            &:visited {
                text-decoration: none;
                color: #fff;
            }
            &:hover {
                text-decoration: none;
                color: #fff;
            }    
        }      
`;

const Header = () => {
  return(
  <Banner>
    <Container>
      <Row>
        <Col lg='6'>
          <header>
            <MenuList>
                <MenuItem>
                  <a href="#">
                  <img src={process.env.PUBLIC_URL + '/logo/Logo.svg'} alt="logo"/>
                  </a>
                </MenuItem>
                <MenuItem>
                    <a href="#">Our coffee</a>
                </MenuItem>
                <MenuItem>
                    <a href="#">For your pleasure</a>
                </MenuItem>
            </MenuList>
          </header>
        </Col>
      </Row>
      <h1 className="title-big">Our Coffee</h1>
      </Container>
  </Banner>   
  )
}

export default Header
