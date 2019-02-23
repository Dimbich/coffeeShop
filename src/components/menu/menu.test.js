import React from 'react';
import Menu from './menu';
import {shallow} from 'enzyme';



describe('Testing <Menu/>', () => {
  it('Menu have rendrered correctly', () => {
    const menu = shallow(<Menu/>);
    expect(menu).toMatchSnapshot();
  })
})  