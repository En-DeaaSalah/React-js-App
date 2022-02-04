import React, { Component } from "react";
import axios from "axios";
class Schedual extends Component {
  state = {};

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/mainApp/jobs/").then((res) => {
      console.log(res.data);

      this.setState({
        employees: res.data,
      });
      console.log(this.state.employees);
    });
  }

  getPositionAss(dayName) {
    return "+";
  }

  render() {
    return (
      <div className="container col-10">
        <h2 className="m-2">Schedual Table</h2>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 id="tableName" className="m-0 font-weight-bold text-primary">
              Schedual
            </h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="10"
              >
                <thead id="tableHead">
                  <tr>
                    <th>Employees</th>
                    <th>Su</th>
                    <th>Mo</th>
                    <th>Tu</th>
                    <th>We</th>
                    <th>Th</th>
                    <th>Fr</th>
                    <th>Sa</th>
                  </tr>
                </thead>
                <tbody className="p-2 m-3" id="tableBody">
                  <tr>
                    <th>EmployeesName</th>

                    <th>
                      <span>{this.getPositionAss("Su")}</span>
                    </th>
                    <th>
                      <span>{this.getPositionAss("Mo")}</span>
                    </th>
                    <th>
                      <span>{this.getPositionAss("Tu")}</span>
                    </th>
                    <th>
                      <span>{this.getPositionAss("We")}</span>
                    </th>
                    <th>
                      <span>{this.getPositionAss("Th")}</span>
                    </th>
                    <th>
                      <span>{this.getPositionAss("Fr")}</span>
                    </th>
                    <th>
                      <span>{this.getPositionAss("Sa")}</span>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Schedual;
