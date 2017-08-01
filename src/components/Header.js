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
        <li className="nav" id="first"><Link to='/login'><FlatButton label='Login' style={style}/></Link></li>
        <li className="nav"><Link to='/dashboard'><FlatButton label='Dashboard' style={style}/></Link></li>
        <li className="nav"><Link to='/signup'><FlatButton label='Sign Up'></FlatButton></Link></li>   
    </div>
    </div>
  </header>
)

export default Header;
