import React, { Component } from 'react';
import './../styles/Home.css';

class Home extends Component {
  render() {
    return(
      <div className='page-content dashboard-page'>
        <h2 className='dashboard-title'>Dashboard</h2>
        <div className='dashboard-welcome'>
          <h4>Welcome to Private-I</h4>
        </div>
      </div> 
    )
  }
}

export default Home;