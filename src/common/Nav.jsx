import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-purple">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    Beranda
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Profil
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Bantuan
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Login
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Register
                      </a>
                    </li>
                    <li></li>
                  </ul>
                </li>
              </ul>
              <a className="btn btn-primary me-md-2" href="#">
                Login
              </a>
              <a className="btn btn-primary me-md-5" href="#">
                Register
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
