import React, { useEffect, useState } from "react";
import axios from "axios";
import "./GetAllUsers.css";

const API_URL = "http://localhost:5000/api/getallusers"; 

const GetAllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get(API_URL);
      const data = res.data.users ?? res.data;
      setUsers(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Error fetching users:", err);
      setError("Failed to fetch users. Check server or URL.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const formatDate = (iso) => {
    if (!iso) return "-";
    const d = new Date(iso);
    return d.toLocaleString(); 
  };

  // Fallback image if none or invalid
  const fallbackImg =
    "https://res.cloudinary.com/gauravkacloud/image/upload/v1731986753/photo_yrra2i.png";

  return (
    <div className="all-users-wrapper">
      <div className="header-row">
        <h2>Registered Users ({users.length})</h2>
        <button className="refresh-btn" onClick={fetchUsers} disabled={loading}>
          {loading ? "Refreshing..." : "Refresh"}
        </button>
      </div>

      {error && <div className="error-box">{error}</div>}

      {loading && !users.length ? (
        <div className="loading">Loading users...</div>
      ) : (
        <div className="users-grid">
          {users.length === 0 && <div className="empty">No users found</div>}

          {users.map((u) => {
            // Some images may already be data: URLs or normal http(s) links
            const imgSrc = u.image && typeof u.image === "string" ? u.image : fallbackImg;

            return (
              <div className="user-card" key={u._id || u.id}>
                <div className="avatar-wrap">
                  <img
                    src={imgSrc || fallbackImg}
                    alt={`${u.firstName || ""} ${u.lastName || ""}`}
                    className="avatar"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = fallbackImg;
                    }}
                    loading="lazy"
                  />
                </div>

                <div className="user-details">
                  <h3 className="user-name">
                    {u.firstName} {u.lastName}
                  </h3>
                  <p className="user-role">{u.role || "normal"}</p>

                  <div className="contact-row">
                    <a href={`mailto:${u.email}`} className="user-email">
                      {u.email}
                    </a>
                    <a href={`tel:${u.phone}`} className="user-phone">
                      {u.phone}
                    </a>
                  </div>

                  <div className="meta-row">
                    <small>Joined: {formatDate(u.createdAt)}</small>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default GetAllUsers;
