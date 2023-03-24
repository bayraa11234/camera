import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { TOAST_CONFIG } from "../utils/configs";
import { toast, Toaster } from "react-hot-toast";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitSingIn = () => {
    axios
      .post("http://localhost:8080/api/login", { email, password })
      .then((res) => {
        if (res.status !== 200) {
          toast.error(res.data.message, TOAST_CONFIG);
        } else {
          toast.success(res.data.message, TOAST_CONFIG);
          localStorage.setItem("token", res.data.body.token);
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="min-vh-100 w-100 d-flex justify-content-center align-items-center">
      <form
        className="w-50"
        onSubmit={(e) => {
          e.preventDefault();
          submitSingIn();
        }}
      >
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
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
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
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
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
          Sign in
        </button>
        <p style={{ fontSize: "12px", textAlign: "center", marginTop: "30px" }}>
          {" "}
          Don't have an account?{" "}
          <Link to="/signUp" style={{ color: "#7F56D9" }}>
            Create
          </Link>
        </p>
      </form>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}
