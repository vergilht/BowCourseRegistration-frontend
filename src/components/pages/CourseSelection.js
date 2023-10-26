import React, { Component } from 'react';
import "../css/CourseSelection.css";

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
                name: 'Project Management',
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

        //binding the event handlers
        this.handleProgramChange = this.handleProgramChange.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleCourseChange = this.handleCourseChange.bind(this);
        this.handleRegistration = this.handleRegistration.bind(this);
    }

    // Add a method for handling program selection
    handleProgramChange = (e) => {
        this.setState({ selectedProgram: e.target.value });
    }

    // Add a method for handling term selection
    handleTermChange = (e) => {
        this.setState({ selectedTerm: e.target.value });
    }

    // Add a method for handling course registration
    handleCourseChange = (e) => {
        const { selectedCourses } = this.state;
        const { value } = e.target;

        //Toggle the course in the array
        this.setState((prevState) => {
            if (prevState.selectedCourses.includes(value)) {
                return {
                    selectedCourses: prevState.selectedCourses.filter((course) => course !== value),
                };
            } else {
                return {
                    selectedCourses: [...prevState.selectedCourses, value],
                };
            }
        });
    }

    // Add a method for filtering available courses, only courses that match the selected program and term should be displayed
    filterAvailableCourses = () => {
        const { selectedProgram, selectedTerm } = this.state;
        const availableCourses = [];

        // Loop through courses and find matching courses
        for (const course of this.courses) {
            if (course.program.includes(selectedProgram) && course.term.includes(selectedTerm)) {
                availableCourses.push(course);
            }
        }

        console.log('Available courses: ', availableCourses);
        return availableCourses;
    }

    // Add a method for handling registration
    handleRegistration = () => {
        const {selectedCourses, selectedProgram} = this.state;
        const selectedProgramObject = this.programs.find((program) => program.id === selectedProgram);
        const maxCoursesPerTerm = selectedProgramObject ? selectedProgramObject.maxCoursesPerTerm : 0;

        // Check if the student has selected any courses
        if (selectedCourses.length === 0) {
            alert('Please select at least one course.');
        } else if (selectedCourses.length > maxCoursesPerTerm) {
            alert(`You can only register up to ${maxCoursesPerTerm} courses per term.`);
        } else {
            alert('Registration completed.');
        }
    }

    render() {
        const { selectedProgram, selectedTerm } = this.state;
        const availableCourses = this.filterAvailableCourses();
        console.log('Available courses: ', availableCourses);

        return (
            <div>
                <div className="logo">
                    <img src="/BowValleylogo.png" alt="Bow Valley Logo" />
                </div>

                <div className="hero-banner">
                    <img src="/course-selection-mega.jpg" alt="Hero Banner"/>
                </div>

                <div className="student-activities-carousel">
                    <img src="/student-activities1.jpg" alt="Student Activities"/>
                    <img src="/student-activities2.jpg" alt="Student Activities"/>
                    <img src="/student-activities3.jpg" alt="Student Activities"/>
                    <img src="/student-activities4.jpg" alt="Student Activities"/>
                </div>

                <div className="student-id">
                    <h1>Welcome to Bow Course</h1>
                    <p>Your Student ID: {this.state.studentID}</p>
                </div>


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

                <div className="course-selection">
                    <h2>Select Courses</h2>
                    <ul>
                        {availableCourses.map((course) => (
                            <li key={course.id}>
                                <input
                                    type="checkbox"
                                    value={course.id}
                                    onChange={this.handleCourseChange}
                                />
                                {course.name}
                            </li>
                        ))}
                    </ul>

                    <button onClick={this.handleRegistration}>SELECT</button>
                </div>
            </div>
        );
    }
}

export default CourseSelection;


