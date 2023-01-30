import React from "react";
import logo from "../images/react-logo.png";

export default function Header() {
  return(
    <header>
      <nav className="navbar">
        <img className="nav-logo" src={logo} width="40" alt="react logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}
