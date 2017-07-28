import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import Main from './Main.js';
import Header from './Header.js';
// import './../styles/App.css';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const App = () => (
  <div>
    {/* <MuiThemeProvider> */}
      <Header />
     {/* </MuiThemeProvider>  */}
    {/* <MuiThemeProvider> */}
      <Main />
    {/* </MuiThemeProvider> */}
  </div>
)

export default App;
