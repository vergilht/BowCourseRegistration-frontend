import React, { useState } from "react";
import { AdminNavigation } from "./Navigation";
import { users } from "./user-data";

export const AdminStudent = () => {
  const students = users.filter(
    (user) => user.role.toLowerCase() === "student"
  );
  const [searchValue, setSearchValue] = useState("");
  const [searchedStudent, setSearchedStudent] = useState([]);

  const handleSearch = (selectedValue) => {
    setSearchedStudent([]);

    const filteredStudents = students.filter((student) => {
      if (selectedValue === "") {
        return true; //
      } else {
        return student.program === selectedValue;
      }
    });

    setSearchedStudent(filteredStudents);
  };

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setSearchValue(selectedValue);
    handleSearch(selectedValue);
  };

  return (
    <>
      <AdminNavigation />
      <h2>Search for Students</h2>
      <select onChange={handleChange} value={searchValue}>
        <option value="">Select Program</option>
        <option value="diploma">Diploma</option>
        <option value="post diploma">Post Diploma</option>
        <option value="certificate">Certificate</option>
      </select>
      <div>
        <h4>Search Results</h4>
        {searchedStudent.length > 0 ? (
          <ul>
            {searchedStudent.map((result) => (
              <li key={result.studentID}>
                <p>
                  Name: {result.firstName} {result.lastName}
                </p>
                <p>Student ID: {result.studentID}</p>
                <p>DOB: {result.dob}</p>
                <p>Email: {result.email}</p>
                <p>Phone: {result.phone}</p>
                <p>Department: SD department</p>
                <p>Program: {result.program}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No matching courses found.</p>
        )}
      </div>
    </>
  );
};
