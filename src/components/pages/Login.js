import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [user, setUser] = useState({
    email: "",
    password: "",
    role: "",
  });
  let { email, password, role } = user;

  const users = [
    { email: "admin@email.com", password: "password1", role: "admin" },
    { email: "student@email.com", password: "password1", role: "student" },
  ];

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

    if (selectedRole === "admin") {
      user.role = "admin";
    } else if (selectedRole === "student") {
      user.role = "student";
    }
    setSend(true);
    console.log(user);
  };

  const CheckEmailPW = () => {
    const checkEmail = users.find((u) => u.email === user.email);

    if (
      checkEmail &&
      checkEmail.password === user.password &&
      checkEmail.role === user.role
    ) {
      console.log("login success");
      if (user.role == "admin") {
        navigate("/admin");
      } else if (user.role == "student") {
        navigate("/student-home");
      }
    } else {
      console.log("login fail");
      navigate("/");
    }
  };

  /*   const handleButtonClick = () => {
    if (CheckEmailPW() == "admin") {
      navigate("/admin");
    } else if (CheckEmailPW == "student") {
      navigate("/student-home");
    }
  }; */
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="login-form">
          <label>
            <input
              type="checkbox"
              name="student"
              checked={selectedRole === "student"}
              onChange={handleCheck}
            />
            Student
          </label>
          <label>
            <input
              type="checkbox"
              name="admin"
              checked={selectedRole === "admin"}
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

          <button onClick={CheckEmailPW} type="submit">
            {/* <Link to={user.role == "admin" ? "/admin" : "/student-home"}> */}
            Login
            {/* </Link> */}
          </button>
          <button>
            <Link to="/signup">Signup</Link>
          </button>
        </div>
      </form>
    </>
  );
};
