import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../styles/Home.css';
import Paper from 'material-ui/Paper';
import Card from 'material-ui/Card';

const style = {
  height: '100%',
  width: '100%',
  // marginLeft: '300px',
  // width: '73%',
  textAlign: 'left',
  display: 'inline-block',
  card: {
    backgroundColor: 'white'
  }
};

class Sites extends Component {
  render() {
    return(
      <div className='page-content'>
        <Paper style={style} zDepth={1}>
          <Card style={style.card}>
            <Link to='/dashboard/sites/pages'>
              Dummy Site 1
            </Link>
          </Card>
          <Card style={style.card}>
            <Link to='/dashboard/sites/pages'>
              Dummy Site 2
            </Link>
          </Card>

          <Card style={style.card}>
            <Link to='/dashboard/sites/pages'>
              Dummy Site 3
            </Link>
          </Card>
          <Card style={style.card}>
          Dummy Site 4
          </Card>
          <Card style={style.card}>
          Dummy Site 5
          </Card>
          <Card style={style.card}>
          Dummy Site 6
          </Card>        
        </Paper>
      </div>
    )
  }
}

export default Sites;