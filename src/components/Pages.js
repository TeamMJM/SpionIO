import React, { Component } from 'react';
import './../styles/Home.css';
import Html from './html.js';
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
        <Html data={this.state.data} />
      )
    }
    return(
      <div className="pusher">
        Loading....
      </div>
    );
  }
}

export default Pages;