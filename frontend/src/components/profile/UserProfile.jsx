import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import './UserProfile.css';


const UserProfile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const isAdmin = (typeof user?.role === 'string' ? user.role : user?.role?.role) === 'admin';

  const name = user?.firstName || user?.name || 'User';
  const email = user?.email || '—';
  const role = user?.role || '—';
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
          {isAdmin ? (
            <>
              <button className="up-btn up-btn-primary" onClick={() => navigate('/admin/all-queries')}>
                Show All Query
              </button>
              <button className="up-btn" onClick={() => navigate('/update-address')}>
                Update Address
              </button>
              <button className="up-btn" onClick={() => navigate('/update-profile')}>
                Update Self
              </button>
            </>
          ) : (
            <p style={{ padding: 10,  color:"white"}}>You don't have admin access to these actions.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;