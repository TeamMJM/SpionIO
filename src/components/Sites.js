import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../styles/Home.css';
// import SiteForm from './SiteForm';

import Paper from 'material-ui/Paper';
import Card from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FileCreateNewFolder from 'material-ui/svg-icons/file/create-new-folder';
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
    // bottom: '0',
    // position: 'fixed',
  },
  button: {
    marginLeft: '20px',
    display: 'inline-block',
    verticalAlign: 'middle',
    // bottom: '0',
    // position: 'fixed',
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
  }

  getSites() {
    axios.get('/sites')
    .then((res) => {
      this.setState({ sites: res.data })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  handleSiteSubmit(e) {
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
    this.setState({
      text: '',
    })
  }

  handleTextChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  renderSites() {
    let siteNodes = this.state.sites.map((site) => {
      let _id = site._id;
      let url = '/dashboard/sites/' + site._id;
      return(
        <Card key={site._id} style={style.card} ><Link to={url}>{site.title}</Link></Card>
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
              <TextField onChange={this.handleTextChange} value={this.state.text} fullWidth={true} style={style.textField} hintText='Start tracking your sites...'/>
            </Paper>
            <FloatingActionButton style={style.button} onClick={this.handleSiteSubmit}>
              <FileCreateNewFolder />
            </FloatingActionButton> 
          </div>
        </div>
      </div>
    )
  }
}

export default Sites;