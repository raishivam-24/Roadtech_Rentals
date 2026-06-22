import { SERVICES } from "../data/machines";
import "../css/services.css";

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="section-header">
        <div className="section-tag">// What We Offer</div>
        <h2 className="section-title">
          RENTAL <em>SERVICES</em>
        </h2>
      </div>
      <div className="services-grid">
        {SERVICES.map((s) => (
          <div key={s.title} className="service-card">
            <div className="service-icon">{s.icon}</div>
            <div className="service-title">{s.title}</div>
            <div className="service-desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
