import React, { Component } from 'react';
import './../styles/Home.css';
import Html from './html.js';
const axios = require('axios')

class Pages extends Component {
  constructor(props){
    super(props);
    this.state = {
      html:null,
      css:null
    };
  }

  componentWillMount() {
    axios.post()
    this.setState({
    })
  }

  render() {
      return(
        <div  className="page-content">
            <Html data={this.state.data} />
        </div>
      );
  }
}

export default Pages;