import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import backgroundImage from "../../assets/images/contact/background.jpeg";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_r8c1oeq",
        "template_768qdlt",
        form,
        "w7gqE0xZzu32Rgu-f"
      )
      .then(
        () => setSubmitted(true),
        (error) => alert("Failed to send: " + error.text)
      );

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleTermsClick = (e) => {
    e.preventDefault();
    navigate("/terms");
  };

  const handlePrivacyClick = (e) => {
    e.preventDefault();
    navigate("/privacy");
  };

  return (
    <div
      className="contact-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="contact-overlay">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>
            For commissions and inquiries, please email:
            <br />
            <a href="mailto:hello@northernindiatrip.com" className="contact-email">
              hello@northernindiatrip.com
            </a>
            <br />
            or send a message via this form.
          </p>
          <a
            href="https://www.instagram.com/northernindiatrip"
            target="_blank"
            rel="noreferrer"
            className="instagram-icon"
          >
            <FaInstagram size={28} />
          </a>
        </div>

        <div className="contact-form">
          <h3>Send a Message</h3>
          {submitted ? (
            <div className="success-message">
              Thank you! Your message has been sent. We'll be in touch.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Write your message"
                value={form.message}
                onChange={handleChange}
                required
              />
              <button type="submit">Submit</button>
            </form>
          )}
        </div>

        <div className="legal-links">
          <button onClick={handleTermsClick} className="legal-link terms-link">
            Terms & Conditions
          </button>
          <button onClick={handlePrivacyClick} className="legal-link privacy-link">
            Privacy Policy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
