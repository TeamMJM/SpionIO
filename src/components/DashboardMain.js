import React, { Component } from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

import Home from './Home.js';
import Sites from './Sites.js';
import Pages from './Pages.js';
import Settings from './Settings.js';

// import Team from './Team.js';

////////// Routing for dashboard because of sidebar feature //////////
class DashboardMain extends Component {
  render() {
    return(
      <div>
        <Route exact path='/dashboard' component={Home}/>
        <Route exact path='/dashboard/sites' component={Sites}/>  
        <Route exact path='/dashboard/sites/pages' component={Pages}/> 
        <Route exact path='/dashboard/settings' component={Settings}/> 
        {/* <Route path='dashboard/team' component={Team}/> */}
      </div>
    )
  }
}

export default DashboardMain;