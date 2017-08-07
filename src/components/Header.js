import React, { Component } from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

/////////// import stylesheets ///////////
import './../styles/Header.css';

/////////// import UI ///////////
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

const style = {
  margin: 6,
  marginTop: '20px',
  sub: {
    paddingLeft: '5px',
    color: 'gray',
  },
  label: {
    fontSize: '24px',
    paddingRight: '5px',
    color: '#00BFFF',
  }
};



const Header = () => (
  <header>
    <div className="topnav" id="myTopnav">
      <div className="topnav-content">
        <img className='logo' src='./../../logo.png'/>
        <li className="nav" id="title"><Link to='/'><FlatButton hoverColor='white' labelStyle={style.label} label='Private-I' /></Link></li>
        <li className="nav"><Link to='/'><FlatButton hoverColor='white' labelStyle={style.sub} label='/ PROTOTYPE v0.0.1 /' /></Link></li>
        <div id='first'>
        {/* <li className="nav"><Link to='/login'><FlatButton label='Login' style={style}/></Link></li> */}
        {/* <li className="nav"><Link to='/signup'><FlatButton label='Sign Up'></FlatButton></Link></li>  */}
        <li className='nav'><Link to='/download'><RaisedButton labelColor='white' backgroundColor='#006CAA' label='Download'></RaisedButton></Link></li>
        </div>  
    </div>
    </div>
  </header>
)

export default Header;
