import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import Playback from './Playback';
import Storyboard from './Storyboard';

import './../styles/Home.css';

const style = {
  display: 'flex',
  flexFlow: 'row nowrap',
  flex: '1'
}
class DashboardUserSession extends Component {
  componentDidMount() {
    console.log('These are the parameters', this.props.match.params.recordingID)
  }

  render() {
    return(
      <div style={style}>
          <Playback />
          <Storyboard />
      </div>
    );
  }
}

export default DashboardUserSession;