import React, { Component } from 'react';

class Making extends Component {
  render() {
    const style = {
        color : '#e28383',
        height: '100px',
        width: '100px'
    }
    return (
      <div className="ml-1 mr-1 mb-1 making" style={style} onClick={this.props.onClick}>
          Making
      </div>
    );
  }
}

export default Making;
