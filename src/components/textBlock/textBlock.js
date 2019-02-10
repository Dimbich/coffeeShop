import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  margin-top: 10px;
  font-size: 24px;
  text-align: center;
`;

const Text = styled.div`
 text-align: ${props=>props.textAlign};
 font-size: 14px
`;

const ImageBeans = styled.img`
    display: block;
    margin: 20px auto 0px;
}  
`;


const TextBlock = ({title, textAlign, text, isMainPage}) => {
  return (
    <>
      <Title isMainPage>{title}</Title>
      <ImageBeans src={process.env.PUBLIC_URL + 'logo/Beans_logo_dark.svg'} alt="Beans logo"/>
      <Text textAlign={textAlign}>{text}</Text> 
    </>      
  );
}


export default TextBlock;