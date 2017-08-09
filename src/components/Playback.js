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
        <img src="https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg" style={style.img}/>
      </Card>
    )
  }
}

export default Playback;