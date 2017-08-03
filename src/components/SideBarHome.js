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
class SideBarHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      sites: false,
      sitesData: [],
    };
    this.renderPages = this.renderPages.bind(this);
    this.getSites = this.getSites.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.toggleIcon = this.toggleIcon.bind(this);
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

  handleToggle(e) {
    if (this.state.sites) {
      this.setState({sites: false})
    } else {
      this.setState({sites: true})
    }
    this.renderPages();
    this.toggleIcon();
  }

  toggleIcon(e) {
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

  // handletoggle = () => this.setState({open: !this.state.open });
  renderPages() {
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
          <Link to='/dashboard'><MenuItem leftIcon={<ActionDashboard />}>Dashboard</MenuItem></Link>
          <Link to='/dashboard/sites'><MenuItem onClick={this.handleToggle} leftIcon={this.toggleIcon()}>Sites</MenuItem></Link>
          {this.renderPages()}
          <Link to='/dashboard/settings'><MenuItem leftIcon={<FileFolder />}>Settings</MenuItem></Link>
        </Drawer>
      </div>
    )
  }
}

export default SideBarHome;