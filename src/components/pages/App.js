import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './Welcome';
import StudentHomePage from './StudentHomePage';
import AdminHomePage from './AdminHomePage';
import CourseSelection from './CourseSelection';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/student-home" element={<StudentHomePage />} />
                <Route path="/admin-home" element={<AdminHomePage />} />
                <Route path="/course-selection" element={<CourseSelection />} />
            </Routes>
        </Router>
    );
}

export default App;


