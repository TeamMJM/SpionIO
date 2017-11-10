import React from 'react';
import $ from 'jquery';
import 'jquery.fullscreen';

// import material-ui components
import { Card } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import HardwareDesktopWindows from 'material-ui/svg-icons/hardware/desktop-windows';
import ActionInput from 'material-ui/svg-icons/action/input';

// import React Components
import PlaybackBar from '../containers/PlaybackBar';

const Playback = (props) => {
  return(
    <Card className="playback-card">
      <Paper 
        zDepth={1} 
        className="playback-paper"
        rounded={false}
        >
        <IconButton 
          className="playback-icon-med" 
          >
          <HardwareDesktopWindows color='gray'/>
        </IconButton>
        <p className="playback-http">http://192.168.0.105:4000/</p>
        <IconMenu
          className="playback-iconmenu"
          iconButtonElement={
            <IconButton 
              className="playback-icon-med2" 
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
            className="header-menu-item"
            primaryText="Export as CSV" 
          />
          <MenuItem 
            hoverColor='white' 
            className="header-menu-item" 
            primaryText="Delete" 
          />
        </IconMenu>
      </Paper> 
      <iframe 
        className="react-iframe"
      />  
      <PlaybackBar 
        className="playback-bar"
        pause={props.pause} 
        play={props.play}
        step={props.step} 
        index={props.index} 
        slide={props.slide}
        isLive={props.isLive}
        liveStarted={props.liveStarted}
        len={props.len}
        flag={props.flag}
        fullscreen={props.fullscreen}
        live={props.live}
        />
    </Card>
  );
};

export default Playback;
