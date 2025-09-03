import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="container py-5">
      <h2
        className="mb-4 text-center text-primary fw-bold"
        data-aos="fade-down"
      >
        Who We Are
      </h2>

      <p
        className="lead text-center mb-5 text-secondary"
        data-aos="fade-up"
      >
        At <strong>Northern India Trip</strong>, we believe that travel isn’t just about where you go —
        it’s about the memories you make along the way. Founded in the heart of Uttarakhand,
        we are a team of passionate explorers who turned our love for the mountains and
        culture into a mission to craft unforgettable journeys.
      </p>

      <div className="row">
        <div className="col-md-6 mb-4" data-aos="fade-right">
          <p className="text-muted">
            Whether you're chasing sunsets at the summit, strolling through flower-strewn
            valleys, honeymooning in serene hill towns, or simply looking for a peaceful
            weekend escape — we’ve got you covered. We specialize in curated experiences
            that blend adventure, comfort, and local authenticity.
          </p>
        </div>

        <div className="col-md-6 mb-4" data-aos="fade-left">
          <p className="text-muted">
            From arranging cozy homestays to planning once-in-a-lifetime treks like Hampta
            Pass, Kedarkantha, or the Valley of Flowers, we work closely with local communities
            and experts to bring you trips that are safe, sustainable, and soul-satisfying.
          </p>
        </div>
      </div>

      <div
        className="my-5 p-4 bg-light rounded shadow-sm"
        data-aos="fade-up"
      >
        <h4 className="mb-3 text-dark">🎯 Our Mission</h4>
        <p className="text-muted">
          To make travel <strong>affordable</strong>, <strong>authentic</strong>, and <strong>accessible</strong> —
          with a special focus on the breathtaking natural beauty and rich heritage of Northern India.
          We aim to empower travelers with honest guidance, transparent pricing,
          and real experiences that go beyond the ordinary.
        </p>
      </div>

      <div
        className="p-4 bg-white border rounded shadow-sm"
        data-aos="fade-up"
      >
        <h4 className="mb-3 text-dark">🤝 Why Choose Us?</h4>
        <ul className="text-muted list-unstyled">
          <li className="mb-2">
            <strong>Local Expertise:</strong> Born and based in Uttarakhand, we know the terrain, trails, and hidden gems like no one else.
          </li>
          <li className="mb-2">
            <strong>Certified Safety:</strong> Trained trek leaders, medical support, and verified stays to ensure your safety at every step.
          </li>
          <li className="mb-2">
            <strong>Customized Itineraries:</strong> Whether solo, couple, family, or group — we design routes that suit your pace and preference.
          </li>
          <li className="mb-2">
            <strong>Sustainable Travel:</strong> We support eco-tourism and partner with locals to reduce our footprint and boost the community.
          </li>
          <li className="mb-2">
            <strong>24/7 Support:</strong> From your first call to the final goodbye, we’re just one message away.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
