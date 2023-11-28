import React, { useState } from "react";
import axios from "axios";
import "../css/admin.css";
export const AddCourse = (props) => {
  const [course, setCourse] = useState({
    courseCode: "",
    courseName: "",
    term: "term1",
    fees: "",
    description: "",
  });

  const [send, setSend] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5070/admin/addcourse",
        course
      );
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCourse({ ...course, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("front : ", course);
    fetchData();
    setCourse({
      courseCode: "",
      courseName: "",
      term: "term1",
      fees: "",
      description: "",
    });
    setSend(true);
  };

  return (
    <div className="add-course-container">
      <h2 className="add-course-heading">Add Course</h2>
      <form onSubmit={handleSubmit} className="add-course-form">
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="courseCode">Course Code:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={course.courseCode}
                  name="courseCode"
                  id="courseCode"
                  onChange={handleChange}
                  placeholder="Enter the course code"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="courseName">Course Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={course.courseName}
                  name="courseName"
                  id="courseName"
                  onChange={handleChange}
                  placeholder="Enter the course name"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="term">Term:</label>
              </td>
              <td>
                <select
                  id="term"
                  value={course.term}
                  name="term"
                  onChange={handleChange}
                >
                  <option value="term1">Term1 (Sep 1 – Dec 20)</option>
                  <option value="term2">Term2 (Jan 5 – May 2)</option>
                  <option value="term3">Term3 (Sep 1 - Dec 20)</option>
                  <option value="term4">Term4 (Jan 5 – May 2)</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="fees">Course Fee:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={course.fees}
                  name="fees"
                  id="fees"
                  onChange={handleChange}
                  placeholder="Enter the fees"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="description">Course Description:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={course.description}
                  name="description"
                  id="description"
                  onChange={handleChange}
                  placeholder="Enter the Description"
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button type="submit" className="submit-button">
                  Add Course
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <div className="course-list">{props.courses}</div>
    </div>
  );
};

export const SearchCourse = (props) => {
  const [searchValue, setSearchValue] = useState();
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    setSearchResults([]);
    try {
      const response = await axios.get(
        `http://localhost:5070/admin/searchcourses/${searchValue}`
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleDeleteCourse = async (courseCode) => {
    try {
      await axios.delete(
        `http://localhost:5070/admin/deletecourse/${courseCode}`
      );
      const deletedResult = searchResults.filter(
        (course) => course.courseCode !== courseCode
      );
      setSearchResults(deletedResult);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  return (
    <>
      <h2>Search for Courses</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
          placeholder="Course name or course ID"
        />
        <button onClick={handleSearch} type="submit">
          Search
        </button>
      </form>
      <div>
        <h4>Search Results</h4>
        <div>
          {searchResults.length > 0 ? (
            <table style={{ width: "100%", borderSpacing: "0 15px" }}>
              <thead>
                <tr>
                  <th>Course Code</th>
                  <th>Course Name</th>
                  <th>Course Term</th>
                  <th>Course Fee</th>
                  <th>Course Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map((result) => (
                  <tr key={result.courseCode}>
                    <td>{result.courseCode}</td>
                    <td>{result.courseName}</td>
                    <td>Term{result.termID}</td>
                    <td>{result.fees}</td>
                    <td>{result.description}</td>
                    <td>
                      <button
                        onClick={() => handleDeleteCourse(result.courseCode)}
                      >
                        DELETE
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No matching courses found.</p>
          )}
        </div>
        <ul></ul>
      </div>
    </>
  );
};
