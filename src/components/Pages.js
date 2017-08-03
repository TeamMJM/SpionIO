import React, { Component } from 'react';
import './../styles/Home.css';
import DialogExampleSimple from "./DialogExampleSimple.js"
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
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


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
      pages:[]
    };
    this.getPages = this.getPages.bind(this);
    this.handlePageSubmit = this.handlePageSubmit.bind(this);
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

  handlePageSubmit(newPage) {
    console.log("newpage",newPage)
    axios.post('/pages', newPage)
    .catch( err => {
      console.error(err);
    })
    this.getPages();
  }

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
        <DialogExampleSimple handleSubmit = {this.handlePageSubmit}/>
      </div>
    );
  }
}

export default Pages;
