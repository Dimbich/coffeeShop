import React from 'react';
import styled from 'styled-components';


const Title = styled.div`
  margin-top: ${props=>props.isMainPage ? '0px' : '10px'};
  font-size: 24px;
  text-align: center;
`;

const Text = styled.div`
 text-align: ${props=>props.textAlign};
 font-size: 14px;
 margin-top: 25px;
 .shop_point {
    margin-top: 16px;
    font-size: 1rem;
    span {
      font-weight: 700;
    }
  }
  .shop__point-price {
    font-size: 24px;
    font-weight: 400 !important;
  }
`;

const ImageBeans = styled.img`
    display: block;
    margin: 20px auto 0px;
}  
`;


const TextBlock = (props) => {
  const {title, textAlign, item } = props;
  
  let content;
  
  if (item) {
    const arr = Object.entries(props.children).sort((a, b) => {
      if(a[0] < b[0]) { return -1; }
      if(a[0] > b[0]) { return 1; }
      return 0;
    });
    
    content  = arr.map((item, index)=>{
      let text = item[0] ==='price' ? <span className='shop__point-price'>{item[1]}</span> : item[1]
      return (
        <div className = 'shop_point' key = {index}>
          <span>{item[0].replace(/^\w/, c => c.toUpperCase())}: </span>
         {text}
        </div>
      )
    })
  } else {
    content = props.children;
  }


  return (
    <>
      <Title>{title}</Title>
      <ImageBeans src={process.env.PUBLIC_URL + '/logo/Beans_logo_dark.svg'} alt="Beans logo"/>
      <Text textAlign={textAlign}>{content}</Text> 
    </>      
  );
}


export default TextBlock;