import React, { Component } from "react";

import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Footer from "./Footer";
import Home from "./Home";
import Positions from "./Positions";
import Schedual from "./Schedual";
import Employees from "./Employees";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
class Root extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div className="Root container-fluid">
          <div className="row">
            <NavBar />
            <SideBar />
            <Routes>
              <Route exact="true" path="/" element={<Home />}></Route>
              <Route
                exact="true"
                path="/Positions"
                element={<Positions />}
              ></Route>
              <Route
                exact="true"
                path="/Employees"
                element={<Employees name="E" />}
              ></Route>
              <Route
                exact="true"
                path="/Schedual"
                element={<Schedual name="S" />}
              ></Route>
            </Routes>

            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Root;
