import React, { Component } from "react";
import axios from "axios";
import Legend from "./legend";

export default class Legends extends Component {
  constructor() {
    super();
    this.state = {
      legends: [],
    };
  }

  componentDidMount() {
    console.log("mounted");
    axios
      .get("https://jad-camp-backend.herokuapp.com/legend/get")
      .then((response) => {
        console.log(response);
        this.setState({ legends: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  renderLegends() {
    return this.state.legends.map((legend) => {
      return <Legend key={legend.id} legendData={legend} />;
    });
  }

  render() {
    return (
      <div>
        <div className="legends-container">{this.renderLegends()}</div>;
      </div>
    );
  }
}
