import React, { Component } from 'react';
import './../styles/ScrollButton.css';

class ScrollButton extends Component {
  render(){
    return(
      <div>
        <section id="section01" class="demo">
          <a href="#section02"><span></span>Scroll</a>
        </section>
      </div>
    )
  }
}

export default ScrollButton;