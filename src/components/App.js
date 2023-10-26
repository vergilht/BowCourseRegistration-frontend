import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Admin } from "./pages/Admin";
import { Signup } from "./pages/Signup";
import StudentHomePage from "./pages/StudentHomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="admin" element={<Admin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/student-home" element={<StudentHomePage />} />
      </Routes>
    </>
  );
}

export default App;
