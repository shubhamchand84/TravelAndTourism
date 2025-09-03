import React from "react";
import "./TermsConditions.css";
import backgroundImage from "../../assets/images/contact/background.jpeg";

const TermsConditionsPage = () => {
  return (
    <div
      className="terms-page-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="terms-page-overlay">
        <div className="terms-page-content">
          <div className="terms-header">
            <h1>Terms & Conditions</h1>
            <h2>Northern India Trip</h2>
            <p className="last-updated">Last Updated: 08 August 2025</p>
          </div>

          <div className="terms-sections">
            <div className="terms-section">
              <h3>1. Introduction</h3>
              <p>Welcome to Northern India Trip. By booking any trek, trip, taxi service, hotel rental, or related package, you agree to these Terms & Conditions.</p>
            </div>

            <div className="terms-section">
              <h3>2. Services Provided</h3>
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
              <h3>3. Booking & Confirmation</h3>
              <ul>
                <li>Bookings are valid only upon receipt of advance payment.</li>
                <li>We reserve the right to decline bookings without stating reasons.</li>
              </ul>
            </div>

            <div className="terms-section">
              <h3>4. Payment Terms</h3>
              <ul>
                <li><strong>Advance:</strong> 30–50% of total cost at booking.</li>
                <li><strong>Balance:</strong> Payable before trip commencement.</li>
                <li><strong>Accepted modes:</strong> Bank transfer, UPI, or other approved methods.</li>
              </ul>
            </div>

            <div className="terms-section">
              <h3>5. Pricing Policy</h3>
              <ul>
                <li>Prices are in INR and subject to change due to taxes, fuel rates, or permits.</li>
                <li>The confirmed price will be honored unless affected by force majeure.</li>
              </ul>
            </div>

            <div className="terms-section">
              <h3>6. Cancellation & Refunds</h3>
              <div className="cancellation-details">
                <div className="cancellation-type">
                  <h4>Client Cancellation:</h4>
                  <ul>
                    <li><strong>30+ days:</strong> 80% refund of advance.</li>
                    <li><strong>15–29 days:</strong> 50% refund of advance.</li>
                    <li><strong>0–14 days:</strong> No refund.</li>
                  </ul>
                </div>
                <div className="cancellation-type">
                  <h4>Company Cancellation:</h4>
                  <ul>
                    <li>Full refund or free rescheduling.</li>
                  </ul>
                </div>
                <p><strong>Note:</strong> Refunds processed in 7–14 working days (excluding bank fees).</p>
              </div>
            </div>

            <div className="terms-section">
              <h3>7. Changes in Itinerary</h3>
              <p>We may alter itineraries due to weather, safety, political unrest, or other unavoidable factors.</p>
            </div>

            <div className="terms-section">
              <h3>8. Travel Documents & Permits</h3>
              <p>Clients must carry valid ID and required permits. We assist but final approval rests with authorities.</p>
            </div>

            <div className="terms-section">
              <h3>9. Safety & Risk Acknowledgment</h3>
              <p>Treks and adventure activities carry inherent risks. Clients accept all such risks, and we are not liable for injuries, illness, loss, or damages. Travel insurance is recommended.</p>
            </div>

            <div className="terms-section">
              <h3>10. Code of Conduct</h3>
              <p>Clients must:</p>
              <ul>
                <li>Follow instructions of guides and drivers.</li>
                <li>Respect local customs and the environment.</li>
                <li>Avoid illegal activities.</li>
              </ul>
            </div>

            <div className="terms-section">
              <h3>11. Liability Limitations</h3>
              <p>We are not responsible for:</p>
              <ul>
                <li>Delays/losses due to natural disasters, accidents, political unrest, or government restrictions.</li>
                <li>Loss or theft of belongings.</li>
                <li>Third-party service issues.</li>
              </ul>
            </div>

            <div className="terms-section">
              <h3>12. Force Majeure</h3>
              <p>We are not liable for events beyond our control including natural disasters, strikes, political unrest, pandemics, or government orders.</p>
            </div>

            <div className="terms-section">
              <h3>13. Governing Law</h3>
              <p>These terms are governed by Indian law, with disputes under Dehradun, Uttarakhand jurisdiction.</p>
            </div>

            <div className="terms-section">
              <h3>14. Contact Information</h3>
              <div className="contact-details">
                <h4>Northern India Trip</h4>
                <p><strong>Email:</strong> <a href="mailto:info@northernindiatrip.com">info@northernindiatrip.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+917409949999">+91-7409949999</a></p>
                <p><strong>Website:</strong> <a href="https://www.northernindiatrip.com" target="_blank" rel="noopener noreferrer">www.northernindiatrip.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditionsPage;
