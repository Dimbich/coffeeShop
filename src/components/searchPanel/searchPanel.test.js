import React from 'react';
import SearchPanel from './searchPanel';
import {shallow} from 'enzyme';
import ShopItem from '../shopItem/shopItem';


describe('Testing <SearchPanel/>', () => {
  it('Menu have rendrered correctly', () => {
    const searchPanel = shallow(<SearchPanel/>);
    expect(searchPanel).toMatchSnapshot();
  })

  it ('searchPanel state "term" is empty string', () => {
    const searchPanel = shallow(<ShopItem/>);
    expect(searchPanel.state().term).toBeString();
  }) 
})  