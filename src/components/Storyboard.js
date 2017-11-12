import React from 'react';
import { Link } from 'react-router-dom';

import Geolocation from './Geolocation';

// import material-ui components
import Paper from 'material-ui/Paper';

const Storyboard = (props) => {
  return (
    <Paper rounded={false} className="story-paper">
      {/* <Geolocation/> */}
      <Link to={'/dashboard/recordings/' + props.recordingID} onClick={props.toggle}>
        {props.styleStoryboard()}
      </Link>
      <Link to={'/dashboard/recordings/' + props.recordingID + '/feedback'} onClick={props.toggle}>
        {props.styleFeedback()}
      </Link><br/><br/><br/>
      {props.renderTargetList()}
    </Paper>
  );
};

export default Storyboard;
