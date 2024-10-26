"use client"; // Deklarerar att detta är en Client Component

import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"; // Importera ikoner för sociala medier

const CallToAction = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });

  const [formLoadedAt, setFormLoadedAt] = useState(Date.now());
  const [status, setStatus] = useState("");

  useEffect(() => {
    setFormLoadedAt(Date.now());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Skickar...");

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, formLoadedAt }),
      });

      if (response.ok) {
        setStatus("Tack! Ditt meddelande har skickats.");
        setFormData({ email: "", subject: "", message: "", honeypot: "" });
      } else {
        setStatus("Något gick fel. Försök igen senare.");
      }
    } catch (error) {
      setStatus("Något gick fel. Försök igen senare.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Kontakta oss</h2>
      <p className="section-subtitle">
        Vi ser fram emot att höra från dig! Fyll i formuläret nedan eller
        kontakta oss via sociala medier.
      </p>

      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Din e-postadress
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject" className="form-label">
              Ämne
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              value={formData.subject}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Meddelande
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              className="form-input"
            ></textarea>
          </div>

          {/* Honeypot field, hidden from users */}
          <div className="honeypot">
            <label htmlFor="honeypot">Lämna detta fält tomt</label>
            <input
              id="honeypot"
              name="honeypot"
              type="text"
              value={formData.honeypot}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="form-button">
              Skicka meddelande
            </button>
          </div>
        </form>

        {status && <p className="form-status">{status}</p>}
      </div>

      <div className="social-media-section">
        <h3 className="social-title">Följ oss på sociala medier</h3>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
        </div>
        <p className="contact-info">E-post: info@bonnatosen.se | Telefon: 012-345 6789</p>
      </div>
    </section>
  );
};

export default CallToAction;
