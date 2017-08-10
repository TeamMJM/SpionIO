import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../styles/Home.css';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
// import AVPlayCircleOutline from 'material-ui/svg-icons/AV/play-circle-outline';

const style = {
  paper: {
    verticalAlign: 'middle',
    height: '60px',
    paddingTop: '12px',
    // width: '100%',
  },
}


class DashboardContent extends Component { 
  render() {
    return (
      <div>
        <div className='recording-latest-updates'>
        <Paper style={style.paper}>
          <div className='recording-block'>
            <div className='recording-avatar'>
              <img className='recording-icon' src={'./../../public/'+Math.floor((Math.random()*9)+1)+'.png'}/>
            </div>
            <div className='recording-description'>
              <p className='recording-title'>User 2146</p>
              <p className='recording-sub'>recorded at 8:03 pm</p>
            </div>
          </div>
          <div className='recording-playback'>
            <Link to='/dashboard/playback'>
              <IconButton tooltip='play session'>
                {/* <AVPlayCircleOutline/> */}
              </IconButton>
            </Link>
          </div>
        </Paper>
        <Paper style={style.paper}>
          <div className='recording-block'>
            <div className='recording-avatar'>
              <img className='recording-icon' src={'./../../public/'+Math.floor((Math.random()*9)+1)+'.png'}/>
            </div>
            <div className='recording-description'>
              <p className='recording-title'>User 5617</p>
              <p className='recording-sub'>recorded at 7:51 pm</p>
            </div>
          </div>
          <div className='recording-playback'>
            <Link to='/dashboard/playback'>
              <IconButton tooltip='play session'>
                {/* <AVPlayCircleOutline/> */}
              </IconButton>
            </Link>
          </div>
        </Paper>
        <Paper style={style.paper}>
          <div className='recording-block'>
            <div className='recording-avatar'>
              <img className='recording-icon' src={'./../../public/'+Math.floor((Math.random()*9)+1)+'.png'}/>
            </div>
            <div className='recording-description'>
              <p className='recording-title'>User 2623</p>
              <p className='recording-sub'>recorded at 5:08 pm</p>
            </div>
          </div>
          <div className='recording-playback'>
            <Link to='/dashboard/playback'>
              <IconButton tooltip='play session'>
                {/* <AVPlayCircleOutline/> */}
              </IconButton>
            </Link>
          </div>
        </Paper>
        <Paper style={style.paper}>
          <div className='recording-block'>
            <div className='recording-avatar'>
              <img className='recording-icon' src={'./../../public/'+Math.floor((Math.random()*9)+1)+'.png'}/>
            </div>
            <div className='recording-description'>
              <p className='recording-title'>User 6806</p>
              <p className='recording-sub'>recorded at 5:01 pm</p>
            </div>
          </div>
          <div className='recording-playback'>
            <Link to='/dashboard/playback'>
              <IconButton tooltip='play session'>
                {/* <AVPlayCircleOutline/> */}
              </IconButton>
            </Link>
          </div>
        </Paper>
        <Paper style={style.paper}>
          <div className='recording-block'>
            <div className='recording-avatar'>
              <img className='recording-icon' src={'./../../public/'+Math.floor((Math.random()*9)+1)+'.png'}/>
            </div>
            <div className='recording-description'>
              <p className='recording-title'>User 2526</p>
              <p className='recording-sub'>recorded at 2:00 pm</p>
            </div>
          </div>
          <div className='recording-playback'>
            <Link to='/dashboard/playback'>
              <IconButton tooltip='play session'>
                {/* <AVPlayCircleOutline/> */}
              </IconButton>
            </Link>
          </div>
        </Paper>
        <Paper style={style.paper}>
          <div className='recording-block'>
            <div className='recording-avatar'>
              <img className='recording-icon' src={'./../../public/'+Math.floor((Math.random()*9)+1)+'.png'}/>
            </div>
            <div className='recording-description'>
              <p className='recording-title'>User 1046</p>
              <p className='recording-sub'>recorded at 9:10 am</p>
            </div>
          </div>
          <div className='recording-playback'>
            <Link to='/dashboard/playback'>
              <IconButton tooltip='play session'>
                {/* <AVPlayCircleOutline/> */}
              </IconButton>
            </Link>
          </div>
        </Paper>
        <Paper style={style.paper}>
          <div className='recording-block'>
            <div className='recording-avatar'>
              <img className='recording-icon' src={'./../../public/'+Math.floor((Math.random()*9)+1)+'.png'}/>
            </div>
            <div className='recording-description'>
              <p className='recording-title'>User 0403</p>
              <p className='recording-sub'>recorded at 9:05 am</p>
            </div>
          </div>
          <div className='recording-playback'>
            <Link to='/dashboard/playback'>
              <IconButton tooltip='play session'>
                {/* <AVPlayCircleOutline/> */}
              </IconButton>
            </Link>
          </div>
        </Paper>
        <Paper style={style.paper}>
          <div className='recording-block'>
            <div className='recording-avatar'>
              <img className='recording-icon' src={'./../../public/'+Math.floor((Math.random()*9)+1)+'.png'}/>
            </div>
            <div className='recording-description'>
              <p className='recording-title'>User 5987</p>
              <p className='recording-sub'>recorded at 9:04 am</p>
            </div>
          </div>
          <div className='recording-playback'>
            <Link to='/dashboard/playback'>
              <IconButton tooltip='play session'>
                {/* <AVPlayCircleOutline/> */}
              </IconButton>
            </Link>
          </div>
        </Paper>
         <Paper style={style.paper}>
          <div className='recording-block'>
            <div className='recording-avatar'>
              <img className='recording-icon' src={'./../../public/'+Math.floor((Math.random()*9)+1)+'.png'}/>
            </div>
            <div className='recording-description'>
              <p className='recording-title'>User 2233</p>
              <p className='recording-sub'>recorded at 7:08 am</p>
            </div>
          </div>
          <div className='recording-playback'>
            <Link to='/playback'>
              <IconButton tooltip='play session'>
                {/* <AVPlayCircleOutline/> */}
              </IconButton>
            </Link>
          </div>
        </Paper>
        <Paper style={style.paper}>
          <div className='recording-block'>
            <div className='recording-avatar'>
              <img className='recording-icon' src={'./../../public/'+Math.floor((Math.random()*9)+1)+'.png'}/>
            </div>
            <div className='recording-description'>
              <p className='recording-title'>User 0786</p>
              <p className='recording-sub'>recorded at 5:01 am</p>
            </div>
          </div>
          <div className='recording-playback'>
            <Link to='/playback'>
              <IconButton tooltip='play session'>
                {/* <AVPlayCircleOutline/> */}
              </IconButton>
            </Link>
          </div>
        </Paper>
        <Paper style={style.paper}>
          <div className='recording-block'>
            <div className='recording-avatar'>
              <img className='recording-icon' src={'./../../public/'+Math.floor((Math.random()*9)+1)+'.png'}/>
            </div>
            <div className='recording-description'>
              <p className='recording-title'>User 8826</p>
              <p className='recording-sub'>recorded at 1:42 am</p>
            </div>
          </div>
          <div className='recording-playback'>
            <Link to='/playback'>
              <IconButton tooltip='play session'>
                {/* <AVPlayCircleOutline/> */}
              </IconButton>
            </Link>
          </div>
        </Paper>
        <Paper style={style.paper}>
          <div className='recording-block'>
            <div className='recording-avatar'>
              <img className='recording-icon' src={'./../../public/'+Math.floor((Math.random()*9)+1)+'.png'}/>
            </div>
            <div className='recording-description'>
              <p className='recording-title'>User 3232</p>
              <p className='recording-sub'>recorded at 1:10 am</p>
            </div>
          </div>
          <div className='recording-playback'>
            <Link to='/playback'>
              <IconButton tooltip='play session'>
                {/* <AVPlayCircleOutline/> */}
              </IconButton>
            </Link>
          </div>
        </Paper> 
        </div>
      </div>
    )
  }
}

export default DashboardContent;