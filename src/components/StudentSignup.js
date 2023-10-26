import React, { Component } from "react";
import { useNavigate } from 'react-router-dom';


class StudentSignup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProgram: null,
            selectedTerm: null,
            studentID: null,
            selectedCourses: [],
            registeredCourses: [],

            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            dob: '',
            department: '',
            username: '',
            password: '',
        };
    }

    // Generating a unique student ID
    generateStudentID = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
        let id = 'STU';
        for (let i = 0; i < 5; i++) {
            if (i < 3) {
                id += characters.charAt(Math.floor(Math.random() * characters.length));
            } else {
                id += numbers.charAt(Math.floor(Math.random() * numbers.length));
            }
        }
        return id;
    };

    handleStudentRegistration = () => {
        const alreadyRegisteredCourses = this.state.selectedCourses.filter(courseId =>
            this.state.registeredCourses.includes(courseId)
        );

        if (alreadyRegisteredCourses.length > 0) {
            alert('You are already registered for some of the selected courses.');
        } else {
            // Proceed with registration

            const studentDetails = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                phone: this.state.phone,
                dob: this.state.dob,
                department: this.state.department,
                program: this.state.selectedProgram,
                username: this.state.username,
                password: this.state.password,
            };

            const generateID = this.generateStudentID();

            this.setState({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                dob: '',
                department: '',
                username: '',
                password: '',
            });

            this.setState({ studentID: generateID });

            // Redirect to the Welcome page
            const navigate = useNavigate();
            navigate('/src/Welcome');
        }
    }

    render() {
        return (
            <div>
                {/* Your existing components and code for program and course selection */}
                <h2>Student Registration</h2>
                <form>
                    <input
                        type="text"
                        placeholder="First Name"
                        value={this.state.firstName}
                        onChange={(e) => this.setState({ firstName: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        value={this.state.lastName}
                        onChange={(e) => this.setState({ lastName: e.target.value })}
                    />
                    {/* Add input fields for other student details */}
                    <button onClick={this.handleStudentRegistration}>Sign Up</button>
                </form>

                {/* Display the generated student ID */}
                {this.state.studentID && (
                    <div>
                        <h2>Your Student ID:</h2>
                        <p>{this.state.studentID}</p>
                    </div>
                )}
            </div>
        );
    }
}

export default StudentSignup;
