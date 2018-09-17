import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <nav>
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
