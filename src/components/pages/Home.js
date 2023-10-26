import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Login } from "./Login";
import { Navigation } from "./Navigation";

export const Home = () => {
  return (
    <>
      <Navigation />
      <Login />
      <div className="welcome-options">
        <div className="student-option">
          <h2>For Students</h2>
          <p>Click here to access student features.</p>
          <Link to="/student-home">Go to Student Page</Link>
        </div>

        <div className="admin-option">
          <h2>For Administration Staff</h2>
          <p>Click here to access admin features.</p>
          <Link to="/admin-home">Go to Admin Page</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};
