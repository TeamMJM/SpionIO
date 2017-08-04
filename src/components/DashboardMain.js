import React, { Component } from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

import Home from './Home.js';
import Sites from './Sites.js';
import Pages from './Pages.js';
import Settings from './Settings.js';
import PagesSingle from './PagesSingle.js'
import './../styles/App.css';
// import Team from './Team.js';

////////// Routing for dashboard because of sidebar feature //////////
class DashboardMain extends Component {
  render() {
    return(
      <div>
        <Route exact path='/dashboard' component={Home}/>
        <Route exact path='/dashboard/sites' component={Sites}/>  
        <Route exact path='/dashboard/sites/:siteID' component={Pages}/> 
        <Route exact path='/dashboard/sites/:siteID/page/:pageID' component={PagesSingle}/> 
        <Route exact path='/dashboard/settings' component={Settings}/> 
      </div>
    )
  }
}

export default DashboardMain;