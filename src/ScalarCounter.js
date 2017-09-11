import React, { Component } from 'react';

export default class ScalarCounter extends Component {
  
  render() {
    return (
      <div>
        Count: {this.props.value}
        <button onClick={this.props.onAdd}>
          +
        </button>
        <button onClick={this.props.onSubtract}>
          -
        </button>
        <hr />
      </div>
    )
  }
}

