import React, { Component } from 'react';
import { HashRouter, Link, Switch, Route } from 'react-router-dom';


////////// Similar to Header.js but for Dashboard feature //////////
class Sidebar extends Component {
  render() {
    return(
        <div className="ui thin visible left demo vertical inverted sidebar labeled icon menu">
          <a className="item">
            <Link to='/dashboard'>
              <i className="home icon"></i>
              Home
            </Link>
          </a>
          
            <a className="item">
            <Link to='/dashboard/sites'>
              <i className="block layout icon"></i>
              Sites
            </Link>
          </a> 

          <a className="item">
            <Link to='/dashboard/members'>
              <i className="smile icon"></i>
              Team Members
            </Link>
          </a> 
        </div>
    )
  }
}

export default Sidebar;