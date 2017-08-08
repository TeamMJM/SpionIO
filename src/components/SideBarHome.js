import React, { Component } from 'react';
import { HashRouter, Link, Switch, Route } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import Card from 'material-ui/Card';
import MenuItem from 'material-ui/MenuItem';
import ActionDashboard from 'material-ui/svg-icons/action/dashboard.js';
import FileFolder from 'material-ui/svg-icons/file/folder.js';
import FileFolderOpen from 'material-ui/svg-icons/file/folder-open.js';
import NavigationSubdirectoryArrowRight from 'material-ui/svg-icons/navigation/subdirectory-arrow-right';
import axios from 'axios';

////////// Similar to Header.js but for Dashboard feature //////////
const style = {
  card: {
    height: '80px',
    backgroundcolor: '#006CAA',
    margin: '0 auto',
  }
}

class SideBarHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      sites: false,
      settings: false,
      sitesData: [],
    };
    this.renderSites = this.renderSites.bind(this);
    this.getSites = this.getSites.bind(this);
    this.handleToggleSites = this.handleToggleSites.bind(this);
    this.toggleIconSites = this.toggleIconSites.bind(this);
    this.toggleIconSettings = this.toggleIconSettings.bind(this);
    this.handleToggleSettings = this.handleToggleSettings.bind(this);
    this.renderSettings = this.renderSettings.bind(this);
    this.handleToggleDashboard = this.handleToggleDashboard.bind(this);
  }

  componentDidMount() {
    this.getSites();
  }

  getSites() {
    axios.get('/sites')
    .then((res) => {
      console.log(res);
      this.setState({ sitesData: res.data })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  handleToggleSites(e) {
    if (this.state.sites) {
      this.setState({sites: false, settings: false})
    } else {
      this.setState({sites: true, settings: false})
    }
    this.renderSites();
  }

  toggleIconSites(e) {
    if (this.state.sites) {
      return(
        <FileFolderOpen/>
      )
    } else {
      return(
        <FileFolder/>
      )
    }
  }

  toggleIconSettings(e) {
    if (this.state.settings) {
      return(
        <FileFolderOpen/>
      )
    } else {
      return(
        <FileFolder/>
      )
    }
  }

  handleToggleSettings(e) {
    if (this.state.settings) {
      this.setState({settings: false, sites: false})
    } else {
      this.setState({settings: true, sites: false})
    }
    this.renderSettings();
  }

  handleToggleDashboard(e) {
    this.setState({sites: false, settings: false});
    this.renderSettings();
    this.renderSites();
  }


  renderSettings() {
    if (this.state.settings) {
      return(
        <Link to='/dashboard/account'><MenuItem leftIcon={<ActionDashboard />}>Account</MenuItem></Link>          
      )
    }
  }

  // handletoggle = () => this.setState({open: !this.state.open });
  renderSites() {
    let siteNodes;
    if (this.state.sites) {
      siteNodes = this.state.sitesData.map((site) => {
      let url = '/dashboard/sites/' + site._id;
      return(
        <Link to={url}><MenuItem leftIcon={<NavigationSubdirectoryArrowRight />}>{site.title}</MenuItem></Link>
      )
    })
    return siteNodes;
    }
  }


  render() {
    return(
      <div>
        <Drawer docked={true}>
          <Card style={style.card}><h2 className='dashboard-logo'>PRIVATE-I</h2></Card>
          <Link to='/dashboard'><MenuItem onClick={this.handleToggleDashboard} leftIcon={<ActionDashboard />}>Dashboard</MenuItem></Link>
          {this.renderSites()}
          <Link to='/dashboard/settings'><MenuItem onClick={this.handleToggleSettings} leftIcon={this.toggleIconSettings()}>Settings</MenuItem></Link>
          {this.renderSettings()}
        </Drawer>
      </div>
    )
  }
}

export default SideBarHome;