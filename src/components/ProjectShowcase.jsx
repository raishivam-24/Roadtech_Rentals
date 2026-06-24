import { PROJECTS } from "../data/projects";
import MachineImage from "./MachineImage";
import "../css/project-showcase.css";

/**
 * Ajax-style project showcase ("YETTINAHOLE PROJECT, Karnataka — 2014 — See more").
 * Currently using PLACEHOLDER data from src/data/projects.js — swap in real
 * client project names, locations, years, and photos once available.
 */
export default function ProjectShowcase() {
  return (
    <section className="section project-showcase">
      <div className="section-header">
        <div className="section-tag">// Project Showcase</div>
        <h2 className="section-title">
          SITES WE'VE <em>WORKED ON</em>
        </h2>
        <p className="section-desc">
          Placeholder entries — replace with the client's actual completed/ongoing project names,
          locations, and photos.
        </p>
      </div>
      <div className="showcase-grid">
        {PROJECTS.map((p) => (
          <div key={p.id} className="showcase-card">
            <MachineImage src={p.image} alt={p.title} label={p.title} icon="🏗️" aspect="4/3" />
            <div className="showcase-card-body">
              <div className="showcase-card-year">{p.year}</div>
              <div className="showcase-card-title">{p.title}</div>
              <div className="showcase-card-location">{p.location}</div>
              <p className="showcase-card-desc">{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
