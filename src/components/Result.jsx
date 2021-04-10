import React, { Component } from "react";
import "./Result.css";

class Result extends Component {
  render() {
    return (
      <React.Fragment>
        <span id="city">{this.props.toDisplay.city}</span>
        <div id="w-info">
          <img id="current-icon" src={this.props.toDisplay.icon}></img>
          <span id="temperature">
            {this.props.toDisplay.temperature} F<sup>o</sup>
          </span>
        </div>
        <p></p>
      </React.Fragment>
    );
  }
}

export default Result;
