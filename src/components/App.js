import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Admin } from "./pages/Admin";
import StudentHomePage from "./pages/StudentHomePage";
import { AddCourse, SearchCourse } from "./pages/AdminCourse";
import { AdminStudent } from "./pages/AdminStudent";
import { AdminForm } from "./pages/AdminForm";
import Welcome from "./pages/Welcome";
import { AdminLogin, StudLogin, Login } from "./pages/Login";
import CourseSelection from "./pages/CourseSelection";
import Contact from "./pages/Contact";

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
