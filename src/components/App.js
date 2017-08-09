import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

/////////// import components ///////////
import Documentation from './Documentation.js';
import Dashboard from './Dashboard.js';


/////////// import stylesheets ///////////
import './../styles/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


// Documentation and Home page of our entire webpage, provided the client has not signed in

class App extends Component { 
  render() {
    return(
      <div>
        <MuiThemeProvider>
          <Route exact path='/' component={Documentation}/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Route path='/dashboard' component={Dashboard}/>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App;
