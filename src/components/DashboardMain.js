import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import DashboardContent from './DashboardContent';
import DashboardSideBar from './DashboardSideBar';

class DashboardMain extends Component {
  render() {
    return(
      <div>
        <DashboardSideBar/>
        <DashboardContent/>
      </div>
    )
  }
}

export default DashboardMain;