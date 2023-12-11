import React, { useState, useEffect } from "react";
import { AdminNavigation } from "./Navigation.js";
import { AddCourse, SearchCourse } from "./AdminCourse.js";
import { Link } from "react-router-dom";
import "../css/admin.css";

export const Admin = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdminStatus = async () => {
      if (localStorage.getItem("role") === "admin") {
        setIsAdmin(true);
      } else {
        alert("You are not authorized to access this page.");
        // Redirect to the home page ("/")
        window.location.href = "/";
      }
    };

    checkAdminStatus();
  }, []);

  return (
    <div>
      <div>
        <AdminNavigation />
      </div>

      <div className="addCourse">
        <AddCourse />
      </div>

      <div className="searchCourse">
        <SearchCourse />
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
    </div>
  );
};
