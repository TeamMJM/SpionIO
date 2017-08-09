import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import { Card } from 'material-ui/Card';
import './../styles/Home.css';

class Storyboard extends Component {
  render() {
    return(
      <Card>
        <AppBar title="Storyboard" />
        <List>
          <ListItem primaryText="Clicked <div>" leftIcon={<ActionGrade />} />
          <Divider />
          <ListItem primaryText="Clicked input item" leftIcon={<ActionGrade />} />
          <Divider />
          <ListItem primaryText="Entered text into input" leftIcon={<ActionGrade />} />
          <Divider />
          <ListItem primaryText="Clicked <button>" leftIcon={<ActionGrade />} />
          <Divider />
        </List>
      </Card>
    )
  }
}

export default Storyboard;