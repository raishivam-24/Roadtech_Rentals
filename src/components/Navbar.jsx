import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NAV_ITEMS } from "../data/machines";
import "../css/navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="nav">
      <Link to="/" className="nav-logo">
        ⚙ <span>ROAD</span>TECH
        <span className="nav-logo-sub"> RENTALS</span>
      </Link>
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
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
