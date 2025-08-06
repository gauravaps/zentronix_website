import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import './UserProfile.css';

const UserProfile = () => {
  const { user, isLoading, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // normalize role check
  const roleStr = typeof user?.role === 'string' ? user.role : user?.role?.role || null;
  const isAdmin = roleStr === 'admin';

  useEffect(() => {
    if (isLoading) return;

    // if not authenticated -> go to login (recommended)
    if (!isAuthenticated) {
      navigate('/login', { replace: true });
      return;
    }

    // if authenticated but not dmin -> show not-authorized
    if (!isAdmin) {
      navigate('/not-authorize', { replace: true });
      return;
    }

  }, [isLoading, isAuthenticated, isAdmin, navigate]);

  if (isLoading) {
    return (
      <div className="up-page">
        <div className="up-card">
          <div style={{ padding: 24 }}>Loading...</div>
        </div>
      </div>
    );
  }

  
  if (!isAdmin) return null;

  const name = user?.firstName || user?.name || 'User';
  const email = user?.email || '—';
  const role = roleStr || '—';
  const phone = user?.phone || '—';
  const image = user?.image || null;

  return (
    <div className="up-page">
      <div className="up-card">
        <div className="up-left">
          <div className="up-avatar">
            {image ? <img src={image} alt={name} /> : <div className="up-avatar-fallback"><FaUser /></div>}
          </div>

          <div className="up-info">
            <h2 className="up-name">{name}</h2>
            <p><strong>Email:</strong> <span className="up-value">{email}</span></p>
            <p><strong>Role:</strong> <span className="up-value">{role}</span></p>
            <p><strong>Phone:</strong> <span className="up-value">{phone}</span></p>
            {user?.id && <p className="up-id"><strong>ID:</strong> <span className="up-value">{user.id}</span></p>}
          </div>
        </div>

        <div className="up-right">
          <button className="up-btn up-btn-primary" onClick={() => navigate('/admin/all-queries')}>
            Show All Query
          </button>
          <button className="up-btn" onClick={() => navigate('/update-address')}>
            Update Address
          </button>
          <button className="up-btn" onClick={() => navigate('/update-profile')}>
            Update Self
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
