import React from "react";
import logo from "../images/react-logo.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  return(
    <header>
      <nav className="navbar">
        <img className="nav-logo" src={logo} width="40" alt="react logo" />
        <h1 className="nav-title">React Facts</h1>
        <ul className="nav-items">
          <li><NavLink to="/facts">React Projects</NavLink></li>
          <li><NavLink to="/businesscard">Business Card</NavLink></li>
          <li><NavLink to="/airbnb">Air BnB Experiences</NavLink></li>
          <li><NavLink to="/jokes">Jokes</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
