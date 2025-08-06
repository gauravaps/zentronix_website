import React from 'react';
import { Link } from 'react-router-dom';
import './NotAuthorized.css'; // import the external CSS

const NotAuthorized = () => (
  <div className="na-page">
    <div className="na-card">
      <div className="na-image-wrap">
        {/* Put an image in public/images/not-authorized.png (see instructions below) */}
        <img
          src="/images/not-authorized.jpg"
          alt="Access denied illustration"
          className="na-image"
        />
      </div>

      <div className="na-content">
        <h1 className="na-title">Access Denied</h1>
        <p className="na-desc">
          You don’t have permission to view this page. If you think this is a mistake,
          contact the administrator.
        </p>

        <div className="na-actions">
          <Link to="/" className="na-btn na-btn-primary">Go back home</Link>
          <Link to="/contact-us" className="na-btn">Contact Support</Link>
        </div>

        <small className="na-note">If you need admin access, please request it from your team lead.</small>
      </div>
    </div>
  </div>
);

export default NotAuthorized;
