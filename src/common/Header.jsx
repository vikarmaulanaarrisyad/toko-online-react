import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import "../css/Header.css";
import Home from "../components/Home";

class Header extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default Header;
