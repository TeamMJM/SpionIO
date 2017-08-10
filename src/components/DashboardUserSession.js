import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import Playback from './Playback';
import Storyboard from './Storyboard';

import './../styles/Home.css';

class DashboardUserSession extends Component {
  render() {
    return(
      <div className='page-content user-session'>
          <Playback />
          <Storyboard />
      </div>
    );
  }
}

export default DashboardUserSession;