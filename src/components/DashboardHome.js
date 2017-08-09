import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../styles/Home.css';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import AVPlayCircleOutline from 'material-ui/svg-icons/AV/play-circle-outline';

const style = {
  paper: {
    verticalAlign: 'middle',
    height: '60px',
    paddingTop: '12px',
    width: '65%',
  }
}


class DashboardHome extends Component { 
  render() {
    return (
      <div className='page-content'>
        <Paper style={style.paper}>
          <div className='recording-block'>
            <div className='recording-avatar'>
              <img className='recording-icon' src='./../../public/1.png'/>
            </div>
            <div className='recording-description'>
              <p className='recording-title'>user 2146</p>
              <p className='recording-sub'>recorded at 2:03 pm</p>
            </div>
          </div>
          <div className='recording-playback'>
            <Link to='/playback'>
              <IconButton tooltip='play session'>
                <AVPlayCircleOutline/>
              </IconButton>
            </Link>
          </div>
        </Paper>
        <Paper style={style.paper}>
          <div className='recording-block'>
            <div className='recording-avatar'>
              <img className='recording-icon' src='./../../public/2.png'/>
            </div>
            <div className='recording-description'>
              <p className='recording-title'>user 5617</p>
              <p className='recording-sub'>recorded at 2:03 pm</p>
            </div>
          </div>
          <div className='recording-playback'>
            <Link to='/playback'>
              <IconButton tooltip='play session'>
                <AVPlayCircleOutline/>
              </IconButton>
            </Link>
          </div>
        </Paper>
        <Paper style={style.paper}>
          <div className='recording-block'>
            <div className='recording-avatar'>
              <img className='recording-icon' src='./../../public/3.png'/>
            </div>
            <div className='recording-description'>
              <p className='recording-title'>user 2623</p>
              <p className='recording-sub'>recorded at 9:51 am</p>
            </div>
          </div>
          <div className='recording-playback'>
            <Link to='/playback'>
              <IconButton tooltip='play session'>
                <AVPlayCircleOutline/>
              </IconButton>
            </Link>
          </div>
        </Paper>
        <Paper style={style.paper}>
          <div className='recording-block'>
            <div className='recording-avatar'>
              <img className='recording-icon' src='./../../public/4.png'/>
            </div>
            <div className='recording-description'>
              <p className='recording-title'>user 6806</p>
              <p className='recording-sub'>recorded at 6:03 am</p>
            </div>
          </div>
          <div className='recording-playback'>
            <Link to='/playback'>
              <IconButton tooltip='play session'>
                <AVPlayCircleOutline/>
              </IconButton>
            </Link>
          </div>
        </Paper>
        <Paper style={style.paper}>
          <div className='recording-block'>
            <div className='recording-avatar'>
              <img className='recording-icon' src='./../../public/5.png'/>
            </div>
            <div className='recording-description'>
              <p className='recording-title'>user 2526</p>
              <p className='recording-sub'>recorded at 2:00 am</p>
            </div>
          </div>
          <div className='recording-playback'>
            <Link to='/playback'>
              <IconButton tooltip='play session'>
                <AVPlayCircleOutline/>
              </IconButton>
            </Link>
          </div>
        </Paper>
        <Paper style={style.paper}>
          <div className='recording-block'>
            <div className='recording-avatar'>
              <img className='recording-icon' src='./../../public/6.png'/>
            </div>
            <div className='recording-description'>
              <p className='recording-title'>user 1046</p>
              <p className='recording-sub'>recorded at 1:10 am</p>
            </div>
          </div>
          <div className='recording-playback'>
            <Link to='/playback'>
              <IconButton tooltip='play session'>
                <AVPlayCircleOutline/>
              </IconButton>
            </Link>
          </div>
        </Paper>

      </div>
    )
  }
}

export default DashboardHome;