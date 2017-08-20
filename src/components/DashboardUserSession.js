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
import { Card } from 'material-ui/Card';
import Playback from './Playback';
import Storyboard from './Storyboard';
import DashboardHeader from './DashboardHeader';
import PlaybackSidebar from './PlaybackSidebar';
import { fromJS } from "immutable";
import './../styles/Home.css';
import axios from 'axios';
import $ from 'jquery';

const style = {
  width: '100%',
  margin: '0 auto'
}



// let i = 0;
const REPLAY_SCALE = 0.863;


const SPEED = 1;
let mouseMade = false;

class DashboardUserSession extends Component {

  constructor(props) {
    super(props);
    this.state = {
      targetList: [],
      flag: true,
      recording: null,
<<<<<<< HEAD
      stop: false,
=======
>>>>>>> c9a553806382d39be80691455e5a0e5622a84d18
      startPlay: null,
      $iframeDoc: null,
      $fakeCursor: null,
      step: 1,
      i: 0
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


    function flashClass($el, className) {
      $el.addClass(className).delay(200).queue(() => $el.removeClass(className).dequeue());
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
  };

<<<<<<< HEAD
  async frameScript(context, response, recording) {

=======
  async frameScript(context,response,recording) {
>>>>>>> c9a553806382d39be80691455e5a0e5622a84d18
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

  addtoList(element) {
    let list = this.state.targetList;
    list.push(element)
    this.setState({
      targetList: list
    })
  }

<<<<<<< HEAD
  // does not work
=======
>>>>>>> c9a553806382d39be80691455e5a0e5622a84d18
  pause() {
    this.setState({
      flag: false
    })

    if (this.state.flag) {
      this.drawAnimate(this.state.$iframeDoc, this.state.$fakeCursor, this.state.startPlay, this)
    } else {
      console.log("False")
    }
  }

  async play() {
<<<<<<< HEAD

=======
>>>>>>> c9a553806382d39be80691455e5a0e5622a84d18
    await this.setState({
      flag: true
    })
    this.getFrame(this.state.$iframeDoc, this.state.$fakeCursor, this, this.state.response, this.state.recording)
  }

  async getRecordingData() {
    let recording = await axios.get('/recordings/' + this.props.match.params.recordingID)
    let response = await axios.get('/frames/' + this.props.match.params.recordingID);
<<<<<<< HEAD
    const step = 1 / (response.data.Frame.length ? response.data.Frame.length : 1);

=======
    const step = 1/(response.data.Frame.length ? response.data.Frame.length: 1);
>>>>>>> c9a553806382d39be80691455e5a0e5622a84d18
    await this.setState({
      recording: recording.data,
      response: response.data
    });
    this.frameScript(this, this.state.response, this.state.recording);
  }


  // links position of where you are in the event array to where the slider is
  async slide(newInd) {
<<<<<<< HEAD
    await this.setState({
      flag: true,
      index: newInd
    })
    this.getFrame(this.state.$iframeDoc, this.state.$fakeCursor, this, this.state.response, this.state.recording)

=======
    await this.setState({ i: newInd })
    this.drawAnimate(this.state.$iframeDoc,this.state.$fakeCursor,this.state.startPlay,this)
>>>>>>> c9a553806382d39be80691455e5a0e5622a84d18
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
<<<<<<< HEAD
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

=======
        {/* <DashboardHeader/> */}
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
>>>>>>> c9a553806382d39be80691455e5a0e5622a84d18
      </div>
    </div>
    );
  }
};

export default DashboardUserSession;