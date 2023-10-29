import React, { useState } from "react";
import { AdminNavigation } from "./Navigation";

/* export const CourseManagement = () => {
  const [courses, setCourses] = useState([]);

  // Define a function to update the courses state
  const addCourse = (newCourse) => {
    console.log("Course Management");
    setCourses([...courses, newCourse]);
  };

  return (
    <div>
      <AdminNavigation />
      <AddCourse addCourse={setCourses} courses={courses} />
      <SearchCourse courses={courses} />
    </div>
  );
}; */

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
  //const allCourses = props.courses;
  const results = props.courses;

  const handleSearch = () => {
    console.log("handleSearch");
    console.log(results);
  };

  return (
    <>
      <h2>Search for Courses</h2>
      <input type="text" placeholder="Course name or course ID" />
      <button onClick={handleSearch}>Search</button>

      <div>
        <h4>Search Results</h4>
        <ul>
          {/*             {results.map((result) => (
              <li key={result.course}>
                {result.course} is available in {result.term} from{" "}
                {result.startingDate} to {result.endingDate}
              </li>
            ))} */}
        </ul>
      </div>
    </>
  );
};
