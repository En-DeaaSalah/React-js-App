import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
class SideBar extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-auto bg-light sticky-top">
            <div className="d-flex flex-sm-column flex-row flex-nowrap bg-light align-items-center sticky-top">
              <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
                <li className="nav-item">
                  <Link to="/" className="nav-link py-3 px-2">
                    <i className="bi-house fs-4"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/Schedual" className="nav-link py-3 px-2">
                    <i className="bi-table fs-4"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Positions" className="nav-link py-3 px-2">
                    <i className="bi bi-list-task fs-4"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/Employees" className="nav-link py-3 px-2">
                    <i className="bi-people fs-4"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
