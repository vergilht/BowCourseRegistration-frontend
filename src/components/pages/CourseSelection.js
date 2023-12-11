import React, { useState, useEffect } from 'react';
import "../css/CourseSelection.css";
import axios from "axios";
import { Card, Button, Form } from "react-bootstrap";
import {Link} from "react-router-dom";

const CourseSelection = () => {
// Create a component for course selection
const [courses, setCourses] = useState([]);
const [selectedCourses, setSelectedCourses] = useState(null);
const [searchValue, setSearchValue] = useState([]);
const [searchResults, setSearchResults] = useState();
const [terms, setTerms] = useState([]);
const [selectedTerm, setSelectedTerm] = useState(null);


// Function to fetch term from the database
    const fetchTerms = async () => {
        try {
            const response = await axios.get("`http://localhost:5070/student/coursesByTerm/${studentID}");
            setTerms(response.data.results);
        } catch (error) {
            console.log("Terms fetched:", response.data.results);
        }
    };

    useEffect(() => {
        fetchTerms();
    }, []);

    // Function to handle term selection

    const handleTermChange = (e) => {
        const selectedTermID = e.target.value;
        const selectedTermObject = terms.find(term => term.termID === selectedTermID);
        setSelectedTerm(selectedTermObject);
    };


// Search courses from the database
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

// Fetch courses from the database
useEffect(() => {
    const fetchCourses = async () => {
        try {
            const response = await axios.get("http://localhost:5070/student/searchcourses/");
            setCourses(response.data.results);
            console.log("Courses fetched:", response.data.results);
        } catch (err) {
            console.log("Error fetching courses:", err.message);
        }
    };

    fetchCourses();
}, []);

// Function to handle course selection
const handleCourseChange = (e) => {
    const selectedCourseCode = e.target.value;
    console.log("Selected course code:", selectedCourseCode);
    const selectedCourseObject = courses.find(course => course.courseCode === selectedCourseCode);
    console.log("Selected course object:", selectedCourseObject);
    setSelectedCourses(selectedCourseObject);
};

const handleStudentIDChange = (e) => {
    setStudentID(e.target.value);
};

// Function to handle course registration
const handleRegistration = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://localhost:5070/student/selectcourse", {
            studentID,
            courseCode: selectedCourses,
        });
        alert("Course selection successful!");
    } catch (err) {
        console.log("Error registering course:", err.message);
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
                    <Form onSubmit={handleRegistration}>
                        <Form.Group controlId="termSelection">
                            <Form.Label>Terms</Form.Label>
                            <Form.Select onChange={handleTermChange}>
                                {terms.map((term) => (
                                    <option key={term.termID} value={term.termID}>
                                        {term.termID}
                                    </option>
                                ))}
                                </Form.Select>
                        </Form.Group>

                    <Form.Group controlID="courseSelection">
                        <Form.Label>Available courses:</Form.Label>
                        <Form.Control type="text" placeholder="Search courses" onChange={(e) => setSearchValue(e.target.value.toLowerCase())} />
                        <Form.Select onChange={handleCourseChange}>
                            {courses.filter(course => course.courseName.toLowerCase().includes(searchValue)).map((result) => (
                            <option key={result.courseCode} value={result.courseCode}>
                                {result.courseName}
                            </option>
                        ))}
                    </Form.Select>
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


