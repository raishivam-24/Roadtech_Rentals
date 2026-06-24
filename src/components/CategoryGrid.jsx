import { Link } from "react-router-dom";
import { CATEGORIES, MACHINES_BY_CATEGORY } from "../data/machines";
import MachineImage from "./MachineImage";
import "../css/category-grid.css";

/**
 * Shown on the Home page — one card per machine category with a photo,
 * model count, and a link into the filtered /machines listing.
 */
export default function CategoryGrid() {
  return (
    <section className="section" id="categories">
      <div className="section-header">
        <div className="section-tag">// Browse by Category</div>
        <h2 className="section-title">
          FIND YOUR <em>MACHINE</em>
        </h2>
        <p className="section-desc">70+ machines across {CATEGORIES.length} categories, available for rent anywhere in India.</p>
      </div>
      <div className="cat-grid">
        {CATEGORIES.map((cat) => (
          <Link key={cat.key} to={`/machines?category=${cat.key}`} className="cat-card">
            <MachineImage src={cat.image} alt={cat.label} label={cat.label} icon={cat.icon} aspect="16/11" />
            <div className="cat-card-body">
              <div className="cat-card-title">{cat.shortLabel}</div>
              <div className="cat-card-count">{MACHINES_BY_CATEGORY[cat.key].length} models available</div>
              <div className="cat-card-link">View all →</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
