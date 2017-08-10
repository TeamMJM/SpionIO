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
        <img 
          src="https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg" 
          style={style.iframe}
        />
        <PlaybackBar style={style.bar}/>
      </Card>
    )
  }
}

export default Playback;