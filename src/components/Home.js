import React, { Component } from 'react';
import './../styles/Home.css';
import AVWebIcon from 'material-ui/svg-icons/av/web';
import HardwareDeveloperBoardIcon from 'material-ui/svg-icons/hardware/developer-board';
import ActionFaceIcon from 'material-ui/svg-icons/action/face';
import ActionTimelineIcon from 'material-ui/svg-icons/action/timeline';

class Home extends Component {
  render() {
    return(
      <div className='page-content dashboard-page'>
        <h2 className='dashboard-title'>Dashboard</h2>
        <div className='dashboard-welcome'>
          <br/><br/><br/>
          <table className='dashboard-welcome-table'>
            <td className='dashboard-welcome-td'>
              <p className='dashboard-welcome-display'><AVWebIcon/></p>
              <p className='dashboard-welcome-p'>
                SITES TRACKING<br/>Subtitle
              </p>
              <p className='dashboard-welcome-stat'>2</p>
            </td>
            <td className='dashboard-welcome-td'>
              <p className='dashboard-welcome-display'><HardwareDeveloperBoardIcon/></p>
              <p className='dashboard-welcome-p'>
                PAGES TRACKING<br/>Subtitle
              </p>
              <p className='dashboard-welcome-stat'>5</p>
            </td>
            <td className='dashboard-welcome-td'>
              <p className='dashboard-welcome-display'><ActionFaceIcon style={{height: '40px', width: '40px'}}/></p>
              <p className='dashboard-welcome-p'>
                USERS TRACKED<br/>Subtitle
              </p>
              <p className='dashboard-welcome-stat'>17</p>
            </td>
            <td className='dashboard-welcome-td'>
              <p className='dashboard-welcome-display'><ActionTimelineIcon/></p>
              <p className='dashboard-welcome-p'>
                VIEW COUNT<br/>Subtitle
              </p>
              <p className='dashboard-welcome-stat'>53%</p>
            </td>
          </table>
        </div>
        <br/><br/><br/>

        <div className='dashboard-graph-1'></div>
      </div> 
    )
  }
}

export default Home;