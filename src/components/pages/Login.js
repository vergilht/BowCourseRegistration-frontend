import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/login.css";
import { users } from "./user-data.js";
import axios from "axios";

export const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    role: "",
  });
  let { username, password, role } = user;

  const [send, setSend] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.post("http://localhost:5070/admin/login", {
        user,
      });
      console.log("res", response.data);

      if ("success" === response.data.message) {
        GoToPageByRole(response.data.role);
      } else {
        window.alert("Wrong username or password");
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    fetchData();
    e.preventDefault();
    setSend(true);
    console.log(user);
  };

  const handleLogin = () => {
    setLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
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
                value={user.username}
                name="username"
                onChange={handleChange}
                placeholder="Enter your username"
              />
              <div>Password :</div>
              <input
                type="text"
                id=""
                value={user.password}
                name="password"
                onChange={handleChange}
                placeholder="Enter your password"
              />
              <p name="message"></p>

              <button type="submit">Login</button>
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
