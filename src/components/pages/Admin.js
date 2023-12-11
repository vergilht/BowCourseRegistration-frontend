import React, { useState, useEffect } from "react";
import { AdminNavigation } from "./Navigation.js";
import { AddCourse, SearchCourse } from "./AdminCourse.js";
import "../css/admin.css";

export const Admin = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdminStatus = async () => {
      if (localStorage.getItem("role") === "admin") {
        setIsAdmin(true);
      } else {
        alert("You are not authorized to access this page.");
        // Redirect to the home page ("/")
        window.location.href = "/";
      }
    };

    checkAdminStatus();
  }, []);

  return (
    <div>
      <div>
        <AdminNavigation />
      </div>

      <div className="addCourse">
        <AddCourse />
      </div>

      <div className="searchCourse">
        <SearchCourse />
      </div>
    </div>
  );
};
