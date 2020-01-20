// Code DigitalClicker Component Here
import React, { Component } from "react";
class DigitalClicker extends Component {
  state = {
    timesClicked: 0
  };

  handleClick = () => {
    this.setState(previousState => {
      return {
        timesClicked: previousState.timesClicked + 1
      };
    });
  };
  render() {
    return (
      <button onClick={this.handleClicked}> {this.state.timesClicked}</button>
    );
  }
}

export default DigitalClicker;
