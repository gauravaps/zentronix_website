// src/components/UpdateAddress.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UpdateAddress.css"; 
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 

const UpdateAddress = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    address: ""
  });

  const [placeholders, setPlaceholders] = useState({
    email: "",
    phone: "",
    address: ""
  });

  const [addressId, setAddressId] = useState(null);
  console.log('address id ' , addressId);
  
  const navigate = useNavigate();

  // Fetch current address
  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const res = await axios.get("http://localhost:5000/get_address");
        if (res.data.data && res.data.data.length > 0) {
          const current = res.data.data[0];
          setPlaceholders({
            email: current.email || "",
            phone: current.phone || "",
            address: current.address || ""
          });
          setAddressId(current._id); // store ID for PUT request
        }
      } catch (err) {
        console.error("Error fetching address:", err);
      }
    };

    fetchAddress();
  }, []);

  // Input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit update
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
        { withCredentials: true } // if token cookie is used
      );
      alert("Address updated successfully!");
    } catch (err) {
      console.error("Error updating address:", err);
      alert("Failed to update address");
    }
  };

  // Cancel click
  const handleCancel = () => {
    navigate(-1); // go back
  };

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
            placeholder={placeholders.email}
            value={formData.email}
            onChange={handleChange}
          />

          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            placeholder={placeholders.phone}
            value={formData.phone}
            onChange={handleChange}
          />

          <label>Address:</label>
          <textarea
            name="address"
            placeholder={placeholders.address}
            value={formData.address}
            onChange={handleChange}
            rows={5}
          ></textarea>

          <button type="submit">Update Address</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateAddress;
