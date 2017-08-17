import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

/////////// import components ///////////
import Header from './Header.js';
import Doc from './Doc.js';

/////////// import stylesheets ///////////
import './../styles/App.css';

const Documentation = () => (
  <div>
    <Header />
    <Doc />
  </div>
)

export default Documentation;
