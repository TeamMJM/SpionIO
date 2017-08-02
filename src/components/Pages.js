import React, { Component } from 'react';
import './../styles/Home.css';
import Html from './html.js';
var mensch = require('mensch');
var fs = require('browserify-fs');
const axios = require('axios')

class Pages extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:null
    };
  }

  async componentDidMount() {
    const htmlfetch = await axios.get('/gethtml');
    this.setState({data:htmlfetch.data});
  }

  render() {
    if(this.state.data){
      return(
        <div  className="page-content">
            <Html data={this.state.data} />
        </div>
      )
    }
    return(
      <div className="page-content">
        Loading....
      </div>
    );
  }
}

export default Pages;