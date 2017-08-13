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
    textTransform: 'none',
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
        <li className="nav" id="title"><Link to='/'><FlatButton hoverColor='white' labelStyle={style.label} label='Private-I' /></Link></li>
        <li className="nav"><Link to='/'><FlatButton hoverColor='white' labelStyle={style.sub} label='/ PROTOTYPE v0.0.1 /' /></Link></li>
        <div id='first'>
        {/* <li className="nav"><Link to='/login'><FlatButton label='Login' style={style}/></Link></li> */}
        {/* <li className="nav"><Link to='/signup'><FlatButton label='Sign Up'></FlatButton></Link></li>  */}
        <li className='nav'><Link to='/download'><FlatButton style={{border: '1px solid gray', borderRadius: '50px'}} labelStyle={{textTransform: 'none', letterSpacing: '2px'}} labelColor='gray' backgroundColor='white' label='Download'></FlatButton></Link></li>
        <li className='nav'><Link to='/dashboard'><FlatButton style={{marginLeft: '5px', border: '1px solid gray', borderRadius: '50px'}} labelStyle={{textTransform: 'none', letterSpacing: '2px'}} labelColor='gray' backgroundColor='white' label='Dashboard'></FlatButton></Link></li>
        </div>  
    </div>
    </Paper>
  </header>
)

export default Header;
