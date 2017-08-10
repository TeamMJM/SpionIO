import React, { Component } from 'react';

import DashboardUserSession from './DashboardUserSession';
import DashboardHeader from './DashboardHeader';
import DashboardContent from './DashboardContent';
import './../styles/App.css';

const style = {
  outer: {
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  inner: {
    display: 'flex',
    flexFlow: 'row nowrap'
  }
}

////////// Separate component that is similar to App.js but for whne a client has successfully signed into his specific dashboard //////////
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sitesBar: false,
      settingsBar: false,
    }
  }
  render() {
    return (
      <div style={style.outer}>
        <DashboardHeader />
        <div style={style.inner}>
          <DashboardContent />
          <DashboardUserSession />
        </div>
      </div>
    )
  }
} 

export default Dashboard;