import React, { Component } from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

/////////// import stylesheets ///////////
import './../styles/Header.css';

/////////// import UI ///////////
import FlatButton from 'material-ui/FlatButton';

const style = {
  margin: 6,
};

const Header = () => (
  <header>
    <div className="topnav" id="myTopnav">
      <div className="topnav-content">
        <li className="nav" id="title"><Link to='/'><FlatButton label='Private-I' style={style}/></Link></li>
        <li className="nav" id="first"><Link to='/signin'><FlatButton label='Sign In' style={style}/></Link></li>
        <li className="nav"><Link to='/dashboard'><FlatButton label='Dashboard' style={style}/></Link></li>
        {/* <li className="nav"><Link to='/signup'><Button secondary>Sign Up</Button></Link></li> */}  
    </div>
    </div>
  </header>
)

export default Header;
