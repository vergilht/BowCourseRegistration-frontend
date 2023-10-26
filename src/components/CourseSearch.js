import React, {Component} from "react";

class CourseSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
        };
    }

    // Function to handle changes in the search input
    handleSearchChange = (e) => {
        this.setState({ searchQuery: e.target.value });
    };

    filterCourses = () => {
        const { courses } = this.props;
        const { searchQuery } = this.state;

        if (!courses || courses.length === 0) {
            return [];
        }

        const query = searchQuery.toLowerCase();

        return courses.filter((course) => {
            const courseName = course.name.toLowerCase();
            const courseCode = course.id.toLowerCase();
            return courseName.includes(query) || courseCode.includes(query);
        });
    };

    render() {
        const filteredCourses = this.filterCourses();
        const { courses } = this.props;

        return (
            <div>
                <h2>Select Courses</h2>
                <input
                    type="text"
                    placeholder="Search by name or code"
                    onChange={this.handleSearchChange}
                />
                {courses ? (
                filteredCourses.map((course) => (
                    <div key={course.id}>
                        <p>{course.name}</p>
                        <p>{course.id}</p>
                    </div>
                ))
                    ) : (
                        <p> Loading courses...</p>
                    )}
            </div>
        );
    }
}

export default CourseSearch;