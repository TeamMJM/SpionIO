import React, { Component } from 'react';
var Parser = require('html-react-parser');
var mensch = require('mensch');
class Html extends Component {
  render() {
      console.log(this.props.data.header);
      let css = mensch.parse(this.props.data.header);
    return(
      <div style={css}>
          {Parser(this.props.data.body)}
      </div>
    )
  }
}

export default Html;