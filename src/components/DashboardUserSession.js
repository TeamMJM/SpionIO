import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import Playback from './Playback';
import Storyboard from './Storyboard';

import './../styles/Home.css';



class UserSession extends Component {
  render() {
    return(
      <div className='page-content'>
          <Playback />
          <Storyboard />
      </div>
    );
  }
}

export default UserSession;