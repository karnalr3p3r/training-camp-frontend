import React, { useState } from "react";
import axios from "axios";

export default function Legend(props) {
  const handleDeleteClick = () => {
    axios
      .delete(
        `https://jad-camp-backend.herokuapp.com/legend/${props.legendData.id}`
      )
      .then((response) => console.log("Legend deleted", response))
      .catch((error) => console.log("Delete failed", error));
    event.preventDefault();
  };

  return (
    <div className="legend-container-wrapper">
      <div className="legend-container">
        <div className="section-one">
          <div className="image-container">
            <img src={props.legendData.picture_url} alt="legend-photo"></img>
          </div>
        </div>
        <div className="section-two">
          <h1>{props.legendData.name}</h1>
          <h3> {props.legendData.legend_class}</h3>
        </div>
        <div className="section-three">
          <div className="top-row">
            <h2>Real Name: {props.legendData.real_name}</h2>
          </div>
          <div className="bottom-row">
            <div>
              <h2>Age: {props.legendData.age}</h2>
            </div>
            <div>
              <h2>Home World: {props.legendData.home_world}</h2>
            </div>
          </div>
        </div>
        <div className="section-four">
          <p>{props.legendData.description}</p>
        </div>
        <div className="section-five">
          <div className="left-column">
            <div className="row">
              <h2>Tactical Ability:</h2>
              <h3> {props.legendData.tac_ability_name}</h3>
            </div>
            <div className="row">
              <h3> {props.legendData.tac_ability_description}</h3>
            </div>
          </div>
          <div className="middle-column">
            <div className="row">
              <h2>Passive Ability:</h2>
              <h3> {props.legendData.passive_ability_name}</h3>
            </div>
            <div className="row">
              <h3> {props.legendData.passive_ability_description}</h3>
            </div>
          </div>
          <div className="right-column">
            <div className="row">
              <h2>Ultimate: {props.legendData.ultimate}</h2>
            </div>
            <div className="row">
              <h3>{props.legendData.ultimate_description}</h3>
            </div>
          </div>
        </div>
        <div className="section-six">
          <h3> {props.legendData.quote}</h3>
        </div>
      </div>
    </div>
  );
}

{
  /* <button className="delete-legend" onClick={handleDeleteClick}>
            delete
          </button> */
}
