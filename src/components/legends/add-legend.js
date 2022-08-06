import React, { useState } from "react";
import axios from "axios";

export default function addLegend() {
  const [name, setName] = useState("");
  const [real_name, setReal_name] = useState("");
  const [age, setAge] = useState("");
  const [legend_class, setLegend_class] = useState("");
  const [home_world, setHome_world] = useState("");
  const [tac_ability_name, setTac_ability_name] = useState("");
  const [tac_ability_description, setTac_ability_description] = useState("");
  const [passive_ability_name, setPassive_ability_name] = useState("");
  const [passive_ability_description, setPassive_ability_description] =
    useState("");
  const [ultimate, setUltimate] = useState("");
  const [ultimate_description, setUltimate_description] = useState("");
  const [description, setDescription] = useState("");
  const [quote, setQuote] = useState("");
  const [picture_url, setPicture_url] = useState("");

  const postLegend = () => {
    axios
      .post("https://jad-camp-backend.herokuapp.com/legend/add", {
        name: name,
        real_name: real_name,
        age: age,
        legend_class: legend_class,
        home_world: home_world,
        tac_ability_name: tac_ability_name,
        tac_ability_description: tac_ability_description,
        passive_ability_name: passive_ability_name,
        passive_ability_description: passive_ability_description,
        ultimate: ultimate,
        ultimate_description: ultimate_description,
        description: description,
        quote: quote,
        picture_url: picture_url,
      })
      .then((response) => console.log("Legend Added", response))
      .catch((error) => console.log(error));
    event.preventDefault();
  };

  return (
    <div className="add-legend">
      <h1 className="add-legend-title">Enter Legend Data</h1>

      <form className="add-legend-form" onSubmit={postLegend}>
        <input
          className="add-legend-form-input"
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="name"
        />

        <input
          className="add-legend-form-input"
          onChange={(event) => setReal_name(event.target.value)}
          type="text"
          placeholder="Real Name"
        />

        <input
          className="add-legend-form-input"
          onChange={(event) => setAge(event.target.value)}
          type="number"
          placeholder="Age"
        />

        <input
          className="add-legend-form-input"
          onChange={(event) => setLegend_class(event.target.value)}
          type="text"
          placeholder="Legend Class"
        />
        <input
          className="add-legend-form-input"
          onChange={(event) => setHome_world(event.target.value)}
          type="text"
          placeholder="Home World"
        />
        <input
          className="add-legend-form-input"
          onChange={(event) => setTac_ability_name(event.target.value)}
          type="text"
          placeholder="Tactical Ability"
        />
        <textarea
          className="add-legend-form-input"
          onChange={(event) => setTac_ability_description(event.target.value)}
          type="text"
          placeholder="Tactical Ability Description"
        />
        <input
          className="add-legend-form-input"
          onChange={(event) => setPassive_ability_name(event.target.value)}
          type="text"
          placeholder="Passive Ability"
        />
        <textarea
          className="add-legend-form-textarea"
          onChange={(event) =>
            setPassive_ability_description(event.target.value)
          }
          type="text"
          placeholder="Passive Ability Description"
        />
        <input
          className="add-legend-form-input"
          onChange={(event) => setUltimate(event.target.value)}
          type="text"
          placeholder="Ultimate"
        />
        <textarea
          className="add-legend-form-textarea"
          onChange={(event) => setUltimate_description(event.target.value)}
          type="text"
          placeholder="Ultimate Description"
        />

        <textarea
          className="add-legend-form-textarea"
          onChange={(event) => setDescription(event.target.value)}
          type="text"
          placeholder="Description"
        />
        <textarea
          className="add-legend-form-textarea"
          onChange={(event) => setQuote(event.target.value)}
          type="text"
          placeholder="Quote"
        />
        <textarea
          className="add-legend-form-textarea"
          onChange={(event) => setPicture_url(event.target.value)}
          type="text"
          placeholder="Picture URL"
        />

        <button className="add-legend-form-button">Add Legend</button>
      </form>
    </div>
  );
}
