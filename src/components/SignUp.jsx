import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TOAST_CONFIG } from "../utils/configs";
import toast from "react-hot-toast";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const navigate = useNavigate();

  const submitSignup = () => {
    axios
      .post("http://localhost:8080/api/register", {
        email,
        password,
        repassword,
      })
      .then((res) => {
        if (res.status !== 200) {
          toast.error(res.data.message, TOAST_CONFIG);
        } else {
          toast.success(res.data.message, TOAST_CONFIG);
          setTimeout(() => {
            navigate("/signin");
          }, 1000);
        }
      })
      .catch((err) => {
        toast.error(err.message, TOAST_CONFIG);
      });
  };
  return (
    <div>
      <div className="min-vh-100 w-100 d-flex justify-content-center align-items-center">
        <form
          className="w-50"
          onSubmit={(e) => {
            e.preventDefault();
            submitSignup();
          }}
        >
          <h1>Sign up</h1>

          <div class="mb-3 ">
            <label for="exampleInputEmail1" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your name"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
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
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div id="emailHelp" class="form-text">
              Must be at least 8 characters.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputRePassword1" class="form-label">
              RePassword
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputRePassword1"
              placeholder="again a password"
              value={repassword}
              onChange={(e) => setRepassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            class="btn w-100"
            style={{ backgroundColor: "#7F56D9", color: "#fff" }}
          >
            Create
          </button>
          <p
            style={{ fontSize: "12px", textAlign: "center", marginTop: "30px" }}
          >
            {" "}
            Already have an account?{" "}
            <Link to="/signIn" style={{ color: "#7F56D9" }}>
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
