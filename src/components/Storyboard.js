import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
// import AVFiberManualRecordIcon from 'material-ui/svg-icons/AV/fiber-manual-record';
import './../styles/Home.css';

const style = {
  card: {
    width: '40%', 
    minHeight: '100%',
    float: 'right'
  },
  title: {
    backgroundColor: '#006CAA'
  }
}

class Storyboard extends Component {
  constructor(props) {
    super(props)
  }

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
<<<<<<< HEAD
<<<<<<< HEAD
      <Card style={style.card}>
        <AppBar title="Storyboard" style={style.title}/>
        <List>
          {list}
        </List>
      </Card>
=======
=======
>>>>>>> 9b511dc95ccc595b4d5c4e1b0e11e403250dc89f
      <Paper style={style}>
        <AppBar title="Storyboard" />
        {list}
      </Paper>
<<<<<<< HEAD
>>>>>>> ff8c021110e2902c3281678cd1e54dc7279b1cc2
=======
>>>>>>> 9b511dc95ccc595b4d5c4e1b0e11e403250dc89f
    )
  }
}

export default Storyboard;