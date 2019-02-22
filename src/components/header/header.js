import React,  {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import Menu from '../menu';
import ImgBlock from '../imgBlock';
import RowBlock from '../rowBlock';

import {withRouter, Link} from 'react-router-dom';

import styled from 'styled-components';

const Banner = styled.div`
    height: ${props => `${props.height}px`};
    background: ${props => `url(${props.background}) no-repeat center center`};
    background-size: cover;
    .title-big {
      margin-top: ${props => `${props.marginTop}px`};;
      color: #fff;
      font-weight: 700;
      font-size: 40px;
      margin-bottom: 0;
      text-align: center;
      text-shadow: 0 4px 4px rgba(0, 0, 0, .25)
    }
    .preview__subtitle {
      font-size: 24px;
      margin-top: 20px;
      text-shadow: 0 4px 4px rgba(0, 0, 0, .25);
      font-weight: 700;
      color: #fff;
      margin-bottom: 0;
      text-align: center;
    }     
    .preview__btn {
      display: block;
      width: 120px;
      height: 30px;
      margin: 0 auto;
      margin-top: 18px;
      border: 1px solid #fff;
      border-radius: 4px;
      box-shadow: 0 4px 4px rgba(0, 0, 0, .05);
      color: #fff;
      text-align: center;
      font-weight: 700;
      line-height: 28px;
      font-size: 14px;
      text-decoration: none
    }
`;


class Header extends Component {
  state = {
    title: '',
    content: null,
    background: '',
    heightHeader: 0,
    marginTop: 0
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
    let heightHeader;
    let marginTop;

    pathname = pathname.replace(/^\/+|\/+$/, '');  

    switch (true) {      
      case (!pathname):
        const headerContent= {
        config: {size: 10, offset: 1},
        content: 
          <>       
            <ImgBlock src='logo/Beans_logo.svg' alt='Beans logo' beans/>
            <div className='preview__subtitle'>We makes every day full of energy and taste</div>
            <div className='preview__subtitle'>Want to try our beans?</div>
            <Link to='/coffee' className='preview__btn'>More</Link>
          </>
       }      
        title = 'Everything You Love About Coffee';
        background ='/img/Main_bg.jpg';
        content =  <RowBlock columns = {[headerContent]}/>
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

    if (!pathname) {
      heightHeader = 640;
      marginTop = 110;
    } else {
      heightHeader = 260;
      marginTop = 60; 
    }    

    this.setState({
      title,
      background,
      heightHeader,
      content,
      marginTop 
    })
  } 

  render() {    
    const {title, content, background, heightHeader, marginTop} = this.state;

    return(
      <Banner height={heightHeader} background={background} marginTop={marginTop}>
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
