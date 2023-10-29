import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/login.css";
import { users } from "./user-data";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    role: "",
  });
  let { email, password, role } = user;

  /*   const users = [
    { email: "admin@email.com", password: "password1", role: "admin" },
    { email: "student@email.com", password: "password1", role: "student" },
  ]; */

  const [send, setSend] = useState(false);
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
    const checkEmail = users.find((u) => u.email === user.email);

    if (checkEmail && checkEmail.password === user.password) {
      console.log("login success");
      role = checkEmail.role;
      GoToPageByRole(role);
    } else {
      console.log("login fail");
      navigate("/");
    }
  };

  const GoToPageByRole = (loginUserRole) => {
    const currentURL = window.location.href;
    const loginPage = currentURL.split("/")[3];

    if (loginPage == loginUserRole) {
      if (loginUserRole == "admin") {
        navigate("/admin");
      } else if (loginUserRole == "student") {
        navigate("/student-home");
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

              <button onClick={CheckEmailPW} type="submit">
                Login
              </button>
              {window.location.href.split("/")[3] !== "admin" && (
                <button>
                  <Link to="/signup">Signup</Link>
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
