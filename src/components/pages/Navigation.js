import { Outlet, Link } from "react-router-dom";
import "../css/nav.css";
export const Navigation = () => {
  return (
    <>
      <div>
        <h1
          style={{
            color: "white",
            backgroundColor: "black",
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
