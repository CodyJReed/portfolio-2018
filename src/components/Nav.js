import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <nav className="mainNav">
        <button className="navButton">
          <span className="navBurger" />
        </button>
        <ul className="navBar">
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
