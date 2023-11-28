import React, { useState } from "react";
import axios from "axios";

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
    <>
      <h2>Add Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="add-course-form">
          <div>
            Course Code :
            <input
              type="text"
              value={course.courseCode}
              name="courseCode"
              onChange={handleChange}
              placeholder="Enter the course code"
            />
          </div>
          <div>
            Course Name :
            <input
              type="text"
              value={course.courseName}
              name="courseName"
              onChange={handleChange}
              placeholder="Enter the course name"
            />
          </div>
          <div>
            Term :
            <select
              id="term-select"
              value={course.term}
              name="term"
              onChange={handleChange}
            >
              <option value="term1">Term1 (Sep 1 – Dec 20 )</option>
              <option value="term2">Term2 (Jan 5 – May 2)</option>
              <option value="term3">Term3 (Sep 1 - Dec 20)</option>
              <option value="term4">Term4 (Jan 5 – May 2)</option>
            </select>
          </div>

          <div>
            Course Fee :
            <input
              type="text"
              value={course.fees}
              name="fees"
              onChange={handleChange}
              placeholder="Enter the fees"
            />
          </div>
          <div>
            Course Description :
            <input
              type="text"
              value={course.description}
              name="description"
              onChange={handleChange}
              placeholder="Enter the Description"
            />
          </div>
        </div>
        <button type="submit">Add Course</button>
      </form>
      <div>{props.courses}</div>
    </>
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
            <ul>
              {searchResults.map((result) => (
                <li key={result.courseCode}>
                  <p>Course Code: {result.courseCode}</p>
                  <p>Course Name: {result.courseName}</p>
                  <p>Course Term: Term{result.termID}</p>
                  <p>Course Fee: {result.fees}</p>
                  <p>Course Description: {result.description}</p>
                  <button onClick={() => handleDeleteCourse(result.courseCode)}>
                    DELETE
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No matching courses found.</p>
          )}
        </div>
        <ul></ul>
      </div>
    </>
  );
};
