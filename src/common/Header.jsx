import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import "../css/Header.css";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Profil from "../components/Profil";
import Forgot from "../components/Forgot";
import Reset from "../components/Reset";

class Header extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<Forgot />} />
            <Route path="/reset-password" element={<Reset />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default Header;
