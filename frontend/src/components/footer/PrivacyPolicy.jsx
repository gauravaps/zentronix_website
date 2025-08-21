import React, { useEffect, useState } from "react";
import "./PrivacyPolicy.css";
import axios from "axios";

const PrivacyPolicy = () => {

const [companyInfo, setCompanyInfo] = useState({
    email: "",
    phone: "",
    address: "",
    website: "www.zentronixinfotech.com/",
  });

  const fetchAddress = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/get_address");
      if (res.data.data && res.data.data.length > 0) {
        const current = res.data.data[0];
        setCompanyInfo({
          email: current.email || "",
          phone: current.phone || "",
          address: current.address || "",
          website: "www.zentronixinfotech.com/",
        });
      }
    } catch (err) {
      console.error("Error fetching company info:", err);
    }
  };

  useEffect(() => {
    fetchAddress();
  }, []);



  return (
    <div className="privacy_policy-container">
      <h1 className="privacy_policy-gradient-heading">Privacy Policy</h1>
      <p>
        Welcome to <b>Zentronix Infotech</b>. Your privacy is critically
        important to us, and we are committed to protecting the personal
        information you share with us. This Privacy Policy outlines how we
        collect, use, protect, and disclose your information when you visit our
        website (
        <a
          href="https://www.zentronixinfotech.com"
          target="_blank"
          rel="noreferrer"
        >
          {companyInfo.website}
        </a>
        ).
      </p>
      <p>
        By using our website, you consent to the data practices described in this
        Privacy Policy. If you do not agree with the terms outlined here, please
        refrain from using our services.
      </p>

      <h2 className="privacy_policy-gradient-heading">1. Information We Collect</h2>
      <h3 className="privacy_policy-subheading">1.1 Personal Data</h3>
      <p>When you interact with our website, we may collect personal details such as:</p>
      <ul className="privacy_policy-list">
        <li>Full Name</li>
        <li>Email Address</li>
        <li>Phone Number</li>
        <li>Company/Organization Details (if applicable)</li>
        <li>Billing and Payment Information</li>
      </ul>

      <h3 className="privacy_policy-subheading">1.2 Device Information</h3>
      <p>We automatically collect certain information about your device, including:</p>
      <ul className="privacy_policy-list">
        <li>IP Address</li>
        <li>Browser Type and Version</li>
        <li>Operating System</li>
        <li>Time Zone</li>
        <li>Referral URLs</li>
        <li>Website Interaction Data</li>
      </ul>

      <h3 className="privacy_policy-subheading">1.3 Cookies and Tracking</h3>
      <p>
        We use cookies and similar tracking technologies to monitor activity and
        enhance your browsing experience. You can choose to disable cookies
        through your browser settings.
      </p>

      <h2 className="privacy_policy-gradient-heading">2. How We Use Your Information</h2>
      <ul className="privacy_policy-list">
        <li>To provide and manage our IT services and customer support</li>
        <li>To personalize user experience and improve our website</li>
        <li>To ensure security and prevent fraud</li>
        <li>To comply with legal obligations</li>
        <li>To send marketing and promotional updates (only with your consent)</li>
      </ul>

      <h2 className="privacy_policy-gradient-heading">3. Your Data Protection Rights</h2>
      <h3 className="privacy_policy-subheading">3.1 General Rights</h3>
      <p>As a user, you have rights regarding your personal data:</p>
      <ul className="privacy_policy-list">
        <li>Right to Access – Request a copy of your data</li>
        <li>Right to Rectification – Correct inaccurate data</li>
        <li>Right to Erasure – Request deletion of your data</li>
        <li>Right to Restrict Processing – Limit how data is used</li>
        <li>Right to Data Portability – Transfer your data to another service</li>
        <li>Right to Object – Opt out of marketing</li>
      </ul>

      <h3 className="privacy_policy-subheading">3.2 GDPR (For EU Residents)</h3>
      <p>
        If you are located in the European Economic Area (EEA), you have
        additional rights under GDPR. You may contact us to exercise these rights.
      </p>

      <h3 className="privacy_policy-subheading">3.3 CCPA (For California Residents)</h3>
      <p>
        Under the California Consumer Privacy Act (CCPA), California residents
        may request details of how we collect and use their personal data, or
        request deletion of their information.
      </p>

      <h2 className="privacy_policy-gradient-heading">4. Data Security Measures</h2>
      <p>
        We implement industry-standard security measures to protect your data,
        including:
      </p>
      <ul className="privacy_policy-list">
        <li>Encryption and Secure Storage</li>
        <li>Firewalls and Access Controls</li>
        <li>Regular Security Audits</li>
        <li>Secure Payment Processing (SSL Encryption)</li>
      </ul>
      <p>
        Despite our best efforts, no method of data transmission over the
        internet is 100% secure. We encourage you to use caution when sharing
        personal data online.
      </p>

      <h2 className="privacy_policy-gradient-heading">5. Third-Party Services and Links</h2>
      <p>
        Our website may contain links to third-party services. Zentronix Infotech
        is not responsible for their privacy practices, and we recommend
        reviewing their policies before sharing your data.
      </p>

      <h2 className="privacy_policy-gradient-heading">6. Information Sharing and Disclosure</h2>
      <p>
        We do not sell or rent your personal data. However, we may share data in
        cases such as:
      </p>
      <ul className="privacy_policy-list">
        <li>Legal Obligations (law, court order, or regulation)</li>
        <li>Business Transfers (merger, acquisition, or sale of assets)</li>
        <li>Fraud Prevention and Security Measures</li>
      </ul>

      <h2 className="privacy_policy-gradient-heading">7. Retention of Your Information</h2>
      <p>
        We retain your personal data only as long as necessary to provide our
        services. Once no longer needed, we securely delete or anonymize your
        data.
      </p>

      <h2 className="privacy_policy-gradient-heading">8. Updates to Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any updates will be
        posted on this page, and we encourage you to review it regularly.
      </p>

      <h2 className="privacy_policy-gradient-heading">9. Contact Information</h2>
      <p>If you have any questions or concerns, you can contact us:</p>
      <p>📍 {companyInfo.address}</p>
      <p>📧 Email: {companyInfo.email}</p>
      <p>☎ Phone: +91-{companyInfo.phone}</p>
      <p>
        🌐 Website:{" "}
        <a
          href="https://www.zentronixinfotech.com"
          target="_blank"
          rel="noreferrer"
        >
          www.zentronixinfotech.com
        </a>
      </p>

      <footer className="privacy_policy-footer">
        <p>© {new Date().getFullYear()} Zentronix Infotech. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
