import React from 'react';
import styled from 'styled-components';

const ShopFilter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ShopFilterLabel = styled.div`
    margin-right: 35px;
`;

const ShopFilterGroup = styled.div`
  button {
    width: 75px;
      height: 30px;
      background-color: #fff;
      border: none;
      box-shadow: 4px 4px 20px rgba(0, 0, 0, .25);
      font-size: 12px;
      outline: 0;
      cursor: pointer;
  }
`;

const Filter = () => {
  const buttons=[
    {name: 'brazil', label: 'Brazil'},
    {name: 'kenya', label: 'Kenya'},
    {name: 'columbia', label: 'Columbia'}
  ]

  const btn = buttons.map(({name, label}) => {
    return (
      <button key={name}>
        {label}
      </button>
    )
  });
  return(
    <ShopFilter>
      <ShopFilterLabel>
          Or filter
      </ShopFilterLabel>
      <ShopFilterGroup>
        {btn}
      </ShopFilterGroup>
    </ShopFilter>
  )
}

export default Filter;