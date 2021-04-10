import React, { Component } from "react";
import "./PastResult.css";

class PastResult extends Component {
  render() {
    return (
      <div class="past-container">
        <span id="past-city">{this.props.toDisplay.city}</span>
        <img id="past-icon" src={this.props.toDisplay.icon}></img>
        <span id="past-temperature">
          {this.props.toDisplay.temperature} F<sup>o</sup>
        </span>
        <p></p>
      </div>
    );
  }
}

export default PastResult;
