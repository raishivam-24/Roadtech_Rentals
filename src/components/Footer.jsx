import { Link } from "react-router-dom";
import { CATEGORIES } from "../data/machines";
import "../css/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col footer-col-brand">
          <div className="footer-logo">⚙ ROADTECH RENTALS</div>
          <p className="footer-desc">
            India's trusted source for Wirtgen, SANY, Bomag & XCMG road construction machinery on
            rent — pan-India delivery, operator included, 24/7 support.
          </p>
          <div className="footer-brands-line">WIRTGEN · SANY · BOMAG · XCMG</div>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">Machines</div>
          {CATEGORIES.map((c) => (
            <Link key={c.key} to={`/machines?category=${c.key}`} className="footer-link">
              {c.shortLabel}
            </Link>
          ))}
        </div>

        <div className="footer-col">
          <div className="footer-col-title">Company</div>
          <Link to="/about" className="footer-link">About Us</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
          <Link to="/machines" className="footer-link">All Machines</Link>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">Contact</div>
          <div className="footer-text">📍 [Company Address — Placeholder]</div>
          <div className="footer-text">📞 [Phone Number — Placeholder]</div>
          <div className="footer-text">✉️ [Email — Placeholder]</div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 RoadTech Rentals · Pan India · GSTIN: [Placeholder]</span>
        <span className="footer-bottom-brands">WIRTGEN · SANY · BOMAG · XCMG</span>
      </div>
    </footer>
  );
}
