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
        color: #fff; 
        &:visited {
            text-decoration: none;
            color: #fff;
        }
        &:hover {
            text-decoration: none;
            color: #fff;
        }    
    }      
`;


const Menu = () => {
  return (
    <MenuList>
      <MenuItem>
        <Link to='/'>
        <img src={process.env.PUBLIC_URL + '/logo/Logo.svg'} alt="logo"/>
        </Link>
      </MenuItem>
      <MenuItem>
          <Link to='coffee'>Our coffee</Link>
      </MenuItem>
      <MenuItem>
          <Link to='pleasure'>For your pleasure</Link>
      </MenuItem>
    </MenuList>
  );
}

export default Menu;