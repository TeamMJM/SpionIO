import React, { Component } from 'react';
import { Card } from 'material-ui/Card';

import PlaybackBar from './PlaybackBar';
import './../styles/Home.css';
import axios from 'axios';
import $ from 'jquery';

const style = {
  card: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignContent: 'center',
    width: '60%', 
    height: '100%',
    backgroundColor: 'lightgrey',
    padding: '10px'
  },
  iframe: {
    width: '100%',
    display: 'block',
    margin: 'auto'
  },
  bar: {
    width: '100%'
  }
}


class Playback extends Component {

constructor(props){
  super(props);
  this.state = {
    content: 0
  }
  this.frameScript = this.frameScript.bind(this);
}
frameScript(){
  let list = [];
  axios.get('/recordings/'+this.props.id)
    .then((response) =>{
      
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
          if(event.target){
            this.props.pusher(event.target);
          }
          if (i < response.Frame.length) {

            requestAnimationFrame(draw);
          }
        })();

        function drawEvent(event, $fakeCursor, $iframeDoc) {
          if (event.event === 'click' || event.event === 'scroll' || event.event === 'mousemove') {
            $fakeCursor.css({
              top: event.ClickY,
              left: event.ClickX
            });
          }

          // if (event.type === 'click') {
          //   flashClass($fakeCursor, 'click');
          //   const path = $(event.target).getPath();
          //   const $element = $iframeDoc.find(path);
          //   flashClass($element, 'clicked');
          // }

          // if (event.type === 'keypress') {
          //   const path = $(event.target).getPath();
          //   const $element = $iframeDoc.find(path);
          //   $element.trigger({
          //     type: 'keypress',
          //     keyCode: event.keyCode
          //   })
          //   $element.val(event.value);
          // }
          // if(event.type === 'scroll'){

          // }
        }        
        // function flashClass($el, className) {
        //     $el.addClass(className).delay(200).queue(() => $el.removeClass(className).dequeue());
        // }
    }).catch((err)=>{
      console.log(err)
    })
}
componentDidMount(){
  this.frameScript();
} 
  render() {
    return(
      <Card style={style.card} >
          <iframe className="react-iframe"></iframe>  
        <PlaybackBar style={style.bar}/>
      </Card>
    );
  }
}

export default Playback;