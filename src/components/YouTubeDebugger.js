// Code YouTubeDebugger Component Here
import React, { Component } from "react";

export default class YouTubeDebugger extends Component {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: "1080p"
      }
    }
  };

  handleClickBitrate = () => {
    console.log("State => bitrate being updated");
    this.setState({
      settings: {
        // use spread operator vs. that abomination known as Object.assign()
        // spread operator essentially makes a copy of the array without mutating it
        ...this.state.settings,
        bitrate: 12
      }
    });
  };

  handleClickRes = () => {
    console.log("State => resolution being updated");

    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: "720p"
        }
      }
    });
  };

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleClickBitrate}>
          Set Bitrate to 12
        </button>
        <button className="resolution" onClick={this.handleClickRes}>
          Set Resolution to 720p
        </button>
      </div>
    );
  }
}
