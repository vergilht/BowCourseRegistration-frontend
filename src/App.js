import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './Welcome';
import StudentHomePage from './StudentHomePage';
import AdminHomePage from './AdminHomePage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/student-home" element={<StudentHomePage />} />
                <Route path="/admin-home" element={<AdminHomePage />} />
            </Routes>
        </Router>
    );
}

export default App;

