import React, { useState } from "react";
import { AdminNavigation } from "./Navigation.js";
import { AddCourse, SearchCourse } from "./AdminCourse.js";
import "../css/admin.css";

export const Admin = () => {
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
