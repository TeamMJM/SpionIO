import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';

// import material-ui components
import Paper from 'material-ui/Paper';
import { Card } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import AVPlayCircleOutline from 'material-ui/svg-icons/AV/play-circle-outline';
import HardwareDesktopWindows from 'material-ui/svg-icons/hardware/desktop-windows';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import MapsLayers from 'material-ui/svg-icons/maps/layers';

// import our React components
import DashboardHeader from '../components/DashboardHeader';
import DashboardContent from '../components/DashboardContent';
import DashboardSettings from '../components/DashboardSettings';
import DashboardSidebar from '../components/DashboardSidebar';

////////// Separate component that is similar to App.js but for whne a client has successfully signed into his specific dashboard //////////
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recordings: [],
      storybook: false,
      settings: false,
    };
    this.generateRecordings = this.generateRecordings.bind(this);
    this.initialize = this.initialize.bind(this);
    this.styleStorybook = this.styleStorybook.bind(this);
    this.styleSettings = this.styleSettings.bind(this);
    this.toggle = this.toggle.bind(this);
  };

  componentDidMount() {
    this.initialize();
    this.styleStorybook();
    this.styleSettings();
    this.getRecordings();
  };

  initialize() {
    let url = window.location.href.split('/').pop();
    if (url === 'settings') {
      this.setState({storybook: false, settings: true})
    } else {
      this.setState({storybook: true, settings: false})
    };
  };

  toggle() {
    this.setState({settings: !this.state.settings, storybook: !this.state.storybook})    
  };

  styleStorybook() {
    if (this.state.storybook) {
      return (
        <div>
        <p className="playback-sidebar-p1">
        <IconButton 
            className="playback-sidebar-iconbtn"
            tooltip='Storybook'
          >
            <MapsLayers color='white'/>
          </IconButton>
          <p style={{margin: '0 auto', float: 'right', marginRight: '50%', marginTop: '1.5%'}}>Storybook</p>
        </p>
        </div>
      )
    } else {
      console.log('storybook not toggled')
      return (
        <p className="playback-sidebar-p2">
          <IconButton 
            className="playback-sidebar-iconbtn"
            tooltip='Storybook'
          >
            <MapsLayers color='black'/>
          </IconButton>
          <p style={{margin: '0 auto', float: 'right', marginRight: '53%', marginTop: '1.5%'}}>Storybook</p>
        </p>
      );
    };
  };

  styleSettings() {
    if (this.state.settings) {
    return (
        <p className="playback-sidebar-p3">
          <IconButton 
            className="playback-sidebar-iconbtn"
            tooltip='Settings'
          >
            <ActionSettings color='white'/>
          </IconButton>
          <p style={{margin: '0 auto', float: 'right', marginRight: '57%', marginTop: '1.5%'}}>Settings</p>
        </p>
      )  
    } else {
      return (
        <Link to='/settings'>
        <p className="playback-sidebar-p4">
          <IconButton 
            className="playback-sidebar-iconbtn"
            tooltip='Settings'
          >
            <ActionSettings color='black'/>
          </IconButton>
          <p style={{margin: '0 auto', float: 'right', marginRight: '58%', marginTop: '1.5%'}}>Settings</p>
        </p></Link>
      );
    };
  };

  getRecordings() {
    console.log('getting recordings')
    axios.get('/recordings')
    .then((res) => {
      this.setState({recordings: res.data})
    })
    .catch((err) => {
      return console.error(err);
    });
  };

  generateRecordings() {
    console.log('generating recordings')
    let recordingNodes = this.state.recordings.map((recordings) => {
    let date = recordings.createdTime.split('T')[0].split('-').reverse().slice(0, 2);
    let time = recordings.createdTime.split('T')[1].split('.')[0].split(':');
    if(date[1] === '08') {
      date[1] = 'Aug'
    };
    date = date.reverse().join(' ');
    if (time[0] > 12) {
      time[0] = (time[0] - 12).toString();
      time = time.slice(0, 2).join(':');
      time += 'PM';
    } else {
      time = time.slice(0, 2).join(':');
      time += 'AM';
    };

      
      return (
        <Paper 
          className="animated fadeIn recording-paper" 
          key={recordings._id} 
          >
          <div className="recording-block">
            <div className="recording-avatar">
              <img className="recording-icon" src={'./../../public/'+Math.floor((Math.random()*9)+1)+'.png'}/>
            </div>
            <div className="recording-description">
              <p className="recording-title">{'User ' + recordings._id.slice(0, 5)}</p>
              <p className="recording-sub">{'Visited on ' + date}</p> 
            </div>
          </div>
          <div className="recording-playback-wrapper">
            <div className="recording-playback">
              <Link className="recording-link" to={'/recordings/' + recordings._id}>
                <IconButton className="recording-icon-med" tooltip='play session'>
                  <AVPlayCircleOutline color='#006CAA'/>
                </IconButton>
              </Link>
              <p>{time}</p>
            </div>

            <div className="recording-platform">
              <div className="recording-platform-text">
                <p>Los Angeles</p>
              </div>
              <div className="recording-platform-icon">
                <IconButton className="recording-icon-small">
                  <HardwareDesktopWindows color='lightgray'/>
                </IconButton>
                <p>OS X · CHROME</p>
              </div>
            </div>


          </div>
        </Paper>
      );
    });
    return recordingNodes;
  };

  render() {
    return (
      <div>
        <DashboardHeader />
        <div className="dashboard-container">
          <DashboardSidebar
            storybook={this.state.storybook}
            settings={this.state.settings}
            initialize={this.initialize}
            styleStorybook={this.styleStorybook}
            styleSettings={this.styleSettings}
            toggle={this.toggle}
          />
          <Route exact path='/' render={(props) => (
            <DashboardContent {...props} generateRecordings={this.generateRecordings} />
          )}/>
          <Route exact path='/settings' component={DashboardSettings}/>
        </div>
      </div>
    );
  };
};

export default Dashboard;
