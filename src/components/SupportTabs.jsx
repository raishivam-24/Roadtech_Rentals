import { useState } from "react";
import "../css/support-tabs.css";

const TABS = [
  {
    key: "delivery",
    label: "Pan India Delivery",
    icon: "🚛",
    desc: "Our fleet reaches every state — fast mobilization for time-critical road projects, with full transport logistics handled end to end.",
  },
  {
    key: "support",
    label: "24/7 Support",
    icon: "🕐",
    desc: "Round-the-clock breakdown support and maintenance. Our team is a phone call away, so your project timeline never slips.",
  },
  {
    key: "operator",
    label: "Operator Included",
    icon: "👷",
    desc: "Every rental comes with an experienced, trained operator — your site is productive from day one, with no separate hiring needed.",
  },
];

/**
 * Ajax-style tabbed support section (Service Solutions / Support Network / Spare Parts).
 * Adapted to rental business: Delivery / Support / Operator.
 */
export default function SupportTabs() {
  const [active, setActive] = useState(TABS[0].key);
  const activeTab = TABS.find((t) => t.key === active);

  return (
    <section className="section support-tabs-section">
      <div className="section-header">
        <div className="section-tag">// At Your Service</div>
        <h2 className="section-title">
          BUILT ON <em>TRUST</em>
        </h2>
      </div>

      <div className="support-tabs">
        {TABS.map((t) => (
          <button
            key={t.key}
            className={`support-tab ${active === t.key ? "active" : ""}`}
            onClick={() => setActive(t.key)}
          >
            <span className="support-tab-icon">{t.icon}</span>
            {t.label}
          </button>
        ))}
      </div>

      <div className="support-tab-panel">
        <p>{activeTab.desc}</p>
      </div>
    </section>
  );
}
