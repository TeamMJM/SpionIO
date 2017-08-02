import React, { Component } from 'react';
import './../styles/Home.css';
// import Html from './html.js';
import axios from 'axios';

import Paper from 'material-ui/Paper';
import Card from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';


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
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
  }
};

class Pages extends Component {
  constructor(props){
    super(props);
    this.state = {
      pages: [],
      title: '',
      text: '',
    };
    this.getPages = this.getPages.bind(this);
    this.handlePageSubmit = this.handlePageSubmit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  componentDidMount() {
    this.getPages();
  }

  getPages() {
    axios.get('/pages')
    .then((res) => {
      console.log(res);
      this.setState({ pages: res.data })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  handlePageSubmit(e) {
    console.log(e);
    e.preventDefault();
    let newPage = {
      title: this.state.text
    }
    axios.post('/pages', newPage)
    .catch( err => {
      console.error(err);
      // this.setState({ sites: sites})
    })
    this.getPages();
    this.setState({
      text: '',
    })
  }

  handleTextChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  // renderPages() {
  //   let pageNodes = this.state.pages.map((page)) => {
  //     let url = '/dashboard/sites/:pages/' + page._id;
  //     return(
        
  //     )
  //   }
  // }



  render() {
    return(
      <div className='page-content'>
        <Paper style={style.paper} zDepth={1}>
          {/* {this.renderSites()}  */}

          <div style={style.root}>
            <GridList cols={4} cellHeight={180} style={style.gridList}>
              {this.state.pages.map((page) => (
                <GridTile key={page.img} title={page.title} actionIcon={<IconButton><StarBorder color="white" /></IconButton>}>
                <img src={page.img} />
                </GridTile>
              ))}
            </GridList>
          </div>
        </Paper>
        
        <div className='pages-form'>
          <div className='submit'>
            <Paper style={style.submit} zDepth={1}>
              <TextField onChange={this.handleTextChange} value={this.state.text} fullWidth={true} style={style.textField} hintText='Start tracking your individual pages...'/>
            </Paper>
          

            <FloatingActionButton style={style.button} onClick={this.handlePageSubmit}>
              <ContentAdd/>
            </FloatingActionButton> 
          </div>
        </div>
      </div>
    );
  }
}

export default Pages;