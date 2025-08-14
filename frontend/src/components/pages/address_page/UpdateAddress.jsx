import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UpdateAddress.css";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // <-- Auth context import

const UpdateAddress = () => {
  const { user, isAuthenticated, isLoading } = useAuth(); // <-- auth state
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    address: ""
  });
  const [addressId, setAddressId] = useState(null);

  // Normalize role
  const roleStr =
    typeof user?.role === "string" ? user.role : user?.role?.role || null;
  const isAdmin = roleStr === "admin";

  // Page access control
  useEffect(() => {
    if (isLoading) return;

    if (!isAuthenticated) {
      navigate("/login", { replace: true });
      return;
    }

    if (!isAdmin) {
      navigate("/not-authorize", { replace: true });
      return;
    }
  }, [isLoading, isAuthenticated, isAdmin, navigate]);

  // Fetch address after access control
  useEffect(() => {
    if (!isAdmin || !isAuthenticated) return;

    const fetchAddress = async () => {
      try {
        const res = await axios.get("http://localhost:5000/get_address", {
          withCredentials: true // send JWT cookie
        });
        if (res.data.data && res.data.data.length > 0) {
          const current = res.data.data[0];
          setFormData({
            email: current.email || "",
            phone: current.phone || "",
            address: current.address || ""
          });
          setAddressId(current._id);
        }
      } catch (err) {
        console.error("Error fetching address:", err);
        alert("Failed to fetch address!");
      }
    };

    fetchAddress();
  }, [isAdmin, isAuthenticated]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!addressId) {
      alert("Address ID not found!");
      return;
    }

    try {
      await axios.put(
        `http://localhost:5000/update_address/${addressId}`,
        formData,
        { withCredentials: true } // send JWT cookie
      );
      alert("Address updated successfully!");
    } catch (err) {
      console.error("Error updating address:", err);
      alert("Failed to update address");
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  if (isLoading) {
    return <div style={{ padding: 24 }}>Loading...</div>;
  }

  return (
    <div className="update-address-container">
      <div className="update-address-card">
        <div className="update-address-header">
          <h2>Update Company Address</h2>
          <FaTimes className="cancel-icon" onClick={handleCancel} />
        </div>

        <form onSubmit={handleSubmit} className="update-address-form">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label>Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows={5}
            required
          ></textarea>

          <button type="submit">Update Address</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateAddress;
