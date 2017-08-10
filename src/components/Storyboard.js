import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import { Card } from 'material-ui/Card';
// import AVFiberManualRecordIcon from 'material-ui/svg-icons/AV/fiber-manual-record';
import './../styles/Home.css';

const style = {
  width: '30%', 
  minHeight: '100%',
  float: 'right'
}

class Storyboard extends Component {
  render() {
    return(
      <Card style={style}>
        <AppBar title="Storyboard" />
        <List>
          <ListItem primaryText="Clicked <div>" />
          <Divider />
          <ListItem primaryText="Clicked input item" />
          <Divider />
          <ListItem primaryText="Entered text into input" />
          <Divider />
          <ListItem primaryText="Clicked <button>" />
          <Divider />
        </List>
      </Card>
    )
  }
}

export default Storyboard;