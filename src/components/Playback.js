import React, { Component } from 'react';
import PlaybackBar from './PlaybackBar';
import './../styles/Home.css';
import axios from 'axios';

// import material-ui components
import { Card } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import HardwareDesktopWindows from 'material-ui/svg-icons/hardware/desktop-windows';
import ActionInput from 'material-ui/svg-icons/action/input';

const style = {
  card: {
    float: 'left',
    justifyContent: 'center',
    alignContent: 'center',
    width: '65%', 
    height: '100%',
    backgroundColor: 'lightgrey',
    padding: '2px'
  },
  iframe: {
    width: '75%',
    height: '100%',
    display: 'inline-block',
    margin: '0 auto',
    padding: '0',
    pointerEvents: 'none',
  },
  bar: {
    width: '100%',
    margin: '0 auto'
  },
  paper: {
    display: 'inline-block',
    marginTop: '1px',
    marginLeft: '1px',
    height: '48px',
    width: '99.7%',
    verticalAlign: 'middle',
  },
  mediumIcon: {
    width: 26,
    height: 26,
  },
  medium: {
    float: 'left',
    marginLeft: '1%',
    width: 118,
    height: 48,
    borderRight: '1px solid gray',
    padding: 0,
    pointerEvents: 'none',
  },
  medium2: {
    float: 'right',
    width: 48,
    height: 48,
    padding: 0,
    marginRight: '5%',
  },
  p: {
    color: 'gray',
    marginLeft: '2%',
    display: 'inline-block',
    letterSpacing: '1px',
    fontSize: '.8em',
    marginTop: '2%',
    height: '24px',
    float: 'left',
  }
}

class Playback extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <Card style={style.card} >
        <Paper 
          zDepth={1} 
          style={style.paper} 
          rounded={false}
          >
          <IconButton 
            iconStyle={style.mediumIcon} 
            style={style.medium}
            >
            <HardwareDesktopWindows color='gray'/>
          </IconButton>
          <p style={style.p}>http://localhost:4000/</p>
          <IconMenu
            style={{float: 'right', marginRight: '5%'}} 
            iconButtonElement={
              <IconButton 
                iconStyle={style.mediumIcon} 
                style={style.medium2} 
                tooltip='Export'
                >
                <ActionInput color='gray'/>
              </IconButton>
            }
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            listStyle={{height: '5px' }}
            menuStyle={{height: '110px'}}
            >
            <MenuItem 
              hoverColor='white' 
              style={{fontSize: '0.9em'}} 
              primaryText="Export as CSV" 
            />
            <MenuItem 
              hoverColor='white' 
              style={{fontSize: '0.9em'}} 
              primaryText="Delete" 
            />
          </IconMenu>
        </Paper> 
        <iframe 
          style={style.iframe} 
          className="react-iframe"
        />  
        <PlaybackBar 
          style={style.bar} 
          pause={this.props.pause} 
          play={this.props.play}
          step={this.props.step} 
          index={this.props.index} 
          slide={this.props.slide}
          len={this.props.len}
          flag={this.props.flag}
          fullscreen={this.props.fullscreen}
          />
      </Card>
    );
  }
}

export default Playback;