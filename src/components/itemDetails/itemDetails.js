import React,{Component} from 'react';
import RowBlock from '../rowBlock';
import {Container} from 'reactstrap';
import TextBlock from '../textBlock';
import ImgBlock from '../imgBlock';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

import styled from 'styled-components';

const ItemDecription = styled.section`
  padding: 70px 0 40px 0;    
`;

export default class ItemDetails extends Component {
  state = {
    item: null,
    loading: true,
    error: false,
    errMessage: ''
  }

  componentDidMount() {    
      this.updateItem();
  };

  componentDidUpdate(prevProps) {
      if (this.props.itemId !== prevProps.itemId) {
          this.updateItem();
      }
  }

  onLoader = (item) =>{   
      this.setState({
          item,
          loading:false,
      });
  }

  onError = ({message}) =>{
      this.setState({
          loading:false,
          error: true,
          errMessage: message
      });
  }

  updateItem() {
      const {name, type, getItem} = this.props;        
      if (!name) {
          return;
      }
    //console.log(name);
    getItem(name.replace(/_/g, ' '), type)
          .then(this.onLoader)            
          .catch(this.onError)
    // this.foo.bar = 0        
  }

  render() {   
    if (!this.state.item) return null;   
    const {loading, item, error,errMessage} =this.state;
    const {name, url, ...description} = item;
    const itemText = <TextBlock title="About it" textAlign="left" item>
     {description}
    </TextBlock>  
    const itemImg = {
      config: {size: 5, offset: 1},
      content: <ImgBlock alt={name} src={url} allWidth/>
    }
  
    const itemDescription = {
    config: {size: 4},
    content:itemText
    }

    const errorMessage = error ? <ErrorMessage errorMessage={errMessage}/> : null;
    const spinner =loading ? <Spinner/> : null;
    const content = !(loading || error) ? <RowBlock columns = {[itemImg, itemDescription]}/> : null;
  
  
    return(
      <ItemDecription>
          <Container>
            {errorMessage}
            {spinner}
            {content}      
          </Container>
      </ItemDecription>
    )
  }
}
