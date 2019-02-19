import React from 'react';
import RowBlock from '../rowBlock';
import Menu from '../menu';
import {Container} from 'reactstrap';
import ImgBlock  from '../imgBlock'

const Footer = () => {
  const col1 = {
    config: {size:5, offset:4},
    content: <Menu footer/>
  }
  return (
    <footer style={{padding:'20px 0'}}>
      <Container>
        <RowBlock columns = {[col1]}/>
        <ImgBlock src='logo/Beans_logo_dark.svg' alt='Beans logo' beans/>
      </Container>
    </footer>

  );

}

export default Footer;