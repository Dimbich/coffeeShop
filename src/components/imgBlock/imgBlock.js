import React from 'react';
import styled, {css} from 'styled-components';


const Image = styled.img`
    display: block;
    margin: 0 auto;
    ${props => !props.beans && css`
      width: 100%;
    `};
    ${props => props.beans && css`
      margin-top: 20px;
    `};
`;

const ImgBlock = ({src, alt, beans}) => {
  return (
    <Image src = {process.env.PUBLIC_URL + src} alt={alt} beans={beans}/>
  )
}

export default ImgBlock;