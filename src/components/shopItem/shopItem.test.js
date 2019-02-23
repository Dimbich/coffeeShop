import React from 'react';
import ShopItem from './shopItem';
import {shallow} from 'enzyme';



describe('Testing <ShopItem/>', () => {
  it('ShopItem have rendrered correctly', () => {
    const shopItem = shallow(<ShopItem/>);
    expect(shopItem).toMatchSnapshot();
  })

  it ('ShopItem have props Name', () => {
    const shopItem = shallow(<ShopItem name = 'Coffee'/>);
    expect(shopItem.prop('name')).toEqual('Coffee')
  })
})  