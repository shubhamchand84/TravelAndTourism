import React, { useState } from "react";
import "./TermsConditions.css";

const TermsConditions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleTerms = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="terms-container">
      <button className="terms-toggle-btn" onClick={toggleTerms}>
        <span>Terms & Conditions</span>
        <span className={`arrow ${isOpen ? 'up' : 'down'}`}>▼</span>
      </button>
      
      {isOpen && (
        <div className="terms-content">
          <div className="terms-header">
            <h2>Terms & Conditions</h2>
            <h3>Northern India Trip</h3>
            <p className="last-updated">Last Updated: 08 August 2025</p>
          </div>

          <div className="terms-sections">
            <div className="terms-section">
              <h4>1. Introduction</h4>
              <p>Welcome to Northern India Trip. By booking any trek, trip, taxi service, hotel rental, or related package, you agree to these Terms & Conditions.</p>
            </div>

            <div className="terms-section">
              <h4>2. Services Provided</h4>
              <p>We offer:</p>
              <ul>
                <li>Treks & expeditions in Uttarakhand, Himachal Pradesh, and other destinations.</li>
                <li>Domestic tours and sightseeing packages.</li>
                <li>Hotel/homestay reservations.</li>
                <li>Taxi and transport services.</li>
                <li>Special packages (honeymoon, adventure, cultural, pilgrimage, etc.).</li>
              </ul>
            </div>

            <div className="terms-section">
              <h4>3. Booking & Confirmation</h4>
              <ul>
                <li>Bookings are valid only upon receipt of advance payment.</li>
                <li>We reserve the right to decline bookings without stating reasons.</li>
              </ul>
            </div>

            <div className="terms-section">
              <h4>4. Payment Terms</h4>
              <ul>
                <li><strong>Advance:</strong> 30–50% of total cost at booking.</li>
                <li><strong>Balance:</strong> Payable before trip commencement.</li>
                <li><strong>Accepted modes:</strong> Bank transfer, UPI, or other approved methods.</li>
              </ul>
            </div>

            <div className="terms-section">
              <h4>5. Pricing Policy</h4>
              <ul>
                <li>Prices are in INR and subject to change due to taxes, fuel rates, or permits.</li>
                <li>The confirmed price will be honored unless affected by force majeure.</li>
              </ul>
            </div>

            <div className="terms-section">
              <h4>6. Cancellation & Refunds</h4>
              <div className="cancellation-details">
                <div className="cancellation-type">
                  <h5>Client Cancellation:</h5>
                  <ul>
                    <li><strong>30+ days:</strong> 80% refund of advance.</li>
                    <li><strong>15–29 days:</strong> 50% refund of advance.</li>
                    <li><strong>0–14 days:</strong> No refund.</li>
                  </ul>
                </div>
                <div className="cancellation-type">
                  <h5>Company Cancellation:</h5>
                  <ul>
                    <li>Full refund or free rescheduling.</li>
                  </ul>
                </div>
                <p><strong>Note:</strong> Refunds processed in 7–14 working days (excluding bank fees).</p>
              </div>
            </div>

            <div className="terms-section">
              <h4>7. Changes in Itinerary</h4>
              <p>We may alter itineraries due to weather, safety, political unrest, or other unavoidable factors.</p>
            </div>

            <div className="terms-section">
              <h4>8. Travel Documents & Permits</h4>
              <p>Clients must carry valid ID and required permits. We assist but final approval rests with authorities.</p>
            </div>

            <div className="terms-section">
              <h4>9. Safety & Risk Acknowledgment</h4>
              <p>Treks and adventure activities carry inherent risks. Clients accept all such risks, and we are not liable for injuries, illness, loss, or damages. Travel insurance is recommended.</p>
            </div>

            <div className="terms-section">
              <h4>10. Code of Conduct</h4>
              <p>Clients must:</p>
              <ul>
                <li>Follow instructions of guides and drivers.</li>
                <li>Respect local customs and the environment.</li>
                <li>Avoid illegal activities.</li>
              </ul>
            </div>

            <div className="terms-section">
              <h4>11. Liability Limitations</h4>
              <p>We are not responsible for:</p>
              <ul>
                <li>Delays/losses due to natural disasters, accidents, political unrest, or government restrictions.</li>
                <li>Loss or theft of belongings.</li>
                <li>Third-party service issues.</li>
              </ul>
            </div>

            <div className="terms-section">
              <h4>12. Force Majeure</h4>
              <p>We are not liable for events beyond our control including natural disasters, strikes, political unrest, pandemics, or government orders.</p>
            </div>

            <div className="terms-section">
              <h4>13. Governing Law</h4>
              <p>These terms are governed by Indian law, with disputes under Dehradun, Uttarakhand jurisdiction.</p>
            </div>

            <div className="terms-section">
              <h4>14. Contact Information</h4>
              <div className="contact-details">
                <h5>Northern India Trip</h5>
                <p><strong>Email:</strong> <a href="mailto:info@northernindiatrip.com">info@northernindiatrip.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+917409949999">+91-7409949999</a></p>
                <p><strong>Website:</strong> <a href="https://www.northernindiatrip.com" target="_blank" rel="noopener noreferrer">www.northernindiatrip.com</a></p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TermsConditions;
