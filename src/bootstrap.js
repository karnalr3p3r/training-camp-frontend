import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./components/app";
import Legends from "./components/legends/legends";
import Navbar from "./components/navbar";
import AddLegend from "./components/legends/add-legend";
import Weapons from "./components/weapons/weapons";
import Contact from "./components/contact";

import "./style/main.scss";

function main() {
  ReactDOM.render(
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/legends">
          <Legends />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/add-legend">
          <AddLegend />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/weapons">
          <Weapons />
        </Route>
      </Switch>
      <Navbar />
    </BrowserRouter>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
