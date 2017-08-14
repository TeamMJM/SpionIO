import React, { Component } from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

/////////// import stylesheets ///////////
import './../styles/Header.css';

/////////// import UI ///////////
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

const style = {
  margin: 6,
  marginTop: '20px',
  sub: {
    paddingLeft: '5px',
    color: 'gray',
    textTransform: 'none',
    letterSpacing: '2px',
  },
  label: {
    fontSize: '30px',
    paddingRight: '5px',
    color: '#E0E1E5',
    letterSpacing: '2px',
  },
  paper: {
    height: '80px',
  }
};



const Header = () => (
  <header>
    <Paper style={style.paper} zDepth={1} className="topnav" id="myTopnav">
      <div className="topnav-content">
        <img className='logo' src='./../../logo.png'/>
        <Link to='/'><FlatButton hoverColor='white' labelStyle={style.label} label='Private-I' /></Link>
        <Link to='/'><FlatButton hoverColor='white' labelStyle={style.sub} label='/ PROTOTYPE v0.0.1 /' /></Link>
        <div id='first'>
        <Link to='/download'><FlatButton style={{border: '1px solid gray', borderRadius: '50px'}} labelStyle={{letterSpacing: '2px'}} labelColor='gray' backgroundColor='white' label='Download'></FlatButton></Link>
        <Link to='/dashboard'><FlatButton style={{marginLeft: '5px', border: '1px solid gray', borderRadius: '50px'}} labelStyle={{letterSpacing: '2px'}} labelColor='gray' backgroundColor='white' label='Dashboard'></FlatButton></Link>
        </div>  
    </div>
    </Paper>
  </header>
)

export default Header;
