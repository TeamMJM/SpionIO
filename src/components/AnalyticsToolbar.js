import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';

class AnalyticsToolbar extends Component {
  render() {
    return(
      <div>
        <Link to={this.props.url + '/clickdata'}><FlatButton label='Click Data'></FlatButton></Link>
        {' '}
        <Link to={this.props.url + '/scrolldata'}><FlatButton label='Scroll Data'></FlatButton></Link>
        {' '}
        <Link to={this.props.url + '/funneldata'}><FlatButton label='Funnel Data'></FlatButton></Link>
      </div>
    )
  }
}

export default AnalyticsToolbar;
