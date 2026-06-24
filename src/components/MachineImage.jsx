import { useState } from "react";
import "../css/machine-image.css";

/**
 * Renders a machine/category photo if it loads successfully.
 * Falls back to a styled placeholder box (with label + icon) if the
 * image is missing — so the site looks finished even before the client
 * supplies real photos. Just drop the real file at the same path to replace it.
 */
export default function MachineImage({ src, alt, label, icon = "📷", aspect = "16/10" }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div className="machine-img-placeholder" style={{ aspectRatio: aspect }}>
        <span className="machine-img-placeholder-icon">{icon}</span>
        <span className="machine-img-placeholder-label">{label}</span>
        <span className="machine-img-placeholder-hint">Photo coming soon</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="machine-img-real"
      style={{ aspectRatio: aspect }}
      onError={() => setFailed(true)}
      loading="lazy"
    />
  );
}
