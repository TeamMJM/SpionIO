import React, { Component } from 'react';
import Slider from 'material-ui/Slider';
import IconButton from 'material-ui/IconButton';
import {Toolbar, ToolbarSeparator} from 'material-ui/Toolbar';
import AvPlayArrowIcon from 'material-ui/svg-icons/av/play-arrow';
import AvPauseIcon from 'material-ui/svg-icons/av/pause';
import AvSkipNextIcon from 'material-ui/svg-icons/av/skip-next';
import AvSkipPreviousIcon from 'material-ui/svg-icons/av/skip-previous';
import ActionChromeReaderMode from 'material-ui/svg-icons/action/chrome-reader-mode';


import './../styles/Home.css';


const style = {
  mediumIcon: {
    width: 36,
    height: 36,
  },
  medium: {
    width: 56,
    height: 56,
    display: 'inline-block',
    // float: 'left',
    // marginLeft: '16%',
    // padding: 0,
  },
}

class PlaybackBar extends Component {
  constructor(props) {
    super(props)
    this.toggleIcon = this.toggleIcon.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
  }

  toggleIcon() {
    console.log(this.props.playing)
    if(this.props.playing) {
      return <AvPauseIcon color='#006CAA'/>
    } else {
      return <AvPlayArrowIcon color='#006CAA'/>
    }
  }

  togglePlay() {
    if(this.props.playing) {
      return this.props.pause
    } else {
      return this.props.play
    }
  }

  componentDidMount() {
    this.toggleIcon();
  }
  
  render() {
    const value = this.props.step * this.props.index;
    const slide = this.props.slide;
    const step = this.props.step;
    return (
      <div style={{margin: '0 auto'}}>
        <Slider 
          style={{margin: '0 auto'}}
          sliderStyle={{margin: '0 auto'}}
          step={this.props.step} 
          value={value} 
          onChange={function() {
            slide(Math.floor(value / step))
          }}/>
        <Toolbar style={{backgroundColor: 'white', margin: '0, auto'}}>
          <IconButton iconStyle={style.mediumIcon} style={style.medium} touch={true} onTouchTap={this.togglePlay()}>
            {this.toggleIcon()}
          </IconButton>
          <IconButton iconStyle={style.mediumIcon} style={style.medium} touch={true}>
            <AvSkipPreviousIcon />
          </IconButton>
          <IconButton iconStyle={style.mediumIcon} style={style.medium} touch={true}>
            <AvSkipNextIcon />
          </IconButton>
        </Toolbar>
      </div>
    )
  }
}

export default PlaybackBar;