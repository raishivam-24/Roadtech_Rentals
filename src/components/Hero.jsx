import { Link } from "react-router-dom";
import "../css/hero.css";

/**
 * Hero with video background (Ajax-style). Looks for /videos/hero-banner.mp4 —
 * if missing or fails to load, falls back to a static image, then to a plain
 * gradient. Client just needs to drop hero-banner.mp4 into public/videos/.
 */
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-media">
        <video className="hero-video" autoPlay muted loop playsInline poster="/images/hero/hero-banner.jpg">
          <source src="/videos/hero-banner.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
      </div>

      <div className="hero-grid-bg" />

      <div className="hero-content">
        <div className="hero-tag">70+ Machines · Pan India Rental Network</div>
        <h1>
          BUILT FOR
          <br />
          <em>TOUGH ROADS</em>
          <br />
          READY ON RENT
        </h1>
        <p className="hero-sub">
          Wirtgen, SANY, Bomag & XCMG road construction machinery — milling machines, soil
          stabilizers, slipform pavers & more. Delivered anywhere in India, with operator and full
          logistics support.
        </p>
        <div className="hero-ctas">
          <Link to="/contact" className="btn-primary">
            Get a Quote →
          </Link>
          <Link to="/machines" className="btn-outline">
            View Our Fleet
          </Link>
        </div>
      </div>
    </section>
  );
}
