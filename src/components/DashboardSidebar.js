import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import material-ui components
import Paper from 'material-ui/Paper';
import { Card } from 'material-ui/Card';

const style = {
  paper1: {
    float: 'left', 
    width: '20%', 
    height: '750px', 
    backgroundColor: '#F4F7F5'
  },
  paper2: {
    height: '60px', 
    margin: '0 auto', 
    backgroundColor: '#F4F7F5'
  },
  p1: {
    marginTop: '5%', 
    paddingTop: '5%', 
    paddingBottom: '5%', 
    fontSize: '.9em', 
    width: '90%', 
    backgroundColor: '#006CAA', 
    borderRadius: '3px', 
    color: 'white', 
    paddingLeft: '4%'
  }, 
  p2: {
    marginTop: '5%', 
    paddingTop: '5%', 
    paddingBottom: '5%', 
    fontSize: '.9em', 
    color: 'black', 
    paddingLeft: '7%'
  },
  p3: {
    paddingTop: '5%', 
    paddingBottom: '5%', 
    fontSize: '.9em', 
    width: '90%', 
    backgroundColor: '#006CAA', 
    borderRadius: '3px', 
    color: 'white', 
    paddingLeft: '4%'
  },
  p4: {
    paddingTop: '5%', 
    paddingBottom: '5%', 
    fontSize: '.9em', 
    color: 'black', 
    paddingLeft: '7%'
  }
}

class DashboardSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storybook: true,
      settings: false,
    }
    this.toggle = this.toggle.bind(this);
    this.styleStorybook = this.styleStorybook.bind(this);
    this.styleSettings = this.styleSettings.bind(this);
  }

  styleStorybook() {
    if (this.state.storybook) {
      return <p style={style.p1}>Storybook</p>
    } else {
      console.log('storybook not toggled')
      return <p style={style.p2}>Storybook</p>
    }
  }

  styleSettings() {
    if (this.state.settings) {
      return <p style={style.p3}>Settings</p>      
    } else {
      return <p style={style.p4}>Settings</p>
    }
  }
  
  toggle() {
    this.setState({settings: !this.state.settings, storybook: !this.state.storybook})    
  }

  componentDidMount() {
    this.styleStorybook();
    this.styleSettings();
  }

  render() {
    return (
    <Paper 
      id='customFade2s' 
      className='animated fadeIn' 
      style={style.paper1}
      >
      <Paper 
        zDepth={0} 
        style={style.paper2}
        >
        <Link 
          style={{textDecoration: 'none', letterSpacing: '1px'}} 
          to='/dashboard' 
          onClick={this.toggle}
          >
          {this.styleStorybook()}
        </Link>
      </Paper>
      <Paper 
        zDepth={0} 
        style={style.paper2}
        >
        <Link 
          style={{textDecoration: 'none', letterSpacing: '1px'}} 
          to='/dashboard' 
          onClick={this.toggle}
          >
          {this.styleSettings()}
        </Link>
      </Paper>
    </Paper>
  )}
}

export default DashboardSidebar;