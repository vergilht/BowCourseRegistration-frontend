import React, { useState } from "react";

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
    CheckEmailPW();
  };

  const CheckEmailPW = () => {};
  const checkEmail = users.find((u) => u.email === user.email);

  if (checkEmail && checkEmail.password === user.password) {
    console.log("login success");
  } else {
    console.log("wrong pw");
  }

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
          <button type="submit">Login</button>
        </div>
      </form>
    </>
  );
};
