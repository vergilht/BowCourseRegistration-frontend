import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Navigation } from "./pages/Navigation";
import { Signup } from "./pages/Signup";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="login/admin" element={<LoginAdmin />} />
        <Route path="signup" element={<Signup />} /> */}
      </Routes>
    </>
  );
}

export default App;
