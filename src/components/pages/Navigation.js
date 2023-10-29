import { Outlet, Link } from "react-router-dom";
import "../css/nav.css";
export const HomeNavigation = () => {
  return (
    <>
      <div>
        <h1
          style={{
            color: "black",
            textAlign: "center",
          }}
        >
          Bow Course Registration
        </h1>
      </div>
      <nav className="nav_wrap">
        <ul className="nav_container">
          <li className="nav_list">
            <Link to="/">Home</Link>
          </li>

          <li className="nav_list">
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export const AdminNavigation = () => {
  return (
    <>
      <div className="logo">
        <img src="/BowValleylogo.png" alt="Bow Valley Logo" />
      </div>
      <div>
        <h1
          style={{
            color: "black",
            textAlign: "center",
          }}
        >
          Administration Page
        </h1>
      </div>
      <nav className="nav_wrap">
        <ul className="nav_container">
          <li className="nav_list">
            <Link to="/admin">Add Course</Link>
          </li>
          <li className="nav_list">
            <Link to="/admin/students">Students</Link>
          </li>
          <li className="nav_list">
            <Link to="/admin/forms">Form</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
