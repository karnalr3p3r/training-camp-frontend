import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";

const Navbar = (props) => {
  return (
    <div className="navbar-container">
      <div className="navbar-header">
        <h1>The Apex Games Training Camp</h1>
      </div>
      <div className="navbar-links">
        <NavLink
          exact
          className="navbar-link"
          activeClassName="selected"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="navbar-link"
          activeClassName="selected"
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink
          className="navbar-link"
          activeClassName="selected"
          to="/legends"
        >
          Meet the Contenders
        </NavLink>
        {/* <NavLink
          className="navbar-link"
          activeClassName="selected"
          to="/add-legend"
        >
          Add A Legend
        </NavLink> */}
        <NavLink
          className="navbar-link"
          activeClassName="selected"
          to="/weapons"
        >
          View the Armory
        </NavLink>
      </div>
    </div>
  );
};

export default withRouter(Navbar);
