import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './../styles/Home.css';
import $ from 'jquery';


// import material-ui components
import { Card, CardHeader, CardText } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import ActionChromeReaderMode from 'material-ui/svg-icons/action/chrome-reader-mode';
import ActionFeedback from 'material-ui/svg-icons/action/feedback';
import Paper from 'material-ui/Paper';

const style = {
  paper: {
    width: '30%',
    float: 'right',
    height: '52px',
  },
  paperHeadStoryActive: {
    backgroundColor: '#006CAA',
    height: '52px',
    textAlign: 'center',
    width: '50%',
    float: 'left',
  },
  paperHeadStoryInactive: {
    backgroundColor: 'white',
    height: '52px',
    textAlign: 'center',
    width: '50%',
    float: 'left',
  },
  paperHeadFeedInactive: {
    backgroundColor: 'white',
    height: '52px',
    textAlign: 'center',
    width: '50%',
    float: 'right'
  },
  paperHeadFeedActive: {
    backgroundColor: '#006CAA',
    height: '52px',
    textAlign: 'center',
    width: '50%',
    float: 'right',
  },
  pHeadActive: {
    color: 'white',
    paddingTop: '10%',
    letterSpacing: '2px',
    fontSize: '.7em',
    marginLeft: '5%',
  },
  pHeadInactive: {
    color: '#006CAA',
    paddingTop: '10%',
    letterSpacing: '2px',
    fontSize: '.7em',
    marginLeft: '5%',
  },
  mediumIcon: {
    width: 24,
    height: 24,
  },
  mediumStory: {
    width: 36,
    height: 36,
    display: 'inline-block',
    marginLeft: '8%'
  },
  mediumFeed: {
    width: 36,
    height: 36,
    display: 'inline-block',
    marginLeft: '8%'
  },
}

class Storyboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      storyboard: false,
      feedback: false,
    }
    this.styleStoryboard = this.styleStoryboard.bind(this);
    this.styleFeedback = this.styleFeedback.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleList = this.toggleList.bind(this);
    this.initialize = this.initialize.bind(this);
  }

  toggle() {
    this.setState({storyboard: !this.state.storyboard, feedback: !this.state.feedback})
  }

  initialize() {
    let url = window.location.href.split('/').pop();

    if (url !== 'feedback') {
      this.setState({storyboard: true, feedback: false})
    } else {
      this.setState({storyboard: false, feedback: true})
    }
  }

  styleStoryboard() {
    if (this.state.storyboard) {
      return (
        <div>
          <Paper 
            id='customFade1s' 
            className='animated slideInRight' 
            style={style.paperHeadStoryActive}
          />
          <div 
            id='customFade' 
            className='animated fadeIn' 
            style={{zIndex: '100', position: 'fixed'}}
            >
            <IconButton iconStyle={style.mediumIcon} style={style.mediumStory}>
              <ActionChromeReaderMode color='white'/>
            </IconButton>
          </div>
          <div 
            id='customFade' 
            className='animated fadeIn' 
            style={{zIndex: '100', position: 'fixed', marginLeft: '3.5%', marginTop: '.75%'}}
            >
            <p style={style.pHeadActive}>
              STORYBOARD
            </p>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <Paper 
            id='customFade1s' 
            className='animated slideOutRight' 
            style={style.paperHeadStoryInactive}
          />
          <div 
            id='customFade1s' 
            className='animated fadeIn' 
            style={{zIndex: '100', position: 'fixed'}}
            >
            <IconButton iconStyle={style.mediumIcon} style={style.mediumStory}>
              <ActionChromeReaderMode color='#006CAA'/>
            </IconButton>
          </div>
          <div 
            id='customFade1s' 
            className='animated fadeIn' 
            style={{zIndex: '100', position: 'fixed', marginLeft: '3.5%', marginTop: '.75%'}}
            >
            <p style={style.pHeadInactive}>
              STORYBOARD
            </p>
          </div>
        </div>
      )      
    }
  }

  styleFeedback() {
    if (this.state.feedback) {
      return (
        <div>
          <Paper 
            id='customFade1s' 
            className='animated slideInLeft' 
            style={style.paperHeadFeedActive}
          />
          <div 
            id='customFade' 
            className='animated fadeIn' 
            style={{zIndex: '100', position: 'fixed', marginLeft: '16.5%'}}
            >
            <IconButton iconStyle={style.mediumIcon} style={style.mediumFeed}>
              <ActionFeedback color='white'/>
            </IconButton>
          </div>
          <div 
            id='customFade' 
            className='animated fadeIn' 
            style={{zIndex: '100', position: 'fixed', marginLeft: '20%', marginTop: '.75%'}}
            >
            <p style={style.pHeadActive}>
              FEEDBACK
            </p>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <Paper 
            id='customFade1s' 
            className='animated slideInRight' 
            style={style.paperHeadFeedInactive}
          />
          <div 
            id='customFade1s' 
            className='animated fadeIn' 
            style={{zIndex: '100', position: 'fixed', marginLeft: '16.5%'}}
            >
            <IconButton iconStyle={style.mediumIcon} style={style.mediumFeed}>
              <ActionFeedback color='#006CAA'/>
            </IconButton>
          </div>
          <div 
            id='customFade1s' 
            className='animated fadeIn' 
            style={{zIndex: '100', position: 'fixed', marginLeft: '20%', marginTop: '.75%'}}
            >
            <p style={style.pHeadInactive}>
              FEEDBACK
            </p>
          </div>
        </div>
      )      
    }
  }

  toggleList() {
    let url = window.location.href.split('/').pop();
 
    if (url !== 'feedback') {
      console.log(this.props.targetList);
      return(
        <div style={{textAlign: 'center', letterSpacing: '1px', fontSize: '.9em'}}>Welcome to the storyboard</div>
      )
      const targetList = this.props.targetList.map((Element) => {
        console.log(element)
        let hintText = 'Clicked ' + Element.split('>')[0].split(' ')[0].split('').splice(1).join('').toUpperCase();
        return (
          <Card>
            <CardHeader title={hintText} actAsExpander={true} showExpandableButton={true}/>
            <CardText expandable={true}>{Element}</CardText>
          </Card>
        )
      })
    } else {
     
      return(
        <div style={{textAlign: 'center', letterSpacing: '1px', fontSize: '.9em'}}>Welcome to the feedback</div>
      )
    }
  }

  componentDidMount() {
    console.log(this.props.targetList)
    this.initialize();
    this.styleFeedback();
    this.styleStoryboard();
    this.toggleList();
  }

  render() {
    let url = window.location.href.split('/').pop();    
    const targetList = this.props.targetList.map((Element) => {
      console.log('hi')
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
      <Paper rounded={false} style={style.paper}>
        <Link to={'/dashboard/recordings/' + this.props.recordingID} onClick={this.toggle}>
          {this.styleStoryboard()}
        </Link>
        <Link to={'/dashboard/recordings/' + this.props.recordingID + '/feedback'} onClick={this.toggle}>
          {this.styleFeedback()}
        </Link><br/><br/><br/>
        {targetList}
      </Paper>

    )
  }
}

export default Storyboard;