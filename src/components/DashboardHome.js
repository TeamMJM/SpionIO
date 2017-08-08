import React, { Component } from 'react';
import './../styles/Home.css';
import Paper from 'material-ui/Paper';


class DashboardHome extends Component { 
  render() {
    return (
      <div className='page-content'>
        <Paper>
          <p className='paper-title'>user 2116</p>
          <p className='paper-head'>recorded at 2:03 pm</p>
        </Paper>
      </div>
    )
  }
}

export default DashboardHome;