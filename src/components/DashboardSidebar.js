import React from 'react';
import { Link } from 'react-router-dom';

// import material-ui components
import Paper from 'material-ui/Paper';

const DashboardSidebar = (props) => {
  return (
    <Paper 
      zDepth={0}
      id="customFade2s" 
      className="animated fadeIn paper-1"
      >
      <Paper 
        zDepth={0} 
        className="paper-2"
        >
        <Link 
          className="paper-link" 
          to='/' 
          onClick={props.toggle}
          >
          {props.styleStorybook()}
        </Link>
      </Paper>
      <Paper 
        zDepth={0} 
        className="paper-2"
        >
        <Link 
          className="paper-link" 
          to='/' 
          onClick={props.toggle}
          >
          {props.styleSettings()}
        </Link>
      </Paper>
    </Paper>
  );
};

export default DashboardSidebar;
