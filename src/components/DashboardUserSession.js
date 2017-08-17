import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import Playback from './Playback';
import Storyboard from './Storyboard';
import DashboardHeader from './DashboardHeader';
import PlaybackSidebar from './PlaybackSidebar';
import { fromJS } from "immutable";
import './../styles/Home.css';
import axios from 'axios';
import $ from 'jquery';
import 'jquery.fullscreen';

const style = {
  width: '100%',
  margin: '0 auto'
}



// let i = 0;
let REPLAY_SCALE = 0.802;


const SPEED = 1;
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
      stop:false,
      startPlay: null,
      $iframeDoc: null,
      $fakeCursor: null,
      step: 1,
      index: 0
    }
    this.addtoList = this.addtoList.bind(this);
    this.frameScript = this.frameScript.bind(this);
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
    console.log(REPLAY_SCALE);
  }

  
  drawAnimate($iframeDoc, $fakeCursor, startPlay, context) {
    
    let recording = this.state.recording
    let response = this.state.response;
    (function draw() {
      //console.log('Drawing')
      if(!context.state.flag){
          context.setState({
            startPlay: startPlay,
            $fakeCursor: $fakeCursor,
            $iframeDoc: $iframeDoc
          })
      }
      else{

        let event = response.Frame[context.state.index];
        if (!event) {
          return;
        }
        let offsetRecording = event.time -  recording.startTime;
        let offsetPlay = (Date.now() - startPlay) * SPEED;
        if (offsetPlay >= offsetRecording) {
          drawEvent(event, $fakeCursor, $iframeDoc);
          context.setState({
            index : context.state.index + 1
          })
        }
        if (context.state.index < response.Frame.length) {
          requestAnimationFrame(draw);
        }
    }
    })();

    function drawEvent(event, $fakeCursor, $iframeDoc) {
      context.setState({
        flag: false
      })
      if (event.target) {
        context.addtoList(event.target)
      }

       if (event.event === "scroll") {
         $iframeDoc.contents().scrollTop(event.scrollTop)
         $iframeDoc.contents().scrollLeft(event.scrollLeft) 
        }
      
      else if (event.event === 'click') {
        $fakeCursor.css({
          top: event.ClickY,
          left: event.ClickX
        },{
          duration:100
        }).promise().done(()=>{
          context.setState({
            flag:true
          })
            console.log("Printing")
            context.drawAnimate(context.state.$iframeDoc,context.state.$fakeCursor,context.state.startPlay,context)           
        })
      } else {
        if (event.event === 'mouseleave') {
          $fakeCursor.animate({
            top: event.ClickY,
            left: event.ClickX
          },{
            duration:100
          }).promise().done(()=>{
            context.setState({
              flag:true
            })
  
              context.drawAnimate(context.state.$iframeDoc,context.state.$fakeCursor,context.state.startPlay,context)           
          })
          $iframeDoc.find($fakeCursor).remove();
          mouseMade = false;
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
          }
          $fakeCursor.animate({
            top: event.ClickY,
            left: event.ClickX
          },{
            duration:300
          }).promise().done(()=>{
            context.setState({
              flag:true
            })

              context.drawAnimate(context.state.$iframeDoc,context.state.$fakeCursor,context.state.startPlay,context)           
          })
        }
      }
    }

    function flashClass($el, className) {
      $el.addClass(className).delay(200).queue(() => $el.removeClass(className).dequeue());
    }
  }

  async frameScript(context) {
    let response = context.state.response;
    let recording = context.state.recording;
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
    const startPlay = Date.now();
    context.drawAnimate($iframeDoc, $fakeCursor, startPlay, context)
  }

  addtoList(element) {
    let list = this.state.targetList;
    list.push(element)
    this.setState({
      targetList: list
    })
  }

  pause() {
    console.log("pausing")
    this.setState({
      flag: false
    })
  }

  async play() {
    console.log("playing")
    await this.setState({
      flag: true
    })
    this.drawAnimate(this.state.$iframeDoc,this.state.$fakeCursor,this.state.startPlay,this)
  }

  async getRecordingData() {
    let recording = await axios.get('/recordings/'+ this.props.match.params.recordingID)
    let response = await axios.get('/frames/' + this.props.match.params.recordingID);
    await this.setState({
      len: response.data.Frame.length,
      recording: recording.data,
      response: response.data,
    });
    this.frameScript(this);
  }

  async slide(newInd) {
    await this.setState({ index: newInd})
    this.drawAnimate(this.state.$iframeDoc,this.state.$fakeCursor,this.state.startPlay,this)
  }

  componentDidMount() {
    this.getRecordingData();
  }

  componentWillUpdate() {
    this.state.targetList = [];
  }

  render() {
    return (
      <div style={style}>
        {/* <DashboardHeader/> */}
        <PlaybackSidebar/>

        <div id='customFade' className='animated fadeIn'>
        <Playback key={this.props.match.params.recordingID} fullscreen={this.toggleFullscreen} playing={this.state.flag} frameScript={this.frameScript} context={this} pause={this.pause} play={this.play} step={this.state.step} index={this.state.i} slide={this.slide} id={this.props.match.params.recordingID}  />
        <Storyboard key={this.props.match.params.recordingID + '1'} recordingID={this.props.match.params.recordingID} list={this.state.targetList} />         
        </div>
      </div>
    );
  }
}

export default DashboardUserSession;