import React from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="min-vh-100 w-100 d-flex justify-content-center align-items-center">
      <form className="w-50">
        <h1>Sign in</h1>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your email"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Enter your password"
          />
        </div>
        {/* <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div> */}
        <button
          type="submit"
          class="btn w-100"
          style={{ backgroundColor: "#7F56D9", color: "#fff" }}
        >
          Log in
        </button>
        <p style={{ fontSize: "12px", textAlign: "center", marginTop: "30px" }}>
          {" "}
          Don't have an account?{" "}
          <Link to="/signUp" style={{ color: "#7F56D9" }}>
            Create
          </Link>
        </p>
      </form>
    </div>
  );
}
