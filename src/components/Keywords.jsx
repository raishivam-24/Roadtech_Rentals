import { KEYWORDS } from "../data/machines";
import "../css/keywords.css";

export default function Keywords() {
  return (
    <section className="section keywords-bg">
      <div className="section-header">
        <div className="section-tag">// Search by Category</div>
        <h2 className="section-title">
          FIND YOUR <em>MACHINE</em>
        </h2>
      </div>
      <div className="keyword-grid">
        {KEYWORDS.map((k) => (
          <div key={k} className="keyword-chip">
            {k}
          </div>
        ))}
      </div>
    </section>
  );
}
