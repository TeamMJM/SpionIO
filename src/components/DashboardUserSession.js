import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import Playback from './Playback';
import Storyboard from './Storyboard';
import { fromJS } from "immutable";
import './../styles/Home.css';
import axios from 'axios';
import $ from 'jquery';

const style = {
  display: 'flex',
  flexFlow: 'row nowrap',
  flex: '1'
}
class DashboardUserSession extends Component {

  constructor(props) {
    super(props);
    this.state = {
      targetList :[],
      flag:true,
      response:null,
      startPlay:null,
      i:0
    }
    this.addtoList = this.addtoList.bind(this);
    this.frameScript = this.frameScript.bind(this);
    this.updateFlag = this.updateFlag.bind(this);
    this.newDraw = this.newDraw.bind(this);
  }




newDraw(){
  console.log("HELLO");
  console.log(this.state)
  response = this.state.response;
  const REPLAY_SCALE = 0.631;
  const SPEED = 1;
  const $iframe = $('.react-iframe');

    $iframe[0].contentDocument.documentElement.innerHTML = response.htmlCopy;
    const $iframeDoc = $($iframe[0].contentDocument.documentElement);

    const $fakeCursor = $('<div class="cursor"></div>')
    $iframeDoc.find('body').append($fakeCursor);

    const startPlay = this.state.startPlay;
    let i = this.state.i;
  
    (function draw() {
      let event = response.Frame[this.state.i];
      if (!event) {
        return;
      }
      let offsetRecording = event.time - response.startTime;

      let offsetPlay = (Date.now() - startPlay) * SPEED;
      if (offsetPlay >= offsetRecording) {
        drawEvent(event, $fakeCursor, $iframeDoc);
        i++;
      }
      if (i < response.Frame.length && this.state.flag) {
        requestAnimationFrame(draw);
      }
    })();

    function drawEvent(event, $fakeCursor, $iframeDoc) {
      if (event.event === 'click' || event.event === 'scroll' || event.event === 'mousemove') {
        if(event.target){
          context.addtoList(event.target)
        }

        if(event.event === "scroll"){
          $fakeCursor.css({
            top: event.ClickY,
            left: event.ClickX
          })
          $iframe.contents().scrollTop(event.scrollTop)
          $iframe.contents().scrollLeft(event.scrollLeft)
        }
        else{
          $fakeCursor.animate({
            top: event.ClickY,
            left: event.ClickX
          },{duration:20,easing:"linear"})
        }
      }
    }  
}











async frameScript(id,context){
  let response = await axios.get('/recordings/'+id)
  response = response.data;
  const REPLAY_SCALE = 0.631;
  const SPEED = 1;
  const $iframe = $('.react-iframe');

  $iframe.height(response.height * REPLAY_SCALE);
  $iframe.width(response.width * REPLAY_SCALE);
  $iframe.css({
    '-ms-zoom': `${REPLAY_SCALE}`,
    '-moz-transform': `scale(${REPLAY_SCALE})`,
    '-moz-transform-origin': `0 0`,
    '-o-transform': `scale(${REPLAY_SCALE})`,
    '-o-transform-origin': `0 0`,
    '-webkit-transform': `scale(${REPLAY_SCALE})`,
    '-webkit-transform-origin': `0 0`
  });    
  $iframe[0].contentDocument.documentElement.innerHTML = response.htmlCopy;
    const $iframeDoc = $($iframe[0].contentDocument.documentElement);

    const $fakeCursor = $('<div class="cursor"></div>')
    $iframeDoc.find('body').append($fakeCursor);
    let i = 0;
    const startPlay = Date.now();
    (async function draw() {
      let event = response.Frame[i];
      if (!event) {
        return;
      }
      let offsetRecording = event.time - response.startTime;

      let offsetPlay = (Date.now() - startPlay) * SPEED;
      if (offsetPlay >= offsetRecording) {
        drawEvent(event, $fakeCursor, $iframeDoc);
        i++;
      }

      if (i < response.Frame.length && context.state.flag) {
        requestAnimationFrame(draw);
      }
      else if(!this.state.flag){
        console.log("STATE");
       await context.setState({
          response:response,
          startPlay:startPlay,
          i:i
        })
      }
    })();

    function drawEvent(event, $fakeCursor, $iframeDoc) {
      if (event.event === 'click' || event.event === 'scroll' || event.event === 'mousemove') {
        if(event.target){
          context.addtoList(event.target)
        }

        if(event.event === "scroll"){
          $fakeCursor.css({
            top: event.ClickY,
            left: event.ClickX
          })
          $iframe.contents().scrollTop(event.scrollTop)
          $iframe.contents().scrollLeft(event.scrollLeft)
        }
        else{
          $fakeCursor.animate({
            top: event.ClickY,
            left: event.ClickX
          },{duration:10,easing:"linear"})
        }
      }
    }
    
}
 
  addtoList(element){
    let list = this.state.targetList;
    list.push(element)
    this.setState({
      targetList: list
    })
  }

  async updateFlag(){

    console.log("UPDATE FLAG",this.state.flag);
    await this.setState({
        flag: !this.state.flag
    })
    if(this.state.flag){
        this.newDraw()
    }

  }


  componentDidMount() {

    console.log('These are the params', this.props.match.params.recordingID)
  }

  componentWillUpdate() {
    this.state.targetList = [];
  }

  component

  render() {
    return(
      <div style={style}>
          <Playback key={this.props.match.params.recordingID} frameScript={this.frameScript} context={this} flag={this.updateFlag} id={this.props.match.params.recordingID}  />
          <Storyboard key={this.props.match.params.recordingID + '1'} list={this.state.targetList} />
          
      </div>
    );
  }
}

export default DashboardUserSession;