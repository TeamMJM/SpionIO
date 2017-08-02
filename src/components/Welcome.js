import React, { Component } from 'react';

import './../styles/Welcome.css';

class Welcome extends Component {
  render() {
    console.log("WELCOME");
    return (
      <div>
        <div id="page-content" className="App-header">
          <div className="App-title">
            <h1>We've got you</h1><h1 className="covered"> covered</h1>
          </div>

          <div className="html-content">
            
          </div> 
        </div>


      </div>
    )
  }
}

export default Welcome;