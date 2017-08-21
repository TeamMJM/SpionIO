import React, { Component } from 'react';

// import material-ui components
import Paper from 'material-ui/Paper'

import './../styles/settings.css';

const style = {
  paper: {
    marginTop: '3%',
    marginLeft: '3%',
    height: '480px',
    width: '80%',
  },
  pHead: {
    textAlign: 'left',
    marginLeft: '4%',
    paddingTop: '4%',
    fontSize: '1.5em',
    letterSpacing: '1px',
  },
  pSub: {
    display: 'inline-block',
    fontSize: '.9em',
    letterSpacing: '1px'
  }
}

class DashboardSettings extends Component {
  render() {
    return(
      <div className='recording-latest-updates'>
        <Paper style={style.paper}>
          <p style={style.pHead}>Your Recording Snippet</p>
          <hr width='92%' style={{borderColor: 'lightgray', color: 'lightgray', marginTop: '2%', marginBottom: '3%'}}/>
          <p className='settings-beginning' style={style.pSub}>Copy and paste the script below into the</p>
          <p className='settings-code' style={style.pSub}>{'<head>'}</p>
          <p className='settings-end' style={style.pSub}>of every page you wish to start tracking.</p>

          <div style={{marginLeft: '3%', marginTop: '3%', backgroundColor: '#F4F7F5', height: '200px', width: '94%', border: '1px solid #006CAA'}}>

          </div>
        </Paper>
      </div>
    )
  }
}

export default DashboardSettings;