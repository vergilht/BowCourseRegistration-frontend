import React, { useState } from "react";
import "../css/signup.css";

export const Signup = () => {
  const [users, setUsers] = useState({
    email: "",
    id: "",
    fname: "",
    lname: "",
    password: "",
  });
  const [userarr, setUserarray] = useState([]);
  const [send, setSend] = useState(false);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUsers({ ...users, [name]: value });
  };

  let { email, id, fname, lname, password } = users;
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserarray([...userarr, { email, id, fname, lname, password }]);
    setSend(true);
    console.log(users);
  };

  return (
    <>
      <h1>Signup form</h1>
      <form onSubmit={handleSubmit}>
        <div className="signup-form">
          <div>Email :</div>
          <input
            type="text"
            id=""
            value={users.email}
            name="email"
            onChange={handleChange}
            placeholder="Enter your email"
          />
          <div>Student ID :</div>
          <input
            type="text"
            id=""
            value={users.id}
            name="id"
            onChange={handleChange}
            placeholder="Enter your id"
          />
          <div>First Name :</div>
          <input
            type="text"
            id=""
            value={users.fname}
            name="fname"
            onChange={handleChange}
            placeholder="Enter your frist name"
          />
          <div>Last Name :</div>
          <input
            type="text"
            id=""
            value={users.lname}
            name="lname"
            onChange={handleChange}
            placeholder="Enter your last name"
          />
          <div>Password :</div>
          <input
            type="text"
            id=""
            value={users.password}
            name="password"
            onChange={handleChange}
            placeholder="Enter your password"
          />
          <p name="message"></p>
          <button type="submit">Signup</button>
        </div>
      </form>
    </>
  );
};
