import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './../styles/Home.css';
import './../styles/App.css';

// import our React components
import DashboardUserSession from './DashboardUserSession';
import DashboardHeader from './DashboardHeader';
import DashboardContent from './DashboardContent';
import DashboardSettings from './DashboardSettings';
import DashboardSidebar from './DashboardSidebar';

// import material-ui components
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import AVPlayCircleOutline from 'material-ui/svg-icons/AV/play-circle-outline';
import HardwareDesktopWindows from 'material-ui/svg-icons/hardware/desktop-windows';


const style = {
  paper: {
    verticalAlign: 'middle',
    height: '60px',
  },
  mediumIcon: {
    width: 30,
    height: 30,
  },
  medium: {
    padding: 0,
  },
  smallIcon: {
    width: 16,
    height: 16,
  },
  small: {
    padding: 0,
    width: 30,
    height: 30,
    float: 'left'
  },
  p1 : {
    fontSize: '.7em', 
    float: 'right', 
    width: '100px', 
    paddingTop: '13%'
  },
  p2: {
    fontSize: '.8em', 
    margin: '0 auto', 
    letterSpacing: '2px', 
    marginLeft: '6.5%', 
    marginTop: '10%'
  },
  p3: {
    fontSize: '.6em', 
    margin: '0 auto', 
    float: 'right', 
    marginTop: '10%'
  }
}
////////// Separate component that is similar to App.js but for whne a client has successfully signed into his specific dashboard //////////
class Dashboard extends Component {
  render() {
    return (
      <div>
        <DashboardHeader />
        <div>
          <DashboardSidebar/>
          <Route exact path='/' component={DashboardContent}/>
          <Route exact path='/settings' component={DashboardSettings}/>
        </div>
      </div>
    )
  }
} 

export default Dashboard;