import React, { useState } from "react";
import { AdminNavigation } from "./Navigation";
import { AddCourse } from "./AdminCourse";

export const Admin = () => {
  const [course, setCourse] = useState({
    courseCode: "",
    courseName: "",
    startingDate: "",
    endingDate: "",
    fee: "",
    description: "",
  });

  const courses = [];

  /* Add courses */
  {
    /* 
      - Add course details : code, name, starting date, end date, information
      - Delete course details : code, name, starting date, end date, information
      - Search with name, code
      - view all students for different program
      - view form from students
      */
  }
  return (
    <>
      <AdminNavigation />
      {/* <AddCourse /> */}
    </>
  );
};
