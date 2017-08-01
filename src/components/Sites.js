import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../styles/Home.css';
import Paper from 'material-ui/Paper';
import Card from 'material-ui/Card';
import TextField from 'material-ui/TextField';
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
    }
    this.getSites = this.getSites.bind(this);
  }
  
  componentDidMount() {
    // this.getSites();
  }

  getSites() {
    axios.get('/INSERTAPILINKHERE')
    .then( res => {
      console.log(res);
      this.setState({ sites: res.data })
    })
    .catch( err => {
      console.log(err);
    })
  }

  handleSiteSubmit(site) {
    let sites = this.state.sites;
    let newSites = sites.concat([site]);
    this.setState({ sites: newSites })
    axios.post('/INSERTAPILINKHERE', site)
    .catch( err => {
      console.error(err);
      this.setState({ sites: sites})
    })
  }

  render() {
    return(
      <div className='page-content'>
        <Paper style={style.paper} zDepth={1}>
          <Card style={style.card}>
            <Link to='/dashboard/sites/pages'>
              Dummy Site 1
            </Link>
          </Card>
          <Card style={style.card}>
            <Link to='/dashboard/sites/pages'>
              Dummy Site 2
            </Link>
          </Card>

          <Card style={style.card}>
            <Link to='/dashboard/sites/pages'>
              Dummy Site 3
            </Link>
          </Card>
          <Card style={style.card}>
          Dummy Site 4
          </Card>
          <Card style={style.card}>
          Dummy Site 5
          </Card>
          <Card style={style.card}>
          Dummy Site 6
          </Card>        
        </Paper>

        {/* <SiteForm/> */}

      </div>
    )
  }
}

export default Sites;