import React, { Component } from 'react';
// import Iframe from 'react-iframe'
var $ = require('jQuery');
class Html extends Component {
    constructor(props){
      super(props)
      this.resizeIframe = this.resizeIframe(this);
    }
  resizeIframe() {
  }
  render() {
    if(this.props.url){
        return(
          <div style={{height:'100%'}}>
              <iframe src={this.props.url} width='100%' height='100%' onLoad={this.resizeIframe}></iframe>
          </div>);
        }   
        else{
          console.log("LOADING");
          return(
            <div>
              Loading....
            </div>
          );
        }
  
}
}

export default Html;