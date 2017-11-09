import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';

// import material-ui components
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import AVPlayCircleOutline from 'material-ui/svg-icons/AV/play-circle-outline';
import HardwareDesktopWindows from 'material-ui/svg-icons/hardware/desktop-windows';

// import our React components
import DashboardUserSession from './DashboardUserSession';
import DashboardHeader from './DashboardHeader';
import DashboardContent from './DashboardContent';
import DashboardSettings from './DashboardSettings';
import DashboardSidebar from './DashboardSidebar';

////////// Separate component that is similar to App.js but for whne a client has successfully signed into his specific dashboard //////////
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recordings: []
    }
    this.generateRecordings = this.generateRecordings.bind(this);
  }

  componentDidMount() {
    this.getRecordings();
  }

  getRecordings() {
    console.log('getting recordings')
    axios.get('/recordings')
    .then((res) => {
      this.setState({recordings: res.data})
    })
    .catch((err) => {
      return console.error(err);
    })
  }

  generateRecordings() {
    console.log('generating recordings')
    let recordingNodes = this.state.recordings.map((recordings) => {
      let date = recordings.createdTime.split('T')[0].split('-').reverse().slice(0, 2);
      let time = recordings.createdTime.split('T')[1].split('.')[0].split(':');
      if(date[1] === '08') {
        date[1] = 'Aug'
      }
      date = date.reverse().join(' ');
      if (time[0] > 12) {
        time[0] = (time[0] - 12).toString();
        time = time.slice(0, 2).join(':');
        time += 'PM';
      } else {
        time = time.slice(0, 2).join(':');
        time += 'AM';
      }

      
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
              <IconButton iconStyle={style.mediumIcon} style={style.medium} tooltip='play session'>
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
            <IconButton iconStyle={style.smallIcon} style={style.small}>
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
        <div>
          <DashboardSidebar/>
          <Route exact path='/' render={(props) => (
            <DashboardContent {...props} generateRecordings={this.generateRecordings} />
          )}/>
          <Route exact path='/settings' component={DashboardSettings}/>
        </div>
      </div>
    );
  };
};

const style = {
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
}

export default Dashboard;
