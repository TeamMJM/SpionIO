import React, { Component } from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

import Home from './Home';
import DashboardHome from './DashboardHome';
import UserSession from './UserSession';

import './../styles/App.css';

////////// Routing for dashboard because of sidebar feature //////////
class DashboardMain extends Component {
  render() {
    return(
      <div>
        <Route exact path='/dashboard' component={DashboardHome} />
        <Route exact path='/playback' component={UserSession} />
      </div>
    )
  }
}

export default DashboardMain;