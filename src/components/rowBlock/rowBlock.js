import React from 'react';
import {Col, Row} from 'reactstrap';

const RowBlock = ({columns}) => {
  const column = columns.map(({config, content}) => {
      return(
        <Col lg={config}>
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