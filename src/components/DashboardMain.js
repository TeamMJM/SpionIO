import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import DashboardContent from './DashboardContent';
import DashboardSideBar from './DashboardSideBar';

<<<<<<< HEAD
import Home from './Home';
import DashboardHome from './DashboardHome';
import UserSession from './UserSession';

import './../styles/App.css';

////////// Routing for dashboard because of sidebar feature //////////
=======
>>>>>>> d7b917f9702905721645ceb6d4b7f8b3845b0e0d
class DashboardMain extends Component {
  render() {
    return(
      <div>
<<<<<<< HEAD
        <Route exact path='/dashboard' component={DashboardHome} />
        <Route exact path='/dashboard/playback' component={UserSession} />
=======
        <DashboardSideBar/>
        <DashboardContent/>
>>>>>>> d7b917f9702905721645ceb6d4b7f8b3845b0e0d
      </div>
    )
  }
}

export default DashboardMain;