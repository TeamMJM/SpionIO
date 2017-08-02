import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../styles/Home.css';
// import SiteForm from './SiteForm';

import Paper from 'material-ui/Paper';
import Card from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import axios from 'axios';

const style = {
  paper: {
    height: '100%',
    width: '100%',
  // marginLeft: '300px',
  // width: '73%',
    textAlign: 'left',
    display: 'inline-block',
  },
  card: {
    backgroundColor: 'white'
  },
  textField: {

  },
  submit: {
    width: '94%',
    textAlign: 'left',
    display: 'inline-block',
    verticalAlign: 'middle',
  },
  button: {
    marginLeft: '20px',
    display: 'inline-block',
    verticalAlign: 'middle',
  }
};

class Sites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sites: [],
      title: '',
      text: '',
    }
    this.getSites = this.getSites.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.renderSites = this.renderSites.bind(this);
    this.handleSiteSubmit = this.handleSiteSubmit.bind(this);
  }
  
  componentDidMount() {
    this.getSites();
    // setInterval(this.getSites, 500)
  }

  getSites() {
    axios.get('/sites')
    .then( res => {
      console.log(res);
      this.setState({ sites: res.data })
    })
    .catch( err => {
      console.log(err);
    })
  }

  handleSiteSubmit(e) {
    console.log(e);
    console.log(this.state);
    e.preventDefault();
    let newSite = {
      title: this.state.text
    }
    axios.post('/sites', newSite)
    .catch( err => {
      console.error(err);
      // this.setState({ sites: sites})
    })
    this.getSites();
  }

  handleTextChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  renderSites() {
    let siteNodes = this.state.sites.map(site => {
      return(
        <Card style={style.card}><Link to='/dashboard/sites/pages'>{site.title}</Link></Card>
      )
    })
    return siteNodes;
  }


  render() {

    return(
      <div className='page-content'>
        <Paper style={style.paper} zDepth={1}>
           {this.renderSites()} 
        </Paper>
        
        <div className='site-form'>
          <div className='submit'>
            <Paper style={style.submit} zDepth={1}>
              <TextField onChange={this.handleTextChange} fullWidth={true} style={style.textField} hintText='Start tracking your sites...'/>
            </Paper>

            <FloatingActionButton style={style.button} onClick={this.handleSiteSubmit}>
              <ContentAdd/>
            </FloatingActionButton> 
          </div>        
        </div>
      </div>
    )
  }
}

export default Sites;