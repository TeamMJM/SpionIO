import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

/////////// import components ///////////
import Main from './Main.js';
import Header from './Header.js';


/////////// import stylesheets ///////////
import './../styles/App.css';



// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const App = () => (
  <div>
      <Header />
      <Main />
  </div>
)

export default App;
