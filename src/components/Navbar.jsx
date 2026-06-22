import { NAV_ITEMS } from "../data/machines";
import "../css/navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-logo">
        ⚙ <span>ROAD</span>TECH
        <span className="nav-logo-sub"> RENTALS</span>
      </div>
      <ul className="nav-links">
        {NAV_ITEMS.map((n) => (
          <li key={n}>
            <a>{n}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
