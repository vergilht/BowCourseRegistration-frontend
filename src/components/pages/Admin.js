import React, { useState } from "react";
import { AdminNavigation } from "./Navigation";
import { AddCourse, SearchCourse } from "./AdminCourse";

/* export const Admin2 = () => {
  const [courses, setCourses] = useState([]);

  const addCourse = (course) => {
    setCourses([...courses, course]);
  };

  return (
    <>
      <AdminNavigation />
      <AddCourse addCourse={addCourse} />
      <SearchCourse courses={courses} />
    </>
  );
};
 */
export const Admin = () => {
  /* Mock date for search function */
  const [courses, setCourses] = useState([
    {
      courseCode: "Pr111",
      courseName: "Project management1",
      fee: "701",
      term: "1",
      description: "Learning Project management",
    },
    {
      courseCode: "C++111",
      courseName: "C++ Programming Fundamentals",
      fee: "701",
      term: "1",
      description: "Learning C++ Programming Fundamentals",
    },
    {
      courseCode: "CompM1111",
      courseName: "Computer Maintenance",
      fee: "701",
      term: "1",
      description: "Learning Computer Maintenance",
    },
    {
      courseCode: "IS1111",
      courseName: "Information Security1",
      fee: "701",
      term: "1",
      description: "Learning Information Security1",
    },
  ]);

  // Define a function to update the courses state
  const addCourse = (newCourse) => {
    console.log("Course Management");
    console.log(newCourse);
    setCourses([...courses, newCourse]);
  };
  console.log("db", courses);

  return (
    <div>
      <AdminNavigation />
      <AddCourse addCourse={addCourse} />
      <SearchCourse courses={courses} setCourses={setCourses} />
    </div>
  );
};
