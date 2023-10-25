import React, { useState } from "react";
import { Routes, Route, Navigate, Link, useNavigate } from "react-router-dom";
import { Signup } from "./Signup";

export const Login = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [user, setUser] = useState({
    email: "",
    password: "",
    role: "",
  });
  let { email, password, role } = user;

  const users = [{ email: "Admin@email.com", password: "password1" }];

  const [send, setSend] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCheck = (e) => {
    const checkbox = e.target.name;

    if (selectedRole === checkbox) {
      setSelectedRole(null);
    } else {
      setSelectedRole(checkbox);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedRole === "Admin") {
      user.role = "Admin";
    } else if (selectedRole === "Student") {
      user.role = "Student";
    }
    setSend(true);
    console.log(user);
  };

  const CheckEmailPW = () => {
    const checkEmail = users.find((u) => u.email === user.email);

    if (checkEmail && checkEmail.password === user.password) {
      console.log("login success");
    } else {
      console.log("login fail");
      navigate("/");
    }
  };

  const handleButtonClick = () => {
    console.log("Checking user");
    CheckEmailPW();
  };
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="login-form">
          <label>
            <input
              type="checkbox"
              name="Student"
              checked={selectedRole === "Student"}
              onChange={handleCheck}
            />
            Student
          </label>
          <label>
            <input
              type="checkbox"
              name="Admin"
              checked={selectedRole === "Admin"}
              onChange={handleCheck}
            />
            Admin
          </label>
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

          {/* <Link to="/admin">
            <button onClick={handleButtonClick} type="submit">Login</button>
          </Link> */}

          <button onClick={handleButtonClick} type="submit">
            <Link to="/admin">Login</Link>
          </button>
          <button>
            <Link to="/signup">Signup</Link>
          </button>
        </div>
      </form>
    </>
  );
};
