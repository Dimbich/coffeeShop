import React,  {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import Menu from '../menu';
import {withRouter} from 'react-router-dom';

import styled from 'styled-components';

const Banner = styled.div`
    height: 260px
    ${'' /* background: url(${process.env.PUBLIC_URL background}) center center no-repeat */}
    background: ${props => `url(${props.background}) no-repeat center center`};
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


class Header extends Component {
  state = {
    title: '',
    background: ''
  }

  setHeader = () => {
    const {pathname} = this.props.location;
    switch (pathname) {
      case '/':
        break;
      default:
    }
  }


  render() {  
    
    const {title, background} = this.state;
    return(
      <Banner background={background}>
        <Container>
          <Row>
            <Col lg='6'>
              <header>
                <Menu/>
              </header>
            </Col>
          </Row>
          <h1 className="title-big">{title}</h1>
          </Container>
      </Banner>   
    )
  }
}

export default withRouter(Header);
