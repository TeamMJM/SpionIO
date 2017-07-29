import React, { Component } from 'react';

class SignIn extends Component {
  render() {
    return(
      <div className="sign-in">
        <h3>SIGN IN</h3>
        <div className="forms">
          <form className="ui form">
            <div className="field">
              <label>Username</label>
              <input type="text" name="user-name" placeholder="Username" />
            </div>
            <div className="field">
              <label>Password</label>
              <input type="text" name="password" placeholder="Password" />
            </div>
            <div className="field">
              <div className="ui checkbox">
                <input type="checkbox" tabIndex="0" className="hidden" />
                <label>I agree to the Terms and Conditions</label>
              </div>
            </div>
            <button className="ui button" type="submit">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default SignIn;