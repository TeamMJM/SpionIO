import React, { Component } from 'react';
// import './../styles/Dashboard.css';

import DashboardMain from './DashboardMain';
import DashboardHeader from './DashboardHeader';

import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import './../styles/App.css';

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
      <div>
        <DashboardHeader />
        <Route exact path='/dashboard' component={DashboardMain}/>
        {/* <Route exact path='/dashboard/playback' component={UserSession}/> */}
      </div>
    )
  }
} 

export default Dashboard;