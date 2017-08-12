import React, { Component } from 'react';
import Slider from 'material-ui/Slider';
import IconButton from 'material-ui/IconButton';
import {Toolbar, ToolbarSeparator} from 'material-ui/Toolbar';
import AvPlayArrowIcon from 'material-ui/svg-icons/av/play-arrow';
import AvPauseIcon from 'material-ui/svg-icons/av/pause';
import AvSkipNextIcon from 'material-ui/svg-icons/av/skip-next';
import AvSkipPreviousIcon from 'material-ui/svg-icons/av/skip-previous';


import './../styles/Home.css';


// const style = {

// }

class PlaybackBar extends Component {
  render() {
    return (
      <div>
        <Slider />
        <Toolbar>
          <IconButton touch={true} onTouchTap={this.props.flag}>
            <AvPlayArrowIcon />
          </IconButton>
          <IconButton touch={true}>
            <AvPauseIcon />
          </IconButton>
          <IconButton touch={true}>
            <AvSkipPreviousIcon />
          </IconButton>
          <IconButton touch={true}>
            <AvSkipNextIcon />
          </IconButton>
        </Toolbar>
      </div>
    )
  }
}

export default PlaybackBar;