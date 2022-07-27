import axios from "axios";
import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
    message: "",
  };

  // After formSubmit
  formSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post("/login", data)
      .then((response) => {
        console.log(response);
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  render() {
    return (
      <div>
        <div className="row justify-content-center mt-5">
          <div className="col-lg-5">
            <div className="card border-primary">
              <div className="card-header text-center">Login Page</div>
              <div className="card-body">
                <h5 className="card-title text-center mb-3">
                  Selamat Datang Di ReactShop, Silahkan Login!
                </h5>
                <div className="card-text">
                  <Form onSubmit={this.formSubmit}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        required
                        autoComplete="off"
                        className="form-control"
                        name="email"
                        id="email"
                        aria-describedby="emailHelp"
                        onChange={(e) => {
                          this.setState({ email: e.target.value });
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        required
                        className="form-control"
                        name="password"
                        onChange={(e) => {
                          this.setState({ password: e.target.value });
                        }}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-success d-grid gap-2 col-12 mx-auto"
                    >
                      Login
                    </button>

                    <div className="d-flex mt-3">
                      <Link to="/forgot-password">Lupa Password?</Link>
                    </div>
                    <div className="mt-2">
                      <Link to="/register">Buat Akun Baru</Link>
                    </div>
                  </Form>
                </div>
              </div>
              <div className="card-footer text-muted">2 days ago</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
