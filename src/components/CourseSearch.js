import React, {Component} from "react";

class CourseSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
            results: [],
        };
    }

    // Courses data structure
    courses = {
        'Term 1': [
            {
                id: 'Pr111',
                name: 'Project Management1',
                startingDate: 'September 1',
                endingDate: 'December 20',
            },
            {
                id: 'C+++',
                name: 'C++ Programming Fundamentals',
                startingDate: 'September 1',
                endingDate: 'December 20',
            },
            {
                id: 'CompM1111',
                name: 'Computer Maintenance',
                startingDate: 'September 1',
                // finishing startingDate and endingDate for all the remaining courses
                endingDate: 'December 20',

            },
            {
                id: 'IS1111',
                name: 'Information Security1',
                startingDate: 'September 1',
                endingDate: 'December 20',
            },
        ],
        'Term 2': [
            {
                id: 'Net222',
                name: 'Networking',
                startingDate: 'January 5',
                endingDate: 'May 2',
            },
            {
                id: 'Web222',
                name: 'Web Technology',
                startingDate: 'January 5',
                endingDate: 'May 2',
            },
            {
                id: 'Pro222',
                name: 'Project Management',
                startingDate: 'January 5',
                endingDate: 'May 2',
            },
        ],
        'Term 3': [
            {
                id: 'Pr333',
                name: 'Advanced Project Management1',
                startingDate: 'September 1',
                endingDate: 'December 20',
            },
            {
                id: 'C++333',
                name: 'Advanced C++ Programming Fundamentals',
                startingDate: 'September 1',
                endingDate: 'December 20',
            },
            {
                id: 'CompM333',
                name: 'Advanced Computer Maintenance',
                startingDate: 'September 1',
                endingDate: 'December 20',
            },
            {
                id: 'IS333',
                name: 'Advanced Information Security1',
                startingDate: 'September 1',
                endingDate: 'December 20',
            },
        ],
        'Term 4': [
            {
                id: 'Net444',
                name: 'Advanced Networking',
                startingDate: 'January 5',
                endingDate: 'May 2',
            },
            {
                id: 'Web444',
                name: 'Advanced Web Technology',
                startingDate: 'January 5',
                endingDate: 'May 2',
            },
            {
                id: 'Pro444',
                name: 'Advanced Project Management',
                startingDate: 'January 5',
                endingDate: 'May 2',
            },
        ],
    };


    // Function to handle changes in the search input
    handleSearch = () => {
        const { searchQuery } = this.state;
        const results = [];

        // Loop through terms and courses to find matching courses

        for (const term in this.courses) {
            for (const course of this.courses[term]) {
                if (course.name.toLowerCase().includes(searchQuery.toLowerCase())
                    || course.id.toLowerCase().includes(searchQuery.toLowerCase()))
                {
                    results.push({
                        term: term,
                        course: course.name,
                        startingDate: course.startingDate,
                        endingDate: course.endingDate,
                    });
                }
            }
        }

        this.setState({ results });
    };

    render() {

        const { results } = this.state;

        return (
            <div>
                <h2>Search for Available Courses</h2>
                <input
                    type="text"
                    placeholder="Course name or course ID"
                    onChange={(e) => this.setState({ searchQuery: e.target.value })}
                />
                <button onClick={this.handleSearch}>Search</button>

                {results.length > 0 && (
                    <div>
                        <h4>Search Results</h4>
                        <ul>
                            {results.map((result) => (
                                <li key={result.course}>
                                    {result.course} is available in {result.term} from {result.startingDate} to {result.endingDate}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

export default CourseSearch;