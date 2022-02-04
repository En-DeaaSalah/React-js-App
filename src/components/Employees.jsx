import React, { Component } from "react";

import axios from "axios";

class Employees extends Component {
  state = {};

  componentDidMount() {
    // axios.get("").then((res) => {
    //   console.log(res);
    // });
  }

  render() {
    return (
      <div className="container">
        <h2 className="m-2">Employees Table</h2>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 id="tableName" className="m-0 font-weight-bold text-primary">
              Employees
            </h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead id="tableHead">
                  <th>NAME</th>
                  <th>EMPLOYEE ID</th>
                  <th>POSITION</th>
                  <th>LOCATION</th>
                  <th>EMAIL</th>
                  <th>PHONE</th>
                </thead>

                <tbody id="tableBody"></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Employees;
