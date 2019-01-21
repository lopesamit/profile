import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div className="" onClick={this.props.onClick}>
        <Link to="/" className="d-block"> back </Link>
        Home
      </div>
    );
  }
}

export default Home;
