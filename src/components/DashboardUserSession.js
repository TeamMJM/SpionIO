import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import Playback from './Playback';
import Storyboard from './Storyboard';

import './../styles/Home.css';

<<<<<<< HEAD


class UserSession extends Component {
=======
class DashboardUserSession extends Component {
>>>>>>> 6c9dad31bb0434c68470fa73ca29223d4b0b1685
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