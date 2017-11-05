import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

/////////// import our React components ///////////
import Dashboard from './Dashboard.js';
import DashboardUserSession from './DashboardUserSession.js';

/////////// import stylesheets ///////////
import './../styles/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component { 
  render() {
    return(

      <Router>

      <div> 
        <MuiThemeProvider>
          <Route exact path='/' component={Dashboard}/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Route exact path='/settings' component={Dashboard}/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Route path='/recordings/:recordingID' component={DashboardUserSession}/>
        </MuiThemeProvider>
      </div>

      </Router>

    )
  }
}

export default App;
