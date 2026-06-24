import { TESTIMONIALS } from "../data/testimonials";
import "../css/testimonials.css";

/**
 * Ajax-style testimonial quote cards. Currently PLACEHOLDER data —
 * replace src/data/testimonials.js with real contractor quotes once available.
 */
export default function Testimonials() {
  return (
    <section className="section testimonials-section">
      <div className="section-header">
        <div className="section-tag">// What Contractors Say</div>
        <h2 className="section-title">
          THROUGH THE EYES OF <em>OUR CLIENTS</em>
        </h2>
      </div>
      <div className="testimonials-grid">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="testimonial-card">
            <div className="testimonial-quote">"{t.quote}"</div>
            <div className="testimonial-name">{t.name}</div>
            <div className="testimonial-role">
              {t.designation} · {t.company}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
