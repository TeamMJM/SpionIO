import React, { Component } from 'react';
var Parser = require('html-react-parser');
// import './../styles/html.css';
const axios = require('axios')
class Html extends Component {
  componentWillUnmount(){
    axios.get('/deletehtml')
  }
  render() {
    return(
      <div >
          {Parser(this.props.data.body)}
      </div>
    )
  }
}

export default Html;