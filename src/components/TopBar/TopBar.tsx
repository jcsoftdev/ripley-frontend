import { NavLink } from "react-router-dom";
import "./TopBar.css";

const TopBar = () => {
  return (
    <nav className="top-bar">
      <ul>
        <li>
          <NavLink
            to={"create"}
            className={(nav) => (nav.isActive ? "active" : "")}
          >
            Create User
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/"}
            className={(nav) => (nav.isActive ? "active" : "")}
          >
            All User
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default TopBar;
