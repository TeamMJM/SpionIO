import React, { Component } from 'react';
import { fromJS } from "immutable";
import axios from 'axios';
import $ from 'jquery';
import 'jquery.fullscreen';

// import our React components
import { Card } from 'material-ui/Card';
import Playback from './Playback';
import Storyboard from './Storyboard';
import DashboardHeader from './DashboardHeader';
import PlaybackSidebar from './PlaybackSidebar';
import jump from 'jump.js'

const style = {
  width: '100%',
  margin: '0 auto'
}



// let i = 0;

let REPLAY_SCALE = 0.803;
let mouseMade = false;

class DashboardUserSession extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetList: [],
      flag: false,
      recording: null,
      len:0,
      response: null,
      stop:false,
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
    this.animateFrame = this.animateFrame.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.isLiveHandler = this.isLiveHandler.bind(this);
    this.isLiveStyler = this.isLiveStyler.bind(this);
    this.getRecordingData = this.getRecordingData.bind(this);
    this.slide = this.slide.bind(this);
    this.toggleFullscreen = this.toggleFullscreen.bind(this);
  }

  toggleFullscreen() {
    $('.react-iframe').fullscreen();
    REPLAY_SCALE = 1;
    this.frameScript(this)
  }

  async animateFrame() {

    let $iframeDoc = this.state.$iframeDoc
    let response = this.state.response
    let index = this.state.index
    let flag = this.state.flag
    if(this.state.$fakeCursor === null){
      let $fakeCursor = $('<img class="fake-cursor" src="./../../public/fakecursor.png"/>')
      await this.setState({
        $fakeCursor: $fakeCursor
      })

    }
    let currentFrame = response.Frame[index];
    if (!currentFrame) {
      return;
    }

    if (flag) {
      let localClickX  =currentFrame.ClickX* 0.843;
      if (currentFrame.target && currentFrame.event === 'click') {   
        this.state.$fakeCursor.css({
          backgroundColor: '#006CAA',
          transition: 'background-color .05s linear'
        })
        setTimeout(()=> {
          this.state.$fakeCursor.css({
          backgroundColor: 'transparent',
        })
        }, 64)
  
        this.addtoList(currentFrame.target)
      }

      // if (currentFrame.event === "log") {
      //   console.log('logstr is: ', currentFrame.logStr);
      //   console.log('type is:', typeof currentFrame.logStr);
      //   this.addtoList(currentFrame.logStr)
      // }

  
      if (currentFrame.event === "scroll") {

        $iframeDoc.contents().scrollLeft(currentFrame.scrollLeft)
        $iframeDoc.contents().scrollTop(currentFrame.scrollTop)
        //scrollToFunc(currentFrame.scrollTop,$iframeDoc,20)
       
        this.setState({
          index: index + 1
        })
        if(this.state.index >= response.Frame.length){
          console.log("stop")
          this.setState({
            stopPlay: true
          })
        }
        else{
            requestAnimationFrame(this.animateFrame.bind(this))
        }
      } else if(currentFrame.event === 'mousemove' || currentFrame.event === "mouseenter" || currentFrame.event === "keypress" || currentFrame.event === 'mouseleave' || currentFrame.event === 'click'){
        if (currentFrame.event === 'mouseleave') {
  
          this.state.$fakeCursor.css({
            top: currentFrame.ClickY,
            left: localClickX
          })
          $iframeDoc.find(this.state.$fakeCursor).remove();
          this.setState({
            $fakeCursor:null
          })
          mouseMade = false;
         
         this.setState({
            index: index + 1
          })
          if(this.state.index >= response.Frame.length){
            console.log("stop")
            this.setState({
              stopPlay: true
            })
          }
          else{
              requestAnimationFrame(this.animateFrame.bind(this))
          }
        } else {
          if (!mouseMade) {
            $iframeDoc.find('body').append(this.state.$fakeCursor);
            this.state.$fakeCursor.css({
              borderRadius: 50,
              width: 24,
              height: 24,
              position: "fixed",
              top: 0,
              left: 0,
            })
            mouseMade = true;
            this.state.$fakeCursor.css({
              top: currentFrame.ClickY,
              left: localClickX
            })
            this.setState({
              index: index + 1
            })
            if(this.state.index >= response.Frame.length){
              console.log("stop")
              this.setState({
                stopPlay: true
              })
            } else {
              requestAnimationFrame(this.animateFrame.bind(this))
            }
          } else {
            this.state.$fakeCursor.css({
              top: currentFrame.ClickY,
              left: localClickX
            })
            this.setState({
              index: index + 1
            })
            if(this.state.index >= response.Frame.length){
              console.log("stop")
              this.setState({
                stopPlay: true
              })
            } else {
              requestAnimationFrame(this.animateFrame.bind(this))
            }
          }
        }
      } else {
        await this.setState({
          index: index + 1
        })
        setTimeout(() =>{
          if(this.state.index >= response.Frame.length){
            console.log("stop")
            this.setState({
              stopPlay: true
            })
          }
          else{
              requestAnimationFrame(this.animateFrame.bind(this))
          }
        },40);
      }
    }
  }

  async frameScript(context) {
    let recording = this.state.recording
    let $iframe = $('.react-iframe');
    $iframe.height(this.state.recording.height);
    $iframe.width(this.state.recording.width * REPLAY_SCALE);

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
    await context.setState({
      $iframeDoc: $iframeDoc
    })
    context.animateFrame()
  }

  // adding to list array for storyboard to render
  addtoList(element) {
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
    this.animateFrame()
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
      len:response.data.Frame.length
    });
    this.frameScript(this);
  }

  isLiveHandler(){
    if(this.state.isLive){
      const context = this;
      //need to get data again
      let interval = setInterval( async ()=>{
          if(context.state.response.Frame[context.state.response.Frame.length-1].event !== 'unload'){
            let response = await axios.get('/frames/' + context.props.match.params.recordingID); 
            await (context.setState({liveStarted:true,response:response.data}))        
            if(context.state.stopPlay){
              console.log("animate frame")
              context.animateFrame()
            }
          }else{
            context.setState({islive: !context.state.isLive})
            clearInterval(interval);
          }
      },1000);

    }
  }

  isLiveStyler() {
    if (this.state.isLive) {
      setInterval(() => {
        $('.live-btn').removeClass('red animated fadeOut')
        $('.live-btn').addClass('red animated fadeIn');
      }, 600)
      setInterval(() => {
        $('.live-btn').removeClass('red animated fadeIn')
        $('.live-btn').addClass('red animated fadeOut');
      }, 900)
    }
  }

  // links position of where you are in the event array to where the slider is
  async slide(newInd) {
    await this.setState({
      flag: true,
      index: newInd
    })
    this.animateFrame()
  }

  // gathers data and calls frameScript()
  async componentDidMount() {
    await this.getRecordingData();
    console.log(this.state.recording)
    // console.log(this.state.recording.position)
    $('.react-iframe').on('fscreenclose', () => {
      REPLAY_SCALE = .802;
      this.frameScript(this);
    })
    await this.isLiveStyler();
  }

  render() {
    return (
      <div style={style}>
        <PlaybackSidebar/>
          <div id='customFade' className='animated fadeIn'>
            <Playback
              style={{height: '600px'}} 
              key={this.props.match.params.recordingID} 
              fullscreen={this.toggleFullscreen} 
              flag={this.state.flag} 
              frameScript={this.frameScript} 
              context={this} 
              len={this.state.len}
              pause={this.pause} 
              liveStarted={this.state.liveStarted}
              play={this.play} 
              isLive={this.isLiveHandler}
              step={this.state.step} 
              index={this.state.index } 
              slide={this.slide}
              live={this.state.isLive}
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