import React, { Component } from 'react';
import './../styles/Home.css';
// import Html from './html.js';
const axios = require('axios')

class Pages extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:null
    };
  }

  // async componentDidMount() {
  //   const htmlfetch = await axios.get('/gethtml');
  //   this.setState({data:htmlfetch.data});
  // }

  render() {
    return(
      <div className='page-content'>
        Pages
      </div>
    );
  }
}

export default Pages;