import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AnalyticsToolbar from './AnalyticsToolbar';
import Html from './html';
import axios from 'axios';

class ScrollReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageURL: null,
      scrollData: null,
    }
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
    axios.get('/scrollReportData')
      .then(response => {
        console.log('//////////////RESPONSE/////////////', response);
        this.setState({
          scrollData: response.data
        })
      })
      .catch(err => {
        console.log(err);
        return 'Scroll data not found';
      })
  }

  render() {
    return(
      <div className='page-content'>
        <AnalyticsToolbar url={'/dashboard/sites/' + this.props.match.params.siteID + '/page/' + this.props.match.params.pageID}/>
        <Html url={this.state.pageURL}/>
      </div>
    )
  }
}

export default ScrollReport;