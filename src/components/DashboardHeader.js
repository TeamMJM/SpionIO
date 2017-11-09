import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import material-ui components
import Paper from 'material-ui/Paper';
import AutoComplete from 'material-ui/AutoComplete';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import ActionSearch from 'material-ui/svg-icons/action/search';

const DashboardHeader = () => {
  return(
    <Paper 
      id="customFade1s" 
      className="animated fadeIn dashboard-paper-header" 
      zDepth={0} 
      rounded={false}
    >
    <header className="dashboard-header">
      <div id="myTopnav dashboard-nav">
        <Paper 
          zDepth={1} 
          rounded={false}
          className="dashboard-paper"
          >
          <p className="dashboard-p">Spion IO</p>
        </Paper>
        <Paper 
          className="search-bar" 
          zDepth={1} 
          rounded={false}
          >
          <IconButton 
            style={{padding: '0 auto', borderRight: '1px solid #BDC0C1', height: '30px'}} 
            tooltip='Search'
            >
            <ActionSearch className="search-icon"/>
          </IconButton> 
          <AutoComplete 
            hintText='search for recordings ..' 
            underlineStyle={{border: 'white'}} 
            hintStyle={{height: '15px', fontSize: '0.8em'}} 
            textFieldStyle={{height: '30px', marginLeft: '1%'}} 
            style={{width: '92%' , float: 'right', letterSpacing: '1px'}} 
            menuStyle={{height: '90px', overflow: 'scroll'}} 
            listStyle={{width: '600px'}} 
            filter={AutoComplete.caseInsensitiveFilter} 
            dataSource={[]}
            />
        </Paper> 
        <IconMenu 
          className="nav-first"
          iconButtonElement={<IconButton className="icon-btn"><ActionAccountCircle /></IconButton>}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          listStyle={{height: '5px' }}
          menuStyle={{height: '150px'}}
          >
          <MenuItem className="header-menu-item" primaryText="Refresh" />
          <MenuItem className="header-menu-item" primaryText="Send feedback" />
          <Link to='/dashboard/settings'><MenuItem className="header-menu-item" primaryText="Settings" /></Link>
          <MenuItem className="header-menu-item" primaryText="Help" />
          <MenuItem className="header-menu-item" primaryText="Sign out" />
        </IconMenu>
      </div>
    </header>
  </Paper>
  );
};

export default DashboardHeader;

