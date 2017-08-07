import React, { Component } from 'react';
import Card from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import './../styles/Home.css';
import SearchBar from 'material-ui-search-bar';

const style = {
  card: {
    height: '100%',
  },
  paper: {
    width: '600px',
  },
  textField: {
    fullWidth: true,
  },
  underlineDisable: {
    borderColor: 'white',
  },
  underlineFocus: {
    borderColor: "#2E5266",
  },
  searchBar: {
    marginLeft: 40,
    marginTop: 20,
    maxWidth: 600,
    maxHeight: 40,
  }
}

class DashboardHeader extends Component {
  render() {
    return(
      <div className='page-content dashboard-header'>
        <Paper zDepth={1} style={style.paper}>
          <TextField underlineStyle={style.underlineStyle} underlineFocusStyle={style.underlineFocus} hintText='Search'></TextField>
        </Paper>
      </div>
    )
  }
}

export default DashboardHeader;