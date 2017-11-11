import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import $ from 'jquery';

import Geolocation from './Geolocation';


// import material-ui components
import { Card, CardHeader, CardText } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import ActionChromeReaderMode from 'material-ui/svg-icons/action/chrome-reader-mode';
import ActionFeedback from 'material-ui/svg-icons/action/feedback';
import Paper from 'material-ui/Paper';

class Storyboard extends Component {
  constructor(props) {
    super(props);
    this.styleStoryboard = this.styleStoryboard.bind(this);
    this.styleFeedback = this.styleFeedback.bind(this);
    this.toggleList = this.toggleList.bind(this);
  };

  styleStoryboard() {
    if (this.props.storyboard) {
      return (
        <div className="storyboard-header-container">
          <Paper 
            id="customFade1s" 
            className="animated slideInRight storyboard-paper-active" 
          />
          <div 
            id="customFade" 
            className="animated fadeIn storyboard-header-div"
            >
            <IconButton className="storyboard-iconbtn">
              <ActionChromeReaderMode color='white'/>
            </IconButton>
          </div>
          <div 
            id="customFade" 
            className="animated fadeIn storyboard-header-div2"
            >
            <p className="storyboard-p-active">
              STORYBOARD
            </p>
          </div>
        </div>
      )
    } else {
      return (
        <div className="storyboard-header-container">
          <Paper 
            id="customFade1s" 
            className="animated slideOutRight storyboard-paper-inactive"
          />
          <div className="test">
          <div 
            id="customFade1s" 
            className="animated fadeIn storyboard-header-div"
            >
            <IconButton className="storyboard-iconbtn">
              <ActionChromeReaderMode color='#006CAA'/>
            </IconButton>
          </div>
          <div 
            id="customFade1s" 
            className="animated fadeIn storyboard-header-div2"
            >
            <p className="storyboard-p-inactive">
              STORYBOARD
            </p>
          </div>
          </div>
        </div>
      )      
    }
  }

  styleFeedback() {
    if (this.props.feedback) {
      return (
        <div className="storyboard-header-container">
          <Paper 
            id="customFade1s" 
            className="animated slideInLeft feedback-paper-active" 
          />
          <div 
            id="customFade" 
            className="animated fadeIn feedback-header-div"
            >
            <IconButton className="storyboard-iconbtn">
              <ActionFeedback color='white'/>
            </IconButton>
          </div>
          <div 
            id="customFade" 
            className="animated fadeIn feedback-header-div2"
            >
            <p className="storyboard-p-active">
              FEEDBACK
            </p>
          </div>
        </div>
      )
    } else {
      return (
        <div className="storyboard-header-container">
          <Paper 
            id="customFade1s" 
            className="animated slideInRight feedback-paper-inactive" 
          />
          <div className="test">
          <div 
            id="customFade1s" 
            className="animated fadeIn feedback-header-div"
            >
            <IconButton className="storyboard-iconbtn">
              <ActionFeedback color='#006CAA'/>
            </IconButton>
          </div>
          <div 
            id="customFade1s" 
            className="animated fadeIn feedback-header-div2"
            >
            <p className="storyboard-p-inactive">
              FEEDBACK
            </p>
          </div>
          </div>
        </div>
      )      
    }
  }

  toggleList() {
    let url = window.location.href.split('/').pop();
 
    if (url !== 'feedback') {
      return(
        <div className="storyboard-list-div">Welcome to the storyboard</div>
      );
      const targetList = this.props.targetList.map((Element) => {
        let hintText = 'Clicked ' + Element.split('>')[0].split(' ')[0].split('').splice(1).join('').toUpperCase();
        return (
          <Card>
            <CardHeader title={hintText} actAsExpander={true} showExpandableButton={true}/>
            <CardText expandable={true}>{Element}</CardText>
          </Card>
        );
      });
    } else {     
      return (
        <div className="storyboard-list-div">Welcome to the feedback</div>
      );
    };
  };

  componentDidMount() {
    this.styleFeedback();
    this.styleStoryboard();
    this.toggleList();
    $(window).on('scroll', () => {
      if ($(window).scrollTop() > 15) {
        $('.test').removeClass('animated fadeIn');
        $('.test').addClass('animated fadeOut');
      } else {
        $('.test').removeClass('animated fadeOut');
        // $('.test').addClass('animated fadeIn')
      }
    })
  }

  render() {
    let url = window.location.href.split('/').pop();    
    const targetList = this.props.targetList.map((Element) => {
      let hintText = 'Clicked ' + Element.split('>')[0].split(' ')[0].split('').splice(1).join('').toUpperCase();
      if (url === 'feedback') {
        return (
          <div></div>
        )
      } else {
        return (
          <Card style={{margin: '0 auto'}}>
            <CardHeader title={hintText} actAsExpander={true} showExpandableButton={true}/>
            <CardText expandable={true}>{Element}</CardText>
          </Card>
        )
      }
    })

    return (
      <Paper rounded={false} className="story-paper">
        {/* <Geolocation/> */}
        <Link to={'/dashboard/recordings/' + this.props.recordingID} onClick={this.props.toggle}>
          {this.styleStoryboard()}
        </Link>
        <Link to={'/dashboard/recordings/' + this.props.recordingID + '/feedback'} onClick={this.props.toggle}>
          {this.styleFeedback()}
        </Link><br/><br/><br/>
        {targetList}
      </Paper>

    )
  }
}

export default Storyboard;