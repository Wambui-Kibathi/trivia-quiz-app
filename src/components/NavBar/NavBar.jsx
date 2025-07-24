
import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <h1>Trivia Quiz Game</h1>
      <ul className="nav-links">
        <li><a href="#">Register</a></li>
        <li><a href="#">Quiz</a></li>
        <li><a href="#">Results</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
