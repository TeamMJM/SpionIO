import React, { Component } from 'react';
import Card from 'material-ui/Card';
import './../styles/Home.css';

const style = {
  card: {
    height: '100%',
  }
}

class DashboardHeader extends Component {
  render() {
    return(
      <div className='page-content dashboard-header'>
        <Card style={style.card}></Card>
      </div>
    )
  }
}

export default DashboardHeader;