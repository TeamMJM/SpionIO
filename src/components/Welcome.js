import React, { Component } from 'react';
import ScrollButton from './ScrollButton.js';

import './../styles/Welcome.css';

class Welcome extends Component {
  render() {
    return (
      <div>
        <div id="page-content" className="App-header">
          <img className='App-logo' src='./../../logo.png'/>

          <div className="App-title">
            <h1>We've got you</h1><h1 className="covered"> covered</h1>

          </div>

          {/* <ScrollButton/> */}

 
        </div>
      </div>
    )
  }
}

export default Welcome;