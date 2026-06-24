import { Link } from "react-router-dom";
import { CATEGORIES, MACHINES_BY_CATEGORY } from "../data/machines";
import MachineImage from "./MachineImage";
import "../css/category-story.css";

/**
 * Ajax-style scroll story: each category gets a full row with a large image,
 * a step label (MILLING / STABILIZING / PAVING / FLEET), a short pitch, and
 * a link into the filtered machines listing. Mirrors Ajax's
 * Production -> Transportation -> Placement -> Paving sequence.
 */
export default function CategoryStory() {
  return (
    <section className="section category-story" id="categories">
      <div className="section-header">
        <div className="section-tag">// Our Fleet, By Category</div>
        <h2 className="section-title">
          FROM MILLING TO <em>PAVING</em>
        </h2>
        <p className="section-desc">
          70+ machines across {CATEGORIES.length} categories — everything you need for a road
          project, available for rent anywhere in India.
        </p>
      </div>

      <div className="story-steps">
        {CATEGORIES.map((cat, i) => (
          <div key={cat.key} className="story-step">
            <div className="story-step-label">STEP {String(i + 1).padStart(2, "0")}</div>
            <div className={`story-row ${i % 2 === 1 ? "reverse" : ""}`}>
              <MachineImage
                src={cat.image}
                alt={cat.label}
                label={cat.label}
                icon={cat.icon}
                aspect="16/10"
              />
              <div className="story-info">
                <div className="story-tag">{cat.icon} {cat.label.toUpperCase()}</div>
                <h3 className="story-title">{cat.shortLabel}</h3>
                <p className="story-desc">
                  {MACHINES_BY_CATEGORY[cat.key].length} models available across leading brands —
                  rented with operator and full transport support, anywhere in India.
                </p>
                <Link to={`/machines?category=${cat.key}`} className="story-link">
                  View {cat.shortLabel} →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
