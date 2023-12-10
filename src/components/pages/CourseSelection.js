import React, { useState, useEffect } from 'react';
import "../css/CourseSelection.css";
import axios from "axios";
import { Card, Button, Form } from "react-bootstrap";
import {Link} from "react-router-dom";

const CourseSelection = () => {
// Create a component for course selection
const [courses, setCourses] = useState([]);
const [selectedCourses, setSelectedCourses] = useState(null);
const [studentID, setStudentID] = useState('');

// Fetch courses from the database
useEffect(() => {
    const fetchCourses = async () => {
        try {
            const response = await axios.get("http://localhost:5070/student/searchcourses/");
            setCourses(response.data.results);
        } catch (err) {
            console.log("Error fetching courses:", err.message);
        }
    };

    fetchCourses();
}, []);

// Function to handle course selection
const handleCourseChange = (e) => {
    const selectedCourseCode = e.target.value;
    const selectedCourseObject = courses.find(course => course.courseCode === selectedCourseCode);
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
                        <Form.Group controlId="studentID">
                            <Form.Label>Student ID</Form.Label>
                            <Form.Control type="text" placeholder="Enter Student ID" onChange={handleStudentIDChange} />
                        </Form.Group>
                    <Form.Group controlID="courseSelection">
                        <Form.Label>Available courses:</Form.Label>
                        <Form.Select onChange={handleCourseChange}>
                            {courses.map((result) => (
                            <option key={result.courseCode} value={result.courseCode}>
                                {result.courseName}
                            </option>
                        ))}
                    </Form.Select>
                    </Form.Group>
                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    </div>
    );
};
export default CourseSelection;


