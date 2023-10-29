import React, { useState } from "react";
import { AdminNavigation } from "./Navigation";

export const AddCourse = (props) => {
  const [course, setCourse] = useState({
    courseCode: "",
    courseName: "",
    term: "term1",
    fee: "",
    description: "",
  });

  const [send, setSend] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCourse({ ...course, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addCourse(course);
    setCourse({
      courseCode: "",
      courseName: "",
      term: "",
      fee: "",
      description: "",
    });
    setSend(true);
  };

  return (
    <>
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
              <option value="term1">Term1 (September 1 – December 20 )</option>
              <option value="term2">Term2 (Jan 5 – May 2)</option>
              <option value="term3">Term3 (Sept 1 - December 20)</option>
              <option value="term4">Term4 (Jan 5 – May 2)</option>
            </select>
          </div>

          <div>
            Course Fee :
            <input
              type="text"
              value={course.fee}
              name="fee"
              onChange={handleChange}
              placeholder="Enter the fee"
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
  const courseDB = props.courses;
  const setCourses = props.setCourses;

  const handleSearch = () => {
    setSearchResults([]);
    const results = [];
    console.log("handleSearch");
    console.log(courseDB);

    for (const course of courseDB) {
      if (
        course.courseCode.toLowerCase().includes(searchValue) ||
        course.courseName.toLowerCase().includes(searchValue)
      ) {
        console.log("1", course);
        results.push(course);
      }
    }
    setSearchResults(results);
    console.log("result", results);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchValue);
  };

  const handleDeleteCourse = (courseCode) => {
    const updatedCourses = courseDB.filter(
      (course) => course.courseCode !== courseCode
    );
    setCourses(updatedCourses);
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
                  <p>Course Term: {result.term}</p>
                  <p>Course Fee: {result.fee}</p>
                  <p>Course Description{result.description}</p>
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
