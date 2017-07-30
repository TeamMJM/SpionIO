import React, { Component } from 'react';
var Parser = require('html-react-parser');
class Html extends Component {
  render() {
    return(
      <div >
          {Parser(this.props.data.body)}
      </div>
    )
  }
}

export default Html;