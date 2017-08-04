import React, { Component } from 'react';
import './../styles/Home.css';
import Html from './html.js';
const axios = require('axios')

class PagesSingle extends Component {
  constructor(props){
    super(props);
    this.state = {
      pageURL:null
    };
  }

  componentDidMount() {
    axios.post('/singlePage',{siteID:this.props.match.params.siteID,pageID:this.props.match.params.pageID})
      .then(response =>{
        console.log("RESPOMSE",response);
        this.setState({
          pageURL:response.data.url
        })
      })
      .catch(err =>{
        console.log(err)
      })
  }

  render() {
      return(
        <div  className="page-content">
             <Html url={this.state.pageURL} /> 
        </div>
      );
  }
}

export default PagesSingle;