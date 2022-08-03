import React, { Component } from "react";

export class Terminal extends Component {
  render() {
    return (
      <div>
        <h1> {this.props.value}</h1>
      </div>
    );
  }
}

export default Terminal;
