import React from 'react';
import CourseSearch from './components/CourseSearch';
import StudentSignup from './components/StudentSignup';
import CourseSelection from "./components/CourseSelection";
import './components/StudentHomePage.css';

const StudentHomePage = () => {
    return (
        <div>
            <h1>Bow Course Registration System</h1>
            <p>Welcome to the Bow Course Registration System.</p>

            <div className="student-actions">
                <h2>For Students</h2>
                <ul>
                    <li>
                        <a href="/courses">Search Available Courses</a>
                    </li>
                    <li>
                        <a href="/register">Sign Up for Programs and Courses</a>
                    </li>
                    <li>
                        <a href="/program">Selecting your Program, Term and Courses here</a>
                    </li>
                </ul>
            </div>

            {/* Display the CourseSearch component for selecting courses */}
            <CourseSearch />

            {/* Display the StudentSignup component for student registration */}
            <StudentSignup />

            {/* Display the CourseSelection component for selecting programs and terms */}
            <CourseSelection />

        </div>
    );
};

export default StudentHomePage;
