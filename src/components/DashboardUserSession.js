import React, {
  Component
} from 'react';
import {
  fromJS
} from "immutable";
import './../styles/Home.css';
import axios from 'axios';
import $ from 'jquery';
import 'jquery.fullscreen';

// import our React components
import Playback from './Playback';
import Storyboard from './Storyboard';
import DashboardHeader from './DashboardHeader';
import PlaybackSidebar from './PlaybackSidebar';

const style = {
  width: '100%',
  margin: '0 auto'
}

let REPLAY_SCALE = 0.802;
let mouseMade = false;
$.fn.getPath = function () {
  // stolen from http://stackoverflow.com/a/2068381/1376627
  if (this.length != 1) throw 'Requires one element.';
  var path, node = this;
  while (node.length) {
    var realNode = node[0],
      name = realNode.localName;
    if (!name) break;
    name = name.toLowerCase();

    var parent = node.parent();

    var siblings = parent.children(name);
    if (siblings.length > 1) {
      name += ':eq(' + siblings.index(realNode) + ')';
    }

    path = name + (path ? '>' + path : '');
    node = parent;
  }

  return path.split('html>')[1];
};

class DashboardUserSession extends Component {

  constructor(props) {
    super(props);
    this.state = {
      targetList: [],
      flag: false,
      len: 0,
      recording: null,
      stop: false,
      startPlay: null,
      $iframeDoc: null,
      $fakeCursor: null,
      step: 1,
      index: 0
    }
    this.addtoList = this.addtoList.bind(this);
    this.frameScript = this.frameScript.bind(this);
    this.getFrame = this.getFrame.bind(this);
    this.animate = this.animate.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.getRecordingData = this.getRecordingData.bind(this);
    this.slide = this.slide.bind(this);
    this.toggleFullscreen = this.toggleFullscreen.bind(this);
  }

  toggleFullscreen() {
    $('.react-iframe').fullscreen();
    REPLAY_SCALE = 1;
    this.frameScript(this)

  }


  async animate(currentFrame, $fakeCursor, $iframeDoc) {
    const animationRate = 100 * Math.abs(currentFrame.movementX - currentFrame.movementY) / 100;
    console.log(animationRate)
    if (currentFrame.target) {
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
      } else {

        if (!mouseMade) {
          $iframeDoc.find('body').append($fakeCursor);
          $fakeCursor.css({
            borderRadius: 50,
            background: 'red',
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
        }
      }
    }

  }



  getFrame($iframeDoc, $fakeCursor, context, response, recording) {
    let currentFrame = response.Frame[context.state.index];
    if (!currentFrame) {
      return;
    }
    if (context.state.flag) {
      context.animate(currentFrame, $fakeCursor, $iframeDoc);
    }
  };

  async frameScript(context, response, recording) {

    let $iframe = $('.react-iframe');
    $iframe.height(recording.height * REPLAY_SCALE);
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

  addtoList(element) {
    let list = this.state.targetList;
    list.push(element)
    this.setState({
      targetList: list
    })
  }

  // does not work
  pause() {
    this.setState({
      flag: false
    })
  }

  // starts animation
  async play() {

    await this.setState({
      flag: true
    })
    this.getFrame(this.state.$iframeDoc, this.state.$fakeCursor, this, this.state.response, this.state.recording)
  }

  // called on ComponentDidMount
  async getRecordingData() {
    let recording = await axios.get('/recordings/' + this.props.match.params.recordingID)
    let response = await axios.get('/frames/' + this.props.match.params.recordingID);
    const step = 1 / (response.data.Frame.length ? response.data.Frame.length : 1);

    await this.setState({
      len: response.data.Frame.length,
      recording: recording.data,
      response: response.data,
      step: step,
    });
    this.frameScript(this, this.state.response, this.state.recording);
  }


  // links position of where you are in the event array to where the slider is
  async slide(newInd) {
    await this.setState({
      flag: true,
      index: newInd
    })
    this.getFrame(this.state.$iframeDoc, this.state.$fakeCursor, this, this.state.response, this.state.recording)

  }
  componentDidMount() {
    this.getRecordingData();
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
          play={this.play} 
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
}

export default DashboardUserSession;