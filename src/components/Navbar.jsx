import { Link, NavLink } from "react-router-dom";
import { NAV_ITEMS } from "../data/machines";
import "../css/navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-logo">
        ⚙ <span>ROAD</span>TECH
        <span className="nav-logo-sub"> RENTALS</span>
      </Link>
      <ul className="nav-links">
        {NAV_ITEMS.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? "nav-link-active" : "")}
              end={item.path === "/"}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
        <li>
          <Link to="/contact" className="nav-cta">
            Get Quote
          </Link>
        </li>
      </ul>
    </nav>
  );
}
