import React, { Component } from 'react';
// import {Input} from 'reactstrap';
import styled from 'styled-components';

const Search = styled.form`
  label {
  margin-right: 20px
}

 input {.shop__search-label {
  margin-right: 20px
}

.shop__search-input {
  width: 180px;
  height: 30px;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, .25);
  border: none;
  border-radius: 4px;
  font-size: 12px;
  padding: 0 15px
}

.shop__search-input::-webkit-input-placeholder {
  text-align: center
}

.shop__search-input::-ms-input-placeholder {
  text-align: center
}

.shop__search-input::placeholder {
  text-align: center
}
  width: 180px;
  height: 30px;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, .25);
  border: none;
  border-radius: 4px;
  font-size: 12px;
  padding: 0 15px
}

input::-webkit-input-placeholder {
  text-align: center
}

input::-ms-input-placeholder {
  text-align: center
}

input::placeholder {
  text-align: center
}
`;

class searchPanel extends Component {
  state = {
    term:''
  }

  onUpdateSearch = ({target:{value}}) => {
    const term = value.toLowerCase();
    this.setState({term});
    this.props.onUpdateSearch(term);
  }

  render() {
    return (
      <Search action="#">
        <label htmlFor="filter">Looking for</label>
        <input type='text' 
          id="filter" 
          placeholder="start typing here..."
          onChange={this.onUpdateSearch}
        />
      </Search>
    );
  }
}

export default searchPanel;