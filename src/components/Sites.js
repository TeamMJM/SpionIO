import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../styles/Home.css';
import { Button } from 'semantic-ui-react';

class Sites extends Component {
  render() {
    return(
      <div className="pusher">
        <h2>Sites</h2>
        <Link to='/dashboard/sites/pages'><Button>Dummy Site</Button></Link>
      </div> 
    )
  }
}

export default Sites;