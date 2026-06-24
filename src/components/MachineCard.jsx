import { Link } from "react-router-dom";
import MachineImage from "./MachineImage";
import "../css/machine-card.css";

export default function MachineCard({ machine }) {
  return (
    <Link to={`/machines/${machine.slug}`} className="machine-card">
      <MachineImage src={machine.image} alt={machine.name} label={machine.name} icon="⚙️" aspect="4/3" />
      <div className="machine-card-body">
        <div className="machine-card-brand">{machine.brand}</div>
        <div className="machine-card-name">{machine.name}</div>
        <div className="machine-card-tagline">{machine.tagline}</div>
        <div className="machine-card-cta">View Details →</div>
      </div>
    </Link>
  );
}
