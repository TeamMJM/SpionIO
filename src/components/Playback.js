import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import './../styles/Home.css';


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
  render() {
    return(
      <Card style={style.card} >
      </Card>
    )
  }
}

export default Playback;