import React, { Component } from 'react';
import './../styles/Home.css';
import Drawer from 'material-ui/Drawer';

class Home extends Component {
  render() {
    return(
      <div className='page-content dashboard-page'>
        <h2 className='dashboard-header'>Dashboard</h2>
        <div className='dashboard-welcome'>
          <h4>Welcome to Private-I</h4>
        </div>
      </div> 
    )
  }
}

export default Home;