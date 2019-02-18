import React from 'react';
import styled from 'styled-components';


const Title = styled.div`
  margin-top: ${props=>props.isMainPage ? '0px' : '10px'};
  font-size: 24px;
  text-align: center;
`;

const Text = styled.div`
 text-align: ${props=>props.textAlign};
 font-size: 14px;
 margin-top: 25px;
`;

const ImageBeans = styled.img`
    display: block;
    margin: 20px auto 0px;
}  
`;


const TextBlock = (props) => {
  const {title, textAlign} = props; 
  return (
    <>
      <Title>{title}</Title>
      <ImageBeans src={process.env.PUBLIC_URL + '/logo/Beans_logo_dark.svg'} alt="Beans logo"/>
      <Text textAlign={textAlign}>{props.children}</Text> 
    </>      
  );
}


export default TextBlock;