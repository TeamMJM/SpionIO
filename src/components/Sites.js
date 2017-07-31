import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../styles/Home.css';
import { Button } from 'semantic-ui-react';

class Sites extends Component {
  render() {
    return(
      <div className="pusher">

      Test
      <div className='ui relaxed divided list'>
        <div className='item'>
          <Link to='/dashboard/sites/pages'>Dummy Site 1</Link>
          <div className='description'>Checked 10 mins ago</div>
        </div>
      </div>        


    </div>
    )
  }
}

export default Sites;