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
<<<<<<< HEAD
        <Route exact path='/dashboard' component={SideBarHome}/>
        <Route exact path='/dashboard/sites' component={SideBarSites}/>  
        <Route exact path='/dashboard/sites/:siteID' component={SideBarPages}/> 
        <Route exact path='/dashboard/settings' component={SideBarSettings}/> 
=======
        <Route path='/dashboard' component={SideBarHome}/>
>>>>>>> 0e2aed97434c541e19421f65dbcd9a7a039377c8
        {/* <Route path='dashboard/team' component={Team}/> */}
      </div>
    )
  }
}

export default SideBarDashboard;