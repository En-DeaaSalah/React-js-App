import React, { Component } from "react";

import axios from "axios";

class Employees extends Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/mainApp/employees/").then((res) => {
      console.log(res.data);

      this.setState({
        employees: res.data,
      });
      console.log(this.state.employees);
    });
  }

  render() {
    return (
      <div className="container-fluid col-10">
        <h2 className="m-2">Employees Table</h2>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 id="tableName" className="m-0 font-weight-bold text-primary">
              Employees{" "}
              <span className="badge bg-secondary m-1">
                {this.state.employees.length}
              </span>
            </h6>
            <button className="btn btn-primary btm-sm float-end">
              Add Employee
            </button>
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
                  <tr>
                    <th>NAME</th>
                    <th>EMPLOYEE ID</th>
                    <th>POSITION</th>
                    <th>LOCATION</th>
                    <th>EMAIL</th>
                    <th>PHONE</th>
                  </tr>
                </thead>

                {this.state.employees.map((e) => {
                  return (
                    <tbody key={e.id} className="p-2 m-3" id="tableBody">
                      <tr>
                        <th>
                          <span>{e.first_name}</span>
                        </th>

                        <th>
                          <span>{e.id}</span>
                        </th>
                        <th>
                          <span>{}</span>
                        </th>
                        <th>
                          <span>{}</span>
                        </th>
                        <th>
                          <span>{e.email}</span>
                        </th>
                        <th>
                          <span>{e.phone_number}</span>
                        </th>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Employees;
