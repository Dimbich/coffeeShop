import React,  {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import Menu from '../menu';
import ImgBlock from '../imgBlock';
import RowBlock from '../rowBlock';

import {withRouter} from 'react-router-dom';

import styled from 'styled-components';

const Banner = styled.div`
    height: ${props => `${props.height}px`};
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
    content: null,
    background: '',
    heightHeader: 0
  }
  
  componentDidMount() {
    this.setHeader();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.setHeader();
    }
  }


  setHeader = () => {
    let {pathname} = this.props.location;
    let title;
    let content;
    let background;

    pathname = pathname.replace(/^\/+|\/+$/, '');  

    switch (true) {      
      case (!pathname):       
        title = 'Everything You Love About Coffee'
        background ='/img/Main_bg.jpg'
        content = <>
            <h1>TEST</h1>
            <ImgBlock src='logo/Beans_logo.svg' alt='Beans logo' beans/>
          </>;
        break;        
      case /^coffee/.test(pathname):
        title = pathname.split('/').length === 2 ?  pathname.split('/').pop().replace(/_/g, ' ') :  'Our Coffee'; 
        background ='/img/Coffee_bg.jpg';  
        break;
      case  /^goods$/.test(pathname):
        title = 'For your pleasure';
        background ='/img/Goods_bg.jpg';  
        break;    
      default:
        title = 'Page not found';
        background ='/img/Main_bg.jpg';
    }

    let heightHeader = !pathname ? 640 : 260;

    this.setState({
      title,
      background,
      heightHeader,
      content 
    })
  } 

  render() {    
    const {title, content, background, heightHeader} = this.state;

    return(
      <Banner height={heightHeader} background={background}>
        <Container>
          <Row>
            <Col lg='6'>
              <header>
                <Menu/>
              </header>
            </Col>
          </Row>
          <h1 className="title-big">{title}</h1>
          {content}
          </Container>
      </Banner>   
    )
  }
}

export default withRouter(Header);
