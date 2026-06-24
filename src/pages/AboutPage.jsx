import { COVERAGE_STATES } from "../data/machines";
import "../css/about-page.css";

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="section-tag">// About Us</div>
        <h1 className="section-title">
          POWERING INDIA'S <em>ROADS</em>
        </h1>
        <p className="section-desc">
          We rent out a fleet of 70+ road construction machines and trucks — Wirtgen, SANY, Bomag and XCMG —
          to contractors and infrastructure companies across India.
        </p>
      </section>

      <section className="section about-stats">
        <div className="about-stat">
          <div className="stat-num">70+</div>
          <div className="stat-label">Machines & Trucks</div>
        </div>
        <div className="about-stat">
          <div className="stat-num">4</div>
          <div className="stat-label">Global Brands</div>
        </div>
        <div className="about-stat">
          <div className="stat-num">PAN</div>
          <div className="stat-label">India Delivery</div>
        </div>
        <div className="about-stat">
          <div className="stat-num">24/7</div>
          <div className="stat-label">Support</div>
        </div>
      </section>

      <div className="stripe-divider" />

      <section className="section about-story">
        <div className="section-header">
          <div className="section-tag">// Our Story</div>
          <h2 className="section-title">
            BUILT BY <em>OPERATORS</em>, FOR OPERATORS
          </h2>
        </div>
        <p className="about-story-text">
          [Placeholder — add the client's company background here: how many years in operation, where the
          fleet is based, founder background, and what makes the company different from other rental
          operators. Replace this paragraph with the client's actual story.]
        </p>
      </section>

      <div className="stripe-divider" />

      <section className="section coverage-bg">
        <div className="section-header">
          <div className="section-tag">// Pan India Coverage</div>
          <h2 className="section-title">
            WE DELIVER <em>ANYWHERE</em>
          </h2>
          <p className="section-desc">
            From highway projects in Chhattisgarh to rural road works across India — our fleet moves
            wherever your site is.
          </p>
        </div>
        <div className="coverage-list">
          {COVERAGE_STATES.map((s) => (
            <div key={s} className="coverage-chip">
              {s}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
