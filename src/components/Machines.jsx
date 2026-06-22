import { useState } from "react";
import { MACHINES } from "../data/machines";
import "../css/machines.css";

export default function Machines() {
  const [activeTab, setActiveTab] = useState("milling");

  return (
    <section className="section machines-bg" id="machines">
      <div className="section-header">
        <div className="section-tag">// Our Fleet</div>
        <h2 className="section-title">
          MACHINERY <em>CATALOG</em>
        </h2>
      </div>

      <div className="machine-tabs">
        {Object.entries(MACHINES).map(([key, val]) => (
          <button
            key={key}
            className={`machine-tab ${activeTab === key ? "active" : ""}`}
            onClick={() => setActiveTab(key)}
          >
            {val.label}
          </button>
        ))}
      </div>

      <div className="brands-grid">
        {MACHINES[activeTab].brands.map((brand) => (
          <div key={brand.name} className="brand-card">
            <div className="brand-name">{brand.name}</div>
            <ul className="model-list">
              {brand.models.map((m) => (
                <li key={m} className="model-item">
                  {m}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
