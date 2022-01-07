import React, { Component } from "react";
import mockGifs from "../assets/mockGifs";

export default class CreateGif extends Component {
  constructor(props) {
    super(props);
    this.changeImg = this.changeImg.bind(this);
    this.state = {
      index: 0,
    };
  }

  changeImg() {
    if (this.state.index + 1 === mockGifs.length) {
      this.setState({
        index: 0,
      });
    } else {
      this.setState({
        index: this.state.index + 1,
      });
    }
  }

  render() {
    return (
      <img
        class="animated-gif"
        src={mockGifs[this.state.index].url}
        onClick={this.changeImg}
      />
    );
  }
}
