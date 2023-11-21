import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Admin } from "./pages/Admin.js";
import StudentHomePage from "./pages/StudentHomePage.js";
import { AddCourse, SearchCourse } from "./pages/AdminCourse.js";
import { AdminStudent } from "./pages/AdminStudent.js";
import { AdminForm } from "./pages/AdminForm.js";
import Welcome from "./pages/Welcome.js";
import { AdminLogin, StudLogin, Login } from "./pages/Login.js";
import CourseSelection from "./pages/CourseSelection.js";
import Contact from "./pages/Contact.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="admin" element={<Admin />} />
        <Route path="admin/login" element={<Login />} />
        <Route path="student/login" element={<Login />} />
        <Route path="/student-home" element={<StudentHomePage />} />
        <Route path="admin/searchcourse" element={<SearchCourse />} />
        <Route path="admin/students" element={<AdminStudent />} />
        <Route path="admin/forms" element={<AdminForm />} />
        <Route path="course-selection" element={<CourseSelection />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
