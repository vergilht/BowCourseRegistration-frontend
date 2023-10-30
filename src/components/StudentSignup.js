import React, { Component } from "react";
import {Link, NavLink} from "react-router-dom";
class StudentSignup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            studentID: null,

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

    //Function to handle the student registration input and finalize registration
    handleInformationInput = () => {
        const {firstName, lastName, email, phone, dob, department, username, password} = this.state;
        if (firstName && lastName && email && phone && dob && department && username && password) {
            const generateStudentID = this.generateStudentID();
            this.setState({
                studentID: generateStudentID,
                step: 3,
            });
        } else {
            alert('Please fill in all the fields.');
        }
    };

    render() {
        return (
            <div>
                {this.state.step === 1 && (
                    <div>
                        <h2>Student Registration</h2>
                        <p>Please fill in the form to access course selection</p>
                        <button onClick={() => this.setState({step: 2})}>Sign Up</button>
                    </div>
                )}

                {this.state.step === 2 && (
                    <div>
                        <h2>Student Information</h2>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    value={this.state.firstName}
                                    onChange={(e) => this.setState({firstName: e.target.value})}
                                />
                            </div>

                            <div className="form-group col-md-6">
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    value={this.state.lastName}
                                    onChange={(e) => this.setState({lastName: e.target.value})}
                                />
                            </div>

                            <div className="form-group col-md-6">
                                <input
                                    type="text"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={(e) => this.setState({email: e.target.value})}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <input
                                    type="text"
                                    placeholder="Phone"
                                    value={this.state.phone}
                                    onChange={(e) => this.setState({phone: e.target.value})}
                                />
                            </div>

                            <div className="form-group col-md-6">
                                <input
                                    type="text"
                                    placeholder="Date of Birth"
                                    value={this.state.dob}
                                    onChange={(e) => this.setState({dob: e.target.value})}
                                />
                            </div>

                            <div className="form-group col-md-6">
                                <input
                                    type="text"
                                    placeholder="Department"
                                    value={this.state.department}
                                    onChange={(e) => this.setState({department: e.target.value})}
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <input
                                    type="text"
                                    placeholder="Username"
                                    value={this.state.username}
                                    onChange={(e) => this.setState({username: e.target.value})}
                                />
                            </div>

                            <div className="form-group col-md-6">
                                <input
                                    type="text"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={(e) => this.setState({password: e.target.value})}
                                />
                            </div>
                        </div>

                        <button onClick={this.handleInformationInput}>Finish</button>
                    </div>
                )}

                {this.state.step === 3 && (
                    <div>
                        <h2>Your Student ID:</h2>
                        <p>{this.state.studentID}</p>
                        <Link to="/course-selection">
                            <button>Access Course Selection</button>
                        </Link>
                    </div>
                )}
            </div>
        );
    }
}

export default StudentSignup;

