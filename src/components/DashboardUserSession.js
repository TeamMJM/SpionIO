import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import Playback from './Playback';
import Storyboard from './Storyboard';
import { fromJS } from 'immutable';
import './../styles/Home.css';

const style = {
  display: 'flex',
  flexFlow: 'row nowrap',
  flex: '1'
}
class DashboardUserSession extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetList :[]
    }
    this.addtoList = this.addtoList.bind(this);
  }

  addtoList(element){
    let list = formJS(this.state.targetList)
    list.push(element)
    this.setState({
      targetList: list
    });
  }
  componentDidMount() {
    console.log('These are the params', this.props.match.params.recordingID)
  }

  render() {
    return(
      <div style={style}>
          <Playback pusher={this.addtoList} id={this.props.match.params.recordingID} />
          <Storyboard  list={this.state.targetList} />
      </div>
    );
  }
}

export default DashboardUserSession;