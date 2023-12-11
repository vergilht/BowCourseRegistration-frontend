import React, { useState, useEffect } from "react";
import { AdminNavigation } from "./Navigation.js";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export const AdminForm = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5070/admin/contact"); // Replace with your actual API endpoint
        const result = await response.json();
        setData(result.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on component mount

  return (
    <>
      <AdminNavigation />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {setData.length > 0 ? (
            data.map((comment) => (
              <tr>
                <td>{comment.contactID}</td>
                <td>{comment.firstName}</td>
                <td>{comment.lastName}</td>
                <td>{comment.phoneNumber}</td>
                <td>{comment.email}</td>
                <td>{comment.comments}</td>
              </tr>
            ))
          ) : (
            <p>No contact form from the students</p>
          )}
        </tbody>
      </Table>

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
