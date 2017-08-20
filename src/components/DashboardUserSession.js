import React, { Component } from 'react';
import { fromJS } from "immutable";
import './../styles/Home.css';
import axios from 'axios';
import $ from 'jquery';
import 'jquery.fullscreen';

// import our React components
import { Card } from 'material-ui/Card';
import Playback from './Playback';
import Storyboard from './Storyboard';
import DashboardHeader from './DashboardHeader';
import PlaybackSidebar from './PlaybackSidebar';


const style = {
  width: '100%',
  margin: '0 auto'
}



// let i = 0;

let REPLAY_SCALE = 0.863;
let mouseMade = false;

class DashboardUserSession extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetList: [],
      flag: true,
      recording: null,

      response: null,
      stop:false,
      stop: false,
      startPlay: null,
      $iframeDoc: null,
      $fakeCursor: null,
      stopPlay:false,      
      step: 1,
      liveStarted: false,
      index: 0,
      isLive: false
    }
    this.addtoList = this.addtoList.bind(this);
    this.frameScript = this.frameScript.bind(this);
    this.getFrame = this.getFrame.bind(this);
    this.animate = this.animate.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.isLiveHandler = this.isLiveHandler.bind(this);
    this.getRecordingData = this.getRecordingData.bind(this);
    this.slide = this.slide.bind(this);
    //this.toggleFullscreen = this.toggleFullscreen.bind(this);
  }

  toggleFullscreen() {
    $('.react-iframe').fullscreen();
    REPLAY_SCALE = 1;
    this.frameScript(this, this.state.response, this.state.recording)
  }

  async animate(currentFrame, $fakeCursor, $iframeDoc) {
    const animationRate = 100 * Math.abs(currentFrame.movementX - currentFrame.movementY) / 100;
    if (currentFrame.target && currentFrame.event === 'click') {
      console.log("inside event")
      console.log(currentFrame)
      this.addtoList(currentFrame.target)
    }

    if (currentFrame.event === "scroll") {
      //await $iframeDoc.contents().animate({scrollTop:currentFrame.scrollTop}).promise()

      $iframeDoc.contents().scrollTop(currentFrame.scrollTop)
      $iframeDoc.contents().scrollLeft(cukrrentFrame.scrollLeft)
      await this.setState({
        index: this.state.index + 1
      })
      if (this.state.index < this.state.response.Frame.length) {
        this.getFrame($iframeDoc, $fakeCursor, this, this.state.response, this.state.recording);
      }
    } else {
      if (currentFrame.event === 'mouseleave') {

        await $fakeCursor.animate({
          top: currentFrame.ClickY,
          left: currentFrame.ClickX
        }, {
          duration: animationRate
        }).promise()
        $iframeDoc.find($fakeCursor).remove();
        mouseMade = false;
        await this.setState({
          index: this.state.index + 1
        })
        if (this.state.index < this.state.response.Frame.length) {
          this.getFrame($iframeDoc, $fakeCursor, this, this.state.response, this.state.recording);
        }
        else{
          this.setState({
            stopPlay: true
          })
        }
      } else {

        if (!mouseMade) {
          $iframeDoc.find('body').append($fakeCursor);
          $fakeCursor.css({
            borderRadius: 50,
            background: 'blue',
            width: 10,
            height: 10,
            position: "fixed",
            top: 0,
            left: 0,
          })
          mouseMade = true;
          await $fakeCursor.css({
            top: currentFrame.ClickY,
            left: currentFrame.ClickX
          }).promise()
          await this.setState({
            index: this.state.index + 1
          })
          if (this.state.index < this.state.response.Frame.length) {
            this.getFrame($iframeDoc, $fakeCursor, this, this.state.response, this.state.recording);
          }
          else{
            this.setState({
              stopPlay: true
            })
          }
        } else {
          await $fakeCursor.animate({
            top: currentFrame.ClickY,
            left: currentFrame.ClickX
          }, {
            duration: animationRate
          }).promise()
          await this.setState({
            index: this.state.index + 1
          })
          if (this.state.index < this.state.response.Frame.length) {
            this.getFrame($iframeDoc, $fakeCursor, this, this.state.response, this.state.recording);
          }
          else{
            this.setState({
              stopPlay: true
            })
          }
        }
      }
    }
  }

  async frameScript(context) {
    let response = context.state.response;
    let recording = context.state.recording;

  }



  getFrame($iframeDoc, $fakeCursor, context, response, recording) {
    let currentFrame = response.Frame[context.state.index];
    if (!currentFrame) {
      return;
    }
    if (context.state.flag) {
      context.animate(currentFrame, $fakeCursor, $iframeDoc);
    }

  }


  async frameScript(context,response,recording) {
    let $iframe = $('.react-iframe');
    $iframe.height(recording.height * (REPLAY_SCALE-.053));
    $iframe.width(recording.width * REPLAY_SCALE);

    $iframe.css({
      '-ms-zoom': `${REPLAY_SCALE}`,
      '-moz-transform': `scale(${REPLAY_SCALE})`,
      '-moz-transform-origin': `0 0`,
      '-o-transform': `scale(${REPLAY_SCALE})`,
      '-o-transform-origin': `0 0`,
      '-webkit-transform': `scale(${REPLAY_SCALE})`,
      '-webkit-transform-origin': `0 0`
    })
    $iframe[0].contentDocument.documentElement.innerHTML = recording.htmlCopy;
    const $iframeDoc = $($iframe[0].contentDocument.documentElement);
    let $fakeCursor = $('<div class="cursor"></div>')
    await context.setState({
      $fakeCursor: $fakeCursor,
      $iframeDoc: $iframeDoc
    })
    const startPlay = Date.now();
    context.getFrame($iframeDoc, $fakeCursor, context, response, recording)
  }

  // adding to list array for storyboard to render
  addtoList(element) {
    console.log("element",element)
    let list = this.state.targetList;

    list.push(element)
    this.setState({
      targetList: list
    })
  }


  pause() {
    this.setState({
      flag: false
    })
  }

  async play() {
    await this.setState({
      flag: true
    })
    this.getFrame(this.state.$iframeDoc, this.state.$fakeCursor, this, this.state.response, this.state.recording)
  }

  async getRecordingData() {
    let recording = await axios.get('/recordings/' + this.props.match.params.recordingID)
    let response = await axios.get('/frames/' + this.props.match.params.recordingID);

    const step = 1 / (response.data.Frame.length ? response.data.Frame.length : 1);
    let islive = false;
    if(response.data.Frame[response.data.Frame.length-1].event !== 'unload'){
      islive = true;
    }

    await this.setState({
      recording: recording.data,
      response: response.data,
      isLive: islive,
    });
    this.frameScript(this, this.state.response, this.state.recording);
  }

  isLiveHandler(){
    console.log("Button click")
    if(this.state.isLive){
      const context = this;
      //need to get data again
      console.log("I is live bro!")
      let interval = setInterval( async ()=>{
       
          if(context.response.Frame[context.response.Frame.length-1].event !== 'unload'){
            let response = await axios.get('/frames/' + context.props.match.params.recordingID); 
            await (context.setState({liveStarted:true,response:response.data}))        
            if(context.state.stopPlay){
              context.getFrame(context.state.$iframeDoc, context.state.$fakeCursor, context, context.state.response, context.state.recording)
            }
          }else{
            context.setState({islive:context.state.isLive})
            clearInterval(interval);
          }
      },1000);

    }
  }

  // links position of where you are in the event array to where the slider is
  async slide(newInd) {
    await this.setState({
      flag: true,
      index: newInd
    })
    this.getFrame(this.state.$iframeDoc, this.state.$fakeCursor, this, this.state.response, this.state.recording)
  }

  // gathers data and calls frameScript()
  componentDidMount() {
    this.getRecordingData();
    $('.react-iframe').on('fscreenclose', () => {
      console.log('exiting fullscreen')
      REPLAY_SCALE = .802;
      this.frameScript(this, this.state.response, this.state.recording);
    })
  }

  componentWillUpdate() {
    this.state.targetList = [];
  }

  render() {
    return (
      <div style={style}>
      <PlaybackSidebar/>
      <div id='customFade' className='animated fadeIn'>
        <Playback 
          key={this.props.match.params.recordingID} 
          fullscreen={this.toggleFullscreen} 
          flag={this.state.flag} 
          frameScript={this.frameScript} 
          context={this} 
          pause={this.pause} 
          liveStarted={this.state.liveStarted}
          play={this.play} 
          isLive={this.isLiveHandler}
          step={this.state.step} 
          index={this.state.index } 
          slide={this.slide}
        />
        <Storyboard 
          key={this.props.match.params.recordingID + '1'} 
          recordingID={this.props.match.params.recordingID} 
          targetList={this.state.targetList} 
        />         
      </div>
      </div>
    );
  }
};

export default DashboardUserSession;