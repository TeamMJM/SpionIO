import React, { Component } from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

import SideBarHome from './SideBarHome.js';
// import Team from './Team.js';

////////// Routing for dashboard because of sidebar feature //////////
class SideBarDashboard extends Component {
  render() {
    return(
      <div>
        <Route path='/dashboard' component={SideBarHome}/>
      </div>
    )
  }
}

export default SideBarDashboard;