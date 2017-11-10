import React from 'react';

// import material-ui components
import Paper from 'material-ui/Paper'

const DashboardSettings = () => {
  return(
    <div className="recording-latest-updates">
      <Paper className="settings-paper">
        <p className="settings-title">Your Recording Snippet</p>
        <hr width='92%'/>
        <p className="settings-beginning">Copy and paste the script below into the</p>
        <p className="settings-code">{'<head>'}</p>
        <p className="settings-end">of every page you wish to start tracking.</p>
        <div className="settings-block" />
      </Paper>
    </div>
  );
};

export default DashboardSettings;
