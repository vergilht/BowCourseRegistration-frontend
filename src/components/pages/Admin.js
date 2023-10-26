import React, { useState } from "react";
import { AdminNavigation } from "./Navigation";
import { AddCourse, SearchCourse } from "./AdminCourse";

export const Admin = () => {
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
