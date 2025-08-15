import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UpdateAddress.css";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const UpdateAddress = () => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    address: ""
  });
  const [addressId, setAddressId] = useState(null);
  console.log('id--- ', addressId , 'token--' , token);
   

  // Normalize role for check
  const roleStr =
    typeof user?.role === "string" ? user.role : user?.role?.role || null;
  const isAdmin = roleStr === "admin";

  // Fetch address function
  const fetchAddress = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/get_address"
      
      );

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
      console.error("Error fetching address:", err.response?.data || err);
      alert("Failed to fetch address!");
    }
  };

  // Access control + fetch
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

    fetchAddress();
  }, [isLoading, isAuthenticated, isAdmin, navigate]);

  // Handle form field change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!addressId) {
      alert("Address ID not found!");
      return;
    }

    try {
      await axios.put(
        `http://localhost:5000/api/update_address/${addressId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          },
        }
      );

      alert("Address updated successfully!");
    } catch (err) {
      console.error("Error updating address:", err.response?.data || err);
      alert("Failed to update address");
    }
  };

  // Handle cancel button
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
