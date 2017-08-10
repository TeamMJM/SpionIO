import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import Playback from './Playback';
import Storyboard from './Storyboard';

import './../styles/Home.css';

<<<<<<< HEAD


class UserSession extends Component {
=======
class DashboardUserSession extends Component {
>>>>>>> 525bc50611570d7aa4aa0ec6815344080d530a0a
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