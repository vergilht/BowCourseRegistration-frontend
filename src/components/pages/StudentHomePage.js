import React, { useState } from "react";
import "../css/StudentHomePage.css";
import {Link} from "react-router-dom";
import { Card, Button, Form } from "react-bootstrap";
import axios from "axios";


const StudentHomePage = () => {

    const [searchValue, setSearchValue] = useState();
    const [searchResult, setSearchResults] = useState([]);

    const handleSearch = async () => {
        setSearchResults([]);
        try {
            const response = await axios.get(
                `http://localhost:5070/student/searchcourses/${searchValue}`
            );
            setSearchResults(response.data.results);
        } catch (error) {
            console.error("Error fetching data:", error.message);
        }
    };

    const handleSearchChange = (e) => {
        e.preventDefault();
    };



  //Function for student signup

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        program: "",
        firstName: "",
        lastName: "",
        phone: "",
        dob: "",
        username: "",
        programID: "",
    });

  const [send, setSend] = useState(false);

const fetchData = async () => {
    try {
        const response = await axios.post(
            "http://localhost:5070/student/signup",
            formData
        );
        if (response.data.message) {
            window.alert(response.data.message);
        }
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
};

const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log("front : ", formData);
    fetchData();
    setFormData({
        email: "",
        password: "",
        program: "",
        firstName: "",
        lastName: "",
        phone: "",
        dob: "",
        username: "",
        programID: "",
    });
    setSend(true);
};


  return (
      <div>
          <div className="logo">
              <img src="/BowValleylogo.png" alt="Bow Valley Logo"/>
          </div>

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

          <div className="banner">
              <img src="/ForStudents.jpg" alt="Bow Valley Banner"/>
          </div>


          {/*<div className="section free-w-hero">*/}
          <div className="container flex-center">
              <div className="hero-image-mask">
                  <img
                      src="/MegaBanner.jpg" alt="" className="hero-image"
                  />
              </div>

              <div className="hero-line text-line">
                  <h1 className="no-margin">Student services</h1>
              </div>
          </div>


          <div className="container-2">
              <h2 className="centered-heading">Search available courses</h2>
              <p className="centered-subheading">
                  Search for courses by course name or course ID
              </p>
          </div>

          {/* Search box for Course Search component */}
          <div>
              <Card className="text-center m-3">
                  <Card.Body>
                      <Form onSubmit={handleSearchChange}>
                          <Form.Group controlId="formBasicSearch">
                              <Form.Label>Searching courses</Form.Label>
                              <Form.Control className="input" type="text" placeholder="Input course name"
                                            onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
                              />
                          </Form.Group>
                          <Button className="bootstrap-button" variant="primary" type="submit" block onClick={handleSearch}>
                              Search
                          </Button>
                      </Form>

                      <div style={{display: 'flex', justifyContent: 'center'}}>
                          {searchResult.map((result) => (
                              <Card key={result.courseCode} style={{width: '18rem', marginTop: '10px'}}>
                                  <Card.Body>
                                      <Card.Title>{result.courseName}</Card.Title>
                                      <Card.Text>
                                          <Form>
                                              <Form.Group controlId="formBasicCourseCode">
                                                  <Form.Label>Course Code:</Form.Label>
                                                  <Form.Control type="text" placeholder={result.courseCode}
                                                                readOnly/>
                                              </Form.Group>

                                              <Form.Group controlId="formBasicCourseTerm">
                                                  <Form.Label>Course Term:</Form.Label>
                                                  <Form.Control type="text" placeholder={result.termID}
                                                                readOnly/>
                                              </Form.Group>

                                              <Form.Group controlId="formBasicCourseFee">
                                                  <Form.Label>Course Fee:</Form.Label>
                                                  <Form.Control type="text" placeholder={result.fees} readOnly/>
                                              </Form.Group>

                                              <Form.Group controlId="formBasicStartDate">
                                                  <Form.Label>Starts on:</Form.Label>
                                                  <Form.Control type="text" placeholder={result.startingDate}
                                                                readOnly/>
                                              </Form.Group>

                                              <Form.Group controlId="formBasicEndDate">
                                                  <Form.Label>Ends on:</Form.Label>
                                                  <Form.Control type="text" placeholder={result.endingDate}
                                                                readOnly/>
                                              </Form.Group>
                                          </Form>
                                      </Card.Text>
                                  </Card.Body>
                              </Card>
                          ))}
                      </div>
                  </Card.Body>
              </Card>
          </div>

          <div className="container-2">
              <h2 className="centered-heading">Student Signup</h2>
              <p className="centered-subheading">
                  Signup for a student account, and start your journey today!
              </p>
          </div>

          {/* Student Signup Form */}
          <div>
              <Card className="text-center m-3">
                  <Card.Header>Student Signup</Card.Header>
                  <Card.Body>
                      <Form onSubmit={handleSubmit}>
                          {/* Email */}
                          <Form.Group controlId="formBasicEmail">
                              <Form.Label>Email address</Form.Label>
                              <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange}
                                            value={formData.email}/>
                          </Form.Group>
                          {/* Password */}
                          <Form.Group controlId="formBasicPassword">
                              <Form.Label>Password</Form.Label>
                              <Form.Control type="password" placeholder="Password" name="password"
                                            onChange={handleChange} value={formData.password}/>
                          </Form.Group>
                          {/* Program */}
                          <Form.Group controlId="formBasicProgram">
                              <Form.Label>Program</Form.Label>
                              <Form.Control type="text" placeholder="Program" name="program" onChange={handleChange}
                                            value={formData.program}/>
                          </Form.Group>
                          {/* First Name */}
                          <Form.Group controlId="formBasicFirstName">
                              <Form.Label>First Name</Form.Label>
                              <Form.Control type="text" placeholder="First Name" name="firstName"
                                            onChange={handleChange} value={formData.firstName}/>
                          </Form.Group>
                          {/* Last Name */}
                          <Form.Group controlId="formBasicLastName">
                              <Form.Label>Last Name</Form.Label>
                              <Form.Control type="text" placeholder="Last Name" name="lastName" onChange={handleChange}
                                            value={formData.lastName}/>
                          </Form.Group>
                          {/* Phone */}
                          <Form.Group controlId="formBasicPhone">
                              <Form.Label>Phone</Form.Label>
                              <Form.Control type="text" placeholder="Phone" name="phone" onChange={handleChange}
                                            value={formData.phone}/>
                          </Form.Group>
                          {/* Date of Birth */}
                          <Form.Group controlId="formBasicDOB">
                              <Form.Label>Date of Birth</Form.Label>
                              <Form.Control type="text" placeholder="Date of Birth" name="dob" onChange={handleChange}
                                            value={formData.dob}/>
                          </Form.Group>
                          {/* Username */}
                          <Form.Group controlId="formBasicUsername">
                              <Form.Label>Username</Form.Label>
                              <Form.Control type="text" placeholder="Username" name="username" onChange={handleChange}
                                            value={formData.username}/>
                          </Form.Group>
                          {/* Program ID */}
                          <Form.Group controlId="formBasicProgramID">
                              <Form.Label>Program ID</Form.Label>
                              <Form.Control type="text" placeholder="Program ID" name="programID"
                                            onChange={handleChange} value={formData.programID}/>
                          </Form.Group>
                          <Button className="bootstrap-button" variant="primary" type="submit" block>
                              Submit
                          </Button>
                      </Form>
                  </Card.Body>
              </Card>
          </div>



          {/*Footer Section*/}
          <div className="section footer-section">
              <div className="container footer-container">
                  <div
                      className="column"
                  >
                      <a className="footer-brand">
                          <img src="/BowValleylogo.png" alt="Bow Valley Logo"/>
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

export default StudentHomePage;
