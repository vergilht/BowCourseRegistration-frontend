import React, { useState, useEffect } from 'react';
import "../css/CourseSelection.css";
import axios from "axios";
import { Card, Button, Form } from "react-bootstrap";
import {Link} from "react-router-dom";

const CourseSelection = () => {

const [terms, setTerms] = useState([]);
const [selectedTerm, setSelectedTerm] = useState(null);
const [courses, setCourses] = useState([]);
const [selectedCourses, setSelectedCourses] = useState(null);
const [studentID, setStudentID] = useState(null);

// Function to handle student ID input change
const handleStudentIDChange = (e) => {
    const studentID = e.target.value;
    setStudentID(studentID);
};

// Fetch terms from the database
const fetchTerms = async () => {
    try {
        const response = await axios.get(
            "http://localhost:5070/student/searchterms/"
        );
        setTerms(response.data.results);
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
};

useEffect(() => {
    fetchTerms();
}   , []);

// Fetch courses for a specific term from the database
const fetchCoursesByTerm = async (termID) => {
    try {
        const response =
            await axios.get(`http://localhost:5070/student/coursesbyterm/${termID}`);
        setCourses(response.data.results);
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
};

// Function to handle course selection
const handleCourseChange = async (e) => {
    const selectedCourseCode = e.target.value;
    const selectedCourseObject = courses.find(course => course.courseCode === selectedCourseCode);
    setSelectedCourses(selectedCourseObject);
};

// Function to handle term selection
const handleTermChange = async (e) => {
    const selectedTermID = e.target.value;
    const selectedTermObject = terms.find(term => term.termID === selectedTermID);
    setSelectedTerm(selectedTermObject);

    // Fetch courses for the selected term
    fetchCoursesByTerm(selectedTermID);
};

// Function to handle course registration
const handleCourseRegistration = async (e) => {
    e.preventDefault();
    const courseCode = selectedCourses.courseCode;
    const termID = selectedTerm.termID;


    const newCourse = {
        studentID,
        courseCode,
        termID,
    };

    try {
        const response = await axios.post(
            "http://localhost:5070/student/registercourse",
            newCourse
        );
        console.log(response);
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
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

        <div className="hero-banner">
            <img src="/course-selection-mega.jpg" alt="Hero Banner"/>
        </div>

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
            <h2 className="centered-heading">Courses Selection</h2>
            <p className="centered-subheading">
                Please select courses for your upcoming term
            </p>
        </div>

        <div>
            <Card className="text-center m-3">
                <Card.Header>Select a Course</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleTermChange}>
                        <Form.Group controlId="studentID">
                            <Form.Label>Student ID</Form.Label>
                            <Form.Control type="text" placeholder="Enter your student ID" onChange={handleStudentIDChange}/>
                        </Form.Group>
                        <Form.Group controlId="termSelection">
                            <Form.Label>Terms</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="term"
                                    onChange={handleTermChange}
                                    value={selectedTerm}
                                    >
                                    <option value="1">Fall 2023</option>
                                    <option value="2">Winter 2024</option>
                                    <option value="3">Spring 2024</option>
                                    <option value="4">Summer 2024</option>
                                </Form.Control>
                        </Form.Group>

                    <Form.Group controlID="courseSelection">
                        <Form.Label>Available courses:</Form.Label>
                        <Form.Control
                            as="select"
                            name="course"
                            onChange={handleCourseChange}
                            value={selectedCourses}
                        >
                            <option value="">Select a course</option>
                            <option value="1">Certificate Project Management1</option>
                            <option value="2">Certificate C++ Programming Fundamentals</option>
                            <option value="3">Certificate Computer Maintenance</option>
                            <option value="4">Certificate Information Security1</option>
                            <option value="5">Certificate Networking</option>
                            <option value="6">Certificate Web Technology</option>
                            <option value="7">Certificate Project Management2</option>
                            <option value="8">Post-diploma Advanced Project Management1</option>
                            <option value="9">Post-diploma Advanced C++ Programming Fundamentals</option>
                            <option value="10">Post-diploma Advanced Computer Maintenance</option>
                            <option value="11">Post-diploma Advanced Information Security1</option>
                            <option value="12">Post-diploma Advanced Networking</option>
                            <option value="13">Post-diploma Advanced Web Technology</option>
                            <option value="14">Post-diploma Advanced Project Management2</option>
                            <option value="15">Diploma Project Management1</option>
                            <option value="16">Diploma C++ Programming Fundamentals</option>
                            <option value="17">Diploma Computer Maintenance</option>
                            <option value="18">Diploma Information Security1</option>
                            <option value="19">Diploma Networking</option>
                            <option value="20">Diploma Web Technology</option>
                            <option value="21">Diploma Project Management</option>
                            <option value="22">Diploma Advanced Project Management1</option>
                            <option value="23">Diploma Advanced C++ Programming Fundamentals</option>
                            <option value="24">Diploma Advanced Computer Maintenance</option>
                            <option value="25">Diploma Advanced Information Security1</option>
                            <option value="26">Diploma Advanced Networking</option>
                            <option value="27">Diploma Advanced Web Technology</option>
                            <option value="28">Diploma Advanced Project Management</option>
                        </Form.Control>
                        </Form.Group>

                        <Button className="bootstrap-button" variant="primary" type="submit">
                            Register
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
export default CourseSelection;


