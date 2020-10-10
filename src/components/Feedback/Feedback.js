import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Feedback extends Component {
  render() {
    return (
      <div className="" onClick={this.props.onClick}>
        <Link to="/" className="d-block"> back </Link>
        Feedback
      </div>
    );
  }
}

export default Feedback;
