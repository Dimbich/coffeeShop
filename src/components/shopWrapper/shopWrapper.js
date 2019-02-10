import React from 'react';
import ShopItem from '../shopItem';

import styled from 'styled-components';



const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ShopWrapper = () => {
  return (
    <Wrapper>
      <ShopItem/>
      <ShopItem/>
      <ShopItem/>
      <ShopItem/>
      <ShopItem/>
      <ShopItem/>
    </Wrapper>    
  )
}

export default ShopWrapper;
