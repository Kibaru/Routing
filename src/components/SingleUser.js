import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SingleUser extends Component {
  render(){
    return (
      <li className="container list-group-item">
        <strong>{this.props.user.name}</strong>: {this.props.user.email}
      </li>
    );
  }
}

SingleUser.propTypes = {
  user: PropTypes.object
}

export default SingleUser;
