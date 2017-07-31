import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

/////////// import components ///////////
import Documentation from './Documentation.js';
import Dashboard from './Dashboard.js';


/////////// import stylesheets ///////////
import './../styles/App.css';




// Documentation and Home page of our entire webpage, provided the client has not signed in

class App extends Component { 
  render() {
    return(
      <div>
        <Route exact path='/' component={Documentation}/>
        <Route path='/dashboard' component={Dashboard}/>
      </div>
    )
  }
}

export default App;
