import React from 'react';
import styled from 'styled-components';


const Image = styled.img`
    display: block;
    margin: 0 auto;
`;

const ImgBlock = ({src, alt}) => {
  return (
    <Image src = {process.env.PUBLIC_URL + src} alt={alt}/>
  )
}

export default ImgBlock;