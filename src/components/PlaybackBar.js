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
    pointerEvents: 'none',
    display: 'inline-block',
    // float: 'left',
    // marginLeft: '16%',
    // padding: 0,
  },
}

class PlaybackBar extends Component {
  constructor(props) {
    super(props)
    this.state={
      val: 0
    };
    this.handleSlide = this.handleSlide.bind(this);
  }

  toggleIcon() {
    if(this.props.playing) {
      return <AvPauseIcon color='#006CAA'/>
    } else {
      return <AvPlayArrowIcon color='#006CAA'/>
    }
  }
  handleSlide(event,value){
    console.log("Hello");
    this.setState({val:value});
    this.props.slide(value);
  }
  
  render() {
    console.log("Enter");
    console.log(this.props.len)
    return (
      <div style={{margin: '0 auto'}}>
        <Slider 
          style={{margin: '0 auto'}}
          sliderStyle={{margin: '0 auto'}}
          min={0}
          max={this.props.len}
          step={1} 
          value={this.props.val} 
          onChange={this.handleSlide}/>
        <Toolbar style={{backgroundColor: 'white', margin: '0, auto'}}>
          <IconButton iconStyle={style.mediumIcon} style={style.medium} touch={true} onTouchTap={this.props.play}>
            <AvPlayArrowIcon color='#006CAA'/>
          </IconButton>
          <IconButton iconStyle={style.mediumIcon} style={style.medium} touch={true} onTouchTap={this.props.pause}>
            <AvPauseIcon />
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