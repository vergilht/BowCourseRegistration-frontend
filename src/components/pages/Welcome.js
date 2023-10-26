import React from "react";
import { Link } from "react-router-dom";
import "../css/Welcome.css";

const Welcome = () => {
  return (
    <div>
      <div className="logo">
        <img src="/BowValleylogo.png" alt="Bow Valley Logo" />
      </div>
      <div className="banner">
        <img src="/WelcomeBanner.jpg" alt="Bow Valley Banner" />
      </div>

      <div className="banner-text">
        <h1>Welcome to the Bow Course</h1>
      </div>

      <div className="welcome-options">
        <div className="option">
          <img src="/ForStudents.jpg" alt="Student Icon" />
          <h2>For Students</h2>
          <p>Click here to access student features.</p>
          <Link to="/student/login">
            <button>ENTER</button>
          </Link>
        </div>
        <div className="option">
          <img src="/ForAdmin.jpg" alt="Admin Icon" />
          <h2>For Administration Staff</h2>
          <p>Click here to access admin features.</p>
          <Link to="/admin/login">
            <button>ENTER</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
