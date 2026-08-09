"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Mock API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="glow-orb glow-orb-teal" style={{ bottom: "5%", right: "10%" }}></div>

      <div className="section-header">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have an exciting project idea, a job opportunity, or just want to say hello? Drop me a message below.
        </p>
      </div>

      <div className="grid-2 contact-grid">
        {/* Info Column */}
        <div className="contact-info-column glass-card p-large">
          <h3 className="column-title">Direct Connection</h3>
          <p className="contact-info-intro">
            Feel free to contact me through my details listed below. I usually respond within 24 hours.
          </p>

          <div className="contact-details-list">
            {/* Email */}
            <a href="mailto:raihanul.islam@example.com" className="contact-detail-item">
              <div className="contact-icon-wrapper circle-purple">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="contact-detail-text">
                <span className="contact-label">Email Address</span>
                <span className="contact-value">raihanul.islam@example.com</span>
              </div>
            </a>

            {/* Phone */}
            <a href="tel:+1234567890" className="contact-detail-item">
              <div className="contact-icon-wrapper circle-teal">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="contact-detail-text">
                <span className="contact-label">Phone Number</span>
                <span className="contact-value">+1 (234) 567-890</span>
              </div>
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="contact-detail-item">
              <div className="contact-icon-wrapper circle-green">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.008 14.07 1.01 11.998 1.01c-5.438 0-9.866 4.372-9.87 9.802 0 1.76.476 3.479 1.378 5.02l-.962 3.509 3.6-.928c1.554.849 3.125 1.293 4.503 1.293z" />
                </svg>
              </div>
              <div className="contact-detail-text">
                <span className="contact-label">WhatsApp (Chat)</span>
                <span className="contact-value">+1 (234) 567-890</span>
              </div>
            </a>
          </div>
        </div>

        {/* Form Column */}
        <div className="contact-form-column glass-card p-large">
          <h3 className="column-title">Send a Message</h3>
          
          {submitStatus === "success" && (
            <div className="form-status-banner banner-success">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "8px" }}>
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Message sent successfully! Thank you.
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`form-control ${errors.name ? "input-error" : ""}`}
                placeholder="Raihanul Islam"
              />
              {errors.name && <span className="error-message-text">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`form-control ${errors.email ? "input-error" : ""}`}
                placeholder="raihanul.islam@example.com"
              />
              {errors.email && <span className="error-message-text">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject (Optional)</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-control"
                placeholder="Project Discussion"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`form-control ${errors.message ? "input-error" : ""}`}
                placeholder="Write your message here..."
              ></textarea>
              {errors.message && <span className="error-message-text">{errors.message}</span>}
            </div>

            <button type="submit" className="btn btn-primary btn-full-width" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Sending Message...
                </>
              ) : (
                <>
                  Send Message
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "6px" }}>
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
