import { Link } from "react-router-dom";
import "../css/cta-band.css";

const CTAS = [
  { title: "Need a machine this week?", action: "Request a Quote", to: "/contact" },
  { title: "Browse the full fleet", action: "View Machines", to: "/machines" },
  { title: "Have questions?", action: "Call Us Now", to: "/contact" },
];

/**
 * Ajax-style multi-CTA band ("Become a Dealer / Locate a Dealer / Enroll for Training"),
 * adapted to rental business actions.
 */
export default function CtaBand() {
  return (
    <section className="cta-band">
      {CTAS.map((c) => (
        <div key={c.title} className="cta-band-item">
          <div className="cta-band-title">{c.title}</div>
          <Link to={c.to} className="cta-band-link">
            {c.action} →
          </Link>
        </div>
      ))}
    </section>
  );
}
