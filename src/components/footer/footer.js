import React from 'react';
import RowBlock from '../rowBlock';
import Menu from '../menu';
import {Container} from 'reactstrap';

const Footer = () => {
  const col1 = {
    config: {size:5, offset:5},
    content: <Menu/>
  }
  return (
    <footer>
      <Container>
        <RowBlock columns = {[col1]}/>
      </Container>
    </footer>

  );

}

export default Footer;