import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../styles/Home.css';
import Paper from 'material-ui/Paper';
import Card from 'material-ui/Card';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class Sites extends Component {
  render() {
    return(
      <div>
        <Paper style={style} zDepth={1}>
          <Link to='/dashboard/sites/pages'>Dummy Site</Link>
          
        </Paper>
      </div>
    )
  }
}

export default Sites;