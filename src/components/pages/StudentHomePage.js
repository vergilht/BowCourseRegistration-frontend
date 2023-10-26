import React, { useState } from "react";
import CourseSearch from "../CourseSearch";
import StudentSignup from "../StudentSignup";
/* import "../css/StudentHomePage.css"; */

const StudentHomePage = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);

  return (
    <div>
      <h1>Bow Valley Course Registration System</h1>
      {/* Display the Bow Valley logo */}
      <img
        src="/path/to/bow-valley-logo.png"
        alt="Bow Valley Logo"
        className="logo"
      />

      <p>Welcome to the Bow Valley Course Registration System.</p>

      <div className="student-actions">
        <h2>For Students</h2>
        <ul>
          <li>
            <a href="/courses">Search Available Courses</a>
          </li>
          {/* Show a message and the sign-up button only if the student is not signed up */}
          {!isSignedUp && (
            <li>
              Please sign up before selecting Programs, Terms, and Courses.
              <button
                onClick={() => {
                  // Mark the student as signed up
                  setIsSignedUp(true);
                }}
              >
                Sign Up
              </button>
            </li>
          )}
        </ul>
      </div>

      {/* Display the CourseSearch component for selecting courses */}
      <CourseSearch />

      {/* Display the StudentSignup component for student registration */}
      {!isSignedUp && <StudentSignup />}
    </div>
  );
};

export default StudentHomePage;
