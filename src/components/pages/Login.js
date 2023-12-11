import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/login.css";
import axios from "axios";

export const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    role: "",
  });
  let { username, password, role } = user;

  const [send, setSend] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "false"
  );
  const currentURL = window.location.href;
  const loginPage = currentURL.split("/")[3];

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      let endpoint;

      if (loginPage === "admin") {
        endpoint = "http://localhost:5070/admin/login";
      } else if (loginPage === "student") {
        endpoint = "http://localhost:5070/student/login";
      } else {
        console.error("Unsupported user role");
        return;
      }

      const response = await axios.post(endpoint, user);

      if (response.status == 200) {
        GoToPageByRole(loginPage);
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
    e.preventDefault();
    fetchData();
    setSend(true);
  };

  const handleLogin = () => {
    setLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
  };

  const GoToPageByRole = (loginPage) => {
    user.role = loginPage;
    if (loginPage == "admin") {
      localStorage.setItem("role", "admin");
      navigate("/admin");
    } else if (loginPage == "student") {
      localStorage.setItem("role", "student");
      navigate("/course-selection");
    }
  };

  const SettingLogin = () => {
    //user.role = window.location.href.split("/")[3];
    setLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("role", user.role);
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
              <div>Username :</div>
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
                type="password"
                id=""
                value={user.password}
                name="password"
                onChange={handleChange}
                placeholder="Enter your password"
              />
              <p name="message"></p>

              <button onClick={SettingLogin} type="submit">
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
