import React, { Component } from 'react';
// import './../styles/Dashboard.css';

import SideBarDashboard from './SideBarDashboard.js';
import DashboardMain from './DashboardMain.js';

import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import './../styles/App.css';

////////// Separate component that is similar to App.js but for whne a client has successfully signed into his specific dashboard //////////
const Dashboard = () => (
  <div>
    <SideBarDashboard /> 
    <DashboardMain />
  </div>
)
export default Dashboard;