import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import './../styles/Home.css';
import axios from 'axios';
import $ from 'jquery';

const style = {
  card: {
    width: '70%', 
    height: '100%',
    backgroundColor: 'blue',
    float: 'left'
  },
  img: {
    width: '90%'
  }
}


class Playback extends Component {

constructor(props){
  super(props);
  this.state = {
    content: 0
  }
}

componentDidMount(){
  console.log("params",this.props.match)
  axios.get('/recordings/:'+this.props.match)
    .then((response) =>{
      const REPLAY_SCALE = 0.631;
      const SPEED = 1;
      const $iframe = $('.react-iframe');

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
          let offsetRecording = event.Frame.time - response.startTime;
          let offsetPlay = (Date.now() - startPlay) * SPEED;
          if (offsetPlay >= offsetRecording) {
            drawEvent(event, $fakeCursor, $iframeDoc);
            i++;
          }

          if (i < response.Frame.length) {
            requestAnimationFrame(draw);
            this.setstate({content:this.state.content++})
          }
        })();

        function drawEvent(event, $fakeCursor, $iframeDoc) {
          if (event.Frame.type === 'click' || event.Frame.type === 'scroll' || event.Frame.type === 'mousemove') {
            $fakeCursor.css({
              top: event.Frame.ClickY,
              left: event.Frame.ClickX
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

  render() {
      return(
        <Card style={style.card} >
          <iframe className="react-iframe"></iframe>  
        </Card>
    );
  }
}

export default Playback;