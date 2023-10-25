import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div>
            <h1>Welcome to the Course Registration System</h1>

            <div className="welcome-options">
                <div className="student-option">
                    <h2>For Students</h2>
                    <p>Click here to access student features.</p>
                    <Link to="/student-home">Go to Student Page</Link>
                </div>

                <div className="admin-option">
                    <h2>For Administration Staff</h2>
                    <p>Click here to access admin features.</p>
                    <Link to="/admin-home">Go to Admin Page</Link>
                </div>
            </div>
        </div>
    );
};
export default Welcome;