import React, { Component } from 'react';
import Card from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import './../styles/Home.css';
import SearchBar from 'material-ui-search-bar';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';


const style = {
  card: {
    height: '100%',
  },
  paper: {
    display: 'inline-block',
    marginTop: '20px',
    marginBottom: '20px',
    marginLeft: '10px',
    height: '40px',
    width: '600px',
  },
  textField: {
    marginLeft: '20px',
    height: '40px',
    display: 'inline-block',
  },
  underlineStyle: {
    borderColor: 'white',
  },
  underlineFocus: {
    borderColor: 'white',
  },
  iconButton: {
    marginLeft: '30px',
  }

}

class DashboardHeader extends Component {
  render() {
    return(
      <header>
        <div className="page-content" id="myTopnav">
          <div className="topnav-content">
         <Paper zDepth={1} style={style.paper}>
          <TextField style={style.textField} underlineStyle={style.underlineStyle} underlineFocusStyle={style.underlineFocus} hintText='Search'></TextField>
        </Paper> 

    <IconMenu 
      className='nav-first'
      iconButtonElement={<Avatar backgroundColor='#EDEDED' style={style.iconButton}><ActionAccountCircle /></Avatar>}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
    >
      <MenuItem primaryText="Refresh" />
      <MenuItem primaryText="Send feedback" />
      <Link to='/dashboard/settings'><MenuItem primaryText="Settings" /></Link>
      <MenuItem primaryText="Help" />
      <MenuItem primaryText="Sign out" />
    </IconMenu>
        </div>
      </div>
    </header>
    )
  }
}

export default DashboardHeader;

