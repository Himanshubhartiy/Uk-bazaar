import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <div className="container mt-5 d-flex justify-content-center bg-light">
        <div className="p-4">
          <div className="card p-4 shadow-lg rounded-3">
            <h2 className="card-title text-center mb-4">Create Account</h2>
            <form>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control rounded-4"
                  id="exampleInputEmail1"
                  placeholder="Enter email"
                />
                <label htmlFor="exampleInputEmail1">User Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="tel"
                  className="form-control rounded-4"
                  id="exampleInputEmail1"
                  placeholder="Enter email"
                />
                <label htmlFor="exampleInputEmail1">Contact Number</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="emails"
                  className="form-control rounded-4"
                  id="exampleInputEmail1"
                  placeholder="Enter email"
                />
                <label htmlFor="exampleInputEmail1">Email Address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control rounded-4"
                  id="exampleInputPassword1"
                  placeholder="Enter password"
                />
                <label htmlFor="exampleInputPassword1">Password</label>
              </div>
              <div className="d-grid gap-2">
                <button
                  type="submit"
                  className="btn btn-primary rounded-pill mt-4"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
