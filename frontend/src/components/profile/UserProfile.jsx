import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import './UserProfile.css';

const UserProfile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
 
  // Safeguard if user null
  const name = user?.firstName || user?.name || 'User';
  const email = user?.email || '—';
  const role = user?.role || '—';
  const phone = user?.phone || '—';
  const image = user?.image || null; // could be data URI or URL

  // Button handlers (modify as per your routes / modals)
  const handleShowQueries = () => {
    // example: navigate to queries page
    navigate('/queries'); 
  };

  const handleUpdateAddress = () => {
    // open address update page/modal
    navigate('/update-address');
  };

  const handleUpdateSelf = () => {
    // open profile edit page/modal
    navigate('/update-profile');
  };

  return (
    <div className="up-page">
      <div className="up-card">
        {/* Left: avatar + info */}
        <div className="up-left">
          <div className="up-avatar">
            {image ? (
              // image could be base64 data URI or remote url
              <img src={image} alt={name} />
            ) : (
              <div className="up-avatar-fallback"><FaUser /></div>
            )}
          </div>

          <div className="up-info">
            <h2 className="up-name">{name}</h2>
            <p><strong>Email:</strong> <span className="up-value">{email}</span></p>
            <p><strong>Role:</strong> <span className="up-value">{role}</span></p>
            <p><strong>Phone:</strong> <span className="up-value">{phone}</span></p>
            {/* If you want to show id */}
            {user?.id && <p className="up-id"><strong>ID:</strong> <span className="up-value">{user.id}</span></p>}
          </div>
        </div>

        {/* Right: actions */}
        <div className="up-right">
          <button className="up-btn up-btn-primary" onClick={handleShowQueries}>
            Show All Query
          </button>

          <button className="up-btn" onClick={handleUpdateAddress}>
            Update Address
          </button>

          <button className="up-btn" onClick={handleUpdateSelf}>
            Update Self
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
