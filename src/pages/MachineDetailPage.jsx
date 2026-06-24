import { useParams, Link, Navigate } from "react-router-dom";
import { MACHINES, CATEGORIES } from "../data/machines";
import MachineImage from "../components/MachineImage";
import "../css/machine-detail.css";

export default function MachineDetailPage() {
  const { slug } = useParams();
  const machine = MACHINES.find((m) => m.slug === slug);

  if (!machine) {
    return <Navigate to="/machines" replace />;
  }

  const category = CATEGORIES.find((c) => c.key === machine.category);
  const relatedMachines = MACHINES.filter((m) => m.category === machine.category && m.slug !== machine.slug).slice(0, 3);

  return (
    <div className="machine-detail-page">
      <div className="breadcrumb">
        <Link to="/machines">Machines</Link>
        <span> / </span>
        <Link to={`/machines?category=${machine.category}`}>{category?.shortLabel}</Link>
        <span> / </span>
        <span>{machine.name}</span>
      </div>

      <div className="detail-grid">
        <MachineImage src={machine.image} alt={machine.name} label={machine.name} icon="⚙️" aspect="4/3" />

        <div className="detail-info">
          <div className="machine-tag">
            {machine.brand} · {category?.label}
          </div>
          <h1 className="detail-name">{machine.name}</h1>
          <p className="detail-tagline">{machine.tagline}</p>

          <div className="detail-specs-note">
            Detailed specifications (working width, depth, power, weight) to be added once confirmed with
            manufacturer datasheet.
          </div>

          <div className="detail-includes">
            <div className="detail-include-item">✓ Experienced operator included</div>
            <div className="detail-include-item">✓ Pan-India delivery & logistics</div>
            <div className="detail-include-item">✓ 24/7 breakdown support</div>
          </div>

          <Link to="/contact" className="btn-primary detail-cta">
            Enquire to Rent This Machine →
          </Link>
        </div>
      </div>

      {relatedMachines.length > 0 && (
        <div className="related-section">
          <div className="section-tag">// Related Machines</div>
          <div className="related-grid">
            {relatedMachines.map((m) => (
              <Link key={m.slug} to={`/machines/${m.slug}`} className="related-card">
                <MachineImage src={m.image} alt={m.name} label={m.name} icon="⚙️" aspect="16/10" />
                <div className="related-card-body">
                  <div className="related-card-brand">{m.brand}</div>
                  <div className="related-card-name">{m.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
