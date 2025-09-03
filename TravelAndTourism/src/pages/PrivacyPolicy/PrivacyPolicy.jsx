import React from "react";
import "./PrivacyPolicy.css";
import backgroundImage from "../../assets/images/contact/background.jpeg";

const PrivacyPolicyPage = () => {
  return (
    <div
      className="privacy-page-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="privacy-page-overlay">
        <div className="privacy-page-content">
          <div className="privacy-header">
            <h1>Privacy Policy</h1>
            <h2>Northern India Trip</h2>
            <p className="effective-date">Effective Date: 08 August 2025</p>
          </div>

          <div className="privacy-sections">
            <div className="privacy-section">
              <h3>📋 Scope</h3>
              <p>In this privacy policy, 'we', 'us', and 'our' refer to Northern India Trip. Please read the Privacy Policy carefully as it applies to your use of our official internet site www.northernindiatrip.com (the "Site") and any microsites contained therein (collectively, our "Platform(s)"), whether as a guest or a registered user.</p>
              <p>Use of our Platform(s) includes accessing, browsing, or registering to use our Platform(s). Your continued use of this Platform provides your unconditional consent to us collecting, storing, using, and disclosing your personal information in the manner set out below.</p>
              <p>This privacy policy is subject to, and must be read in conjunction with, our Terms of Use.</p>
              <p>This Policy applies to all external parties, namely:</p>
              <ul>
                <li>Visitors to Northern India Trip's websites and social media pages.</li>
                <li>Subscribers to Northern India Trip's briefings, newsletters, and marketing materials.</li>
                <li>Any other individual whose personal information may be collected, stored, and used by Northern India Trip or its offices.</li>
              </ul>
              <p>We have provided this Privacy Policy to help you understand how we collect, use, and protect your information when you visit and use any of Northern India Trip's websites, microsites, social media platforms, tools, and any other technological platforms in whatever form (the "Platform(s)"), and how that information will be treated.</p>
            </div>

            <div className="privacy-section">
              <h3>🔐 Personal Information That Northern India Trip Collects</h3>
              <p>The types of personal information we collect will depend on the nature of your dealings with our products and services and may include:</p>
              <ul>
                <li>Your name, contact details, travel preferences, photographic information, and your views/opinions about our services.</li>
              </ul>
              <p>In particular:</p>
              <ul>
                <li><strong>Travel Agents/Partners:</strong> If you are a travel agent or partner who registers on our website, we may collect your name, gender, date of birth, job title, email address, and business contact details.</li>
                <li><strong>Travelers/Tourists:</strong> If you are a traveler or tourist who subscribes to our newsletters or registers for an account, we may collect your name, address, email address, age group, and information about the type of trips you are looking for so we can provide you with relevant material.</li>
                <li><strong>Business Dealings:</strong> If you deal with us in the course of business, we will generally collect only your business contact details.</li>
                <li><strong>Complaints:</strong> If you make a complaint, we will generally collect your name, address or email address, and details about the complaint.</li>
              </ul>
              <p>We may also collect personal information about our employees, contractors, and trek leaders (personnel records).</p>
            </div>

            <div className="privacy-section">
              <h3>🌐 Information Collected During Website Browsing</h3>
              <p>When you browse, read pages, or download information from our website, we automatically gather and store certain technical information about your visit. This information does not personally identify you.</p>
              <p>We collect:</p>
              <ul>
                <li>The Internet domain of your service provider and IP address.</li>
                <li>The type of browser and operating system used.</li>
                <li>The date and time of your visit.</li>
                <li>The pages/URLs you have visited.</li>
                <li>The address of any referring website.</li>
              </ul>
              <p>This data is used only to help improve our website, track usage patterns, and understand visitor preferences. We never track or record personal details about individual visits unless legally required.</p>
            </div>

            <div className="privacy-section">
              <h3>🍪 Online Privacy Issues</h3>
              <p>When you use Northern India Trip's Platform(s), information may be recorded for website personalization, research, statistical reporting, and service improvement.</p>
              <p>We use cookies and session tools to:</p>
              <ul>
                <li>Enhance user experience.</li>
                <li>Track anonymous session data such as IP address, referring site, and pages visited.</li>
                <li>Analyze trends and site performance.</li>
              </ul>
              <p>Cookies do not identify you personally, and you may disable them in your browser settings (though some site features may not function properly).</p>
              <p>You can generally visit our Platform(s) without revealing personal information, but certain services (e.g., newsletter subscription, booking requests) require you to provide details. We will seek your consent before sending you marketing or storing your data for future use.</p>
            </div>

            <div className="privacy-section">
              <h3>🛡️ Security & Legal Compliance</h3>
              <p>Unauthorized attempts to upload or modify information on our website are strictly prohibited and may be punishable under the Indian IT Act (2000) / Indian IT (Amendment) Act 2008.</p>
              <p>We may preserve statistical and log files indefinitely for security purposes and to maintain the integrity of our systems.</p>
              <p>We will not attempt to identify individual users or link browsing activity to them unless required during a lawful investigation by an authorized law enforcement agency.</p>
            </div>

            <div className="privacy-section">
              <h3>📱 Social Media Use</h3>
              <p>Where you interact with Northern India Trip via our social media pages (such as Facebook, Instagram, Twitter), we will not collect personal information without your consent. Any information you share on these platforms is subject to the privacy policies of the respective social media services.</p>
            </div>

            <div className="privacy-section">
              <h3>📞 Contact Us</h3>
              <p>For questions, complaints, or requests regarding your privacy:</p>
              <div className="contact-details">
                <h4>Northern India Trip</h4>
                <p><strong>Email:</strong> <a href="mailto:info@northernindiatrip.com">info@northernindiatrip.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+917409949999">+91-7409949999</a></p>
                <p><strong>Website:</strong> <a href="https://www.northernindiatrip.com" target="_blank" rel="noopener noreferrer">Northernindiatrip.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
