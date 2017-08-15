import React, { Component } from 'react';
import { Card } from 'material-ui/Card';

import PlaybackBar from './PlaybackBar';
import './../styles/Home.css';

const style = {
  card: {
    // flexFlow: 'column nowrap',
    float: 'left',
    justifyContent: 'center',
    alignContent: 'center',
    width: '75%', 
    height: '100%',
    backgroundColor: 'lightgrey',
    padding: '2px'
  },
  iframe: {
    width: '100%',
    height: '100%',
    display: 'block',
    margin: '0 auto'
  },
  bar: {
    width: '100%'
  }
}


class Playback extends Component {

  render() {
    return(
      <Card style={style.card} >
        <iframe className="react-iframe"></iframe>  
        <PlaybackBar 
          style={style.bar} 
          pause={this.props.pause} 
          play={this.props.play}
          step={this.props.step} 
          index={this.props.index} 
          slide={this.props.slide}
          />
      </Card>
    );
  }
}

export default Playback;