import React, { useState } from "react";
import CourseSearch from "../CourseSearch.js";
import StudentSignup from "../StudentSignup.js";
import "../css/StudentHomePage.css";

const StudentHomePage = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);

  return (
    <div>
      <div className="logo">
        <img src="/BowValleylogo.png" alt="Bow Valley Logo" />
      </div>

      <div className="banner">
        <img src="/MegaBanner.jpg" alt="Bow Valley Banner" />
      </div>

      <div className="banner-text">
        <h1>Your journey begins today!</h1>
        <p>Explore Your Courses Selection</p>
      </div>

      {/* Search box for Course Search component */}
      <div className="search-box">
        <CourseSearch />
      </div>

      {/* Student signup component */}
      {!isSignedUp && (
        <div className="student-signup">
          <StudentSignup />
        </div>
      )}
    </div>
  );
};
export default StudentHomePage;
