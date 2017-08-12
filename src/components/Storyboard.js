import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import { Card } from 'material-ui/Card';
// import AVFiberManualRecordIcon from 'material-ui/svg-icons/AV/fiber-manual-record';
import './../styles/Home.css';

const style = {
  width: '40%', 
  minHeight: '100%',
  float: 'right'
}

class Storyboard extends Component {
  render() {
<<<<<<< HEAD
  console.log("LISTz",typeof this.props.list); 
  const list = this.props.list.map((Element) => (
=======
  const list = this.props.list.map((Element) =>(
>>>>>>> 5b3a2c02f7b76c4d07f2fd9a12d46f8fe02bc011
    <ListItem primaryText={Element} />
  ))
    return(
      <Card style={style}>
        <AppBar title="Storyboard" />
        <List>
          {list}
        </List>
      </Card>
    )
  }
}

export default Storyboard;