import React from "react";
import { Link } from "react-router-dom";
import "../css/Welcome.css";

const Welcome = () => {
  return (
    <div>
      <div className="logo">
        <img src="/BowValleylogo.png" alt="Bow Valley Logo" />
      </div>


     <div className="container flex-center">
         <nav role="navigation" className="nav-menu">
             <Link to="/" className="button">
                 Home
             </Link>

             <Link to="/student/login" className="button">
                 Student Login
             </Link>

             <Link to="/admin/login" className="button">
                 Admin Login
             </Link>
         </nav>
     </div>


        <div className="banner">
        <img src="/WelcomeBanner.jpg" alt="Bow Valley Banner" />
        </div>

     <div className="section free-w-hero">
        <div className="container flex-center">
            <div className="hero-image-mask">
                <img src="/MegaBanner.jpg" sizes="95vw" alt="Bow Valley Hero" className="hero-image" />
            </div>

            <div className="hero-line text-line">
                <h1 className="no-margin">Welcome to the Bow Course</h1>
            </div>
        </div>
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

        <div className="contact">
            <Link to="/contact">
                <button>Contact Us</button>
            </Link>
        </div>

        {/*Footer Section*/}

        <div className="section footer-section">
            <div className="container footer-container">
                <div
                    className="column"
                    >
                    <a className="footer-brand">
                        <img src="/BowValleylogo.png" alt="Bow Valley Logo" />
                    </a>
                </div>

                <div
                    className="column"
                    >
                    <h4 className="label footer-label">Contact Us</h4>
                    <a href="mailto:bowvalley@Group6.com" className="footer-contact-link">
                        bowvalley@Group6
                    </a>

                    <h5 className="label footer-label">Web Programming - Group 6</h5>

                    <a className="text-block">Jiwon Jeon</a>
                    <a className="text-block">Vergil Phan</a>
                </div>

                <div
                    className="column"
                    >
                    <h4 className="label footer-label">Explore</h4>
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
export default Welcome;
