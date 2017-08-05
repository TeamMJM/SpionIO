import React, { Component } from 'react';
import AnalyticsToolbar from './AnalyticsToolbar';
import Html from './html';
import axios from 'axios';

class ClickReport extends Component {
  constructor(props){
    super(props);
    this.state = {
      pageURL: null,
      clickData: null,
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
    axios.get('/clickReportData')
      .then(response => {
        console.log('//////////////RESPONSE/////////////', response);
        this.setState({
          clickData: response.data
        })
      })
      .catch(err => {
        console.log(err);
        return 'Click data not found';
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

export default ClickReport;