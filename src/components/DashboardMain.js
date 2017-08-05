import React, { Component } from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

import Home from './Home';
import Sites from './Sites';
import Pages from './Pages';
import Settings from './Settings';
import PagesSingle from './PagesSingle';
import ClickReport from './ClickReport';
import ScrollReport from './ScrollReport';
import FunnelReport from './FunnelReport';
import './../styles/App.css';

////////// Routing for dashboard because of sidebar feature //////////
class DashboardMain extends Component {
  render() {
    return(
      <div>
        <Route exact path='/dashboard' component={Home}/>
        <Route exact path='/dashboard/sites' component={Sites}/>  
        <Route exact path='/dashboard/sites/:siteID' component={Pages}/> 
        <Route exact path='/dashboard/sites/:siteID/page/:pageID' component={PagesSingle}/>
        <Route exact path='/dashboard/sites/:siteID/page/:pageID/clickdata' component={ClickReport}/> 
        <Route exact path='/dashboard/sites/:siteID/page/:pageID/scrolldata' component={ScrollReport}/> 
        <Route exact path='/dashboard/sites/:siteID/page/:pageID/funneldata' component={FunnelReport}/>  
        <Route exact path='/dashboard/settings' component={Settings}/> 
      </div>
    )
  }
}

export default DashboardMain;