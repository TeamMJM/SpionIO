import React from 'react';
import { Link } from 'react-router-dom';

// import material-ui components
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import ActionSettings from 'material-ui/svg-icons/action/settings';

const PlaybackSidebar = () => {
  return (
    <Paper 
      id='customFade1s' 
      className='animated fadeInUp playback-sidebar-paper' 
      zDepth={1} 
      rounded={false}
      >
      <Link to='/'>
        <IconButton
          className="playback-sidebar-icon"
          tooltip='Go Back'
          >
          <NavigationArrowBack color='lightgray'/>
        </IconButton>
      </Link>
      <Link to='/'>
        <IconButton
          className="playback-sidebar-icon"
          tooltip='Settings'
          >
          <ActionSettings color='lightgray'/>
        </IconButton>
      </Link>
    </Paper>
  );
};

export default PlaybackSidebar;
