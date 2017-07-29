import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

/////////// import components ///////////
import Main from './Main.js';
import Header from './Header.js';


/////////// import stylesheets ///////////
import './../styles/App.css';




// Documentation and Home page of our entire webpage, provided the client has not signed in
const Documentation = () => (
  <div>
      <Header />
      <Main />
  </div>
)

export default Documentation;
