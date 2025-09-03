import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const BookNow = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    dates: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_r8c1oeq",         // Your EmailJS service ID
        "template_768qdlt",        // Your EmailJS template ID
        form,
        "w7gqE0xZzu32Rgu-f"        // Your EmailJS public key
      )
      .then(
        () => setSubmitted(true),
        (error) => alert("Failed to send: " + error.text)
      );

    setForm({
      name: "",
      email: "",
      phone: "",
      destination: "",
      dates: "",
      message: "",
    });
  };

  return (
    <div className="book-now-section">
      <h2>Book Now</h2>
      {submitted ? (
        <div className="alert alert-success">
          Thank you! Your booking request has been sent. We will contact you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
          <div className="mb-3">
            <label>Name</label>
            <input
              className="form-control"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input
              className="form-control"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label>Phone Number</label>
            <input
              className="form-control"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label>Destination Interested In</label>
            <input
              className="form-control"
              name="destination"
              value={form.destination}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label>Dates of Travel</label>
            <input
              className="form-control"
              name="dates"
              type="text"
              value={form.dates}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label>Message</label>
            <textarea
              className="form-control"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Send Booking Request
          </button>
        </form>
      )}
    </div>
  );
};

export default BookNow;