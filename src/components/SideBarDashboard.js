import React, { Component } from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

import SideBarHome from './SideBarHome.js';
import SideBarSites from './SideBarSites.js';
import SideBarPages from './SideBarPages.js';
import SideBarSettings from './SideBarSettings.js';
// import Team from './Team.js';

////////// Routing for dashboard because of sidebar feature //////////
class SideBarDashboard extends Component {
  render() {
    return(
      <div>
        <Route path='/dashboard' component={SideBarHome}/>
        {/* <Route path='dashboard/team' component={Team}/> */}
      </div>
    )
  }
}

export default SideBarDashboard;