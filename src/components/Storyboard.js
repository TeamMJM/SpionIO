import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
// import AVFiberManualRecordIcon from 'material-ui/svg-icons/AV/fiber-manual-record';
import './../styles/Home.css';

const style = {
  width: '40%', 
  minHeight: '100%',
  float: 'right'
}

class Storyboard extends Component {
  render() {
  // console.log("LISTz",typeof this.props.list); 
  const list = this.props.list.map((Element) => {
    let hintText = 'Clicked ' + Element.split('>')[0].split(' ')[0].split('').splice(1).join('').toUpperCase();
    console.log(hintText);
    return (
      <Card>
        <CardHeader title={hintText} actAsExpander={true} showExpandableButton={true}/>
        <CardText expandable={true}>{Element}</CardText>
      </Card>
    )
  })
    return(
      <Paper style={style}>
        <AppBar title="Storyboard" />
        {list}
      </Paper>
    )
  }
}

export default Storyboard;