import React, { Component } from 'react';

// import material-ui components
import Slider from 'material-ui/Slider';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarSeparator} from 'material-ui/Toolbar';
import LinearProgress from 'material-ui/LinearProgress';
import AvPlayArrowIcon from 'material-ui/svg-icons/av/play-arrow';
import AvPauseIcon from 'material-ui/svg-icons/av/pause';
import AvSkipNextIcon from 'material-ui/svg-icons/av/skip-next';
import AvSkipPreviousIcon from 'material-ui/svg-icons/av/skip-previous';
import ActionChromeReaderMode from 'material-ui/svg-icons/action/chrome-reader-mode';

const style = {
  mediumIcon: {
    width: 36,
    height: 36,
  },
  medium: {
    width: 56,
    height: 56,
    display: 'inline-block',
  },
  bar: {
    backgroundColor: 'white', 
    margin: '0, auto'
  },
  button: {
    float: 'right', 
    marginTop: '2%',
  },
}

class PlaybackBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      val: 0,
      flag: true,
      index:0
    };
    this.toggleIcon = this.toggleIcon.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
    this.endSlide = this.endSlide.bind(this);
    this.startSlide = this.startSlide.bind(this);
    this.setVal = this.setVal.bind(this);
    this.style = this.style.bind(this);
  }

  toggleIcon() {
    if(this.props.flag) {
      return <AvPauseIcon color='#006CAA'/>
    } else {
      return <AvPlayArrowIcon color='#006CAA'/>
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.index > this.props.len){
      this.setState({
        index: this.props.len
      })
    }else{
      this.setState({
        index: this.props.index
      })
    }
  }
  togglePlay() {
    if(this.props.flag) {
      this.props.pause()
    } else {
      this.props.play()
    }
  }

  componentDidMount() {
    this.toggleIcon();
    this.style();
  }

  startSlide(event){
    this.props.pause()
  }

  endSlide(event){
    this.props.slide(this.state.val)
  }

  setVal(event,value){
    this.setState({
      val: Math.ceil(value/this.props.step)
    })
  }

  style() {
    if(this.props.live) {
      return (
        <FlatButton
          style={style.button}
          className='live-btn'
          labelStyle={{color: 'red', fontSize: '1em'}}
          label="Live"
          onClick={this.props.isLive}
        />
      )
    } else {
      return (
        <FlatButton
          style={style.button}
          className='live-btn'
          labelStyle={{fontSize: '1em'}}
          label="Live"
          onClick={this.props.isLive}
        />
      )
    }
  }
  
  
  render() {
    return (          
      <div style={{margin: '0 auto', display: 'block', position: 'fixed', bottom: 0, width: '65%'}}>
        <Slider 
          style={{margin: '0 auto'}}
          sliderStyle={{margin: '0 auto'}}
          min={0}
          max={this.props.len}
          step={this.props.step} 
          value={this.state.index} 
          onChange={this.setVal}
          onDragStart={this.startSlide}
          onDragStop={this.endSlide}
        /> 
        <Toolbar style={style.bar}>
          <IconButton 
            iconStyle={style.mediumIcon} 
            style={style.medium} 
            touch={true} 
            onTouchTap={this.togglePlay}
          >
            {this.toggleIcon()}
          </IconButton>
          <FlatButton 
            style={style.button}
            labelStyle={{fontSize: '1em'}} 
            label='Full Screen' 
            onClick={this.props.fullscreen}
          />

          {this.style()}

        </Toolbar>
      </div>
    )
  }
}

export default PlaybackBar;