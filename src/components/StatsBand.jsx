import "../css/stats-band.css";

const STATS = [
  { num: "70+", label: "Machines & Trucks" },
  { num: "4", label: "Global Brands" },
  { num: "PAN", label: "India Delivery" },
  { num: "24/7", label: "Support" },
];

/**
 * Dark navy band with stat counters, optionally over a looping background
 * video (Ajax-style). Looks for /videos/stats-bg.mp4; falls back to a plain
 * navy background if missing.
 */
export default function StatsBand() {
  return (
    <section className="stats-band">
      <video className="stats-band-video" autoPlay muted loop playsInline>
        <source src="/videos/stats-bg.mp4" type="video/mp4" />
      </video>
      <div className="stats-band-overlay" />
      <div className="stats-band-content">
        <div className="stats-band-tag">// A Growing Fleet</div>
        {STATS.map((s) => (
          <div key={s.label} className="stats-band-item">
            <div className="stats-band-num">{s.num}</div>
            <div className="stats-band-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
