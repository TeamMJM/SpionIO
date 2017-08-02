import React, { Component } from 'react';
// ES6 Imports
import Scroll from 'react-scroll'; // Imports all Mixins
import {scroller} from 'react-scroll'; //Imports scroller mixin, can use as scroller.scrollTo()


// Or Access Link,Element,etc as follows
let Link       = Scroll.Link;
let Element    = Scroll.Element;
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;


import './../styles/Welcome.css';

class Welcome extends Component {


  render() {
    return (
      <div>
        <div id="page-content" className="App-header">
          <img className='App-logo' src='./../../logo.png'/>

          <div className="App-title">
            <h1>THE IDEAL</h1><br/><br/><h1>FULL-STACK ANALYTICS</h1><br/><br/><h1>FOR DEVELOPERS</h1>
          </div>

          <div className='scroll demo' id='section07'>
            <Link className='a' activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
              <span></span><span></span><span></span>
            </Link>
            <br/><br/><br/><br/>Get Started
          </div>

          <br/><br/><br/><br/><br/><br/>

          <div id='section2'>
          <br/>
          <h1>Welcome to Private-I, the ideal analytics platform for developers</h1>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <Element name="test1" className="element">
            <div>Next Element</div>            
          </Element>
          </div>

 
        </div>
      </div>
    )
  }
}

export default Welcome;