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
      targetList :[]
    }
    this.addtoList = this.addtoList.bind(this);
    this.frameScript = this.frameScript.bind(this);
  }

async frameScript(id,context){
  console.log(context)
  let list = [];
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
  
    (function draw() {
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
      if (i < response.Frame.length) {
        requestAnimationFrame(draw);
      }
    })();

    function drawEvent(event, $fakeCursor, $iframeDoc) {
      if (event.event === 'click' || event.event === 'scroll' || event.event === 'mousemove') {
        if(event.target){
          context.addtoList(event.target)
        }

        if(event.event === "scroll"){
          console.log("Events",event);
          $fakeCursor.css({
            top: event.ClickY,
            left: event.ClickX
          })
          $iframe.contents().scrollTop(event.scrollTop)
          $iframe.contents().scrollLeft(event.scrollLeft)
        }
        else{
          $fakeCursor.css({
            top: event.ClickY,
            left: event.ClickX
          });
        }
      }
    }
    return list;     
}
 

  addtoList(element){
    console.log("add to list")
    let list = this.state.targetList;
    list.push(element)
    this.setState({
      targetList: list
    })
  }
  componentDidMount() {

    console.log('These are the params', this.props.match.params.recordingID)
  }

  render() {
    return(
      <div style={style}>
          <Playback frameScript={this.frameScript} context={this} id={this.props.match.params.recordingID}  />
          <Storyboard  list={this.state.targetList} />
      </div>
    );
  }
}

export default DashboardUserSession;