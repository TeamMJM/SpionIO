import React from 'react';

const DashboardContent = (props) => {
  return (
    <div >
      <div className="recording-latest-updates">
        {props.generateRecordings()}
      </div>
    </div>
  );
};

export default DashboardContent;
