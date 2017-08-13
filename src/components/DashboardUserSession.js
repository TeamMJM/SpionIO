import React, {
  Component
} from 'react';
import {
  Card
} from 'material-ui/Card';
import Playback from './Playback';
import Storyboard from './Storyboard';
import {
  fromJS
} from "immutable";
import './../styles/Home.css';
import axios from 'axios';
import $ from 'jquery';

const style = {
  display: 'flex',
  flexFlow: 'row nowrap',
  flex: '1'
}

// let i = 0;
const REPLAY_SCALE = 0.631;
const SPEED = 1;


class DashboardUserSession extends Component {

  constructor(props) {
    super(props);
    this.state = {
      targetList: [],
      flag: true,
      startPlay: null,
      $iframeDoc: null,
      $fakeCursor: null,
      step: 1,
      i: 0
    }
    this.addtoList = this.addtoList.bind(this);
    this.frameScript = this.frameScript.bind(this);
    // this.updateFlag = this.updateFlag.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.getRecordingData = this.getRecordingData.bind(this);
    this.slide = this.slide.bind(this);
  }
  drawAnimate($iframeDoc,$fakeCursor,startPlay,context) {
    let $iframe = $('.react-iframe');
    let response = this.state.response;
    (function draw() {
      let event = response.Frame[context.state.i];
      if (!event) {
        return;
      }
      let offsetRecording = event.time - response.startTime;

      let offsetPlay = (Date.now() - startPlay) * SPEED;
      if (offsetPlay >= offsetRecording) {
        drawEvent(event, $fakeCursor, $iframeDoc);
        // const newI = this.state.i + 1
        context.setState({ i: context.state.i + 1 });
      }

      if (context.state.i < response.Frame.length && context.state.flag) {
        requestAnimationFrame(draw);
      }else if(!context.state.flag){
        console.log("Coming in");
        context.setState({
          startPlay:startPlay,
          $fakeCursor:$fakeCursor,
          $iframeDoc:$iframeDoc
        })
      }
    })();

    function drawEvent(event, $fakeCursor, $iframeDoc) {
      if (event.event === 'click' || event.event === 'scroll' || event.event === 'mousemove') {
        if (event.target) {
          context.addtoList(event.target)
        }

        if (event.event === "scroll") {
          $fakeCursor.css({
            top: event.ClickY,
            left: event.ClickX
          })
          $iframe.contents().scrollTop(event.scrollTop)
          $iframe.contents().scrollLeft(event.scrollLeft)
        } else {
          $fakeCursor.animate({
            top: event.ClickY,
            left: event.ClickX
          }, {
            duration: 10,
            easing: "linear"
          })
        }
      }
    }
  }

  async frameScript(context) {
    let response = context.state.response;
    let $iframe = $('.react-iframe');
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
    })
    $iframe[0].contentDocument.documentElement.innerHTML = response.htmlCopy;
    const $iframeDoc = $($iframe[0].contentDocument.documentElement);
    let $fakeCursor = $('<div class="cursor"></div>')
    
    $iframeDoc.find('body').append($fakeCursor);
   // let i = 0;
    const startPlay = Date.now();
    context.drawAnimate($iframeDoc,$fakeCursor,startPlay,context)
  }

  addtoList(element) {
    let list = this.state.targetList;
    list.push(element)
    this.setState({
      targetList: list
    })
  }

  // async updateFlag() {
  //   console.log("UPDATE")
  //   await this.setState({
  //     flag: !this.state.flag
  //   })
  //   if (this.state.flag) {
  //     this.drawAnimate(this.state.$iframeDoc,this.state.$fakeCursor,this.state.startPlay,this)
  //   } else {
  //     console.log("False")
  //   }
  // }

  pause() {
    console.log('pausing');
    this.setState({
      flag: false
    })
  }

  async play() {
    console.log('pausing');
    await this.setState({
      flag: true
    })
    this.drawAnimate(this.state.$iframeDoc,this.state.$fakeCursor,this.state.startPlay,this)
  }

  async getRecordingData() {
    let response = await axios.get('/recordings/' + this.props.match.params.recordingID);
    console.log('DATA', response.data.Frame)
    console.log('DATA LENGTH', response.data.Frame.length)
    const step = 1/(response.data.Frame.length ? response.data.Frame.length: 1);
    console.log(step)
    this.setState({
      response: response.data,
      step: step
    });
    this.frameScript(this);
  }

 async slide(newInd) {
    console.log('Slider to new index:', newInd)

    await this.setState({ i: newInd })
    this.drawAnimate(this.state.$iframeDoc,this.state.$fakeCursor,this.state.startPlay,this)
  }

  componentDidMount() {
    this.getRecordingData();
  }

  render() {
    return (
      <div style={style}>
          <Playback  pause={this.pause} play={this.play} step={this.state.step} index={this.state.i} slide={this.slide} />
          <Storyboard  list={this.state.targetList} />
      </div>
    );
  }
}

export default DashboardUserSession;