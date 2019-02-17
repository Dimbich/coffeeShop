import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const MenuList = styled.ul`
display: flex;
align-items: flex-end;
margin-top: 30px;
list-style-type: none;
`;

const MenuItem = styled.li` 
    font-size: 12px;
    margin-right: 40px;
    font-weight: normal;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    &:first-child {
      transform: translateY(3px);
      webkit-transform: translateY(3px);                    
    } 
    a {
        color: ${props => props.black ? '#000' : '#fff'}; 
        &:visited {
            text-decoration: none;
            color: ${props => props.black ? '#000' : '#fff'}; 
        }
        &:hover {
            text-decoration: none;
            color: ${props => props.black ? '#000' : '#fff'}; 
        }    
    }      
`;


const Menu = ({footer}) => {
  const isBlack = !!footer;
  let svgFill = {};
  if (footer) {
    svgFill = {filter: "invert(1)"};   
  }
  //const svgFill = footer ? {filter: "invert(1)"};
  return (
    <MenuList>
      <MenuItem black={isBlack}>
        <Link to='/'>
          <img src={process.env.PUBLIC_URL + '/logo/Logo.svg'} alt="logo" style={svgFill}/>
        </Link>
      </MenuItem>
      <MenuItem black={isBlack}>
          <Link to='/coffee'>Our coffee</Link>
      </MenuItem>
      <MenuItem black={isBlack}>
          <Link to='/goods'>For your pleasure</Link>
      </MenuItem>
    </MenuList>
  );
}

export default Menu;