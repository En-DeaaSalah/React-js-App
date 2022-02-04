import React, { Component } from "react";
import axios from "axios";
class Positions extends Component {
  state = {
    positions: [],
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/mainApp/jobs/").then((res) => {
      console.log(res.data);

      this.setState({
        positions: res.data,
      });
      console.log(this.state.positions);
    });
  }

  render() {
    return (
      <div className="container-fluid col-10">
        <h2 className="m-2">Positions Table</h2>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 id="tableName" className="m-0 font-weight-bold text-primary">
              Positions
              <span className="badge bg-secondary m-1">
                {this.state.positions.length}
              </span>
            </h6>
            <button className="btn btn-primary btm-sm float-end">
              Add Position
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
                    <th>ID</th>
                    <th>NAME</th>
                    <th>No.OF EMPLOYEE</th>
                  </tr>
                </thead>
                {this.state.positions.map((p) => {
                  return (
                    <tbody key={p.id} className="p-2 m-3" id="tableBody">
                      <tr>
                        <th>
                          <span>{p.id}</span>
                        </th>
                        <th>
                          <span>{p.position_name}</span>
                        </th>
                        <th>
                          <span>{}</span>
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

export default Positions;
