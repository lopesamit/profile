import React, { Component } from 'react';

class Profile extends Component {
  render() {
    const style = {
        color : '#e28383',
        height: '100px',
        width: '100px'
    }
    return (
      <div className="ml-1 mr-1 mb-1 profile" style={style} onClick={this.props.onClick}>
          Profile
      </div>
    );
  }
}

export default Profile;
