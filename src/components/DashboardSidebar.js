import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import material-ui components
import Paper from 'material-ui/Paper';
import { Card } from 'material-ui/Card';

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
      return <p style={{marginTop: '5%', paddingTop: '5%', paddingBottom: '5%', fontSize: '.9em', width: '90%', backgroundColor: '#006CAA', borderRadius: '3px', color: 'white', paddingLeft: '4%'}}>Storybook</p>
    } else {
      console.log('storybook not toggled')
      return <p style={{marginTop: '5%', paddingTop: '5%', paddingBottom: '5%', fontSize: '.9em', color: 'black', paddingLeft: '7%'}}>Storybook</p>
    }
  }

  styleSettings() {
    if (this.state.settings) {
      return <p style={{paddingTop: '5%', paddingBottom: '5%', fontSize: '.9em', width: '90%', backgroundColor: '#006CAA', borderRadius: '3px', color: 'white', paddingLeft: '4%'}}>Settings</p>      
    } else {
      return <p style={{paddingTop: '5%', paddingBottom: '5%', fontSize: '.9em', color: 'black', paddingLeft: '7%'}}>Settings</p>
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
      style={{float: 'left', width: '20%', height: '750px', backgroundColor: '#F4F7F5'}}
      >
      <Paper 
        zDepth={0} 
        style={{height: '60px', margin: '0 auto', backgroundColor: '#F4F7F5'}}
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
        style={{height: '60px', margin: '0 auto', backgroundColor: '#F4F7F5'}}
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