import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AnalyticsToolbar from './AnalyticsToolbar.js';
import './../styles/Home.css';
import Html from './html.js';
import axios from 'axios';

class PagesSingle extends Component {
  constructor(props){
    super(props);
    this.state = {
      pageURL: null
    };
  }

  componentDidMount() {
    console.log(this.props.match.params.siteID);
    console.log(this.props.match.params.pageID);
    axios.post('/singlePage',{siteID:this.props.match.params.siteID,pageID:this.props.match.params.pageID})
      .then(response =>{
        console.log("RESPONSE",response);
        this.setState({
          pageURL:response.data.url
        })
      })
      .catch(err =>{
        console.log(err)
      })
  }

  render() {
      return (
        <div className="page-content">
          <AnalyticsToolbar 
            url={'/dashboard/sites/' + this.props.match.params.siteID + '/page/' + this.props.match.params.pageID}
          />
           <Html url={this.state.pageURL} />  
        </div>
      );
  }
}

export default PagesSingle;