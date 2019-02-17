import React, {Component} from 'react';
import ShopItem from '../shopItem';
import ErrorMessage from '../errorMessage';
import Spinner from '../spinner';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default class ShopWrapper extends Component {
  state = {
    itemList: null,
    error: false,
    loading: true,
    errMessage: null
  }

  componentDidMount(){
      const {getData, type} = this.props;      
      getData(type)
          .then(this.onItemLoaded)
          .catch(this.onError)
  }


  onItemLoaded = (itemList) => {
              
      this.setState({
              itemList,
              error: false,
              loading: false   
          })        
  }

  onError = ({message}) =>{
      this.setState({
          loading:false,
          error: true,
          errMessage: message
      });
  }

  renderItem(arr) {
      //console.log('renderItem',arr)
      return arr.map((item ,index) => {
          const {name, url, price,country} = item;         
          return (
            <ShopItem
                key = {index}               
                onClick = {()=>{this.props.onItemSelected(name.replace(/ /g,'_'))}}
                name = {name}
                url = {url}
                price = {price}
                country = {country}
                />
          )
      })
  }

  render() {
    const {itemList, loading, error, errMessage} = this.state;
    const errorMessage = error ? <ErrorMessage errorMessage={errMessage}/> : null;
    const spinner =loading ? <Spinner/> : null;
    const content = !(loading || error) ? this.renderItem(itemList) : null;     
    return (
      <Wrapper>
        {errorMessage}
        {spinner}
        {content}
      </Wrapper>    
    )
  }
};
