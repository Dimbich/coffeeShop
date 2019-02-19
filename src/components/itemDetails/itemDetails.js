import React,{Component} from 'react';
import RowBlock from '../rowBlock';
import {Container} from 'reactstrap';
import TextBlock from '../textBlock';
import ImgBlock from '../imgBlock';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

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
    const {name, country, url, price, description} = item;
    const content1 = <TextBlock title="About it" textAlign="left">
      Country: {country}
      Description: {description}
      Price: {price}
    </TextBlock>  
    const col1 = {
      config: {size: 5, offset: 1},
      content: <ImgBlock alt={name} src={url} allWidth/>
    }
  
    const col2 = {
    config: {size: 4},
    content:content1
    }

    const errorMessage = error ? <ErrorMessage errorMessage={errMessage}/> : null;
    const spinner =loading ? <Spinner/> : null;
    const content = !(loading || error) ? <RowBlock columns = {[col1, col2]}/> : null;
  
  
    return(
      <section>
          <Container>
            {errorMessage}
            {spinner}
            {content}      
          </Container>
      </section>
    )
  }
}
