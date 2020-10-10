import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Profile extends Component {
  render() {
    return (
      <div className="" onClick={this.props.onClick}>
        <Link to="/" className="d-block"> back </Link>
          Profile
      </div>
    );
  }
}

export default Profile;
