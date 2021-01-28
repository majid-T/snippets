import React from "react";
import { NavLink } from "react-router-dom";

export default () => {
  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/about">
        About
      </NavLink>
      <NavLink exact to="/services">
        Services
      </NavLink>
      <NavLink exact to="/products">
        Products
      </NavLink>
      <NavLink exact to="contact-us">
        Contact Us
      </NavLink>
    </nav>
  );
};
