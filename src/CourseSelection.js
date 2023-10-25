import React, { Component } from 'react';
import './components/CourseSelection.css;
class CourseSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProgram: null,
            selectedTerm: null,
            selectedCourses: [],
        };

        this.programs = [
            {
                id: 1,
                name: 'Diploma (2 years)',
                maxCoursesPerTerm: 5,
            },
            {
                id: 2,
                name: 'Post Diploma (1 year)',
                maxCoursesPerTerm: 5,
            },
            {
                id: 3,
                name: 'Certificate (3 months)',
                maxCoursesPerTerm: 1,
            },
            {
                id: 4,
                name: 'Certificate (6 months)',
                maxCoursesPerTerm: 1,
            },
        ];

        this.terms = [
            { id: 1, name: 'Term 1 (Sep 1 - Dec 20)' },
            { id: 2, name: 'Term 2 (Jan 5 - May 2)' },
            { id: 3, name: 'Term 3 (Sep 1 - Dec 20)' },
            { id: 4, name: 'Term 4 (Jan 5 - May 2)' },
        ];

        this.courses = [
            {
                id: 'Pr111',
                name: 'Project Management1',
                startingDate: 'September 1',
                endingDate: 'December 20',
                fees: 'Course Fee',
                description: 'Course Description',
                program: [1, 2, 3, 4],
                term: [1],
            },
            {
                id: 'C++111',
                name: 'C++ Programming Fundamentals',
                startingDate: 'September 1',
                endingDate: 'December 20',
                fees: 'Course Fee',
                description: 'Course Description',
                program: [1, 2, 3, 4],
                term: [1],
            },
            {
                id: 'CompM1111',
                name: 'Computer Maintenance',
                startingDate: 'September 1',
                endingDate: 'December 20',
                fees: 'Course Fee',
                description: 'Course Description',
                program: [1, 2, 3, 4],
                term: [1],
            },
            {
                id: 'IS1111',
                name: 'Information Security1',
                startingDate: 'September 1',
                endingDate: 'December 20',
                fees: 'Course Fee',
                description: 'Course Description',
                program: [1, 2, 3, 4],
                term: [1],
            },
            {
                id: 'Net222',
                name: 'Networking',
                startingDate: 'January 5',
                endingDate: 'May 2',
                fees: 'Course Fee',
                description: 'Course Description',
                program: [1, 2, 3, 4],
                term: [2],
            },
            {
                id: 'Web222',
                name: 'Web Technology',
                startingDate: 'January 5',
                endingDate: 'May 2',
                fees: 'Course Fee',
                description: 'Course Description',
                program: [1, 2, 3, 4],
                term: [2],
            },
            {
                id: 'Pro222',
                name: 'Project Management1',
                startingDate: 'January 5',
                endingDate: 'May 2',
                fees: 'Course Fee',
                description: 'Course Description',
                program: [1, 2, 3, 4],
                term: [2],
            },
            {
                id: 'Pr333',
                name: 'Advanced Project Management1',
                startingDate: 'September 1',
                endingDate: 'December 20',
                fees: 'Course Fee',
                description: 'Course Description',
                program: [1, 2, 3, 4],
                term: [3],
            },
            {
                id: 'C++333',
                name: 'Advanced C++ Programming Fundamentals',
                startingDate: 'September 1',
                endingDate: 'December 20',
                fees: 'Course Fee',
                description: 'Course Description',
                program: [1, 2, 3, 4],
                term: [3],
            },
            {
                id: 'CompM333',
                name: 'Advanced Computer Maintenance',
                startingDate: 'September 1',
                endingDate: 'December 20',
                fees: 'Course Fee',
                description: 'Course Description',
                program: [1, 2, 3, 4],
                term: [3],
            },
            {
                id: 'IS333',
                name: 'Advanced Information Security1',
                startingDate: 'September 1',
                endingDate: 'December 20',
                fees: "Course Fee",
                description: 'Course Description',
                program: [1, 2, 3, 4],
                term: [3],
            },
            {
                id: 'Net444',
                name: 'Advanced Networking',
                startingDate: 'January 5',
                endingDate: 'May 2',
                fees: 'Course Fee',
                description: 'Course Description',
                program: [1, 2, 3, 4],
                term: [4],
            },
            {
                id: 'Web444',
                name: 'Advanced Web Technology',
                startingDate: 'January 5',
                endingDate: 'May 2',
                fees: 'Course Fee',
                description: 'Course Description',
                program: [1, 2, 3, 4],
                term: [4],
            },
            {
                id: 'Pro444',
                name: 'Advanced Project Management',
                startingDate: 'January 5',
                endingDate: 'May 2',
                fees: 'Course Fee',
                description: 'Course Description',
                program: [1, 2 ,3 ,4],
                term: [4],
            },
        ];
    }

    // Add methods for handling program and term changes
    handleProgramChange = (e) => {
        // Update the selected program in state
        this.setState({ selectedProgram: e.target.value });
    };

    handleTermChange = (e) => {
        // Update the selected term in state
        this.setState({ selectedTerm: e.target.value });
    };

    // Add a method for handling course registration
    handleRegistration = () => {
        // Your registration logic here
    };

    // Add a method for filtering available courses
    filterAvailableCourses = () => {
        const { selectedProgram, selectedTerm } = this.state;

        return this.courses.filter((course) => {
            const isAvailableForProgram = !selectedProgram || course.program.includes(selectedProgram);
            const isAvailableForTerm = !selectedTerm || course.term.includes(selectedTerm);

            return isAvailableForProgram && isAvailableForTerm;
        });
    };

    render() {
        const availableCourses = this.filterAvailableCourses();

        return (
            <div className="course-selection-page">
                {/* Bow Valley Logo */}
                <img src="/path/to/bow-valley-logo.png" alt="Bow Valley Logo" className="logo" />

                {/* Student ID */}
                <h1>Welcome to Bow Course</h1>
                <p>Your Student ID: {this.props.studentID}</p>

                {/* Hero Banner */}
                <div className="hero-banner">
                    {/* Add your hero banner content here */}
                </div>

                {/* Carousel for Student Activities */}
                <div className="student-activities-carousel">
                    {/* Add your carousel content here */}
                </div>

                {/* Program Selection */}
                <div className="program-selection">
                    <h2>Select Program</h2>
                    <select onChange={this.handleProgramChange}>
                        <option value="">Select a program</option>
                        {this.programs.map((program) => (
                            <option key={program.id} value={program.id}>
                                {program.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Term Selection */}
                <div className="term-selection">
                    <h2>Select Term</h2>
                    <select onChange={this.handleTermChange}>
                        <option value="">Select a term</option>
                        {this.terms.map((term) => (
                            <option key={term.id} value={term.id}>
                                {term.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Course Selection */}
                <div className="course-selection">
                    <h2>Select Courses</h2>
                    {availableCourses.map((course) => (
                        <div key={course.id}>
                            {/* Add styling for course details */}
                            <label>
                                <input
                                    type="checkbox"
                                    value={course.id}
                                    checked={this.state.selectedCourses.includes(course.id)}
                                    onChange={this.handleCourseChange}
                                />
                                {course.name}
                            </label>
                            <p>Starting Date: {course.startingDate}</p>
                            <p>Ending Date: {course.endingDate}</p>
                            <p>Fees: {course.fees}</p>
                            <p>Description: {course.description}</p>
                        </div>
                    ))}
                </div>

                {/* Register Button */}
                <button onClick={this.handleRegistration}>Register</button>
            </div>
        );
    }
}

export default CourseSelection;

