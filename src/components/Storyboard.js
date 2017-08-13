import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import { Card } from 'material-ui/Card';
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
  const list = this.props.list.map((Element) =>(
    <ListItem primaryText={Element} />
  ))
    return(
      <Card style={style.card}>
        <AppBar title="Storyboard" style={style.title}/>
        <List>
          {list}
        </List>
      </Card>
    )
  }
}

export default Storyboard;