import React, { Component } from 'react';
import { Card } from 'material-ui/Card';

import PlaybackBar from './PlaybackBar';
import './../styles/Home.css';

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
    height: '100%',
    display: 'block',
    margin: 'auto'
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