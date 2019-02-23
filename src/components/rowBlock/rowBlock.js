import React from 'react';
import {Col, Row} from 'reactstrap';
import idGenerator from 'react-id-generator';

const RowBlock = ({columns}) => {
  const column = columns.map(({config, content}) => {
      return(
        <Col key={idGenerator()} lg = {config}>
            {content}
        </Col>
      )
  })  
  return (
      <Row>
         {column}
      </Row>
  )
}  

  export default RowBlock;