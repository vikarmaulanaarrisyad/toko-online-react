import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

class Forgot extends Component {
  render() {
    return (
      <div>
        <div className="row justify-content-center mt-5">
          <div className="col-lg-5">
            <div className="card border-primary">
              <div className="card-header text-center">Forgot Page</div>
              <div className="card-body">
                <h5 className="card-title text-center mb-3">
                  Selamat Datang Di ReactShop, Silahkan Masukkan Email Anda!
                </h5>
                <div className="card-text">
                  <Form>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-success d-grid gap-2 col-12 mx-auto"
                    >
                      Submit
                    </button>
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

export default Forgot;
