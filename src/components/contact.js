import React, { Component } from "react";

export default class contact extends Component {
  render() {
    return (
      <div className="contact-page-wrapper">
        <div className="top-row">
          <div className="heading">
            <h1>Follow the Links Below To Stay Up To Date</h1>
          </div>
        </div>
        <div className="middle-row">
          <a href="https://www.twitch.tv/karnalr3p3r" id="social-buttons">
            Twitch
          </a>
          <a href="https://www.instagram.com/karnalr3p3r" id="social-buttons">
            Instagram
          </a>
          <a href="#" id="social-buttons">
            Twitter
          </a>
          <a href="https://discord.gg/NhfZNdny" id="social-buttons">
            Discord
          </a>
        </div>
        <div className="bottom-row">
          <div className="twitch-videos" id="twitch-embed">
            <h1>video goes here</h1>
          </div>
        </div>
      </div>
    );
  }
}
