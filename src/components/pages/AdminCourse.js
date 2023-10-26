import React, { useState } from "react";
import { AdminNavigation } from "./Navigation";

export const AddCourse = () => {
  const [course, setCourse] = useState({
    courseCode: "",
    courseName: "",
    term: "",
    fee: "",
    description: "",
  });

  const [courses, setCourses] = useState([]);

  /* 
      - Add course details : code, name, starting date, end date, information
      - Delete course details : code, name, starting date, end date, information
      - Search with name, code
      */

  const [send, setSend] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCourse({ ...course, [name]: value });
    console.log("handleChange");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setCourses({ ...courses, course });
    setSend(true);
    console.log(course);
    console.log(courses);
    console.log("handleSubmit");
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
    </>
  );
};
export const SearchCourse = () => {
  return <>Search Course</>;
};
