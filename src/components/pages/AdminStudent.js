import React, { useState } from "react";
import { AdminNavigation } from "./Navigation.js";
import axios from "axios";
import { Link } from "react-router-dom";

export const AdminStudent = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchedStudent, setSearchedStudent] = useState([]);

  const handleSearch = async (selectedValue) => {
    setSearchedStudent([]);
    try {
      const response = await axios.get(
        `http://localhost:5070/admin/searchstudents/${selectedValue}`
      );
      setSearchedStudent(response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setSearchValue(selectedValue);
    handleSearch(selectedValue);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB"); // Adjust the locale as needed
  };
  return (
    <>
      <AdminNavigation />
      <h2>Search for Students</h2>
      <select onChange={handleChange} value={searchValue}>
        <option value="">Select Program</option>
        <option value="diploma">Diploma</option>
        <option value="post diploma">Post Diploma</option>
        <option value="certificate">Certificate</option>
      </select>
      <div>
        <h4>Search Results</h4>
        {searchedStudent.length > 0 ? (
          <table
            style={{
              width: "100%",
              borderSpacing: "0 15px",
              textAlign: "center",
            }}
          >
            <thead>
              <tr>
                <th style={{ paddingRight: "15px" }}>Name</th>
                <th style={{ paddingRight: "15px" }}>Student ID</th>
                <th style={{ paddingRight: "15px" }}>DOB</th>
                <th style={{ paddingRight: "15px" }}>Email</th>
                <th style={{ paddingRight: "15px" }}>Phone</th>
                <th style={{ paddingRight: "15px" }}>Department</th>
                <th>Program</th>
              </tr>
            </thead>
            <tbody>
              {searchedStudent.map((result) => (
                <tr key={result.studentID}>
                  <td>
                    {result.firstName} {result.lastName}
                  </td>
                  <td>{result.studentID}</td>
                  <td>{formatDate(result.dob)}</td>
                  <td>{result.email}</td>
                  <td>{result.phone}</td>
                  <td>SD department</td>
                  <td>{result.program}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No matching courses found.</p>
        )}
      </div>
      <div className="section footer-section">
        <div className="container footer-container">
          <div className="column">
            <a className="footer-brand">
              <img src="/BowValleylogo.png" alt="Bow Valley Logo" />
            </a>
          </div>

          <div className="column">
            <h4 className="label footer-label">Contact Us</h4>
            <a
              href="mailto:bowvalley@Group6.com"
              className="footer-contact-link"
            >
              bowvalley@Group6
            </a>

            <h5 className="label footer-label">Web Programming - Group 6</h5>

            <a className="text-block">Jiwon Jeon</a>
            <a className="text-block">Vergil Phan</a>
          </div>

          <div className="column">
            <h3 className="label footer-label">Explore</h3>
            <Link to="/" className="footer-link">
              Home
            </Link>

            <Link to="/student/login" className="footer-link">
              Student Login
            </Link>

            <Link to="/admin/login" className="footer-link">
              Admin Login
            </Link>

            <Link to="/contact" className="footer-link">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
