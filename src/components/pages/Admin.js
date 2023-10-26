import React, { useState } from "react";
import { AdminNavigation } from "./Navigation";
import { AddCourse, SearchCourse } from "./AdminCourse";

export const Admin2 = () => {
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

export const Admin = () => {
  const [courses, setCourses] = useState([]);

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
      <SearchCourse courses={courses} />
    </div>
  );
};
