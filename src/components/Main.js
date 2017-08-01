import React from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import Welcome from './Welcome.js';
import Login from './Login.js';
import SignUp from './SignUp.js';


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Welcome}/>
      <Route path='/login' component={Login}/>
       <Route path='/signup' component={SignUp}/>  
    </Switch>
  </main>
)
export default Main;