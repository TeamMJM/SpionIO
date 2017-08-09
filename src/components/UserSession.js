import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import Playback from './Playback';
import Storyboard from './Storyboard';

import './../styles/Home.css';

class UserSession extends Component {
  render() {
    return(
      <Card>
        <Playback />
        <Storyboard />
      </Card>
    );
  }
}