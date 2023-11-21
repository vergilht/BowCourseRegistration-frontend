import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/login.css";
import { users } from "./user-data.js";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    role: "",
  });
  let { email, password, role } = user;

  const [send, setSend] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSend(true);
    console.log(user);
  };

  const CheckEmailPW = () => {
    // Set initial error values to empty
    setEmailError("");
    setPasswordError("");

    // Check if the user has entered both fields correctly
    if ("" === email) {
      setEmailError("Please enter your email");
      return;
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError("Please enter a valid email");
      return;
    }

    if ("" === password) {
      setPasswordError("Please enter a password");
      return;
    }
    /* -- */
    fetch("http://localhost:5070/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        if ("success" === res.message) {
          GoToPageByRole(res.role);
        } else {
          window.alert("Wrong email or password");
        }
      });
  };

  const GoToPageByRole = (loginUserRole) => {
    const currentURL = window.location.href;
    const loginPage = currentURL.split("/")[3];

    if (loginPage == loginUserRole) {
      if (loginUserRole == "admin") {
        navigate("/admin");
      } else if (loginUserRole == "student") {
        navigate("/course-selection");
      }
    } else {
      alert(`Please use ${role} login page.`);
    }
  };

  return (
    <>
      <div className="container">
        <div className="banner">
          <img src="/WelcomeBanner.jpg" alt="Bow Valley Banner" />
        </div>
        <div className="login-form-container">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="login-form">
              <div>Email :</div>
              <input
                type="text"
                id=""
                value={user.email}
                name="email"
                onChange={handleChange}
                placeholder="Enter your email"
              />
              <div className="errorLabel">{emailError}</div>
              <div>Password :</div>
              <input
                type="text"
                id=""
                value={user.password}
                name="password"
                onChange={handleChange}
                placeholder="Enter your password"
              />
              <div className="errorLabel">{passwordError}</div>
              <p name="message"></p>

              <button onClick={CheckEmailPW} type="submit">
                Login
              </button>
              {window.location.href.split("/")[3] !== "admin" && (
                <button>
                  <Link to="/student-home">Signup</Link>
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
