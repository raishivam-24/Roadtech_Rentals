import { useState } from "react";
import "../css/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", phone: "", machine: "", message: "" });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <section className="section contact-bg" id="contact">
      <div className="section-header">
        <div className="section-tag">// Get in Touch</div>
        <h2 className="section-title">
          REQUEST A <em>QUOTE</em>
        </h2>
      </div>
      <div className="contact-grid">
        <div className="contact-info">
          <h3>Let's Build Something Together</h3>
          <p>
            Have a road project coming up? Need a milling machine, soil stabilizer, or paver on
            short notice? We have the fleet and the expertise. Reach out and we'll get back to you
            within hours.
          </p>
          <div className="contact-detail">
            <span className="contact-detail-icon">📍</span>
            <span className="contact-detail-text">Pan India Delivery & Service Coverage</span>
          </div>
          <div className="contact-detail">
            <span className="contact-detail-icon">📞</span>
            <span className="contact-detail-text">Call us for immediate enquiries</span>
          </div>
          <div className="contact-detail">
            <span className="contact-detail-icon">🕐</span>
            <span className="contact-detail-text">24/7 Support — Site emergencies handled fast</span>
          </div>
          <div className="contact-detail">
            <span className="contact-detail-icon">🏗️</span>
            <span className="contact-detail-text">Wirtgen · SANY · Bomag · XCMG Fleet Available</span>
          </div>
        </div>
        <div className="contact-form">
          <div className="form-row">
            <input
              className="form-input"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange("name")}
            />
            <input
              className="form-input"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange("phone")}
            />
          </div>
          <input
            className="form-input"
            placeholder="Machine Required (e.g. Wirtgen W200 FI)"
            value={formData.machine}
            onChange={handleChange("machine")}
          />
          <textarea
            className="form-textarea"
            placeholder="Project details, location, duration..."
            value={formData.message}
            onChange={handleChange("message")}
          />
          <button className="btn-primary contact-submit">Submit Enquiry →</button>
        </div>
      </div>
    </section>
  );
}
