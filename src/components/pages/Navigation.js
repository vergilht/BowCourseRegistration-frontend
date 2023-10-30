import { Outlet, Link } from "react-router-dom";
import "../css/nav.css";

export const AdminNavigation = () => {
  return (
    <>
      <div className="logo">
        <img src="/BowValleylogo.png" alt="Bow Valley Logo" />
      </div>

        <div className="banner">
            <img src="/Admin-Banner.jpg" alt="Bow Valley Banner" />
        </div>

      <div className="banner-text">
        <h1>Administration Page</h1>
      </div>

      <nav className="nav_wrap">
        <ul className="nav_container">
          <li className="nav_list">
              <div className="button">
            <Link to="/admin">Courses</Link>
              </div>
          </li>
          <li className="nav_list">
              <div className="button">
            <Link to="/admin/students">Students List</Link>
              </div>
          </li>
          <li className="nav_list">
              <div className="button">
            <Link to="/admin/forms">Support</Link>
              </div>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
