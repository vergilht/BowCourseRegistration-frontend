import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { Login } from "./pages/Login";

function App() {
  return (
    <>
      App
      <Routes>
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
