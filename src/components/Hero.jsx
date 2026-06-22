import "../css/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid-bg" />
      <div className="hero-tag">Heavy Equipment Rental Specialists</div>
      <h1>
        BUILT FOR
        <br />
        <em>TOUGH ROADS</em>
        <br />
        RENTED SMART
      </h1>
      <p className="hero-sub">
        India's trusted source for Wirtgen, SANY, Bomag & XCMG road construction machinery —
        milling machines, soil stabilizers, slipform pavers & more, available for rent at the best rates.
      </p>
      <div className="hero-ctas">
        <button className="btn-primary">Get a Quote</button>
        <button className="btn-outline">View Machines</button>
      </div>
      <div className="hero-stats">
        <div className="stat">
          <div className="stat-num">50+</div>
          <div className="stat-label">Machine Models</div>
        </div>
        <div className="stat">
          <div className="stat-num">3</div>
          <div className="stat-label">Global Brands</div>
        </div>
        <div className="stat">
          <div className="stat-num">PAN</div>
          <div className="stat-label">India Delivery</div>
        </div>
        <div className="stat">
          <div className="stat-num">24/7</div>
          <div className="stat-label">Support</div>
        </div>
      </div>
    </section>
  );
}
