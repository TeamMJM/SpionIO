import React, { Component } from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

/////////// import stylesheets ///////////
import './../styles/Header.css';

/////////// import UI ///////////
import { Button } from 'semantic-ui-react';

const Header = () => (
  <header>
    <div className="topnav" id="myTopnav">
      <div className="topnav-content">
        <li className="nav" id="title"><Link to='/'><Button floated='left'>Private-I</Button></Link></li>
        <li className="nav" id="first"><Link to='/signin'><Button secondary floated='right'>Sign In</Button></Link></li>
        <li className="nav"><Link to='/dashboard'><Button floated='right'>Dashboard</Button></Link></li>
        {/* <li className="nav"><Link to='/signup'><Button secondary>Sign Up</Button></Link></li> */}  
    </div>
    </div>
  </header>
)

export default Header;
