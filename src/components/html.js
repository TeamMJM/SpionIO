import React, { Component } from 'react';
var Parser = require('html-react-parser');
var mensch = require('mensch');
class Html extends Component {
  render() {
      console.log("string",this.props.data.header);
      var css = mensch.parse(this.props.data.header);
      console.log("css",css);
      var csstring = mensch.stringify(css);
      console.log("css-stringify",csstring)
      // console.log(css.stylesheet.rules[0])
    return(
      <div style={css}>
          {Parser(this.props.data.body)}
      </div>
    )
  }
}

export default Html;