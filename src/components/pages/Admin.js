import React, { useState } from "react";
import { AdminNavigation } from "./Navigation";
import { AddCourse, SearchCourse } from "./AdminCourse";
import "../css/admin.css";

export const Admin = () => {
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
    {
      courseCode: "Net222",
      courseName: "Networking",
      fee: "701",
      term: "2",
      description: "Learning Networking",
    },
    {
      courseCode: "Web222",
      courseName: "Web Technology",
      fee: "701",
      term: "2",
      description: "Learning Web Technology",
    },
    {
      courseCode: "Pro222",
      courseName: "Project Management",
      fee: "701",
      term: "2",
      description: "Learning Project Management",
    },
    {
      courseCode: "Pr333",
      courseName: "Advanced Project Management1",
      fee: "701",
      term: "3",
      description: "Learning Advanced Project Management1",
    },
    {
      courseCode: "C++333",
      courseName: "Advanced C++ Programming Fundamentals",
      fee: "701",
      term: "3",
      description: "Learning Advanced C++ Programming Fundamentals",
    },
    {
      courseCode: "CompM333",
      courseName: "Advanced Computer Maintenance",
      fee: "701",
      term: "3",
      description: "Learning Advanced Computer Maintenance",
    },
    {
      courseCode: "IS333",
      courseName: "Advanced Information Security1",
      fee: "701",
      term: "3",
      description: "Learning Advanced Information Security1",
    },
    {
      courseCode: "Net444",
      courseName: "Advanced Networking",
      fee: "701",
      term: "4",
      description: "Learning Advanced Networking",
    },
    {
      courseCode: "Web444",
      courseName: "Advanced Web Technology",
      fee: "701",
      term: "4",
      description: "Learning Advanced Web Technology",
    },
    {
      courseCode: "Pro444",
      courseName: "Advanced Project Management",
      fee: "701",
      term: "4",
      description: "Learning Advanced Project Management",
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
        <div>
          <AdminNavigation />
        </div>

        <div className="addCourse">
          <AddCourse addCourse={addCourse} />
        </div>

        <div className="searchCourse">
          <SearchCourse courses={courses} setCourses={setCourses} />
        </div>
      </div>
  );
};
