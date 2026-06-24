import { useState } from "react";
import "../css/contact.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", phone: "", machine: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire to backend enquiry endpoint (Node/Express + Nodemailer, same pattern as Atlantic Imperial)
    setSubmitted(true);
  };

  return (
    <section className="section contact-bg contact-page" id="contact">
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
          {submitted ? (
            <div className="contact-success">
              ✓ Thank you! Your enquiry has been received. We'll get back to you shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form-fields">
              <div className="form-row">
                <input
                  className="form-input"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange("name")}
                  required
                />
                <input
                  className="form-input"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange("phone")}
                  required
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
              <button type="submit" className="btn-primary contact-submit">
                Submit Enquiry →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
