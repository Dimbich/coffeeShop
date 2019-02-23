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
    errMessage: null,
    term: '',
    filter: 'all'
  }
  
  searchPost = (items, term) => {
    
    if (term.trim().length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.props.name.toLowerCase().indexOf(term) > -1;
    })
  }

  filterPosts = (items, filter) => {
    switch (filter) {
      case 'brazil':
        return items.filter((item) => {
          return item.props.country.toLowerCase() === filter;
        });
      case 'kenya':
        return items.filter((item) => {
          return item.props.country.toLowerCase() === filter;
        });
      case 'columbia':
        return items.filter((item) => {
          return item.props.country.toLowerCase() === filter;
        });
      default: 
        return items;
    }
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

  renderItem(arr ,type) {
      //console.log('renderItem',arr)
      return arr.map((item ,index) => {        
          const {name, url, price,country} = item;                 
          return (
            <ShopItem
                key = {index}               
                onClick = {type !== 'goods' ? ()=>{this.props.onItemSelected(name.replace(/ /g,'_'))} : null}
                name = {name}
                url = {url}
                price = {price}
                country = {country}
                />
          )
      })
  }

  render() {
    const term = this.props.term ? this.props.term : '';
    const filter = this.props.filter ? this.props.filter : '';
    const {itemList, loading, error, errMessage} = this.state;
    const {type} = this.props;
    const errorMessage = error ? <ErrorMessage errorMessage={errMessage}/> : null;
    const spinner =loading ? <Spinner/> : null;
    const content = !(loading || error) ? this.filterPosts(this.searchPost(this.renderItem(itemList, type), term), filter) : null;     
    return (
      <Wrapper>
        {errorMessage}
        {spinner}
        {content}
      </Wrapper>    
    )
  }
};
