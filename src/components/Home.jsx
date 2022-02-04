import React, { Component } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
class Home extends Component {
  state = {};

  render() {
    return (
      <div className="container col-10 mt-5 ">
        <div className="row  d-flex align-items-center justify-content-center">
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-center">
                  <i className="bi bi-people-fill fs-1"></i>
                </div>
                <h5 className="card-title text-center">
                  Employees in Yout Company
                </h5>
                <p className="card-text"></p>
                <div className="d-flex align-items-center justify-content-center">
                  <Link to="/Employees/" className="btn btn-primary">
                    show Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-center">
                  <i className="bi bi-list-task fs-1"></i>
                </div>
                <h5 className="card-title text-center">
                  Avilable Positon "jobs"
                </h5>
                <p className="card-text"></p>
                <div className="d-flex align-items-center justify-content-center">
                  <Link to="/Positions#" className="btn btn-primary">
                    show Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="d-flex align-items-center justify-content-center">
                <i className="bi bi-calendar2-range fs-1"></i>
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">
                  Schedual of Positions
                </h5>
                <p className="card-text"></p>
                <div className="d-flex align-items-center justify-content-center">
                  <Link to="/Schedual" className="btn btn-primary">
                    show Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
