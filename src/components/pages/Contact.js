import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/contact.css";
import axios from "axios";

export const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5070/student/contact",
        {
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumber,
          email: email,
          comments: comments,
        }
      );
      console.log(response.data);
    } catch (err) {
      console.error("Errror fetching data: ", err.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const submittedData = {
      firstName,
      lastName,
      phoneNumber,
      email,
      comments,
    };

    fetchData();

    alert(
      `Thank you for your submission, ${submittedData.firstName} ${submittedData.lastName}. We will contact you at ${submittedData.phoneNumber} or ${submittedData.email} shortly.`
    );

    // Reset the form
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setEmail("");
    setComments("");

    navigate("/");
  };

  const handleChange = (event) => {
    const { id, value } = event.target;

    switch (id) {
      case "fname":
        setFirstName(value);
        break;
      case "lname":
        setLastName(value);
        break;
      case "phone":
        setPhoneNumber(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "comments":
        setComments(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="contact-form">
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <p>First Name:</p>
        <input
          type="text"
          id="fname"
          value={firstName}
          onChange={handleChange}
        />

        <p>Last Name:</p>
        <input
          type="text"
          id="lname"
          value={lastName}
          onChange={handleChange}
        />

        <p>Phone Number:</p>
        <input
          type="text"
          id="phone"
          value={phoneNumber}
          onChange={handleChange}
        />

        <p>Email:</p>
        <input type="text" id="email" value={email} onChange={handleChange} />

        <p>Question/Comment:</p>
        <textarea
          name="comments"
          id="comments"
          value={comments}
          onChange={handleChange}
        ></textarea>

        <div className="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
