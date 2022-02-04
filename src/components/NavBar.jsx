import React, { Component } from "react";
import axios from "axios";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light d-flex align-items-center justify-content-center">
        <div>
          <span className="navbar-brand">Schedual App</span>
        </div>
      </nav>
    );
  }
}

export default NavBar;
