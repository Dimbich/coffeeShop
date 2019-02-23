import React from 'react';
import ImgBlock from './imgBlock';
import renderer from 'react-test-renderer';



describe('Testing <ImgBlock/>', () => {
  it('ImgBlock have rendrered correctly', () => {
    const imgBlock = renderer.create(<ImgBlock/>).toJSON();
    expect(imgBlock).toMatchSnapshot();
  })
})  