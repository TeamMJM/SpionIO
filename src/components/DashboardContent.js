import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../styles/Home.css';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
// import AVPlayCircleOutline from 'material-ui/svg-icons/AV/play-circle-outline';
import axios from 'axios';

const style = {
  paper: {
    verticalAlign: 'middle',
    height: '60px',
    paddingTop: '12px',
    // width: '100%',
  },
}


class DashboardContent extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      recordings: [],
    }
    this.getRecordings = this.getRecordings.bind(this);
    this.generateRecordings = this.getRecordings.bind(this);
  }

  componentDidMount() {
    this.getRecordings();
    this.generateRecordings();
  }

  getRecordings() {
    axios.get('/recordings')
    .then((res) => {
      console.log(res.data);
      this.setState({recordings: res.data})
    })
    .catch((err) => {
      return console.error(err);
    })
  }

  // generateRecordings() {
  //   return recordingNodes;
  // }




  render() {
    let recordingNodes = this.state.recordings.map((recordings) => {
      let date = recordings.startTime.split('T')[0].split('-').reverse().slice(0, 2).join('/');
      let time = recordings.startTime.split('T')[1].split('.')[0].split(':');
      if (time[0] > 12) {
        time[0] = (time[0] - 12).toString();
        time = time.slice(0, 2).join(':');
        time += 'PM';
      } else {
        time = time.slice(0, 2).join(':');
        time += 'AM';
      }
      console.log(time)
      // let time = recordings.startTime.split('T')[1].split(':').pop().join(':');
      return (
        <Paper style={style.paper}>
          <div className='recording-block'>
            <div className='recording-avatar'>
              <img className='recording-icon' src={'./../../public/'+Math.floor((Math.random()*9)+1)+'.png'}/>
            </div>
            <div className='recording-description'>
              <p className='recording-title'>{'User ' + recordings._id}</p>
              <p className='recording-sub'>{date + ' ' + time }</p> 
            </div>
          </div>
          <div className='recording-playback'>
            <Link to={'/dashboard/' + recordings._id}>
              <IconButton tooltip='play session'>
                {/* <AVPlayCircleOutline/> */}
              </IconButton>
            </Link>
          </div>
        </Paper>
      )
    })
    return (
      <div>
        <div className='recording-latest-updates'>
          {recordingNodes}
        </div>
      </div>
    )
  }
}

export default DashboardContent;