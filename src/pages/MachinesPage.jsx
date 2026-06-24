import { useSearchParams } from "react-router-dom";
import { CATEGORIES, MACHINES } from "../data/machines";
import MachineCard from "../components/MachineCard";
import "../css/machines-page.css";

export default function MachinesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";

  const visibleMachines =
    activeCategory === "all" ? MACHINES : MACHINES.filter((m) => m.category === activeCategory);

  const setCategory = (key) => {
    if (key === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: key });
    }
  };

  return (
    <div className="machines-page">
      <div className="page-header">
        <div className="section-tag">// Our Fleet</div>
        <h1 className="section-title">
          70+ MACHINES, <em>PAN INDIA</em>
        </h1>
        <p className="section-desc">
          Browse our full rental fleet by category. Every machine comes with an experienced operator and
          delivery support anywhere in India.
        </p>
      </div>

      <div className="section">
        <div className="machine-tabs">
          <button
            className={`machine-tab ${activeCategory === "all" ? "active" : ""}`}
            onClick={() => setCategory("all")}
          >
            All Machines
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              className={`machine-tab ${activeCategory === cat.key ? "active" : ""}`}
              onClick={() => setCategory(cat.key)}
            >
              {cat.shortLabel}
            </button>
          ))}
        </div>

        {visibleMachines.length > 0 ? (
          <div className="machines-grid">
            {visibleMachines.map((m) => (
              <MachineCard key={m.slug} machine={m} />
            ))}
          </div>
        ) : (
          <p className="no-results">No machines found in this category yet.</p>
        )}
      </div>
    </div>
  );
}
