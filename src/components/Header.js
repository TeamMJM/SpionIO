import React, { Component } from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

const style = {
  fontSize: '1em',
  color: '#2E5266',
  margin: '0',
};

const Header = () => (
  <header>
    <div className="topnav" id="myTopnav">
      <div className="topnav-content">
      <ul>
        <li className="nav" id="title"><Link to='/'>P-I</Link></li>
         <li className="nav" id="first"><Link to='/signin'>Sign In</Link></li>
        {/* <li className="nav"><Link to='/signup'></Link></li>
        <li className="nav"><Link to='/home'></Link></li>
        <li className="nav"><Link to='/original'></Link></li>  */}
      </ul>     
    </div>
    </div>
  </header>
)

export default Header;
