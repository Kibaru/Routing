import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SingleUser from './SingleUser';

class Users extends Component {


  render(){
    let users;
    if(this.props.users){
      users = this.props.users.map(user => {
        return(
          <SingleUser  key={user.id} user={user} />
        );
      });
    }
    return (
      <div className="container">
        <h3>User list fetched from an API</h3>
        {users}
      </div>
    );
  }
}

Users.propTypes = {
  users: PropTypes.array,
}

export default Users;
