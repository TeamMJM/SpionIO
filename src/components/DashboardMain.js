import React, { Component } from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

import Home from './Home.js';
import Sites from './Sites.js';
import Team from './Team.js';

////////// Routing for dashboard because of sidebar feature //////////
class DashboardMain extends Component {
  render() {
    return(
      <div>
        <Route exact path='/dashboard' component={Home}/>
        {/* <Route path='dashboard/sites' component={Sites}/> 
        <Route path='dashboard/team' component={Team}/>   */}
      </div>
    )
  }
}

export default DashboardMain;