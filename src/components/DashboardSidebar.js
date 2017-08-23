import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import material-ui components
import Paper from 'material-ui/Paper';
import { Card } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import MapsLayers from 'material-ui/svg-icons/maps/layers';
import AVPlayCircleOutline from 'material-ui/svg-icons/AV/play-circle-outline';

const style = {
  paper1: {
    float: 'left', 
    width: '20.3%', 
    height: '670px', 
    backgroundColor: '#F4F7F5'
  },
  paper2: {
    height: '60px', 
    margin: '0 auto', 
    backgroundColor: '#F4F7F5'
  },
  p1: {
    marginTop: '5%', 
    paddingTop: '4%', 
    paddingBottom: '2%', 
    fontSize: '.9em', 
    width: '90%', 
    backgroundColor: '#006CAA', 
    borderRadius: '3px', 
    color: 'white', 
    paddingLeft: '4%'
  }, 
  p2: {
    marginTop: '5%', 
    paddingTop: '5%', 
    paddingBottom: '5%', 
    fontSize: '.9em', 
    color: 'black', 
    paddingLeft: '7%'
  },
  p3: {
    paddingTop: '5%', 
    paddingBottom: '5%', 
    fontSize: '.9em', 
    width: '90%', 
    backgroundColor: '#006CAA', 
    borderRadius: '3px', 
    color: 'white', 
    paddingLeft: '4%'
  },
  p4: {
    paddingTop: '5%', 
    paddingBottom: '5%', 
    fontSize: '.9em', 
    color: 'black', 
    paddingLeft: '7%'
  },
  mediumIcon: {
    width: 22,
    height: 22,
  },
  medium: {
    width: 22,
    height: 22,
    padding: 0,
  },
}

class DashboardSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storybook: false,
      settings: false,
    }
    this.toggle = this.toggle.bind(this);
    this.styleStorybook = this.styleStorybook.bind(this);
    this.styleSettings = this.styleSettings.bind(this);
    this.initialize = this.initialize.bind(this);
  }

  initialize() {
    let url = window.location.href.split('/').pop();
    if (url === 'settings') {
      this.setState({storybook: false, settings: true})
    } else {
      this.setState({storybook: true, settings: false})
    }
  }

  styleStorybook() {
    if (this.state.storybook) {
      return (
        <div>
        <p style={style.p1}>
        <IconButton 
            iconStyle={style.mediumIcon} 
            style={style.medium} 
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
        <p style={style.p2}>
          <IconButton 
            iconStyle={style.mediumIcon} 
            style={style.medium} 
            tooltip='Storybook'
          >
            <MapsLayers color='black'/>
          </IconButton>
          <p style={{margin: '0 auto', float: 'right', marginRight: '53%', marginTop: '1.5%'}}>Storybook</p>
        </p>
      )
    }
  }

  styleSettings() {
    if (this.state.settings) {
    return (
        <p style={style.p3}>
          <IconButton 
            iconStyle={style.mediumIcon} 
            style={style.medium} 
            tooltip='Settings'
          >
            <ActionSettings color='white'/>
          </IconButton>
          <p style={{margin: '0 auto', float: 'right', marginRight: '57%', marginTop: '1.5%'}}>Settings</p>
        </p>
      )  
    } else {
      return (
        <Link to='/dashboard/settings'>
        <p style={style.p4}>
          <IconButton 
            iconStyle={style.mediumIcon} 
            style={style.medium} 
            tooltip='Settings'
          >
            <ActionSettings color='black'/>
          </IconButton>
          <p style={{margin: '0 auto', float: 'right', marginRight: '58%', marginTop: '1.5%'}}>Settings</p>
        </p></Link>
      )
    }
  }
  
  toggle() {
    this.setState({settings: !this.state.settings, storybook: !this.state.storybook})    
  }

  componentDidMount() {
    this.initialize();
    this.styleStorybook();
    this.styleSettings();
  }

  render() {
    return (
    <Paper 
      zDepth={0}
      id='customFade2s' 
      className='animated fadeIn' 
      style={style.paper1}
      >
      <Paper 
        zDepth={0} 
        style={style.paper2}
        >
        <Link 
          style={{textDecoration: 'none', letterSpacing: '1px'}} 
          to='/dashboard' 
          onClick={this.toggle}
          >
          {this.styleStorybook()}
        </Link>
      </Paper>
      <Paper 
        zDepth={0} 
        style={style.paper2}
        >
        <Link 
          style={{textDecoration: 'none', letterSpacing: '1px'}} 
          to='/dashboard' 
          onClick={this.toggle}
          >
          {this.styleSettings()}
        </Link>
      </Paper>

      <Paper 
        zDepth={0} 
        style={style.paper2}
        >
        <Link 
          style={{textDecoration: 'none', letterSpacing: '1px'}} 
          to='/dashboard/recordings/:recordingID' 
          onClick={this.toggle}
          >
          {/* {this.styleSettings()} */}
          <Link to='/dashboard/recordings/:recordingID'>
          <p style={style.p4}>
          <IconButton 
            iconStyle={style.mediumIcon} 
            style={style.medium} 
            tooltip='Demo Playback'
          >
            <AVPlayCircleOutline color='black'/>
          </IconButton>
          <p style={{margin: '0 auto', float: 'right', marginRight: '58%', marginTop: '1.5%'}}>For SS</p>
        </p></Link>
        </Link>
      </Paper>
    </Paper>
  )}
}

export default DashboardSidebar;