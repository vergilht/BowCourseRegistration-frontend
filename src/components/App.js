import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Admin } from "./pages/Admin";
import { Signup } from "./pages/Signup";
import StudentHomePage from "./pages/StudentHomePage";
import { AddCourse, SearchCourse } from "./pages/AdminCourse";
import { AdminStudent } from "./pages/AdminStudent";
import { AdminForm } from "./pages/AdminForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="admin" element={<Admin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/student-home" element={<StudentHomePage />} />
        <Route path="admin/addcourse" element={<AddCourse />} />
        <Route path="admin/searchcourse" element={<SearchCourse />} />
        <Route path="admin/students" element={<AdminStudent />} />
        <Route path="admin/forms" element={<AdminForm />} />
      </Routes>
    </>
  );
}

export default App;
